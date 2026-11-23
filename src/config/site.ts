// Business + site settings. Swap the placeholders here before launch; nothing else hard-codes them.
//
// Optional fields (foundedYear, aboutStory, googleBusinessProfileUrl, reviewer) render nothing while
// empty. Fill them in only with facts the business has confirmed. Never guess.

interface Reviewer {
  name: string;
  /** e.g. "Foundation inspector, Star Foundation Repair LLC". */
  role: string;
}

export const site = {
  name: "DeSoto Foundation Leak Repair",
  shortName: "DeSoto Foundation",
  domain: "desotofoundationleakrepair.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://desotofoundationleakrepair.com",
  tagline: "Foundation leak and foundation repair for DeSoto, TX homes",

  // From desotofoundationrepairpros.com, the business renting the site.
  phoneDisplay: "(469) 625-0726",
  phoneHref: "tel:+14696250726",
  email: "desotofoundationleakrepair@gmail.com",

  // Every social link on the site (footer, About, schema sameAs) comes from this list. Adding a
  // profile here is all it takes; it needs an icon in components/layout/SocialLinks.tsx to show one.
  social: [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61595882681302" },
    { name: "Instagram", href: "https://www.instagram.com/desotofoundationleakrepair/" },
  ],

  // The business that performs the work booked through this site (legal entity). Used in schema,
  // the footer and the About page. Keep the wording identical everywhere by reading it from here.
  parentCompany: {
    legalName: "Star Foundation Repair LLC",
    url: "https://desotofoundationrepairpros.com",
  },

  // Street address of Star Foundation Repair LLC, confirmed by the site owner.
  address: { street: "305 Executive Way, Suite E", city: "DeSoto", state: "TX", zip: "75115" },

  city: "DeSoto",
  state: "TX",
  county: "Dallas County",
  zips: ["75115", "75123"],
  // City center, used for areaServed geo in schema.
  geo: { latitude: 32.5899, longitude: -96.8570 },

  // PLACEHOLDER: confirm hours and response promise with the business that rents the site.
  hours: "Mon–Sat 7am–7pm · Emergency leak calls answered 24/7",
  responseNote: "Most DeSoto inspection requests are scheduled within 1–2 business days.",

  // ---- Optional trust details (render only when filled in) -------------------------------
  // Year the business started. Left empty on purpose: its own site says both "20+ years" and "since 1987".
  foundedYear: null as number | null,
  // Short confirmed history for the About page "Our story" section, one paragraph per entry.
  aboutStory: [] as string[],
  // Google Business Profile (reviews) URL, once the profile exists.
  googleBusinessProfileUrl: "",
  // Named person who reviews the guides for accuracy. Shown in each guide byline when set.
  reviewer: null as Reviewer | null,
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
