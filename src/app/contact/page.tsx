import { site } from "@/config/site";
import { getPageOrThrow } from "@/data/pages";
import { generalFaqs } from "@/data/faqs";
import { metadataForPage } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhoneIcon } from "@/components/ui/Icons";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { QuickLinks } from "@/components/sections/QuickLinks";

const page = getPageOrThrow("/contact/");
export const metadata = metadataForPage(page);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(page.breadcrumbs), faqSchema(generalFaqs.slice(1, 4))]} />
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
      <div className="container-site grid gap-6 py-12 md:grid-cols-3">
        <QuickLinks title="Not ready to call?" paths={["/foundation-inspection-checklist/", "/foundation-repair-cost-calculator/", "/signs-of-foundation-leak/"]} />
        <QuickLinks title="Leak services" paths={["/foundation-leak-repair-desoto/", "/slab-leak-repair-desoto-tx/", "/emergency-foundation-leak-repair-desoto-tx/"]} />
        <QuickLinks title="Foundation services" paths={["/foundation-repair-desoto-tx/", "/foundation-inspection-desoto-tx/", "/service-area/"]} />
      </div>
      <FaqAccordion faqs={generalFaqs.slice(1, 4)} title="Before you call" />
    </>
  );
}
