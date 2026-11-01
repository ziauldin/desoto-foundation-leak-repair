import type { ReactNode } from "react";
import { site } from "@/config/site";
import { CalcIcon, ClipboardIcon, ClockIcon, PhoneIcon } from "@/components/ui/Icons";

/** Navy strip of quick facts directly under the service hero. */
export function QuickFacts() {
  const facts: { icon: ReactNode; label: string; value: string; href?: string }[] = [
    { icon: <CalcIcon className="h-5 w-5" />, label: "Estimates", value: "Free, written on-site" },
    { icon: <ClockIcon className="h-5 w-5" />, label: "Inspections", value: "Usually within 1–2 business days" },
    { icon: <ClipboardIcon className="h-5 w-5" />, label: "Before work starts", value: "Written findings and estimate" },
    { icon: <PhoneIcon className="h-5 w-5" />, label: "Leak emergencies", value: `24/7 · ${site.phoneDisplay}`, href: site.phoneHref },
  ];

  return (
    <div className="bg-primary text-white">
      <ul className="container-site grid grid-cols-2 gap-x-6 gap-y-4 py-5 lg:grid-cols-4">
        {facts.map((f, i) => {
          const body = (
            <>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-primary-dark">{f.icon}</span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-white/60">{f.label}</span>
                <span className="block font-display font-semibold leading-snug">{f.value}</span>
              </span>
            </>
          );
          return (
            <li key={f.label} data-reveal style={{ "--i": i } as React.CSSProperties}>
              {f.href ? (
                <a href={f.href} className="flex items-center gap-3 rounded-md transition-colors hover:text-accent">
                  {body}
                </a>
              ) : (
                <div className="flex items-center gap-3">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
