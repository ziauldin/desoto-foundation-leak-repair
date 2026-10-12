import type { Metadata } from "next";
import { site } from "@/config/site";
import { generalFaqs } from "@/data/faqs";
import { calculatorPaths, locationPaths } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/home/Section";
import { ButtonLink } from "@/components/ui/Button";
import { BookIcon, CalcIcon, DropletIcon, HouseIcon, PinIcon } from "@/components/ui/Icons";
import { Hero } from "@/components/home/Hero";
import { LinkCardGrid } from "@/components/home/LinkCardGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaSection } from "@/components/home/CtaSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { TriagePicker } from "@/components/home/TriagePicker";
import { WaterExplainer } from "@/components/home/WaterExplainer";

export const metadata: Metadata = buildMetadata({
  title: "DeSoto Foundation Leak Repair | Slab Leak & Foundation Repair in DeSoto TX",
  description:
    "Foundation leak detection, slab leak repair, crack repair and foundation leveling for DeSoto TX homes. Free tools, local guides and inspection requests.",
  path: "/",
});

const leakServices = [
  "/foundation-leak-repair-desoto/",
  "/slab-leak-repair-desoto-tx/",
  "/foundation-leak-detection-desoto-tx/",
  "/emergency-foundation-leak-repair-desoto-tx/",
];
const structuralServices = [
  "/foundation-repair-desoto-tx/",
  "/foundation-crack-repair-desoto-tx/",
  "/foundation-leveling-desoto-tx/",
  "/foundation-inspection-desoto-tx/",
  "/pier-and-beam-foundation-repair-desoto-tx/",
  "/foundation-drainage-repair-desoto-tx/",
];
const problems = [
  "/signs-of-foundation-leak/",
  "/water-pooling-near-foundation/",
  "/foundation-cracks-after-rain/",
  "/uneven-floors-foundation-problem/",
  "/sticking-doors-foundation-problem/",
  "/slab-leak-vs-foundation-leak/",
];
const neighborhoods = locationPaths.filter((p) => !p.includes("/desoto-tx-")).slice(0, 8);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(generalFaqs)]} />
      <Hero
        h1="Foundation Leak and Foundation Repair for DeSoto, TX Homes"
        eyebrow="DeSoto, TX 75115 · Local service only"
        lead={
          <p>
            Water under a slab, cracks that keep growing, doors that won&apos;t latch. We find the cause first, whether it&apos;s a
            plumbing leak, drainage or soil movement, then fix it and show you the numbers.
          </p>
        }
        ctaType="inspection"
        points={["Slab leak detection and repair", "Foundation crack repair and leveling", "Drainage fixes that protect the slab", "Written findings and pricing"]}
        aside={<ContactForm compact title="Request a free inspection" />}
      />

      <TriagePicker />
      <WaterExplainer />

      <Section
        id="leak-services"
        eyebrow="Leak repair"
        title="Foundation leak and slab leak services"
        intro="Most foundation trouble in DeSoto starts with water. These services find and stop it."
      >
        <LinkCardGrid items={leakServices} icon={<DropletIcon />} columns={4} />
      </Section>

      <Section id="structural-services" eyebrow="Foundation repair" title="Foundation repair services" tone="alt">
        <LinkCardGrid items={structuralServices} icon={<HouseIcon />} />
        <div className="mt-8">
          <ButtonLink href="/foundation-repair-desoto-tx/" variant="outline">
            All foundation repair services
          </ButtonLink>
        </div>
      </Section>

      <CtaSection type="leak-estimate" />

      <Section
        id="problems"
        eyebrow="Common problems"
        title="What are you seeing at your house?"
        intro="Start with the symptom. Each guide explains the likely causes and when it's worth calling."
        tone="surface"
      >
        <LinkCardGrid items={problems} icon={<BookIcon />} />
      </Section>

      <Section
        id="calculators"
        eyebrow="Free tools"
        title="Estimate cost before you call"
        intro="Typical North Texas price ranges, plus checklists to see how urgent your signs are."
      >
        <LinkCardGrid items={calculatorPaths.slice(0, 4)} icon={<CalcIcon />} columns={4} />
        <div className="mt-8">
          <ButtonLink href="/calculators/" variant="outline">
            See all calculators
          </ButtonLink>
        </div>
      </Section>

      <TrustSection />
      <ProcessSection />

      <Section
        id="areas"
        eyebrow="Service area"
        title={`Serving every part of ${site.city}`}
        intro="We work in DeSoto only, from the established streets around Hampton Rd to newer subdivisions on the edges of town."
        tone="surface"
      >
        <LinkCardGrid items={neighborhoods} icon={<PinIcon />} columns={4} />
        <div className="mt-8">
          <ButtonLink href="/service-area/" variant="outline">
            View the full DeSoto service area
          </ButtonLink>
        </div>
      </Section>

      <TestimonialSection />
      <FaqAccordion faqs={generalFaqs} />
      <CtaSection type="inspection" />
    </>
  );
}
