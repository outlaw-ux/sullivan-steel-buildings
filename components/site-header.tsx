import Link from "next/link";
import { nav, site, siteWorkNav } from "@/lib/site";
import { Rule } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="relative z-50">
      <div className="bg-ink text-paper">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5 font-display text-sm tracking-wide">
          <span>Serving Sullivan, Franklin &amp; Washington County, Missouri</span>
          <a href={site.phoneHref} className="hover:underline">
            Call {site.phone}
          </a>
        </div>
      </div>

      <div className="wrap flex items-center justify-between gap-4 py-4">
        <Link href="/" className="block min-w-0 leading-none">
          <span className="block font-display text-[1.2rem] font-bold uppercase leading-[0.95] tracking-[0.01em] sm:text-[1.8rem] sm:tracking-[0.02em]">
            Sullivan Steel Buildings
          </span>
          <span className="block font-display text-[1.2rem] font-bold uppercase leading-[0.95] tracking-[0.01em] sm:text-[1.8rem] sm:tracking-[0.02em]">
            &amp; Carports
          </span>
          <span className="mt-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-press sm:text-xs sm:tracking-[0.14em]">
            Authorized American Steel dealer
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display font-semibold uppercase tracking-wide hover:text-press"
            >
              {item.label}
            </Link>
          ))}
          <a href="#quote" className="btn btn-sm">
            Request a quote
          </a>
        </nav>

        <details className="shrink-0 xl:hidden">
          <summary className="btn btn-sm list-none [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute inset-x-0 top-full z-50 mx-4 mt-2 max-h-[70vh] overflow-y-auto border border-ink bg-paper p-4 shadow-[6px_6px_0_#b7a67c] sm:left-auto sm:right-4 sm:mx-0 sm:w-64">
            <ul className="grid gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display font-semibold uppercase tracking-wide hover:text-press"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-rule pt-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Site work &amp; finishing
            </p>
            <ul className="mt-2 grid gap-3">
              {siteWorkNav
                .filter((item) => !nav.some((n) => n.href === item.href))
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-display font-semibold uppercase tracking-wide hover:text-press"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
            <a href="#quote" className="btn btn-sm mt-4 w-full">
              Request a quote
            </a>
          </div>
        </details>
      </div>

      <Rule />
    </header>
  );
}
