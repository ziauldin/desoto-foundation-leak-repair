import Link from "next/link";
import { site } from "@/config/site";
import { footerCompany, footerLocations, footerServices, footerTools } from "@/data/navigation";
import type { NavLink } from "@/types/content";

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="mb-3 font-display text-base font-semibold uppercase tracking-wider text-accent">{title}</h2>
      <ul className="space-y-2 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/80 hover:text-white hover:underline">
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
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="font-display text-xl font-bold">{site.name}</p>
          <p className="mt-3 text-sm text-white/75">
            Foundation leak detection, slab leak repair and foundation repair for homes and small buildings in DeSoto, TX.
          </p>
          <p className="mt-4">
            <a href={site.phoneHref} className="font-display text-lg font-semibold text-accent hover:underline">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-1 text-sm text-white/70">{site.hours}</p>
          <p className="mt-1 text-sm text-white/70">DeSoto, TX 75115 · {site.county}</p>
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
