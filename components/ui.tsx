import Image from "next/image";
import type { ReactNode } from "react";

export function Rule() {
  return <div className="rule-double" role="presentation" />;
}

/* Page-level structured data. See lib/seo.ts for the record builders. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Section({
  children,
  band = false,
  id,
  className = "",
}: {
  children: ReactNode;
  band?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${band ? "bg-manila-deep" : ""} ${className}`}
    >
      <div className="wrap py-[clamp(3rem,8vw,5.5rem)]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  no,
  kicker,
  as: As = "h2",
}: {
  title: string;
  no?: number | string;
  kicker?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className="mb-8">
      <div className="flex items-end gap-4">
        {no !== undefined && (
          <span className="font-display text-2xl font-bold leading-none text-press">
            No.&nbsp;{no}
          </span>
        )}
        <As className="text-[clamp(1.7rem,3.6vw,2.5rem)] font-semibold uppercase tracking-[0.01em]">
          {title}
        </As>
        <span className="mb-2 hidden h-px flex-1 bg-ink sm:block" />
      </div>
      {kicker && (
        <p className="measure mt-3 text-ink-soft">{kicker}</p>
      )}
    </div>
  );
}

export function FactList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="border-t border-rule">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 border-b border-rule py-3"
        >
          <span
            aria-hidden
            className="mt-1 font-display font-bold text-stamp"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-3">
      {steps.map((s, i) => (
        <li key={i} className="border-t-2 border-ink pt-3">
          <div className="font-display text-4xl font-bold leading-none text-press">
            {i + 1}
          </div>
          <h3 className="mt-2 text-xl font-semibold uppercase tracking-[0.01em]">
            {s.title}
          </h3>
          <p className="mt-1 text-ink-soft">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function PriceTag({ price }: { price: string }) {
  const isQuote = /quote/i.test(price);
  return (
    <span className="tag text-sm">
      {isQuote ? "priced to spec" : `from ${price}`}
    </span>
  );
}

export function Frame({
  src,
  width,
  height,
  alt,
  caption,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure className="m-0">
      <div className="frame">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 font-display text-sm text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function SpecTable({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="border-b-2 border-ink py-2 pr-4 font-display text-sm font-semibold uppercase tracking-[0.02em] align-bottom"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td
                  key={j}
                  className="border-b border-rule py-2 pr-4 align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FaqList({
  items,
}: {
  items: { q: string; a: ReactNode }[];
}) {
  return (
    <div className="border-t border-rule">
      {items.map((item, i) => (
        <details key={i} className="group border-b border-rule py-3">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold">
            {item.q}
            <span
              aria-hidden
              className="text-press transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="measure mt-2 text-ink-soft">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  heading = "Ready for a price?",
  body = "Tell us the size and where it's going. We'll come back with a firm number and your financing options.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <Section band>
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold uppercase tracking-[0.01em]">
            {heading}
          </h2>
          <p className="measure mt-2 text-ink-soft">{body}</p>
        </div>
        <a href="#quote" className="btn justify-self-start md:justify-self-end">
          Request a quote
        </a>
      </div>
    </Section>
  );
}
