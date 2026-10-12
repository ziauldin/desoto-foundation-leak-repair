# desotofoundationleakrepair.com

DeSoto, TX-only rank-and-rent site for foundation leak repair and foundation repair. Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Every page is generated from data.

## How it's organized

| Layer | Where | Notes |
|---|---|---|
| Topical map (source of truth) | `data-source/topical-map.csv` → `src/data/topical-map.ts` | Slugs, titles, H1s, meta, silos, menus and breadcrumbs. Regenerate with `npm run import-map`. |
| Page content | `src/data/content/{services,resources,locations,calculators,legal}.ts` | Starter copy keyed by path. |
| Page registry | `src/data/pages.ts` | Merges map + content. Resolves internal links (`link-aliases.ts`), breadcrumbs, related services and guides, and CTA type. |
| Shared data | `src/data/{navigation,faqs,trust,ctas}.ts` | Menus, site-wide FAQs, trust points, testimonials (empty until real), CTA copy. |
| Business settings | `src/config/site.ts` | **Phone, email and hours are placeholders.** Change them here only. |
| Theme | `src/app/globals.css` (`@theme`) | Colour and font tokens. Components only use token classes. |
| Templates | `src/components/templates/` | `ServicePageTemplate`, `ProblemPageTemplate`, `CalculatorPageTemplate`, `LocationPageTemplate`, `BasicPageTemplate`. |
| Routes | `src/app/[slug]`, `src/app/service-area/[slug]` + hubs | Root slugs dispatch by page type; locations live under `/service-area/`. |
| SEO | `src/lib/seo.ts`, `src/lib/schema.ts` | Canonical, OG, and LocalBusiness/Service/Breadcrumb/FAQ/Article JSON-LD. |

## Adding a page

1. Add the row to the spreadsheet, export the CSV to `data-source/topical-map.csv`, and run `npm run import-map`.
2. Add a content entry with the same `path` in the matching `src/data/content/*.ts` file.
3. If the map's link suggestions use a new name, add it to `src/data/link-aliases.ts`.
4. Run `npm run build && npm run validate`.

## Scripts

- `npm run dev`: local dev server
- `npm run lint` / `npm run typecheck`
- `npm run build`: static generation of all 71 pages
- `npm run validate`: post-build check for broken internal links, duplicate titles/descriptions/H1s, missing canonical or schema, and non-DeSoto city mentions

## Deploying to Vercel

1. Push the repo and import it in Vercel. No build settings are needed.
2. Environment variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://desotofoundationleakrepair.com`
   - `LEAD_WEBHOOK_URL` (optional): Zapier/Make/CRM webhook that receives each form lead as JSON. Without it, leads are only written to the Vercel function logs.
3. Add the domain in Vercel and submit `/sitemap.xml` in Search Console.

## Before launch

- Replace the placeholder phone `(972) 555-0142`, email and hours in `src/config/site.ts`.
- Add real testimonials to `src/data/trust.ts`; the section stays hidden while the list is empty.
- Have the privacy policy and terms reviewed.
- Verify the landmark roads listed on the neighborhood pages (`src/data/content/locations.ts`).
