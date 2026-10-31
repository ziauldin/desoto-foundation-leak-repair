import type { Metadata } from "next";
import { generalFaqs } from "@/data/faqs";
import { calculatorPaths } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { DropletIcon } from "@/components/ui/Icons";
import { Hero } from "@/components/home/Hero";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";
import { ServiceIndex } from "@/components/home/ServiceIndex";
import { ProblemTiles } from "@/components/home/ProblemTiles";
import { ToolsBand } from "@/components/home/ToolsBand";
import { AreasBand } from "@/components/home/AreasBand";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaSection } from "@/components/home/CtaSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { TriagePicker } from "@/components/home/TriagePicker";

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

      <ServiceShowcase
        id="leak-services"
        eyebrow="Leak repair"
        title="Foundation leak and slab leak services"
        intro="Most foundation trouble in DeSoto starts with water. These services find and stop it."
        services={leakServices}
        icon={<DropletIcon />}
      />
      <ServiceIndex id="structural-services" eyebrow="Foundation repair" title="Foundation repair services" services={structuralServices} />
      <ProblemTiles
        id="problems"
        eyebrow="Common problems"
        title="What are you seeing at your house?"
        intro="Start with the symptom. Each guide explains the likely causes and when it's worth calling."
        guides={problems}
      />
      <ToolsBand tools={calculatorPaths.slice(0, 4)} />
      <CtaSection type="leak-estimate" />
      <ProcessSection />
      <AreasBand />
      <TestimonialSection />
      <WhyChooseUs />
      <FaqAccordion faqs={generalFaqs} />
      <CtaSection type="inspection" />
    </>
  );
}
