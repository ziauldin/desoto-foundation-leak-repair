import { DashList } from "./DashList";
import Link from "next/link";
import { linkLabel } from "@/data/pages";

/** Warning-style callout for "when to call a pro". */
export function WhenToCall({ items, service, calculator }: { items: string[]; service: string; calculator: string }) {
  return (
    <section id="when-to-call" aria-labelledby="when-h" data-reveal="scale" className="scroll-mt-28 rounded-lg border border-warning/40 bg-accent-soft p-6 shadow-[var(--shadow-card)] sm:p-8">
      <h2 id="when-h" className="text-2xl!">
        When to call a professional
      </h2>
      <div className="mt-4 text-lg">
        <DashList items={items} />
      </div>
      <p className="mt-6 text-text">
        Next: read about{" "}
        <Link href={service} className="font-semibold text-primary underline">
          {linkLabel(service)}
        </Link>{" "}
        or try the{" "}
        <Link href={calculator} className="font-semibold text-primary underline">
          {linkLabel(calculator)}
        </Link>
        .
      </p>
    </section>
  );
}
