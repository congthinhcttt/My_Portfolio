const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

// URL ngoài / special schemes -> giữ nguyên
const isAbsolute = (url: string) =>
  /^(https?:)?\/\//i.test(url) ||
  url.startsWith("data:") ||
  url.startsWith("blob:") ||
  url.startsWith("mailto:") ||
  url.startsWith("tel:") ||
  url.startsWith("#");

/** Dùng cho ảnh/static file: /image/.., /cv.pdf ... */
export function asset(path: string) {
  if (!path) return path;
  if (isAbsolute(path)) return path;

  const p = path.startsWith("/") ? path : `/${path}`;
  if (!BASE_PATH) return p;
  if (p.startsWith(`${BASE_PATH}/`)) return p;

  return `${BASE_PATH}${p}`;
}

/** Dùng cho link nội bộ: /projects, /blog/slug ... */
export function href(path: string) {
  return asset(path);
}

/** Nếu muốn chắc chắn luôn có dấu / cuối cho folder (GH Pages thích kiểu này) */
export function hrefSlash(path: string) {
  const u = href(path);
  if (isAbsolute(u)) return u;
  if (u.endsWith("/")) return u;
  // giữ query/hash nếu có
  const [main, rest] = u.split(/(?=[?#])/);
  return `${main}/${rest ?? ""}`;
}
