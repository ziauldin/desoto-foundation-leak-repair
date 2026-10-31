// Shared lead form definition + validation (used by the client form and the API route).

export const issueOptions = [
  "Foundation leak / water near foundation",
  "Slab leak or high water bill",
  "Foundation cracks",
  "Uneven floors or sticking doors",
  "Drainage or water pooling",
  "Foundation inspection",
  "Commercial property",
  "Other",
] as const;

export interface LeadInput {
  name: string;
  phone: string;
  email: string;
  zip: string;
  issue: string;
  message: string;
  sourcePath: string;
  /** Honeypot: real users never fill this. */
  company?: string;
}

export type LeadErrors = Partial<Record<keyof LeadInput, string>>;

export function validateLead(input: Partial<LeadInput>): LeadErrors {
  const errors: LeadErrors = {};
  if (!input.name?.trim()) errors.name = "Please enter your name.";
  const digits = (input.phone ?? "").replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Please enter a 10-digit phone number.";
  if (input.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) errors.email = "Please enter a valid email or leave it blank.";
  if (input.zip && !/^\d{5}$/.test(input.zip)) errors.zip = "Please enter a 5-digit ZIP code.";
  if (!input.issue) errors.issue = "Please choose what you need help with.";
  return errors;
}

/** Best-fit issue option for a service page path, used to preselect the popup form. "" leaves it unselected. */
export function issueForService(path: string): string {
  if (/drain/.test(path)) return "Drainage or water pooling";
  if (/commercial/.test(path)) return "Commercial property";
  if (/inspection/.test(path)) return "Foundation inspection";
  if (/crack/.test(path)) return "Foundation cracks";
  if (/slab-leak|leak-detection|water-line/.test(path)) return "Slab leak or high water bill";
  if (/leak/.test(path)) return "Foundation leak / water near foundation";
  if (/leveling/.test(path)) return "Uneven floors or sticking doors";
  return "";
}

/**
 * Attributes that make a service link open the site-wide popup form (see ContactModal) instead of
 * navigating. The href still points at the service page, so crawlers and no-JS visitors reach it.
 */
export function servicePopupAttrs(path: string, label: string) {
  return {
    "data-contact-popup": true,
    "data-popup-title": `Ask about ${label.toLowerCase()}`,
    "data-popup-issue": issueForService(path),
    "data-popup-link": path,
    "data-popup-link-label": label,
  };
}
