import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    allowedDevOrigins: [
      'http://localhost:3000',
      'http://10.118.7.123:3000',
    ],
  }

export default nextConfig;
