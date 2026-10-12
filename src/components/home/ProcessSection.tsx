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
    <Section id="process" eyebrow="Process" title={title} tone={tone}>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="card-lift rounded-lg bg-surface p-6">
            <span className="font-display text-4xl font-bold text-accent" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
