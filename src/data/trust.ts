import type { TitledText } from "@/types/content";

/**
 * "Why choose us" cards. These describe how the service works, not unverifiable claims.
 * Add licenses, insurance, warranty terms or years in business here only once the business can back them up.
 */
export const whyChooseUs: TitledText[] = [
  { title: "We look for the water first", text: "Plumbing leaks and drainage get checked before anyone talks about piers, so the repair fixes the cause." },
  { title: "Measured, not guessed", text: "Elevation readings across the slab show where it has moved and by how much, before and after any work." },
  { title: "Everything in writing", text: "Findings, photos, the recommended repair and the price, in plain English you can compare against other bids." },
  { title: "Honest about small problems", text: "If a crack is cosmetic or a gutter extension is the fix, that is what we recommend." },
  { title: "Local to DeSoto", text: "We only work in DeSoto, so we know the clay soils, the housing stock and the streets, and we get to you faster." },
  { title: "Leak calls answered 24/7", text: "Water coming up through a floor can't wait for Monday. Urgent leak calls get priority scheduling." },
];

/**
 * Claims the renting business makes on its own site (desotofoundationrepairpros.com), shown as badges.
 * Deliberately left out until the business confirms them: years in business (its site says both "20+ years"
 * and "since 1987"), the "lifetime transferable warranty" (needs written terms), and BBB membership (image only).
 */
export const businessFacts = ["Free estimates", "Financing available", "Family-owned"];

/** "Us vs. a typical bid" comparison rows shown under the Why choose us cards. */
export const whyCompare: { us: string; typical: string }[] = [
  { us: "Leak and drainage check before any foundation work", typical: "Piers quoted before the cause is found" },
  { us: "Elevation readings recorded before and after", typical: "A visual walk-around" },
  { us: "Written findings and a written estimate before work starts", typical: "A verbal number on the driveway" },
  { us: "Smallest repair that solves the problem", typical: "The biggest job that can be sold" },
];

/**
 * Crew roles for the About page team section. Roles only, no names: add real names and photos
 * here once the business supplies them, never invented ones.
 */
export const teamRoles: TitledText[] = [
  { title: "Foundation inspector", text: "Walks the house inside and out, takes elevation readings and writes up the findings and repair plan." },
  { title: "Leak detection technician", text: "Pressure-tests supply and drain lines and pinpoints slab leaks with acoustic and thermal tools." },
  { title: "Repair crew", text: "Installs piers, repairs cracks and drainage, then cleans up and records final elevations." },
  { title: "Scheduling and office", text: "Answers the phone, books inspections, and keeps you updated from estimate to final walk-through." },
];

/** Default 4-step process for pages whose content doesn't define its own. */
export const defaultProcess: TitledText[] = [
  { title: "Request an inspection", text: "Call or send the form with what you're seeing. Photos help." },
  { title: "On-site evaluation", text: "Exterior and interior walk-through, elevation readings, drainage check and a plumbing test if leak signs are present." },
  { title: "Written plan and price", text: "You get findings, the recommended repair and a written estimate. Nothing starts until you approve it." },
  { title: "Repair and follow-up", text: "Work is completed, the site is cleaned up, and final elevations are recorded so future changes can be measured." },
];

export interface Testimonial {
  quote: string;
  name: string;
  neighborhood: string;
}

/**
 * Real customer reviews only. The testimonial section stays hidden while this is empty.
 * Never add invented reviews: it violates FTC rules and Google's review-snippet policies.
 */
export const testimonials: Testimonial[] = [];
