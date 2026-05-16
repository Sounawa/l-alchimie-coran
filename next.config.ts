import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  // Base path for GitHub Pages - change 'l-alchimie-coran' to your repo name
  basePath: '/l-alchimie-coran',
};

export default nextConfig;
