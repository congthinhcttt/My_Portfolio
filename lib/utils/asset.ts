export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return path;

  if (!path.startsWith("/")) path = `/${path}`;
  if (base && path.startsWith(`${base}/`)) return path;

  return `${base}${path}`;
}
