import type { ReactNode } from "react";
import { businessFacts, whyChooseUs, whyCompare } from "@/data/trust";
import { Section } from "@/components/home/Section";
import { CheckIcon, ClipboardIcon, ClockIcon, DropletIcon, HandshakeIcon, PinIcon, RulerIcon } from "@/components/ui/Icons";

// One icon per whyChooseUs entry, in the same order.
const icons: ReactNode[] = [<DropletIcon key="d" />, <RulerIcon key="r" />, <ClipboardIcon key="c" />, <HandshakeIcon key="h" />, <PinIcon key="p" />, <ClockIcon key="t" />];

/** Icon list beside an "us vs. a typical bid" comparison. Shared by home, service pages and About. */
export function WhyChooseUs({ tone = "surface" }: { tone?: "default" | "surface" | "alt" }) {
  return (
    <Section
      id="why-us"
      eyebrow="Why choose us"
      title="Why choose us?"
      intro="Foundation work is expensive and hard to undo. Here's how we make sure you only pay for the repair your house actually needs."
      tone={tone}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {whyChooseUs.map((p, i) => (
            <li key={p.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-accent">{icons[i]}</span>
              <div>
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-1 text-muted">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div data-reveal="right" className="overflow-hidden rounded-2xl bg-primary-dark text-white shadow-[var(--shadow-lift)]">
          <p className="border-b border-white/15 px-6 py-4 font-display text-lg font-semibold">How we compare</p>
          <ul className="divide-y divide-white/10">
            {whyCompare.map((row) => (
              <li key={row.us} className="px-6 py-4">
                <p className="flex items-start gap-2 font-semibold">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" /> {row.us}
                </p>
                <p className="mt-1 pl-6 text-sm text-white/60">
                  <span className="text-white/40">Typical bid:</span> {row.typical}
                </p>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2 border-t border-white/15 bg-primary px-6 py-4">
            {businessFacts.map((fact) => (
              <li key={fact} className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-primary-dark">
                <CheckIcon className="h-3.5 w-3.5" /> {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
