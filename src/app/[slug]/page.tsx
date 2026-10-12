import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  calculatorsByPath,
  getPage,
  resourcesByPath,
  rootSlugPages,
  servicesByPath,
  slugFromPath,
} from "@/data/pages";
import { legalContent } from "@/data/content/legal";
import { metadataForPage } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { ProblemPageTemplate } from "@/components/templates/ProblemPageTemplate";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { BasicPageTemplate } from "@/components/templates/BasicPageTemplate";

// Every root-level page in the topical map (services, calculators, resources, legal) is
// generated here from data. Unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return rootSlugPages.map((p) => ({ slug: slugFromPath(p.path) }));
}

const pathFor = (slug: string) => `/${slug}/`;

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(pathFor(slug));
  return page ? metadataForPage(page) : {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const path = pathFor(slug);
  const page = getPage(path);
  if (!page) notFound();

  switch (page.pageType) {
    case "core":
    case "sub": {
      const content = servicesByPath.get(path);
      if (!content) notFound();
      return <ServicePageTemplate page={page} content={content} />;
    }
    case "calculator": {
      const content = calculatorsByPath.get(path);
      if (!content) notFound();
      return <CalculatorPageTemplate page={page} content={content} />;
    }
    case "blog": {
      const content = resourcesByPath.get(path);
      if (!content) notFound();
      return <ProblemPageTemplate page={page} content={content} />;
    }
    case "basic": {
      const legal = legalContent[path];
      if (!legal) notFound();
      return <BasicPageTemplate page={page} {...legal} />;
    }
    default:
      notFound();
  }
}
