// Page imagery. Illustrations live in public/images/illustrations/*.svg (640x420).
// To use a real photo instead, drop it in public/images/ and point the entry's src at it
// (keep a 3:2-ish ratio); alt text stays here with the image.

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ill = (key: string, alt: string): SiteImage => ({
  src: `/images/illustrations/${key}.svg`,
  alt,
  width: 640,
  height: 420,
});

export const images = {
  homeHero: ill("home-hero", "Cutaway of a brick ranch home on a slab foundation with a leaking water pipe under the slab soaking the clay soil"),
  slabLeak: ill("slab-leak", "Cross-section of a concrete slab with a leaking copper pipe below it and a wet zone spreading through the soil"),
  leakDetection: ill("leak-detection", "Acoustic leak detection equipment on a floor picking up sound waves from a hidden pipe below"),
  waterLine: ill("water-line", "Front yard cross-section showing a buried water service line between the meter and the house with a leak in the soil"),
  emergencyLeak: ill("emergency-leak", "Burst pipe spraying water onto the floor next to the main water shutoff valve"),
  undergroundLeak: ill("underground-leak", "Soggy green patch in a lawn above a leaking buried pipe with moisture rising through the soil"),
  foundationCrack: ill("foundation-crack", "Stair-step crack running through the mortar of a brick wall from a window corner, measured with a crack gauge"),
  foundationLeveling: ill("foundation-leveling", "Concrete piers under a slab foundation with a hydraulic jack lifting a settled edge back to level"),
  pierAndBeam: ill("pier-and-beam", "Crawl space under a pier and beam home with wood beams resting on concrete piers and shims"),
  unevenFloors: ill("uneven-floors", "Tilted floor with a marble rolling to the low side and a level showing the bubble off center"),
  stickingDoor: ill("sticking-door", "Interior door out of square in its frame with a tapered gap and a diagonal drywall crack above"),
  inspection: ill("inspection", "Foundation inspection tools: clipboard checklist, laser level and tape measure over a floor elevation grid"),
  drainage: ill("drainage", "Brick home with a gutter downspout extension carrying rainwater away and ground sloping away from the foundation"),
  frenchDrain: ill("french-drain", "French drain cross-section with a perforated pipe in a gravel trench carrying water away from a foundation"),
  waterPooling: ill("water-pooling", "During a rainstorm, a short downspout dumps water that pools against a home's foundation and soaks the soil"),
  costEstimate: ill("cost-estimate", "Calculator, estimate sheet and a small brick house representing foundation repair costs"),
  commercial: ill("commercial", "Small commercial storefront building on a slab foundation with a sidewalk in front"),
  neighborhood: ill("neighborhood", "Street of single-story brick ranch homes with mature trees, typical of DeSoto neighborhoods"),
  brickHome: ill("brick-home", "Single-story brick ranch home with a garage and lawn, sitting on a concrete slab foundation"),
} satisfies Record<string, SiteImage>;

type ImageKey = keyof typeof images;

/** Explicit image per page path. Anything not listed falls back by page type (see imageForPath). */
const byPath: Record<string, ImageKey> = {
  // Services
  "/foundation-leak-repair-desoto/": "homeHero",
  "/foundation-repair-desoto-tx/": "foundationLeveling",
  "/foundation-repair-company-desoto-tx/": "inspection",
  "/house-foundation-repair-desoto-tx/": "brickHome",
  "/home-foundation-repair-desoto-tx/": "neighborhood",
  "/foundation-crack-repair-desoto-tx/": "foundationCrack",
  "/slab-foundation-repair-desoto-tx/": "foundationLeveling",
  "/slab-leak-repair-desoto-tx/": "slabLeak",
  "/foundation-leak-detection-desoto-tx/": "leakDetection",
  "/underground-leak-detection-desoto-tx/": "undergroundLeak",
  "/water-line-leak-repair-desoto-tx/": "waterLine",
  "/foundation-inspection-desoto-tx/": "inspection",
  "/foundation-leveling-desoto-tx/": "foundationLeveling",
  "/house-leveling-desoto-tx/": "unevenFloors",
  "/pier-and-beam-foundation-repair-desoto-tx/": "pierAndBeam",
  "/crawl-space-foundation-repair-desoto-tx/": "pierAndBeam",
  "/foundation-drainage-repair-desoto-tx/": "drainage",
  "/french-drain-foundation-desoto-tx/": "frenchDrain",
  "/commercial-foundation-repair-desoto-tx/": "commercial",
  "/emergency-foundation-leak-repair-desoto-tx/": "emergencyLeak",
  // Calculators
  "/foundation-repair-cost-calculator/": "costEstimate",
  "/foundation-leak-repair-cost-calculator/": "slabLeak",
  "/foundation-crack-repair-cost-calculator/": "foundationCrack",
  "/slab-leak-repair-cost-calculator/": "costEstimate",
  "/foundation-inspection-checklist/": "inspection",
  "/foundation-crack-width-calculator/": "foundationCrack",
  "/foundation-drainage-slope-calculator/": "drainage",
  // Resources
  "/foundation-repair-cost-desoto-tx/": "costEstimate",
  "/foundation-leak-repair-cost-desoto-tx/": "costEstimate",
  "/signs-of-foundation-leak/": "homeHero",
  "/foundation-cracks-after-rain/": "foundationCrack",
  "/water-pooling-near-foundation/": "waterPooling",
  "/uneven-floors-foundation-problem/": "unevenFloors",
  "/sticking-doors-foundation-problem/": "stickingDoor",
  "/foundation-settlement-repair/": "foundationLeveling",
  "/slab-leak-vs-foundation-leak/": "slabLeak",
  "/foundation-repair-vs-replacement/": "inspection",
  "/diy-foundation-crack-repair-vs-professional/": "foundationCrack",
  // Location pages that match a service use that service's image
  "/service-area/desoto-tx-foundation-leak-repair/": "homeHero",
  "/service-area/desoto-tx-foundation-crack-repair/": "foundationCrack",
  "/service-area/desoto-tx-house-foundation-repair/": "brickHome",
  "/service-area/desoto-tx-foundation-repair-company/": "inspection",
  "/service-area/desoto-tx-slab-leak-repair/": "slabLeak",
  "/service-area/desoto-tx-foundation-inspection/": "inspection",
  "/service-area/desoto-tx-foundation-leveling/": "foundationLeveling",
  "/service-area/desoto-tx-foundation-drainage-repair/": "drainage",
  "/service-area/desoto-tx-pier-and-beam-foundation-repair/": "pierAndBeam",
  "/service-area/75115-foundation-repair/": "brickHome",
  "/service-area/75123-foundation-repair/": "brickHome",
  "/service-area/downtown-desoto-foundation-repair/": "commercial",
  // Hubs
  "/service-area/": "neighborhood",
  "/resources/": "homeHero",
  "/calculators/": "costEstimate",
  "/about/": "brickHome",
  "/contact/": "inspection",
};

/** The image for a page; other location pages (neighborhoods, directions) show the neighborhood scene. */
export function imageForPath(path: string): SiteImage {
  const key = byPath[path] ?? (path.startsWith("/service-area/") ? "neighborhood" : "brickHome");
  return images[key];
}
