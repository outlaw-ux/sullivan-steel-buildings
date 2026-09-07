import { site } from "@/lib/site";

export function StickyQuoteBar() {
  return (
    <div className="animate-slide-up fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-manila-deep px-4 py-2.5 lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a href="#quote" className="btn btn-sm flex-1">
          Request a quote
        </a>
        <a
          href={site.phoneHref}
          className="btn btn-ghost btn-sm"
          aria-label={`Call ${site.phone}`}
        >
          Call
        </a>
      </div>
    </div>
  );
}
