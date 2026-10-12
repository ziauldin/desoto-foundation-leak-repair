import { site } from "@/config/site";
import type { FAQ } from "@/types/content";

/** Two-column FAQ: heading block left, plus/minus disclosure list right. */
export function ServiceFaq({ title, faqs }: { title: string; faqs: FAQ[] }) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-14 sm:py-20">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading" className="mt-2">
            {title}
          </h2>
          <p className="mt-4 text-muted">
            Don&apos;t see your question?{" "}
            <a href={site.phoneHref} className="font-semibold text-primary underline">
              Call {site.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={f.question} data-reveal style={{ "--i": i } as React.CSSProperties} className="group rounded-md border-l-4 border-primary bg-surface px-5 shadow-[var(--shadow-card)] transition-colors open:border-accent [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4">
                <h3 className="text-[1.08rem]">{f.question}</h3>
                <span className="font-display text-2xl leading-none text-accent-dark group-open:hidden" aria-hidden="true">+</span>
                <span className="hidden font-display text-2xl leading-none text-accent-dark group-open:inline" aria-hidden="true">−</span>
              </summary>
              <p className="pb-5 text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
