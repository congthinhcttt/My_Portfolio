// lib/utils/asset.ts

/** Lấy base path từ ENV (GH Actions set) hoặc để rỗng khi chạy local */
const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

/** URL ngoài / special schemes -> giữ nguyên */
export const isAbsolute = (url: string) =>
  /^(https?:)?\/\//i.test(url) ||
  url.startsWith("data:") ||
  url.startsWith("blob:") ||
  url.startsWith("mailto:") ||
  url.startsWith("tel:") ||
  url.startsWith("#");

/** Thêm basePath cho ảnh/static nội bộ: /image/.., /cv.pdf ... */
export function asset(path: string) {
  if (!path) return path;

  // Link ngoài -> không động vào
  if (isAbsolute(path)) return path;

  // Chuẩn hoá bắt đầu bằng /
  const p = path.startsWith("/") ? path : `/${path}`;

  // Không có base -> trả về path bình thường
  if (!BASE_PATH) return p;

  // Tránh double base: /My_Portfolio/...
  if (p.startsWith(`${BASE_PATH}/`) || p === BASE_PATH) return p;

  return `${BASE_PATH}${p}`;
}

/** Link nội bộ (Next Link) */
export function href(path: string) {
  return asset(path);
}

/** Ép link nội bộ có dấu / cuối folder (GH Pages thích kiểu này) */
export function hrefSlash(path: string) {
  const u = href(path);
  if (!u || isAbsolute(u)) return u;

  // Tách query/hash ra để gắn / đúng
  const m = u.match(/^([^?#]*)([?#].*)?$/);
  const main = m?.[1] ?? u;
  const tail = m?.[2] ?? "";

  if (main.endsWith("/")) return `${main}${tail}`;
  return `${main}/${tail}`;
}
