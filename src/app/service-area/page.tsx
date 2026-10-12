import { getPageOrThrow } from "@/data/pages";
import { metadataForPage } from "@/lib/seo";
import { ServiceAreaDirectory } from "@/components/hubs/ServiceAreaDirectory";

const page = getPageOrThrow("/service-area/");
// The map's title/description mention "nearby cities"; overridden to keep the site DeSoto-only.
export const metadata = metadataForPage(page, {
  title: "DeSoto TX Foundation Repair Service Area | Neighborhoods & ZIP Codes",
  description: "Foundation leak and foundation repair across DeSoto TX: every neighborhood, both ZIP codes, and each part of the city. DeSoto only, no outside cities.",
});

export default function Page() {
  return <ServiceAreaDirectory page={page} />;
}