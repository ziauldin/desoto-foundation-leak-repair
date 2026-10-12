import type { TitledText } from "@/types/content";

/** Rule-separated rows: method name left, explanation right. */
export function MethodsTable({ items }: { items: TitledText[] }) {
  return (
    <section aria-labelledby="methods-heading" className="bg-surface-alt py-14 sm:py-20">
      <div className="container-site">
        <p className="eyebrow">What&apos;s included</p>
        <h2 id="methods-heading" className="mt-2">
          Repair methods and what&apos;s included
        </h2>
        <dl className="mt-8 divide-y divide-border border-y border-border">
          {items.map((m, i) => (
            <div key={m.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="grid gap-2 py-5 transition-colors duration-300 hover:bg-surface/60 md:grid-cols-[18rem_1fr] md:gap-8 md:px-3">
              <dt className="font-display text-lg font-semibold text-primary-dark">{m.title}</dt>
              <dd className="text-muted">{m.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
