import Link from "next/link";
import { site } from "@/config/site";
import { linkLabel, locationPaths, locationsByPath } from "@/data/pages";
import { DeSotoMap } from "@/components/location/DeSotoMap";
import { ButtonLink } from "@/components/ui/Button";
import { PinIcon } from "@/components/ui/Icons";

const ofKind = (kind: string) => locationPaths.filter((p) => locationsByPath.get(p)?.kind === kind);

/** Schematic city map beside a chip cloud of neighborhood pages, with ZIP codes listed on their own line. */
export function AreasBand({ limit = 8 }: { limit?: number }) {
  const areas = ofKind("neighborhood").slice(0, limit);
  const zips = ofKind("zip");
  return (
    <section id="areas" aria-labelledby="areas-heading" className="py-14 sm:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div data-reveal="left" className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-card)] ring-1 ring-border">
          <DeSotoMap highlight="all" label={`all of ${site.city}`} />
        </div>
        <div>
          <p className="eyebrow mb-2">Service area</p>
          <h2 id="areas-heading">Serving every part of {site.city}</h2>
          <p className="mt-3 text-lg text-muted">
            We work in DeSoto only, from the established streets around Hampton Rd to newer subdivisions on the edges of town.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {areas.map((p, i) => (
              <li key={p} data-reveal="scale" style={{ "--i": i } as React.CSSProperties}>
                <Link
                  href={p}
                  className="group inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-[0.95rem] font-semibold text-primary-dark ring-1 ring-border transition-[translate,box-shadow,background-color,color] duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:ring-primary"
                >
                  <PinIcon className="h-4 w-4 text-accent-dark transition-colors group-hover:text-accent" /> {linkLabel(p)}
                </Link>
              </li>
            ))}
          </ul>
          {zips.length > 0 && (
            <p className="mt-5 text-muted">
              ZIP codes:{" "}
              {zips.map((p, i) => (
                <span key={p}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <Link href={p} className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">
                    {linkLabel(p)}
                  </Link>
                </span>
              ))}
            </p>
          )}
          <div className="mt-8">
            <ButtonLink href="/service-area/" variant="outline">
              View the full DeSoto service area
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
