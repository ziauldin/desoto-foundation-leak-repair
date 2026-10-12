import { testimonials } from "@/data/trust";

/** Review strip. Hidden until real testimonials exist. */
export function ServiceReviews() {
  if (!testimonials.length) return null;
  return (
    <section aria-label="Reviews" className="border-y border-border py-12">
      <ul className="container-site grid gap-8 md:grid-cols-3">
        {testimonials.slice(0, 3).map((t) => (
          <li key={t.name} className="border-l-4 border-accent pl-4">
            <p className="italic text-text">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-2 text-sm font-semibold text-primary-dark">
              {t.name}, {t.neighborhood}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
