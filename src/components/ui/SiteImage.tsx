import Image from "next/image";
import type { SiteImage as SiteImageData } from "@/data/images";

/**
 * Page image with fixed intrinsic size (no layout shift) and lazy loading.
 * SVG illustrations skip the optimizer; real photos (jpg/png/webp) go through next/image resizing.
 */
export function SiteImage({
  image,
  eager = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className = "",
}: {
  image: SiteImageData;
  /** Above the fold: load immediately with high fetch priority. */
  eager?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      unoptimized={image.src.endsWith(".svg")}
      className={`h-auto w-full ${className}`}
    />
  );
}
