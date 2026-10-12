import type { Metadata } from "next";
import { absoluteUrl, site } from "@/config/site";
import type { PageRecord } from "@/types/content";

interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

/** Unique title, description, canonical and Open Graph tags for one page. */
export function buildMetadata({ title, description, path, type = "website", noIndex }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    // absolute: skip the root layout's title template; map titles already include the brand angle.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_US",
      images: [{ url: absoluteUrl("/og-default.png"), width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

export const metadataForPage = (page: PageRecord, extra?: Partial<MetaInput>): Metadata =>
  buildMetadata({
    title: page.seoTitle,
    description: page.metaDescription,
    path: page.path,
    type: page.pageType === "blog" ? "article" : "website",
    ...extra,
  });
