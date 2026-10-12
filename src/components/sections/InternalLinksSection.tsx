import { Section } from "@/components/ui/Section";
import { CalcIcon, HouseIcon } from "@/components/ui/Icons";
import { LinkCardGrid } from "./LinkCardGrid";

/** Related services (3-6) + supporting guides/calculators (2-4). Rendered on every content page. */
export function InternalLinksSection({
  services,
  supporting,
  servicesTitle = "Related foundation services in DeSoto",
  supportingTitle = "Helpful guides and calculators",
}: {
  services: string[];
  supporting: string[];
  servicesTitle?: string;
  supportingTitle?: string;
}) {
  return (
    <>
      {services.length > 0 && (
        <Section id="related-services" eyebrow="Services" title={servicesTitle} tone="alt">
          <LinkCardGrid items={services} icon={<HouseIcon />} />
        </Section>
      )}
      {supporting.length > 0 && (
        <Section id="related-guides" eyebrow="Tools & guides" title={supportingTitle} tone="surface">
          <LinkCardGrid items={supporting} icon={<CalcIcon />} columns={supporting.length >= 4 ? 4 : 3} />
        </Section>
      )}
    </>
  );
}
