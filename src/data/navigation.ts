import type { NavGroup, NavLink } from "@/types/content";
import { isLivePath, linkLabel } from "./pages";

const link = (href: string, label?: string): NavLink => ({ href, label: label ?? linkLabel(href) });
/** Drops links to hidden pages (isHidden in data/pages.ts) so menus can't link to a 404. */
const live = (links: NavLink[]) => links.filter((l) => isLivePath(l.href));

export const mainNav: NavGroup[] = [
  {
    label: "Services",
    href: "/foundation-leak-repair-desoto/",
    children: live([
      link("/foundation-leak-repair-desoto/", "Foundation Leak Repair"),
      link("/foundation-repair-desoto-tx/", "Foundation Repair"),
      link("/foundation-crack-repair-desoto-tx/", "Foundation Crack Repair"),
      link("/slab-leak-repair-desoto-tx/", "Slab Leak Repair"),
      link("/foundation-leak-detection-desoto-tx/", "Foundation Leak Detection"),
      link("/foundation-inspection-desoto-tx/", "Foundation Inspection"),
      link("/foundation-leveling-desoto-tx/", "Foundation Leveling"),
      link("/foundation-drainage-repair-desoto-tx/", "Drainage Repair"),
    ]),
  },
  {
    label: "Problems",
    href: "/resources/#problems",
    children: live([
      link("/signs-of-foundation-leak/", "Signs of a Foundation Leak"),
      link("/water-pooling-near-foundation/", "Water Pooling Near Foundation"),
      link("/foundation-cracks-after-rain/", "Foundation Cracks After Rain"),
      link("/uneven-floors-foundation-problem/", "Uneven Floors"),
      link("/sticking-doors-foundation-problem/", "Sticking Doors"),
      link("/slab-leak-vs-foundation-leak/", "Slab Leak vs Foundation Leak"),
    ]),
  },
  { label: "Service Areas", href: "/service-area/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/** All service pages, grouped for the footer and the service-area hub. */
export const footerServices: NavLink[] = live([
  "/foundation-leak-repair-desoto/",
  "/foundation-repair-desoto-tx/",
  "/foundation-repair-company-desoto-tx/",
  "/foundation-crack-repair-desoto-tx/",
  "/slab-leak-repair-desoto-tx/",
  "/foundation-leak-detection-desoto-tx/",
  "/foundation-inspection-desoto-tx/",
  "/foundation-leveling-desoto-tx/",
  "/pier-and-beam-foundation-repair-desoto-tx/",
  "/foundation-drainage-repair-desoto-tx/",
  "/emergency-foundation-leak-repair-desoto-tx/",
].map((href) => link(href)));

export const footerLocations: NavLink[] = live([
  "/service-area/desoto-tx-foundation-repair/",
  "/service-area/75115-foundation-repair/",
  "/service-area/thorntree-desoto-foundation-repair/",
  "/service-area/meadowbrook-estates-desoto-foundation-repair/",
  "/service-area/hampton-place-desoto-foundation-repair/",
  "/service-area/elerson-ranch-desoto-foundation-repair/",
  "/service-area/candle-meadow-desoto-foundation-repair/",
  "/service-area/frost-farms-desoto-foundation-repair/",
].map((href) => link(href)));

export const footerTools: NavLink[] = live([
  link("/signs-of-foundation-leak/"),
  link("/slab-leak-vs-foundation-leak/"),
  link("/foundation-repair-vs-replacement/"),
]);

export const footerCompany: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Service Areas", href: "/service-area/" },
  { label: "Resources", href: "/resources/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
];
