import Link from "next/link";
import { site } from "@/config/site";
import { DropletIcon, HouseIcon, CalcIcon, PhoneIcon } from "@/components/ui/Icons";

const options = [
  {
    title: "Water on the floor or a spiking water bill",
    text: "Possible active slab leak. Stop the water, then get it located.",
    href: "/emergency-foundation-leak-repair-desoto-tx/",
    cta: "Get urgent leak help",
    icon: DropletIcon,
    urgent: true,
  },
  {
    title: "New cracks, sticking doors or sloping floors",
    text: "Signs the foundation may be moving. See how serious it is.",
    href: "/foundation-inspection-checklist/",
    cta: "Take the 15-minute checklist",
    icon: HouseIcon,
  },
  {
    title: "Water pooling around the house after rain",
    text: "Drainage is the most common cause of movement on DeSoto clay.",
    href: "/water-pooling-near-foundation/",
    cta: "Read the drainage guide",
    icon: DropletIcon,
  },
  {
    title: "I just want to know what repair costs",
    text: "Typical North Texas price ranges, before anyone visits.",
    href: "/foundation-repair-cost-calculator/",
    cta: "Open the cost calculator",
    icon: CalcIcon,
  },
];

/** "What's happening at your house?" symptom picker that routes visitors to the right next step. */
export function TriagePicker() {
  return (
    <section aria-labelledby="triage-heading" className="relative z-10 -mt-8 pb-6">
      <div className="container-site">
        <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-lift)] ring-1 ring-border sm:p-8">
          <div data-reveal className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Start here</p>
              <h2 id="triage-heading" className="mt-1 text-2xl! sm:text-3xl!">
                What&apos;s happening at your house?
              </h2>
            </div>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 font-display font-semibold text-primary">
              <PhoneIcon className="h-4 w-4" /> Rather talk? {site.phoneDisplay}
            </a>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {options.map((o, i) => {
              const Icon = o.icon;
              return (
                <li key={o.href} data-reveal style={{ "--i": i } as React.CSSProperties}>
                  <Link
                    href={o.href}
                    className={`group flex h-full flex-col rounded-xl border-2 p-5 transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
                      o.urgent ? "border-accent bg-accent-soft" : "border-border bg-background hover:border-primary"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                        o.urgent ? "pulse-ring bg-accent text-primary-dark" : "bg-primary text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="mt-4 font-display text-lg font-semibold leading-snug text-primary-dark">{o.title}</span>
                    <span className="mt-1.5 flex-1 text-sm text-muted">{o.text}</span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
                      {o.cta}
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
