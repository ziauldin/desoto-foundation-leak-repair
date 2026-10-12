import Link from "next/link";

/** Slim bottom bar CTA. */
export function ToolCtaBar() {
  return (
    <section aria-label="Get an exact price" className="border-t-4 border-accent bg-surface-alt py-8">
      <div data-reveal className="container-site flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-display text-xl font-semibold text-primary-dark">Ranges are a start. A DeSoto inspection gives you a written price.</p>
        <Link href="/contact/" className="btn-shine rounded-md bg-primary px-5 py-3 font-display font-semibold text-white transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:bg-primary-dark">
          Request Foundation Inspection
        </Link>
      </div>
    </section>
  );
}
