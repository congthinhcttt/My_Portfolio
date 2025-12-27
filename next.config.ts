import type { NextConfig } from "next";

const repo = "My_Portfolio"; // ✅ đúng tên repo trong URL

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages không có Image Optimization server
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },

  // chạy dưới subpath /My_Portfolio/
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
