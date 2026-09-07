import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Rule } from "@/components/ui";

export function SiteHeader() {
  return (
    <header>
      <div className="bg-ink text-paper">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5 font-display text-sm tracking-wide">
          <span>Serving Sullivan, Franklin &amp; Washington County, Missouri</span>
          <a href={site.phoneHref} className="hover:underline">
            Call {site.phone}
          </a>
        </div>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="block leading-none">
          <span className="block font-display text-[1.55rem] font-bold uppercase leading-[0.95] tracking-[0.02em] sm:text-[1.8rem]">
            Sullivan Steel Buildings
          </span>
          <span className="block font-display text-[1.55rem] font-bold uppercase leading-[0.95] tracking-[0.02em] sm:text-[1.8rem]">
            &amp; Carports
          </span>
          <span className="mt-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-press">
            Authorized American Steel dealer
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
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

        <details className="relative lg:hidden">
          <summary className="btn btn-sm list-none [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 z-50 mt-2 w-60 border border-ink bg-paper p-4 shadow-[6px_6px_0_#b7a67c]">
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
