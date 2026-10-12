import Link from "next/link";
import { site } from "@/config/site";
import { linkLabel, linkSummary } from "@/data/pages";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";

/** Big single card pointing to the service this calculator belongs to. */
export function MatchingService({ path, others }: { path: string; others: string[] }) {
  return (
    <section aria-labelledby="match-heading" className="bg-primary-dark py-12 text-white">
      <div data-reveal className="container-site grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent">This tool pairs with</p>
          <h2 id="match-heading" className="mt-2 text-white!">
            <Link href={path} className="hover:underline">
              {linkLabel(path)}
            </Link>
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">{linkSummary(path)}</p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href={path} className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-display font-semibold text-primary-dark hover:bg-white">
              See the service <ArrowIcon />
            </Link>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 px-2 py-3 font-display font-semibold text-accent">
              <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
        {others.length > 0 && (
          <ul className="space-y-2 border-l border-white/15 pl-6 text-white/85">
            <li className="text-sm font-semibold uppercase tracking-wider text-white/60">Also related</li>
            {others.map((p) => (
              <li key={p}>
                <Link href={p} className="hover:text-accent hover:underline">
                  {linkLabel(p)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
