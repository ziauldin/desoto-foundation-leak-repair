import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";

export default function NotFound() {
  return (
    <Section title="We couldn't find that page" intro="It may have moved. These are the pages most people are looking for.">
      <LinkCardGrid items={["/foundation-leak-repair-desoto/", "/foundation-repair-desoto-tx/", "/foundation-repair-cost-calculator/"]} />
      <div className="mt-8">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </Section>
  );
}
