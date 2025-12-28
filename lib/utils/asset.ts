export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// true nếu là URL ngoài (https://...)
export const isExternalUrl = (url?: string) => !!url && /^https?:\/\//i.test(url);

/**
 * Dùng cho file trong /public: ảnh, audio, pdf...
 * - "https://..." => giữ nguyên
 * - "/image/a.jpg" => "/My_Portfolio/image/a.jpg"
 * - "image/a.jpg"  => "/My_Portfolio/image/a.jpg"
 */
export function asset(path: string) {
  if (!path) return path;

  // URL ngoài
  if (isExternalUrl(path)) return path;

  // đảm bảo có "/"
  const p = path.startsWith("/") ? path : `/${path}`;

  // nếu đã có basePath rồi thì không cộng nữa
  if (BASE_PATH && p.startsWith(`${BASE_PATH}/`)) return p;

  return `${BASE_PATH}${p}`;
}

/**
 * Dùng cho href nội bộ khi bạn dùng <a href="..."> (không phải <Link/>)
 * - "/blog/abc" => "/My_Portfolio/blog/abc"
 * - "/projects" => "/My_Portfolio/projects"
 */
export function href(path: string) {
  return asset(path);
}
