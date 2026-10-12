// Maps the plain-English names used in the topical map ("Internal Linking Suggestions" and
// "Breadcrumb Structure") to real URLs. Names the map references that have no page of their
// own (Reviews, Crack Types Guide, Grading, ...) point at the closest existing page.

export const linkAliases: Record<string, string> = {
  // Services
  "foundation leak repair": "/foundation-leak-repair-desoto/",
  "leak repair": "/foundation-leak-repair-desoto/",
  "core services": "/foundation-leak-repair-desoto/",
  "foundation repair": "/foundation-repair-desoto-tx/",
  services: "/foundation-repair-desoto-tx/",
  "foundation problems": "/foundation-repair-desoto-tx/",
  "company page": "/foundation-repair-company-desoto-tx/",
  "house foundation repair": "/house-foundation-repair-desoto-tx/",
  "home foundation repair": "/home-foundation-repair-desoto-tx/",
  "crack repair": "/foundation-crack-repair-desoto-tx/",
  "foundation crack repair": "/foundation-crack-repair-desoto-tx/",
  "structural cracks": "/foundation-crack-repair-desoto-tx/",
  "slab foundation repair": "/slab-foundation-repair-desoto-tx/",
  "slab repair": "/slab-foundation-repair-desoto-tx/",
  "slab leak repair": "/slab-leak-repair-desoto-tx/",
  "leak detection": "/foundation-leak-detection-desoto-tx/",
  "foundation leak detection": "/foundation-leak-detection-desoto-tx/",
  "underground leak detection": "/underground-leak-detection-desoto-tx/",
  "water line repair": "/water-line-leak-repair-desoto-tx/",
  "water line leak repair": "/water-line-leak-repair-desoto-tx/",
  inspection: "/foundation-inspection-desoto-tx/",
  "foundation inspection": "/foundation-inspection-desoto-tx/",
  "foundation leveling": "/foundation-leveling-desoto-tx/",
  "house leveling": "/house-leveling-desoto-tx/",
  "pier & beam": "/pier-and-beam-foundation-repair-desoto-tx/",
  "pier & beam repair": "/pier-and-beam-foundation-repair-desoto-tx/",
  "crawl space repair": "/crawl-space-foundation-repair-desoto-tx/",
  "drainage repair": "/foundation-drainage-repair-desoto-tx/",
  drainage: "/foundation-drainage-repair-desoto-tx/",
  "moisture control": "/foundation-drainage-repair-desoto-tx/",
  "french drains": "/french-drain-foundation-desoto-tx/",
  "commercial foundation repair": "/commercial-foundation-repair-desoto-tx/",
  "emergency leak repair": "/emergency-foundation-leak-repair-desoto-tx/",

  // Calculators
  calculators: "/calculators/",
  "cost calculator": "/foundation-repair-cost-calculator/",
  "leak calculator": "/foundation-leak-repair-cost-calculator/",
  "crack width calculator": "/foundation-crack-width-calculator/",
  "crack types guide": "/foundation-crack-width-calculator/",
  "drainage calculator": "/foundation-drainage-slope-calculator/",
  grading: "/foundation-drainage-slope-calculator/",

  // Resources
  resources: "/resources/",
  cost: "/foundation-repair-cost-desoto-tx/",
  "cost guide": "/foundation-repair-cost-desoto-tx/",
  "warning signs": "/signs-of-foundation-leak/",
  "moisture problems": "/signs-of-foundation-leak/",
  "water pooling guide": "/water-pooling-near-foundation/",
  "water pooling near foundation": "/water-pooling-near-foundation/",
  gutters: "/water-pooling-near-foundation/",
  "vapor barrier guide": "/water-pooling-near-foundation/",
  "uneven floors guide": "/uneven-floors-foundation-problem/",
  "settlement repair": "/foundation-settlement-repair/",

  // Locations + company
  "service areas": "/service-area/",
  "service area hub": "/service-area/",
  "desoto tx": "/service-area/desoto-tx-foundation-repair/",
  "desoto tx page": "/service-area/desoto-tx-foundation-repair/",
  "desoto repair page": "/service-area/desoto-tx-foundation-repair/",
  "desoto foundation repair": "/service-area/desoto-tx-foundation-repair/",
  "desoto service area": "/service-area/desoto-tx-foundation-repair/",
  "desoto foundation leak repair": "/service-area/desoto-tx-foundation-leak-repair/",
  reviews: "/about/",
  contact: "/contact/",
};

export const resolveAlias = (name: string): string | undefined =>
  linkAliases[name.trim().toLowerCase()];
