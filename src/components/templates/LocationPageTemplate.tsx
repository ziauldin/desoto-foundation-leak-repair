import type { LocationContent, PageRecord } from "@/types/content";
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { coverageLinksFor, locationPaths } from "@/data/pages";
import { imageForPath } from "@/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  AreaCloud,
  AreaFactSheet,
  BookingBand,
  ConditionsReport,
  CoverageLinks,
  LocationFaq,
  LocationHero,
  ServiceChips,
} from "@/components/location";

/** DeSoto-only location pages: city, city × service, ZIP, neighborhood and directional sub-areas (map layout). */
export function LocationPageTemplate({ page, content }: { page: PageRecord; content: LocationContent }) {
  // The city hub plus a rotating window of ZIP/neighborhood/directional pages,
  // so link equity spreads across the whole DeSoto cluster. Never other cities.
  const cityHub = "/service-area/desoto-tx-foundation-repair/";
  const areas = locationPaths.filter((p) => !p.includes("/desoto-tx-"));
  const start = Math.max(0, areas.indexOf(page.path)) + 1;
  const rotated = [...areas.slice(start), ...areas.slice(0, start)].filter((p) => p !== page.path);
  const siblings = [...(page.path === cityHub ? [] : [cityHub]), ...rotated].slice(0, 8);

  const area = content.areaName;
  const h = {
    overview: content.headings?.overview ?? `Foundation and leak repair in ${area}`,
    conditions: content.headings?.conditions ?? `What affects foundations in ${area}`,
    services: content.headings?.services ?? `Services in ${area}`,
    booking: content.headings?.booking ?? `Book an inspection in ${area}`,
    faq: content.headings?.faq ?? `${area} foundation questions`,
  };
  const coverageHeading =
    content.kind === "city-service"
      ? "More DeSoto TX coverage pages"
      : content.kind === "city"
        ? "DeSoto TX services by type"
        : `DeSoto TX services available in ${area}`;

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          serviceSchema({ name: page.h1, description: page.metaDescription, path: page.path, serviceType: page.primaryKeyword }),
          breadcrumbSchema(page.breadcrumbs),
          faqSchema(content.faqs),
        ]}
      />
      <LocationHero h1={page.h1} crumbs={page.breadcrumbs} content={content} />
      <AreaFactSheet content={content} image={imageForPath(page.path)} heading={h.overview} />
      <ConditionsReport heading={h.conditions} factors={content.localFactors} />
      <ServiceChips
        heading={h.services}
        focus={content.serviceFocus}
        more={[...new Set([...page.internalLinks, ...page.relatedServices])]
          .filter((p) => !content.serviceFocus.includes(p))
          .slice(0, 5)}
      />
      <BookingBand areaName={area} heading={h.booking} tools={page.relatedPages} />
      <CoverageLinks heading={coverageHeading} paths={coverageLinksFor(page.path)} />
      <AreaCloud areas={siblings} />
      <LocationFaq heading={h.faq} faqs={content.faqs} />
    </>
  );
}
