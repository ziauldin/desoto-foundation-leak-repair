import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URLs in the topical map all end with a slash.
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
