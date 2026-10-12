import { site } from "@/config/site";
import type { Crumb, LocationContent } from "@/types/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { DeSotoMap, mapHighlight } from "./DeSotoMap";

export function LocationHero({
  h1,
  crumbs,
  content,
}: {
  h1: string;
  crumbs: Crumb[];
  content: LocationContent;
}) {
  const kindLabel = { city: "DeSoto, TX", "city-service": "DeSoto service area", zip: "ZIP code", neighborhood: "Neighborhood", direction: "Part of DeSoto" }[content.kind];
  return (
    <section className="bg-surface-alt">
      <div className="container-site grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="hero-enter">
          <Breadcrumbs crumbs={crumbs} />
          <p className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-accent-dark">
            <PinIcon className="h-4 w-4" /> {kindLabel} · {content.areaName}
          </p>
          <h1 className="mt-2">{h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{content.summary}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#book" variant="primary">
              Book an inspection in {content.areaName}
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline">
              <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
        <figure className="animate-fade-up rounded-2xl bg-surface p-4 shadow-[var(--shadow-lift)] ring-1 ring-border [animation-delay:200ms]">
          <DeSotoMap highlight={mapHighlight(content)} label={content.areaName} />
        </figure>
      </div>
    </section>
  );
}
