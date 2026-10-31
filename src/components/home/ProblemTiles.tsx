import Link from "next/link";
import { linkLabel } from "@/data/pages";
import { imageForPath } from "@/data/images";
import { Section } from "@/components/home/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { ArrowIcon } from "@/components/ui/Icons";

/**
 * Picture-first symptom tiles for the first three guides (compact rows on phones),
 * then the rest as text links so every guide stays linked from the home page.
 */
export function ProblemTiles({ id, eyebrow, title, intro, guides }: { id: string; eyebrow: string; title: string; intro: string; guides: string[] }) {
  const featured = guides.slice(0, 3);
  const more = guides.slice(3);
  return (
    <Section id={id} eyebrow={eyebrow} title={title} intro={intro} tone="surface" align="center">
      <ul className="grid gap-3 sm:grid-cols-3 sm:gap-6">
        {featured.map((path, i) => (
          <li key={path} data-reveal="scale" style={{ "--i": i } as React.CSSProperties}>
            <Link href={path} className="group flex items-center gap-4 sm:block">
              <div className="w-28 shrink-0 overflow-hidden rounded-xl bg-surface-alt ring-1 ring-border transition-[box-shadow] duration-300 group-hover:shadow-[var(--shadow-lift)] group-hover:ring-accent sm:w-auto">
                <SiteImage image={imageForPath(path)} sizes="(min-width: 640px) 380px, 112px" className="transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="flex items-center gap-2 text-base sm:mt-3 sm:text-lg">
                {linkLabel(path)}
                <ArrowIcon className="h-4 w-4 shrink-0 text-accent-dark transition-transform duration-300 group-hover:translate-x-1" />
              </h3>
            </Link>
          </li>
        ))}
      </ul>
      {more.length > 0 && (
        <p data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center">
          <span className="text-muted">More guides:</span>
          {more.map((path) => (
            <Link key={path} href={path} className="rounded-full px-3 py-1 font-semibold text-primary ring-1 ring-border transition-colors hover:bg-primary hover:text-white">
              {linkLabel(path)}
            </Link>
          ))}
        </p>
      )}
    </Section>
  );
}
