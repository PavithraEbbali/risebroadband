/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * §8.1 — the deliverable is a static bundle. `output: 'export'` means no Node
   * runtime at the edge, so nothing here may rely on server actions, route
   * handlers or ISR. `images.unoptimized` follows necessarily: the /_next/image
   * optimizer is a server, and there is none.
   */
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
