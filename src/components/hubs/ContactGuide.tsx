import Link from "next/link";
import { site } from "@/config/site";
import { ClockIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

const photoTips = [
  "A wide shot of each crack, plus a close-up with a coin or tape measure for scale",
  "Drywall cracks above doors and windows, and any doors that no longer latch",
  "The outside edge of the slab, downspouts, and anywhere water pools after rain",
  "Wet spots, warm spots or raised flooring inside the house",
  "Your water meter dial with every faucet turned off, if you suspect a leak",
];

/** Contact page body: what happens next, coverage, hours, emergency steps and photo tips. */
export function ContactGuide() {
  return (
    <section aria-labelledby="next-h" className="container-site grid gap-12 py-14 lg:grid-cols-2">
      <div className="space-y-8">
        <div>
          <h2 id="next-h" className="text-2xl!">
            What happens after you send the form
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-lg">
            <li>We call you back to talk through what you&apos;re seeing and confirm a time. {site.responseNote}</li>
            <li>An inspector walks the house inside and out, takes elevation readings across the slab and checks drainage. If there are leak signs, the plumbing gets tested too.</li>
            <li>You get written findings and a written estimate. Nothing starts until you approve it, and if the fix is a gutter extension, that&apos;s what we&apos;ll tell you.</li>
          </ol>
        </div>
        <div className="rounded-lg border border-warning/40 bg-accent-soft p-6">
          <h2 className="flex items-center gap-2 text-xl!">
            <PhoneIcon className="h-5 w-5" /> Water coming up through the floor?
          </h2>
          <p className="mt-2 text-lg">
            Shut off the main water valve, usually at the meter box near the street, then call{" "}
            <a href={site.phoneHref} className="font-semibold text-primary underline">
              {site.phoneDisplay}
            </a>
            . Urgent leak calls are answered around the clock. Read more about{" "}
            <Link href="/emergency-foundation-leak-repair-desoto-tx/" className="font-semibold text-primary underline">
              emergency foundation leak repair
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl!">Photos that help us prepare</h2>
          <p className="mt-2 text-muted">
            Email them to{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-primary underline">
              {site.email}
            </a>{" "}
            or have them ready when we call. Any phone camera is fine.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {photoTips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <dl className="grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="flex items-center gap-2 font-semibold text-primary-dark">
              <PinIcon className="h-4 w-4 text-accent-dark" /> Where we work
            </dt>
            <dd className="mt-1 text-muted">
              DeSoto, TX only: ZIP codes {site.zips.join(" and ")} in {site.county}. See every neighborhood on the{" "}
              <Link href="/service-area/" className="font-semibold text-primary underline">
                DeSoto service area
              </Link>{" "}
              page.
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 font-semibold text-primary-dark">
              <ClockIcon className="h-4 w-4 text-accent-dark" /> Hours
            </dt>
            <dd className="mt-1 text-muted">{site.hours}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
