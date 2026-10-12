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
