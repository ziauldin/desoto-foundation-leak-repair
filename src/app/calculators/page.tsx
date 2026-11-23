import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isHidden } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { CalculatorsLauncher } from "@/components/hubs/CalculatorsLauncher";

// Hub for the "Calculators" breadcrumb level. Not a topical map row, so its SEO fields live here.
// Hidden (404) while CALCULATORS_LIVE is false in data/pages.ts.
const PATH = "/calculators/";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: PATH },
];

export function generateMetadata(): Metadata {
  if (isHidden(PATH)) return {};
  return buildMetadata({
    title: "Foundation Repair Calculators DeSoto TX | Cost & Crack Tools",
    description:
      "Free foundation repair, leak repair, crack and slab leak calculators plus a crack width tool, drainage slope calculator and inspection checklist.",
    path: PATH,
  });
}

export default function Page() {
  if (isHidden(PATH)) notFound();
  return <CalculatorsLauncher crumbs={crumbs} />;
}
