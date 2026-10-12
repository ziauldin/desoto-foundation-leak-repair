import { testimonials } from "@/data/trust";
import { Section } from "@/components/ui/Section";

/** Renders only when real testimonials exist in src/data/trust.ts. */
export function TestimonialSection() {
  if (!testimonials.length) return null;
  return (
    <Section id="reviews" eyebrow="Reviews" title="What DeSoto homeowners say" tone="surface">
      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="h-full rounded-lg border border-border bg-background p-6">
              <blockquote className="text-text">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-primary-dark">
                {t.name} <span className="font-normal text-muted">· {t.neighborhood}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
