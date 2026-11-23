# desotofoundationleakrepair.com

DeSoto, TX-only rank-and-rent site for foundation leak repair and foundation repair. Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Every page is generated from data.

## How it's organized

| Layer | Where | Notes |
|---|---|---|
| Topical map (source of truth) | `data-source/topical-map.csv` → `src/data/topical-map.ts` | Slugs, titles, H1s, meta, silos, menus and breadcrumbs. Regenerate with `npm run import-map`. |
| Page content | `src/data/content/{services,resources,locations,calculators,legal}.ts` | Starter copy keyed by path. |
| Page registry | `src/data/pages.ts` | Merges map + content. Resolves internal links (`link-aliases.ts`), breadcrumbs, related services and guides, and CTA type. |
| Shared data | `src/data/{navigation,faqs,trust,ctas}.ts` | Menus, site-wide FAQs, trust points, testimonials (empty until real), CTA copy. |
| Business settings | `src/config/site.ts` | Name, phone, email, address, parent company, social links, hours, geo, plus optional trust fields (below). Nothing else hard-codes them. **Hours are still a placeholder.** |
| Theme | `src/app/globals.css` (`@theme`) | Colour and font tokens. Components only use token classes. |
| Templates | `src/components/templates/` | `ServicePageTemplate`, `ProblemPageTemplate`, `CalculatorPageTemplate`, `LocationPageTemplate`, `BasicPageTemplate`. |
| Routes | `src/app/[slug]`, `src/app/service-area/[slug]` + hubs | Root slugs dispatch by page type; locations live under `/service-area/`. |
| SEO | `src/lib/seo.ts`, `src/lib/schema.ts` | Canonical, OG, RSS alternate, and Organization/WebSite (site-wide, from the layout), LocalBusiness, Service, Breadcrumb, FAQ and Article JSON-LD. |
| Utility routes | `src/app/{sitemap.ts,sitemap/,feed.xml/,logo.png/,og-default.png/,robots.ts}` | `/sitemap.xml`, the HTML site map at `/sitemap/`, the RSS feed at `/feed.xml`, the 512px schema logo and the OG image. |

## Hidden pages

`src/data/pages.ts` is the single source of truth. `isHidden(path)` and `isLivePath(path)` decide what is served, listed in `sitemap.xml`, `/sitemap/` and `/feed.xml`, and linked from menus, related links and components. Hidden pages return 404.

Currently hidden:

- **All calculators and the `/calculators/` hub.** To publish them, set `CALCULATORS_LIVE = true`.
- **The two cost guides** (`/foundation-repair-cost-desoto-tx/`, `/foundation-leak-repair-cost-desoto-tx/`). To publish them, remove them from `hiddenPaths`.

After un-hiding, run `npm run build && npm run validate`. The page count updates on its own, because validate reads the expected set from `sitemap.xml`.

## Optional trust fields (render nothing until filled in)

Add only facts the business can document. Never add invented ones.

| Field | File | Shows up |
|---|---|---|
| `foundedYear`, `aboutStory` | `site.ts` | About → Our story |
| `googleBusinessProfileUrl` | `site.ts` | About → Find us elsewhere + review link |
| `reviewer` `{ name, role }` | `site.ts` | Every guide byline ("Reviewed by …") and the About team intro |
| `social` | `site.ts` | Footer, About, Organization/LocalBusiness `sameAs`. Add one line per profile; give it an icon in `components/layout/SocialLinks.tsx` or it shows as text. |
| `licenses`, `insurance`, `warranty`, `memberships` | `trust.ts` | About → Why homeowners trust us (badges) |
| `teamRoles[].name`, `.photo` | `trust.ts` | About → team cards |
| `testimonials` | `trust.ts` | Home, service pages and About (real reviews only) |
| `jobSitePhotos` | `images.ts` | About → Our team at work |
| `datePublished`, `dateModified` per guide | `content/resources.ts` | Article schema, byline date, RSS. Defaults come from git history. |

## Adding a page

1. Add the row to the spreadsheet, export the CSV to `data-source/topical-map.csv`, and run `npm run import-map`.
2. Add a content entry with the same `path` in the matching `src/data/content/*.ts` file.
3. If the map's link suggestions use a new name, add it to `src/data/link-aliases.ts`.
4. Run `npm run build && npm run validate`.

## Scripts

- `npm run dev`: local dev server
- `npm run lint` / `npm run typecheck`
- `npm run build`: static generation of the **62 live pages** (the map has 69 rows; 7 calculators and 2 cost guides are hidden, and `/` and `/sitemap/` are added)
- `npm run validate`: post-build checks. It exits 1 if there is no build output or fewer pages than `sitemap.xml` lists. **Errors:** broken links and `#anchors`, duplicate or missing titles, descriptions and H1s, titles over 60 chars or ~561px or equal to the H1, more than one `<title>` or one outside `<head>`, wrong canonical, pagination links, missing schema (Breadcrumb, FAQPage, Organization + WebSite on home, Article on guides), image alt text, other city names. **Warnings:** meta description outside 70–155 chars, a first H2 shared across pages, pages with fewer than 3 incoming body links.
- `node scripts/title-width.mjs "Title"`: character count and estimated SERP pixel width for a draft title.

## Deploying to Vercel

1. Push the repo and import it in Vercel. No build settings are needed.
2. Environment variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://desotofoundationleakrepair.com`
   - `LEAD_WEBHOOK_URL` (optional): Zapier/Make/CRM webhook that receives each form lead as JSON. Without it, leads are only written to the Vercel function logs.
3. Domains (Project → Settings → Domains). This is what clears the audit's "preferred version" check; it can't be fixed in code:
   - Add `desotofoundationleakrepair.com` and `www.desotofoundationleakrepair.com`.
   - Make the apex (`desotofoundationleakrepair.com`) the primary domain.
   - Set `www` to redirect to the apex with a **308 permanent** redirect.
4. Submit `https://desotofoundationleakrepair.com/sitemap.xml` in Search Console.

### Indexing guard (`next.config.ts`)

- Every response gets `X-Robots-Tag: noindex, nofollow` unless the build runs with `VERCEL_ENV=production`, so preview deployments and local builds are never indexed.
- Even in production, requests to any `*.vercel.app` host get the same header, so only the real domain is indexed.
- Vercel sets `VERCEL_ENV` automatically. Don't set it yourself.
- `/index.php` and `/index.html` redirect (308) to `/`.

## Before launch

- Confirm the business hours and the 24/7 leak-call promise in `site.hours` (still a placeholder). Phone, email and address are real.
- Fill in the optional trust fields above as the business supplies them.
- Have the privacy policy and terms reviewed by the owner's attorney.
- Verify the landmark roads listed on the neighborhood pages (`src/data/content/locations.ts`).
