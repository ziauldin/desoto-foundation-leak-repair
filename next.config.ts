import type { NextConfig } from "next";

// Only the production deployment on the real domain should be indexed. Preview deployments
// (VERCEL_ENV "preview"/"development", or a local build) send noindex on every response.
const isProductionDeploy = process.env.VERCEL_ENV === "production";
const NOINDEX = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  // URLs in the topical map all end with a slash.
  trailingSlash: true,
  // Next streams metadata into <body> for user agents it doesn't recognise as "HTML-limited bots".
  // SEO tools, social scrapers and many crawlers then see <title> outside <head>. Every page here is
  // static, so blocking metadata costs nothing: treat every user agent as HTML-limited.
  // Docs: node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/htmlLimitedBots.md
  htmlLimitedBots: /.*/,

  async redirects() {
    // Common legacy/probe URLs. Permanent (308) to the home page.
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      // Preview and local builds: never indexable.
      ...(isProductionDeploy ? [] : [{ source: "/:path*", headers: NOINDEX }]),
      // The production deployment is also reachable at its *.vercel.app alias; keep that copy out of the
      // index too, so only desotofoundationleakrepair.com is indexed.
      { source: "/:path*", has: [{ type: "host" as const, value: ".*\\.vercel\\.app" }], headers: NOINDEX },
    ];
  },

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
