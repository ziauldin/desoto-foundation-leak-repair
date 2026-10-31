import type { ReactNode } from "react";
import { teamRoles } from "@/data/trust";
import { Section } from "@/components/home/Section";
import { ClipboardIcon, PhoneIcon, SearchIcon, WrenchIcon } from "@/components/ui/Icons";

// One icon per teamRoles entry, in the same order.
const icons: ReactNode[] = [<ClipboardIcon key="c" />, <SearchIcon key="s" />, <WrenchIcon key="w" />, <PhoneIcon key="p" className="h-6 w-6" />];

/** About page crew section: roles, not names (see teamRoles in data/trust.ts). */
export function TeamSection() {
  return (
    <Section
      id="team"
      eyebrow="Our team"
      title="The people who show up at your house"
      intro="Who you'll deal with on a typical DeSoto job, from the first inspection to the final elevation readings."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {teamRoles.map((r, i) => (
          <li key={r.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="card-lift rounded-lg bg-surface p-6 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-soft text-accent-dark ring-4 ring-surface-alt">
              {icons[i]}
            </span>
            <h3 className="mt-4 text-lg">{r.title}</h3>
            <p className="mt-2 text-muted">{r.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
