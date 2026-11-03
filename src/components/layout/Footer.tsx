import Link from "next/link";
import { site } from "@/config/site";
import { footerCompany, footerLocations, footerServices, footerTools } from "@/data/navigation";
import type { NavLink } from "@/types/content";
import { Logo } from "@/components/brand/Logo";
import { ClockIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

const socialIcons = { Facebook: FacebookIcon, Instagram: InstagramIcon };

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="mb-3 font-display text-base font-semibold uppercase tracking-wider text-accent">{title}</h2>
      <ul className="space-y-2 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-block text-white/80 transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-200 hover:translate-x-1 hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-dark pb-24 text-white lg:pb-0">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr_1fr]">
        <div className="lg:col-span-1">
          <Logo variant="dark" />
          <p className="mt-3 text-sm text-white/75">
            Foundation leak detection, slab leak repair and foundation repair for homes and small buildings in DeSoto, TX.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 font-display text-lg font-semibold text-accent hover:underline">
                <PhoneIcon className="h-4 w-4 shrink-0" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 whitespace-nowrap hover:text-accent">
                <MailIcon className="h-4 w-4 shrink-0 text-accent" /> {site.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {site.hours}
            </li>
            <li className="flex gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            </li>
          </ul>
          <ul className="mt-4 flex gap-2">
            {site.social.map((s) => {
              const Icon = socialIcons[s.name];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${s.name}`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-colors duration-200 hover:bg-accent hover:text-primary-dark"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <FooterColumn title="Services" links={footerServices} />
        <FooterColumn title="DeSoto Areas" links={footerLocations} />
        <FooterColumn title="Tools & Guides" links={footerTools} />
        <FooterColumn title="Company" links={footerCompany} />
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Serving DeSoto, Texas.</p>
          <p>Estimates and calculators are for planning only. Final pricing follows an on-site inspection.</p>
        </div>
      </div>
    </footer>
  );
}
