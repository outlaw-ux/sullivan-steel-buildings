import { serviceArea, site } from "@/lib/site";

/*
 * Structured data helpers. The root layout already publishes the
 * HomeAndConstructionBusiness record; these add page-level Service and FAQPage
 * markup so the site-work pages can win rich results on their own terms.
 */

const provider = {
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  telephone: site.phone,
  email: site.email,
  url: site.siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
};

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: new URL(path, site.siteUrl).toString(),
    provider,
    areaServed: serviceArea.map((place) => ({ "@type": "Place", name: place })),
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
