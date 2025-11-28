import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],

    qualities: [70, 75, 90],
  },
};

export default nextConfig;
