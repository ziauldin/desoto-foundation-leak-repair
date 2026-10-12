import type { ReactNode } from "react";

/** Two-column article layout: readable body + sticky sidebar (CTA, key links). */
export function ArticleLayout({ children, sidebar }: { children: ReactNode; sidebar: ReactNode }) {
  return (
    <div className="bg-background py-12 sm:py-16">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <article className="min-w-0 space-y-12">{children}</article>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">{sidebar}</aside>
      </div>
    </div>
  );
}

export function ArticleSection({ id, heading, children }: { id: string; heading: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      <h2 id={`${id}-heading`}>{heading}</h2>
      <div className="prose-site mt-4 text-lg">{children}</div>
    </section>
  );
}
