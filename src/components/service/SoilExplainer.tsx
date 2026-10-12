
/** Clay soil swell/shrink diagram beside the "why it matters" copy. */
export function SoilExplainer({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section aria-labelledby="why-heading" className="py-14 sm:py-20">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <figure data-reveal="left" className="order-last rounded-xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] lg:order-first">
          <svg viewBox="0 0 400 230" className="w-full" role="img" aria-labelledby="soil-title">
            <title id="soil-title">Expansive clay swells when wet and shrinks when dry, moving the slab</title>
            <rect x="0" y="130" width="400" height="100" className="fill-surface-alt" />
            <path d="M0 130 Q100 115 200 130 T400 130" className="fill-none stroke-secondary" strokeWidth="2" strokeDasharray="6 5" />
            <rect x="70" y="92" width="260" height="30" rx="2" className="fill-primary" />
            <path d="M120 70 L200 30 L280 70 Z" className="fill-none stroke-primary" strokeWidth="3" />
            <rect x="130" y="70" width="140" height="22" className="fill-none stroke-primary" strokeWidth="3" />
            <path d="M40 150 v30 m-8 -8 l8 8 l8 -8" className="fill-none stroke-accent" strokeWidth="3" />
            <path d="M360 185 v-30 m-8 8 l8 -8 l8 8" className="fill-none stroke-accent" strokeWidth="3" />
            <text x="16" y="205" className="fill-muted text-[13px]">dry: shrinks</text>
            <text x="300" y="205" className="fill-muted text-[13px]">wet: swells</text>
            <text x="150" y="112" className="fill-white text-[13px] font-semibold">slab foundation</text>
          </svg>
          <figcaption className="mt-3 text-sm text-muted">
            North Texas clay changes volume with moisture. Uneven wetting, like a leak or poor drainage on one side, moves one part of the slab more than the rest.
          </figcaption>
        </figure>
        <div data-reveal="right">
          <p className="eyebrow">Why it matters</p>
          <h2 id="why-heading" className="mt-2">
            Why this matters on DeSoto clay
          </h2>
          <div className="prose-site mt-5 space-y-4 text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
