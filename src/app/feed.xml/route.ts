import { absoluteUrl, site } from "@/config/site";
import { livePages, resourcesByPath } from "@/data/pages";
import { resourceDates } from "@/data/content/resources";

// RSS 2.0 feed of the live homeowner guides, generated at build time. Served at /feed.xml: trailingSlash
// doesn't apply to paths with a file extension, so there is no redirect to /feed.xml/.
export const dynamic = "force-static";

const escapeXml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const rfc822 = (iso: string) => new Date(`${iso}T12:00:00Z`).toUTCString();

export function GET() {
  const guides = livePages
    .filter((p) => p.pageType === "blog" && resourcesByPath.has(p.path))
    .map((p) => ({ page: p, dates: resourceDates(resourcesByPath.get(p.path)!) }))
    .sort((a, b) => b.dates.published.localeCompare(a.dates.published) || a.page.h1.localeCompare(b.page.h1));

  const lastBuild = guides.reduce((max, g) => (g.dates.modified > max ? g.dates.modified : max), "1970-01-01");

  const items = guides
    .map(
      ({ page, dates }) => `    <item>
      <title>${escapeXml(page.h1)}</title>
      <link>${absoluteUrl(page.path)}</link>
      <guid isPermaLink="true">${absoluteUrl(page.path)}</guid>
      <description>${escapeXml(page.metaDescription)}</description>
      <pubDate>${rfc822(dates.published)}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${site.name} guides`)}</title>
    <link>${absoluteUrl("/resources/")}</link>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(`Homeowner guides to foundation leaks, cracks and drainage in ${site.city}, ${site.state}.`)}</description>
    <language>en-us</language>
    <lastBuildDate>${rfc822(lastBuild)}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
