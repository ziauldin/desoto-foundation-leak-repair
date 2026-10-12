import { trustPoints } from "@/data/trust";
import { Section } from "@/components/home/Section";
import { CheckIcon } from "@/components/ui/Icons";

export function TrustSection({ title = "Why DeSoto homeowners call us first" }: { title?: string }) {
  return (
    <Section id="why-us" eyebrow="How we work" title={title} tone="surface">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((p, i) => (
          <li key={p.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="border-t-4 border-accent pt-4">
            <h3 className="flex items-center gap-2 text-lg">
              <CheckIcon className="h-5 w-5 text-success" /> {p.title}
            </h3>
            <p className="mt-2 text-muted">{p.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
