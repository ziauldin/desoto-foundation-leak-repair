import Link from "next/link";
import { site } from "@/config/site";
import type { Crumb, ResourceContent } from "@/types/content";
import { LogoMark } from "@/components/brand/Logo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { SiteImage as SiteImageData } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";
import { categoryLabel, readingMinutes } from "./utils";

export function ArticleHeader({
  h1,
  crumbs,
  content,
  image,
}: {
  h1: string;
  crumbs: Crumb[];
  content: ResourceContent;
  image: SiteImageData;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-accent-soft" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full border-[20px] border-surface-alt" />
      <div className="container-site relative py-10 sm:py-16">
        <div className="flex justify-center">
          <Breadcrumbs crumbs={crumbs} />
        </div>
        <div className="hero-enter mx-auto mt-8 max-w-3xl text-center">
          <p className="inline-block rounded-full border border-accent px-3 py-1 font-display text-sm font-semibold uppercase tracking-wider text-accent-dark">
            {categoryLabel[content.category]}
          </p>
          <h1 className="mt-5">{h1}</h1>
          <p className="mt-5 text-xl leading-relaxed text-muted">{content.summary}</p>
          <div className="mt-6 inline-flex items-center gap-3 text-left text-sm">
            <LogoMark className="h-10 w-10 shrink-0" />
            <p className="leading-snug">
              <span className="block font-semibold text-primary-dark">
                By the{" "}
                <Link href="/about/#team" rel="author" className="underline decoration-accent decoration-2 underline-offset-4 hover:text-primary">
                  {site.name} team
                </Link>
              </span>
              <span className="text-muted">
                DeSoto, TX homeowner guide <span aria-hidden="true">·</span> {readingMinutes(content)} min read
              </span>
            </p>
          </div>
          <figure className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl bg-background shadow-[var(--shadow-lift)] ring-1 ring-border">
            <SiteImage image={image} eager sizes="(min-width: 768px) 672px, 100vw" />
          </figure>
        </div>
      </div>
    </header>
  );
}
