import Link from "next/link";
import { isLivePath, linkLabel, livePages, locationPaths, resourcePaths, servicePaths } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

// Human-readable site map. Separate from /sitemap.xml (app/sitemap.ts). Built from the same live-page list,
// so hidden pages (isHidden in data/pages.ts) never appear.
const PATH = "/sitemap/";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Site Map", path: PATH },
];

export const metadata = buildMetadata({
  title: "Site Map | DeSoto Foundation Leak Repair",
  description:
    "Every page on DeSoto Foundation Leak Repair in one list: foundation and leak repair services, DeSoto neighborhoods and ZIP codes, guides and company pages.",
  path: PATH,
});

const live = (paths: string[]) => paths.filter(isLivePath);
const basicPaths = livePages.filter((p) => p.pageType === "basic").map((p) => p.path);

const groups = [
  { id: "services", title: "Services", paths: live(servicePaths) },
  { id: "service-area", title: "Service area", paths: live(["/service-area/", ...locationPaths]) },
  { id: "guides", title: "Guides", paths: live(["/resources/", ...resourcePaths]) },
  {
    id: "company",
    title: "Company",
    paths: live(["/", ...basicPaths.filter((p) => !["/service-area/", "/resources/"].includes(p))]),
  },
];

const label = (p: string) => (p === "/" ? "Home" : linkLabel(p));

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <div className="container-site py-10 sm:py-14">
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="mt-6">Site Map</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Every page on the site, grouped by topic. Looking for something specific? Start with the services or call us.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-28">
              <h2 id={`${g.id}-h`} className="border-t-4 border-accent pt-3 text-xl!">
                {g.title} <span className="font-normal text-muted">({g.paths.length})</span>
              </h2>
              <ul className="mt-4 space-y-2">
                {g.paths.map((p) => (
                  <li key={p}>
                    <Link href={p} className="text-primary hover:underline">
                      {label(p)}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
