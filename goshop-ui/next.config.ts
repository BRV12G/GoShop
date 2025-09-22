import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb', // match your NestJS MaxFileSizeValidator
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      }
    ]
  }
};

export default nextConfig;
