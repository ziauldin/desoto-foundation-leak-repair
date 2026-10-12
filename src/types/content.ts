// Shared content types. Data lives in src/data, presentation in src/components.

export type PageType = "home" | "core" | "sub" | "calculator" | "blog" | "location" | "basic";
export type FunnelStage = "TOFU" | "MOFU" | "BOFU";

/** CTA variants rendered by <CtaSection /> and <Hero />. */
export type CtaType =
  | "inspection" // Request Foundation Inspection
  | "leak-estimate" // Get Leak Repair Estimate
  | "emergency" // Call Now – fast response
  | "cost-check" // Check Repair Cost
  | "schedule"; // Schedule Inspection

/** One row of the topical map spreadsheet (generated into src/data/topical-map.ts). */
export interface TopicalMapRow {
  pageType: Exclude<PageType, "home">;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchVolume: number | null;
  keywordDifficulty: number | null;
  searchIntent: string;
  /** URL path with leading and trailing slash, e.g. "/foundation-repair-desoto-tx/". */
  path: string;
  seoTitle: string;
  h1: string;
  metaDescription: string;
  parentSilo: string;
  internalLinkingSuggestions: string;
  contentAngle: string;
  funnelStage: FunnelStage | string;
  menuItemName: string;
  menuStructure: string;
  breadcrumbStructure: string;
}

export interface Crumb {
  name: string;
  path: string;
}

/** Fully resolved page record used by templates (topical map row + computed links). */
export interface PageRecord extends TopicalMapRow {
  breadcrumbs: Crumb[];
  /** Resolved internal link targets from the map's "Internal Linking Suggestions". */
  internalLinks: string[];
  /** 3-6 related service page paths. */
  relatedServices: string[];
  /** 2-4 related guides / calculators. */
  relatedPages: string[];
  ctaType: CtaType;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

/** Starter copy for core + sub service pages, keyed by path. */
export interface ServiceContent {
  path: string;
  /** Short label for cards/links, e.g. "Slab Leak Repair". */
  shortName: string;
  /** 1-2 sentence card blurb. */
  summary: string;
  /** 2-3 intro paragraphs. */
  intro: string[];
  /** Common signs / problems this service addresses (4-6). */
  signs: TitledText[];
  /** "Why it matters in DeSoto" paragraphs (2-3). */
  whyItMatters: string[];
  /** What the service includes / repair methods (3-5). */
  included: TitledText[];
  /** 4 process steps. */
  process: TitledText[];
  faqs: FAQ[];
  ctaType: CtaType;
  /** Shows urgent / same-day messaging. */
  urgent?: boolean;
}

export type ResourceCategory = "cost" | "problems" | "comparisons";

/** Starter copy for blog / problem / cost / comparison pages, keyed by path. */
export interface ResourceContent {
  path: string;
  shortName: string;
  category: ResourceCategory;
  summary: string;
  intro: string[];
  sections: ContentSection[];
  /** Optional comparison table (used by comparison pages). */
  comparison?: {
    columns: [string, string, string];
    rows: [string, string, string][];
  };
  /** Bullet list: when to call a pro. */
  whenToCall: string[];
  /** The single most relevant service page path. */
  primaryService: string;
  /** The single most relevant calculator path. */
  primaryCalculator: string;
  faqs: FAQ[];
  ctaType: CtaType;
}

export type LocationKind = "city" | "city-service" | "zip" | "neighborhood" | "direction";

/** Starter copy for DeSoto-only location pages, keyed by path. */
export interface LocationContent {
  path: string;
  kind: LocationKind;
  /** e.g. "Thorntree", "75115", "West DeSoto", "DeSoto TX". */
  areaName: string;
  shortName: string;
  summary: string;
  intro: string[];
  /** Local factors that affect foundations here (3-5). */
  localFactors: TitledText[];
  /** Nearby streets / landmarks / parks inside DeSoto. */
  landmarks: string[];
  /** Housing stock note (era, foundation types). */
  housingNote: string;
  /** Service page paths most relevant here (3-6). */
  serviceFocus: string[];
  faqs: FAQ[];
  /** Optional overrides so location pages don't duplicate service-page titles/H1s. */
  seoTitleOverride?: string;
  h1Override?: string;
}

// ---- Calculators -------------------------------------------------------------

export interface SelectOption {
  label: string;
  /** Added to the low/high estimate. */
  low?: number;
  high?: number;
  /** Multiplies the running estimate (applied after additions). */
  multiplier?: number;
}

export type CalcField =
  | {
      id: string;
      type: "select";
      label: string;
      help?: string;
      options: SelectOption[];
      defaultIndex?: number;
    }
  | {
      id: string;
      type: "range";
      label: string;
      help?: string;
      min: number;
      max: number;
      step: number;
      defaultValue: number;
      unit: string;
      perUnitLow: number;
      perUnitHigh: number;
    };

export interface ChecklistItem {
  id: string;
  label: string;
  area: string;
  /** 1 = minor, 2 = moderate, 3 = serious. */
  weight: 1 | 2 | 3;
}

export type CalculatorTool =
  | { kind: "cost"; baseLow: number; baseHigh: number; minimum: number; fields: CalcField[] }
  | { kind: "checklist"; items: ChecklistItem[] }
  | { kind: "crack-width" }
  | { kind: "drainage-slope" };

export interface CalculatorContent {
  path: string;
  shortName: string;
  summary: string;
  intro: string[];
  tool: CalculatorTool;
  /** How to read the result. */
  howItWorks: TitledText[];
  disclaimer: string;
  /** Matching service page path. */
  primaryService: string;
  faqs: FAQ[];
  ctaType: CtaType;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  children?: NavLink[];
}
