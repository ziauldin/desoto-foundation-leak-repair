import { getPageOrThrow } from "@/data/pages";
import { metadataForPage } from "@/lib/seo";
import { ResourcesMagazine } from "@/components/hubs/ResourcesMagazine";

const page = getPageOrThrow("/resources/");
export const metadata = metadataForPage(page);

export default function Page() {
  return <ResourcesMagazine page={page} />;
}