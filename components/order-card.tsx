import { QuoteForm } from "@/components/quote-form";

export function OrderCard() {
  return (
    <aside className="lg:sticky lg:top-6" aria-label="Request a quote">
      <div className="animate-settle border border-ink bg-paper shadow-[7px_7px_0_#b7a67c]">
        <div className="flex items-baseline justify-between gap-2 border-b border-ink bg-manila-deep px-5 py-3">
          <h2 className="font-display text-xl font-semibold tracking-wide">
            Start your quote
          </h2>
          <span className="font-display text-sm text-ink-soft">No. Q-1</span>
        </div>
        <div className="p-5">
          <p className="mb-4 text-sm text-ink-soft">
            Four boxes and we&apos;ll call you back with sizes and pricing.
          </p>
          <QuoteForm variant="card" source="hero-order-card" />
        </div>
      </div>
    </aside>
  );
}
