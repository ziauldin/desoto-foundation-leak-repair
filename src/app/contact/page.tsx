import { getPageOrThrow } from "@/data/pages";
import { metadataForPage } from "@/lib/seo";
import { ContactPanel } from "@/components/hubs/ContactPanel";

const page = getPageOrThrow("/contact/");
export const metadata = metadataForPage(page);

export default function Page() {
  return <ContactPanel page={page} />;
}