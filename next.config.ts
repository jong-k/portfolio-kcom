import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
