import Link from "next/link";
import { site } from "@/config/site";
import { linkLabel } from "@/data/pages";
import { ContactForm } from "@/components/forms/ContactForm";

/** Full-width booking band with the long form. */
export function BookingBand({ areaName, tools }: { areaName: string; tools: string[] }) {
  return (
    <section id="book" aria-labelledby="book-heading" className="scroll-mt-24 bg-surface-alt py-14 sm:py-20">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div data-reveal="left">
          <h2 id="book-heading">Book an inspection in {areaName}</h2>
          <p className="mt-4 text-lg text-muted">
            Send the form or call {site.phoneDisplay}. We&apos;ll confirm a time and check for leaks, drainage problems and slab movement in one visit.
          </p>
          {tools.length > 0 && (
            <div className="mt-8">
              <p className="font-semibold text-primary-dark">Before the visit, try:</p>
              <ul className="mt-2 space-y-1.5">
                {tools.map((p) => (
                  <li key={p}>
                    <Link href={p} className="text-primary underline">
                      {linkLabel(p)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <ContactForm title={`Inspection request: ${areaName}`} />
      </div>
    </section>
  );
}
