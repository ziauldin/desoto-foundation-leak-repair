// Business + site settings. Swap the placeholders here before launch; nothing else hard-codes them.

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

  social: [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61595882681302" },
    { name: "Instagram", href: "https://www.instagram.com/desotofoundationleakrepair/" },
  ],

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
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
