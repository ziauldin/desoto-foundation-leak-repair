// Business + site settings. Swap the placeholders here before launch; nothing else hard-codes them.

export const site = {
  name: "DeSoto Foundation Leak Repair",
  shortName: "DeSoto Foundation",
  domain: "desotofoundationleakrepair.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://desotofoundationleakrepair.com",
  tagline: "Foundation leak and foundation repair for DeSoto, TX homes",

  // PLACEHOLDER: 555-01xx numbers are reserved for fiction. Replace with the tracking number.
  phoneDisplay: "(972) 555-0142",
  phoneHref: "tel:+19725550142",
  // PLACEHOLDER inbox shown on the contact page.
  email: "info@desotofoundationleakrepair.com",

  city: "DeSoto",
  state: "TX",
  county: "Dallas County",
  zips: ["75115", "75123"],
  // City center, used for areaServed geo in schema.
  geo: { latitude: 32.5899, longitude: -96.8570 },

  // PLACEHOLDER: confirm hours and response promise with the business that rents the site.
  hours: "Mon–Sat 7am–7pm · Emergency leak calls answered 24/7",
  responseNote: "Most DeSoto inspection requests are scheduled within 1–2 business days.",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
