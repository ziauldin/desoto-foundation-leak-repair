import { site } from "@/config/site";
import { getPageOrThrow } from "@/data/pages";
import { metadataForPage } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { CtaSection } from "@/components/sections/CtaSection";

const page = getPageOrThrow("/about/");
export const metadata = metadataForPage(page);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(page.breadcrumbs)]} />
      <Hero
        h1={page.h1}
        eyebrow="About us"
        lead={<p>A foundation leak and foundation repair service built around one city: DeSoto, Texas.</p>}
        crumbs={page.breadcrumbs}
      />
      <ServiceDetailSection
        id="story"
        title="Why focus on one city"
        paragraphs={[
          `${site.name} exists for homeowners in DeSoto who want a straight answer about their foundation. Foundation work around here is mostly about water: expansive clay that swells after a storm and shrinks in August, plumbing lines under slabs, and yards that drain toward the house instead of away from it.`,
          "Working in one city means we know how DeSoto homes were built, from the 1970s brick ranches near Hampton Rd to the newer subdivisions, and we can get to you without a long drive across the metroplex.",
          "Our approach is simple: check for leaks and drainage problems first, measure the slab instead of guessing, write down what we found, and recommend the smallest repair that actually solves the problem.",
        ]}
      />
      <TrustSection title="What you can expect" />
      <ProcessSection tone="surface" />
      <TestimonialSection />
      <Section id="explore" eyebrow="Explore" title="Start here" tone="alt">
        <LinkCardGrid items={["/foundation-leak-repair-desoto/", "/foundation-repair-desoto-tx/", "/service-area/", "/contact/"]} columns={4} />
      </Section>
      <CtaSection type="inspection" />
    </>
  );
}
