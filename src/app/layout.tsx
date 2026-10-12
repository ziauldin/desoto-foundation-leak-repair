import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed, Source_Sans_3 } from "next/font/google";
import { site } from "@/config/site";
import { mainNav } from "@/data/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCtaBar } from "@/components/layout/StickyCtaBar";
import "./globals.css";

// Display: sturdy semi-condensed sans common on contractor signage. Body: highly readable humanist sans.
const display = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});
const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.tagline,
  applicationName: site.name,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#132636",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-accent px-4 py-2 font-semibold text-primary-dark focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header nav={mainNav} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  );
}
