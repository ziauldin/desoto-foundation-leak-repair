import { site } from "@/config/site";
import { generalFaqs } from "@/data/faqs";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhoneIcon } from "@/components/ui/Icons";
import { ContactForm } from "@/components/forms/ContactForm";
import Link from "next/link";
import { linkLabel } from "@/data/pages";
import type { PageRecord } from "@/types/content";

const faqs = generalFaqs.slice(1, 4);
const linkGroups = [
  { paths: ["/foundation-inspection-checklist/", "/foundation-repair-cost-calculator/", "/signs-of-foundation-leak/"] },
  { paths: ["/foundation-leak-repair-desoto/", "/emergency-foundation-leak-repair-desoto-tx/", "/service-area/"] },
];

/** Split contact layout: phone-first panel + long form. Used only by this page. */
export function ContactPanel({ page }: { page: PageRecord }) {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(page.breadcrumbs), faqSchema(faqs)]} />
      <section className="bg-primary-dark py-10 text-white sm:py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Breadcrumbs crumbs={page.breadcrumbs} tone="dark" />
            <h1 className="mt-4 text-white!">{page.h1}</h1>
            <p className="mt-4 text-lg text-white/85">
              Tell us what you&apos;re seeing and we&apos;ll call to set up an inspection. If water is actively leaking, shut off the
              main valve and call.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-3 font-display text-3xl font-bold text-accent hover:underline"
            >
              <PhoneIcon className="h-7 w-7" /> {site.phoneDisplay}
            </a>
            <dl className="mt-6 space-y-3 text-white/85">
              <div>
                <dt className="font-semibold text-white">Hours</dt>
                <dd>{site.hours}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Service area</dt>
                <dd>DeSoto, TX 75115 ({site.county}) only</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
      <section aria-label="Other ways to start" className="container-site grid gap-10 py-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-2xl!">Not ready to call?</h2>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {linkGroups.flatMap((g) => g.paths).map((p) => (
              <li key={p}>
                <Link href={p} className="flex justify-between py-3 font-semibold text-primary hover:underline">
                  {linkLabel(p)} <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="faq">
          <h2 className="text-2xl!">Before you call</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="rounded-md bg-surface p-5 ring-1 ring-border">
                <h3 className="text-lg">{f.question}</h3>
                <p className="mt-1.5 text-muted">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
