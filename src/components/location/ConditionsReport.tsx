import type { TitledText } from "@/types/content";

/** "Conditions report": indexed rows with a left marker. */
export function ConditionsReport({ areaName, factors }: { areaName: string; factors: TitledText[] }) {
  return (
    <section aria-labelledby="conditions-heading" className="bg-primary-dark py-14 text-white sm:py-20">
      <div className="container-site">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">Local conditions report</p>
        <h2 id="conditions-heading" className="mt-2 text-white!">
          What affects foundations in {areaName}
        </h2>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-2">
          {factors.map((f, i) => (
            <li key={f.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="bg-primary-dark p-6 transition-colors duration-300 hover:bg-primary">
              <p className="font-mono text-xs text-accent">FACTOR {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-white!">{f.title}</h3>
              <p className="mt-2 text-white/75">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
