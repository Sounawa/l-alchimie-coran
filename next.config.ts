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
  // Base path for GitHub Pages - change 'coran-miroir' to your repo name
  // Uncomment and modify this line when deploying to GitHub Pages:
  // basePath: '/coran-miroir',
};

export default nextConfig;
