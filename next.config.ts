import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    domains: ["images.unsplash.com"],
  },

  env: {
    SITE_NAME: "TechConsult",
  },
};

export default nextConfig;
