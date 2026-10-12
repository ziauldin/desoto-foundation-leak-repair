import { getPageOrThrow } from "@/data/pages";
import { metadataForPage } from "@/lib/seo";
import { AboutStory } from "@/components/hubs/AboutStory";

const page = getPageOrThrow("/about/");
export const metadata = metadataForPage(page);

export default function Page() {
  return <AboutStory page={page} />;
}