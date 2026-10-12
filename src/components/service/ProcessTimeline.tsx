import { site } from "@/config/site";
import type { TitledText } from "@/types/content";

/** Vertical timeline with a connecting rule. */
export function ProcessTimeline({ title, steps }: { title: string; steps: TitledText[] }) {
  return (
    <section aria-labelledby="process-heading" className="py-14 sm:py-20">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">Process</p>
          <h2 id="process-heading" className="mt-2">
            {title}
          </h2>
          <p className="mt-4 text-muted">{site.responseNote}</p>
        </div>
        <ol className="relative space-y-8 border-l-2 border-accent/50 pl-8">
          {steps.map((step, i) => (
            <li key={step.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="group relative">
              <span
                className="absolute -left-[2.85rem] grid h-9 w-9 place-items-center rounded-full border-2 border-accent bg-surface font-display font-bold text-primary-dark shadow-[0_0_0_6px_var(--color-background)] transition-colors duration-300 group-hover:bg-accent"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3>
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-1.5 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
