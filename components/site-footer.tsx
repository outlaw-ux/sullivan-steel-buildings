import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { CookieChoicesButton } from "@/components/cookie-choices-button";
import { nav, serviceArea, site, siteWorkNav } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div id="quote" className="scroll-mt-24 bg-ink text-paper">
        <div className="wrap grid gap-10 py-[clamp(3rem,8vw,5rem)] lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-[clamp(2rem,4.4vw,2.9rem)] font-semibold uppercase tracking-[0.01em]">
              Request a quote
            </h2>
            <p className="measure mt-3 text-paper/80">
              Give us a size and a spot on the property. We&apos;ll price the
              building, lay out rent-to-own and financing, and set a delivery
              week. No cost and no pressure.
            </p>
            <ul className="mt-6 grid gap-1.5 font-display text-sm uppercase tracking-wide text-paper/70">
              <li>Free, no-obligation quote</li>
              <li>Typically installed 2 to 6 weeks out</li>
              <li>Delivered across Franklin, Washington &amp; Crawford County</li>
            </ul>
          </div>
          <div className="border border-paper/25 bg-paper p-6 text-ink shadow-[7px_7px_0_rgba(0,0,0,0.35)]">
            <QuoteForm variant="full" source="footer" />
          </div>
        </div>
      </div>

      <div className="wrap grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
            Contact
          </h3>
          <p className="mt-2">{site.addressLine}</p>
          <p className="mt-1">
            <a className="link-action" href={site.phoneHref}>
              {site.phone}
            </a>
          </p>
          <p className="mt-1">
            <a className="link-action" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-1">
            <a
              className="link-action"
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
            Where we build
          </h3>
          <p className="mt-2 text-ink-soft">
            {serviceArea.join(" · ")} and the rest of east-central Missouri
            within delivery range.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
            Buildings
          </h3>
          <ul className="mt-2 grid gap-1.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="link-action" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
            Site work &amp; finishing
          </h3>
          <ul className="mt-2 grid gap-1.5">
            {siteWorkNav.map((item) => (
              <li key={item.href}>
                <Link className="link-action" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="wrap flex flex-col gap-2 py-5 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span>
              © {year} {site.legalEntity}. All rights reserved.
            </span>
            <CookieChoicesButton />
          </span>
          <span>
            {site.name} is an independent authorized dealer for {site.dealerOf}{" "}
            Photos courtesy of {site.dealerOf} Pricing, warranty, and financing
            terms are set by the manufacturer and lenders and are subject to
            change.
          </span>
        </div>
      </div>
    </footer>
  );
}
