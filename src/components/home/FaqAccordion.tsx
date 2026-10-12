import type { FAQ } from "@/types/content";
import { Section } from "@/components/home/Section";
import { ChevronIcon } from "@/components/ui/Icons";

/** Native <details> accordion: keyboard accessible, no client JS. Pair with faqSchema() in the template. */
export function FaqAccordion({ faqs, title = "Frequently asked questions" }: { faqs: FAQ[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <Section id="faq" eyebrow="FAQ" title={title}>
      <div className="max-w-3xl divide-y divide-border rounded-lg border border-border bg-surface">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4">
              <h3 className="text-[1.1rem]">{faq.question}</h3>
              <ChevronIcon className="h-5 w-5 shrink-0 text-accent-dark transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-5 text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
