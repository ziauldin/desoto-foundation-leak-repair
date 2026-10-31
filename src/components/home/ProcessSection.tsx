import type { TitledText } from "@/types/content";
import { defaultProcess } from "@/data/trust";
import { Section } from "@/components/home/Section";

export function ProcessSection({
  steps = defaultProcess,
  title = "How the process works",
  tone = "alt",
}: {
  steps?: TitledText[];
  title?: string;
  tone?: "alt" | "surface" | "default";
}) {
  return (
    <Section id="process" eyebrow="Process" title={title} tone={tone} align="center">
      {/* Timeline: a connecting rule behind numbered nodes (vertical on mobile, horizontal on desktop). */}
      <ol className="relative grid gap-8 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-0.5 before:bg-accent/40 lg:grid-cols-4 lg:gap-6 lg:before:inset-x-[12.5%] lg:before:bottom-auto lg:before:top-6 lg:before:h-0.5 lg:before:w-auto">
        {steps.map((step, i) => (
          <li key={step.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="relative grid grid-cols-[3rem_1fr] gap-4 lg:block lg:text-center">
            <span
              className="relative grid h-12 w-12 place-items-center rounded-full bg-primary font-display text-xl font-bold text-accent ring-8 ring-surface-alt lg:mx-auto"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div className="lg:mt-5">
              <h3>
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
