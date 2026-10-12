import type { FAQ } from "@/types/content";

/** All-open Q&A list (no accordion) for articles. */
export function ArticleFaq({ faqs }: { faqs: FAQ[] }) {
  return (
    <section id="faq" aria-labelledby="faq-h" className="scroll-mt-28">
      <h2 id="faq-h">Questions homeowners ask</h2>
      <div className="mt-6 space-y-7">
        {faqs.map((f, i) => (
          <div key={f.question} data-reveal style={{ "--i": i } as React.CSSProperties} className="border-l-2 border-accent/40 pl-5">
            <h3 className="text-[1.2rem]">{f.question}</h3>
            <p className="mt-2 text-lg leading-relaxed text-muted">{f.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
