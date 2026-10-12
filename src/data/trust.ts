import type { TitledText } from "@/types/content";

/**
 * Trust points describe how the service works, not unverifiable claims.
 * Add licenses, insurance, warranty terms or years in business here only once the business can back them up.
 */
export const trustPoints: TitledText[] = [
  { title: "DeSoto only", text: "One city, every neighborhood. No crews spread across the metroplex." },
  { title: "Leak first, then foundation", text: "We check for plumbing leaks before recommending piers, so you don't fix the symptom and keep the cause." },
  { title: "Written findings", text: "Elevation readings, photos and a plain-English repair plan you can compare against other bids." },
  { title: "No-pressure inspections", text: "If a crack is cosmetic or the fix is drainage, we'll tell you." },
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
