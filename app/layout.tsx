import type { Metadata } from "next";
import { Saira_Condensed, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyQuoteBar } from "@/components/sticky-quote-bar";
import { serviceArea, site } from "@/lib/site";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-saira",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default:
      "Sullivan Steel Buildings & Carports | Metal Buildings in Sullivan, MO",
    template: "%s | Sullivan Steel Buildings & Carports",
  },
  description:
    "Carports, metal garages, barns, and RV covers delivered and installed across Sullivan, Franklin County, and Washington County, MO. Authorized American Steel dealer. Request a free quote.",
  keywords: [
    "steel buildings Sullivan MO",
    "metal carports Franklin County",
    "metal garages Sullivan Missouri",
    "steel barns Washington County MO",
    "RV covers Sullivan MO",
    "American Steel dealer Missouri",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.siteUrl,
    siteName: site.name,
    title: "Sullivan Steel Buildings & Carports",
    description:
      "Metal carports, garages, barns, and RV covers built for Missouri weather. Delivered and installed around Sullivan, MO.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  legalName: site.legalEntity,
  description:
    "Dealer for American Steel Carports, Inc. selling and installing metal carports, garages, barns, and RV covers around Sullivan, Missouri.",
  telephone: site.phone,
  email: site.email,
  url: site.siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: serviceArea.map((name) => ({ "@type": "Place", name })),
  sameAs: [site.facebook, site.storeHref],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${saira.variable} ${sourceSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyQuoteBar />
      </body>
    </html>
  );
}
