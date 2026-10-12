import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage, locationPaths, locationsByPath, slugFromPath } from "@/data/pages";
import { metadataForPage } from "@/lib/seo";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";

// DeSoto-only location pages, generated from the topical map's Location rows.
export const dynamicParams = false;

export function generateStaticParams() {
  return locationPaths.map((path) => ({ slug: slugFromPath(path) }));
}

const pathFor = (slug: string) => `/service-area/${slug}/`;

export async function generateMetadata({ params }: PageProps<"/service-area/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(pathFor(slug));
  return page ? metadataForPage(page) : {};
}

export default async function Page({ params }: PageProps<"/service-area/[slug]">) {
  const { slug } = await params;
  const page = getPage(pathFor(slug));
  const content = locationsByPath.get(pathFor(slug));
  if (!page || !content) notFound();
  return <LocationPageTemplate page={page} content={content} />;
}
