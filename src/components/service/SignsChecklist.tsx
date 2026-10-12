import type { TitledText } from "@/types/content";

/** Two-column numbered checklist with large numerals. */
export function SignsChecklist({ title, signs }: { title: string; signs: TitledText[] }) {
  return (
    <section aria-labelledby="signs-heading" className="bg-surface py-14 sm:py-20">
      <div className="container-site">
        <p data-reveal className="eyebrow">Warning signs</p>
        <h2 id="signs-heading" className="mt-2 max-w-3xl">
          {title}
        </h2>
        <ol className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {signs.map((s, i) => (
            <li key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="group flex gap-5 border-t-2 border-border pt-5 transition-colors duration-300 hover:border-accent">
              <span className="font-display text-5xl font-bold leading-none text-accent/80 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p className="mt-1.5 text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
