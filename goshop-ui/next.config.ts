import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb', // match your NestJS MaxFileSizeValidator
    },
  },
};

export default nextConfig;
