import { buildMetadata } from "@/lib/seo";
import { CalculatorsLauncher } from "@/components/hubs/CalculatorsLauncher";

// Hub for the "Calculators" breadcrumb level. Not a topical map row, so its SEO fields live here.
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: "/calculators/" },
];

export const metadata = buildMetadata({
  title: "Foundation Repair Calculators for DeSoto TX | Cost, Crack & Drainage Tools",
  description: "Free foundation repair, leak repair, crack and slab leak cost calculators plus a crack width tool, drainage slope calculator and inspection checklist.",
  path: "/calculators/",
});

export default function Page() {
  return <CalculatorsLauncher crumbs={crumbs} />;
}