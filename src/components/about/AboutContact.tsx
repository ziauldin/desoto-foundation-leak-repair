import { site } from "@/config/site";
import { testimonials } from "@/data/trust";
import { SocialLinks } from "@/components/layout/SocialLinks";

/** External profiles: the parent company's own site, social profiles and (once set) Google Business Profile. */
const elsewhere = [
  { label: `${site.parentCompany.legalName} website`, href: site.parentCompany.url },
  ...site.social.map((s) => ({ label: s.name, href: s.href })),
  ...(site.googleBusinessProfileUrl ? [{ label: "Google Business Profile", href: site.googleBusinessProfileUrl }] : []),
];

/** Full mailing address, phone, email and hours, plus "Find us elsewhere" and the review link. */
export function AboutContact() {
  return (
    <section id="contact-details" aria-labelledby="contact-details-h" className="bg-primary-dark py-14 text-white sm:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <div data-reveal="left">
          <h2 id="contact-details-h" className="text-white!">
            Where to reach us
          </h2>
          <dl className="mt-6 space-y-4 text-white/85">
            <div>
              <dt className="font-semibold text-white">Mailing address</dt>
              <dd>
                <address className="not-italic">
                  {site.parentCompany.legalName}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Phone</dt>
              <dd>
                <a href={site.phoneHref} className="font-display text-xl font-semibold text-accent hover:underline">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Hours</dt>
              <dd>{site.hours}</dd>
            </div>
          </dl>
        </div>

        <div data-reveal="right">
          <h2 id="elsewhere-h" className="text-white!">
            Find us elsewhere
          </h2>
          <ul className="mt-6 space-y-3">
            {elsewhere.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener" className="font-semibold text-accent underline underline-offset-4 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-6" />
          {site.googleBusinessProfileUrl && (
            <p className="mt-8 text-white/85">
              {testimonials.length ? "Read more reviews or leave your own on " : "Worked with us? Leave a review on "}
              <a href={site.googleBusinessProfileUrl} target="_blank" rel="noopener" className="font-semibold text-accent underline">
                Google
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
