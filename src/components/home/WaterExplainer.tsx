import Link from "next/link";
import { images } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";

const causes = [
  {
    title: "Leaks under the slab",
    text: "A supply or drain line leaking into the clay makes one area swell or wash out.",
    href: "/slab-leak-repair-desoto-tx/",
  },
  {
    title: "Water at the perimeter",
    text: "Downspouts and flat grading soak the soil along one side of the house.",
    href: "/foundation-drainage-repair-desoto-tx/",
  },
  {
    title: "Dry summers",
    text: "The same clay shrinks in August, so the slab settles where it lost support.",
    href: "/foundation-settlement-repair/",
  },
];

/** Homepage explainer: the signature cutaway illustration beside the three ways water moves a slab. */
export function WaterExplainer() {
  return (
    <section aria-labelledby="water-heading" className="py-14 sm:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure data-reveal="left" className="overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-lift)] ring-1 ring-border">
          <SiteImage image={images.homeHero} sizes="(min-width: 1024px) 50vw, 100vw" />
        </figure>
        <div data-reveal="right">
          <p className="eyebrow">Why it happens</p>
          <h2 id="water-heading" className="mt-2">
            In DeSoto, foundation problems usually start with water
          </h2>
          <p className="mt-4 text-lg text-muted">
            North Texas clay swells when it gets wet and shrinks when it dries. When one part of the soil under your house gets
            wetter or drier than the rest, the slab moves with it.
          </p>
          <ul className="mt-6 space-y-4">
            {causes.map((c, i) => (
              <li key={c.title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <Link href={c.href} className="link-grow font-display text-lg font-semibold text-primary-dark">
                    {c.title}
                  </Link>
                  <p className="text-muted">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
