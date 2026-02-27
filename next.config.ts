import type { NextConfig } from "next";
import { siteConfig } from "./config/site";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    domains: ["images.unsplash.com"],
  },

  env: {
    SITE_NAME: siteConfig.name || "The Wire Media",
  },
};

export default nextConfig;
