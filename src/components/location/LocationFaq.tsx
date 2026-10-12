import type { FAQ } from "@/types/content";

/** Numbered two-column FAQ. */
export function LocationFaq({ areaName, faqs }: { areaName: string; faqs: FAQ[] }) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-border bg-surface py-14 sm:py-20">
      <div className="container-site">
        <h2 id="faq-heading">{areaName} foundation questions</h2>
        <ol className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {faqs.map((f, i) => (
            <li key={f.question} data-reveal style={{ "--i": i } as React.CSSProperties} className="grid grid-cols-[2.5rem_1fr]">
              <span className="font-display text-2xl font-bold text-accent-dark" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg">{f.question}</h3>
                <p className="mt-2 text-muted">{f.answer}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
