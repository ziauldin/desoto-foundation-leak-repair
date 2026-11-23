import type { ComponentType } from "react";
import { site } from "@/config/site";
import { FacebookIcon, InstagramIcon } from "@/components/ui/Icons";

// Icons by profile name. A profile without an icon still renders, as a text chip.
const icons: Record<string, ComponentType<{ className?: string }>> = { Facebook: FacebookIcon, Instagram: InstagramIcon };

/** Round icon links for every profile in site.social (footer and About page). */
export function SocialLinks({ className = "" }: { className?: string }) {
  if (!site.social.length) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {site.social.map((s) => {
        const Icon = icons[s.name];
        return (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={`${site.name} on ${s.name}`}
              className="grid h-10 min-w-10 place-items-center rounded-full bg-white/10 px-2 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors duration-200 hover:bg-accent hover:text-primary-dark"
            >
              {Icon ? <Icon className="h-5 w-5" /> : s.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
