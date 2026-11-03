// JSON-LD builders. Rendered with <JsonLd /> in each template.

import { absoluteUrl, site } from "@/config/site";
import type { Crumb, FAQ } from "@/types/content";

type Json = Record<string, unknown>;

const businessId = absoluteUrl("/#business");

const areaServed = [
  {
    "@type": "City",
    name: "DeSoto",
    containedInPlace: { "@type": "AdministrativeArea", name: `${site.county}, Texas` },
    address: { "@type": "PostalAddress", addressLocality: "DeSoto", addressRegion: "TX", postalCode: "75115" },
  },
];

/** Local business with its street address and DeSoto service area. No ratings or reviews until real ones exist. */
export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: site.name,
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    sameAs: site.social.map((s) => s.href),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    description: `${site.tagline}.`,
    areaServed,
    geo: { "@type": "GeoCoordinates", ...site.geo },
    priceRange: "$$",
    knowsAbout: [
      "Foundation leak repair",
      "Slab leak repair",
      "Foundation repair",
      "Foundation crack repair",
      "Foundation drainage",
    ],
  };
}

export function serviceSchema(input: { name: string; description: string; path: string; serviceType: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": businessId },
    areaServed,
  };
}

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqSchema(faqs: FAQ[]): Json | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleSchema(input: { headline: string; description: string; path: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    publisher: { "@id": businessId },
    author: { "@type": "Organization", name: site.name, url: absoluteUrl("/about/") },
  };
}

export function webApplicationSchema(input: { name: string; description: string; path: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
