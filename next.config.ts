import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URLs in the topical map all end with a slash.
  trailingSlash: true,
  // Next streams metadata into <body> for user agents it doesn't recognise as "HTML-limited bots".
  // SEO tools, social scrapers and many crawlers then see <title> outside <head>. Every page here is
  // static, so blocking metadata costs nothing: treat every user agent as HTML-limited.
  // Docs: node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/htmlLimitedBots.md
  htmlLimitedBots: /.*/,
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
