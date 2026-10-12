import type { FAQ } from "@/types/content";

/** FAQ as a 2x2 grid of always-visible cards. */
export function ToolFaq({ faqs }: { faqs: FAQ[] }) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-surface py-14">
      <div className="container-site">
        <h2 id="faq-heading">Calculator questions</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {faqs.map((f, i) => (
            <li key={f.question} data-reveal style={{ "--i": i } as React.CSSProperties} className="card-lift rounded-lg bg-background p-6">
              <h3 className="text-lg">
                <span className="mr-2 font-mono text-accent-dark">Q.</span>
                {f.question}
              </h3>
              <p className="mt-2 text-muted">{f.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
