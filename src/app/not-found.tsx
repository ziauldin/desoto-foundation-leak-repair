import Link from "next/link";
import { linkLabel } from "@/data/pages";

const popular = ["/foundation-leak-repair-desoto/", "/foundation-repair-desoto-tx/", "/foundation-repair-cost-calculator/", "/service-area/"];

export default function NotFound() {
  return (
    <div className="container-site py-20 text-center">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4">We couldn&apos;t find that page</h1>
      <p className="mt-3 text-muted">It may have moved. These are the pages most people are looking for:</p>
      <ul className="mt-8 flex flex-wrap justify-center gap-3">
        {popular.map((p) => (
          <li key={p}>
            <Link href={p} className="inline-block rounded-md border border-primary px-4 py-2 font-semibold text-primary hover:bg-primary hover:text-white">
              {linkLabel(p)}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-10 inline-block font-semibold text-primary underline">
        Back to home
      </Link>
    </div>
  );
}
