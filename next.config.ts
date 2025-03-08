import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'books.google.com'
      },
      {
        hostname: 'images.unsplash.com'
      }
    ],
  },
};

export default nextConfig;
