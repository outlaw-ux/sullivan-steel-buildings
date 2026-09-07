import Link from "next/link";
import { OrderCard } from "@/components/order-card";
import {
  CtaBand,
  FactList,
  Frame,
  Rule,
  Section,
  SectionHeading,
  Steps,
} from "@/components/ui";
import { catalog, warranties } from "@/lib/products";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="wrap grid gap-10 py-[clamp(2.5rem,6vw,4.25rem)] lg:grid-cols-[1fr_22rem] lg:gap-14">
        <div>
          <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
            Catalog &amp; price list for Sullivan, Missouri
          </p>
          <h1 className="mt-4 text-[clamp(2.4rem,6.2vw,4rem)] font-bold uppercase leading-[0.98] tracking-[0.005em]">
            Steel buildings &amp; carports, priced for your place
          </h1>
          <p className="measure mt-4 text-lg">
            We&apos;re the local dealer for American Steel Carports. Pick a size
            and a spot on the property. We handle the drawings, delivery, and the
            install &mdash; usually within a month of your order.
          </p>
          <ul className="mt-6 border-t border-rule font-display uppercase tracking-wide">
            {[
              "12-gauge galvanized steel framing",
              "Rent-to-own and bank financing, no perfect credit needed",
              "Backed by American Steel's 20-year frame warranty",
              "Installed across Franklin, Washington & Crawford County",
            ].map((line) => (
              <li key={line} className="border-b border-rule py-2.5">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#quote" className="btn">
              Request a quote
            </a>
            <a href="#pricelist" className="btn btn-ghost">
              See the price list
            </a>
          </div>
        </div>
        <OrderCard />
      </section>

      <div className="wrap pb-6">
        <Frame
          src="/images/as/install-metal-garage.jpg"
          width={1600}
          height={747}
          alt="A two-car American Steel metal garage with two roll-up doors, installed on a gravel pad"
          sizes="(min-width: 75rem) 68rem, 100vw"
          priority
          caption={`A 24 x 30 two-car garage. Photo courtesy of ${site.dealerOf}`}
        />
      </div>

      <Rule />

      <Section id="pricelist">
        <SectionHeading
          title="The price list"
          as="h2"
          kicker="Every building is made to order, so these are starting prices. Your quote depends on size, gauge, roof style, doors, and how the site sits."
        />
        <div>
          {catalog.map((item) => (
            <article
              key={item.no}
              className="border-t-2 border-ink py-8 first:border-t-0 first:pt-0"
            >
              <div className="flex items-end gap-4">
                <span className="font-display text-2xl font-bold leading-none text-press">
                  No.&nbsp;{item.no}
                </span>
                <h3 className="text-[clamp(1.35rem,3vw,2rem)] font-semibold uppercase tracking-[0.01em]">
                  {item.name}
                </h3>
                <span className="mb-2 hidden h-px flex-1 bg-ink sm:block" />
              </div>
              <div className="mt-5 grid gap-6 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-8">
                <Frame
                  src={item.img}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  sizes="(min-width: 768px) 22rem, 100vw"
                />
                <div>
                  <p className="measure">{item.blurb}</p>
                  <p className="measure mt-3 font-display text-sm uppercase tracking-wide text-ink-soft">
                    {item.spec}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <span className="tag text-sm">
                      {/quote/i.test(item.priceFrom)
                        ? "priced to spec"
                        : `from ${item.priceFrom}`}
                    </span>
                    <Link href={item.href} className="link-action">
                      Sizes &amp; details
                    </Link>
                    <a
                      href="#quote"
                      className="underline decoration-1 underline-offset-4 hover:decoration-2"
                    >
                      Get this one quoted
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="How an order goes" as="h2" />
        <Steps
          steps={[
            {
              title: "Pick a size and style",
              body: "Tell us what's going under it and where it sits. Not sure on size? We'll walk you through it at the counter.",
            },
            {
              title: "We price it",
              body: "You get a firm number with roof style, gauge, doors, and colors spelled out, plus rent-to-own and financing options.",
            },
            {
              title: "We deliver and install",
              body: "A factory crew sets it on your level ground or slab, usually two to six weeks after you order.",
            },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading
          title="Why steel over a pole barn"
          as="h2"
          kicker="Wood buildings in this part of Missouri fight the same few things every year. A steel frame sidesteps them."
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <FactList
            items={[
              "Won't rot, warp, or feed termites",
              "Non-combustible steel frame and panels",
              "Vertical roof sheds snow and hard rain",
              "Goes up in days, not weeks",
              "Bolts down and takes a wind-rating package",
              "Paint warranty measured in decades",
            ]}
          />
          <Frame
            src="/images/as/horizontal-carports-scaled.jpg"
            width={2560}
            height={1920}
            alt="A wide steel carport with a horizontal-panel roof over farm equipment"
            sizes="(min-width: 768px) 40vw, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
      </Section>

      <Section band>
        <SectionHeading title="What stands behind it" as="h2" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {warranties.map((w) => (
            <li key={w.label} className="border border-ink bg-paper p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={w.img} alt="" width={40} height={40} className="h-10 w-10" />
              <p className="mt-3 font-display text-sm uppercase tracking-wide">
                {w.label}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-soft">
          Warranty coverage is provided by {site.dealerOf} Ask us for the current
          warranty sheet for your building.
        </p>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading title="Stop in at the store" as="h2" />
            <p className="measure">
              You&apos;ll find us at the counter inside the {site.storeName} on
              Mine Road. Bring a photo of the spot and a rough size, and
              we&apos;ll sketch options and print a quote while you wait.
            </p>
            <ul className="mt-5 border-t border-rule font-display uppercase tracking-wide">
              <li className="border-b border-rule py-2.5">
                <a className="link-action" href={site.mapHref}>
                  {site.addressLine}
                </a>
              </li>
              <li className="border-b border-rule py-2.5">
                <a className="link-action" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
              <li className="border-b border-rule py-2.5">{site.hoursNote}</li>
            </ul>
          </div>
          <Frame
            src="/images/as/two-car-metal-garage.jpg"
            width={1600}
            height={1200}
            alt="A two-car enclosed metal garage with two roll-up doors and a walk door"
            sizes="(min-width: 768px) 40vw, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
      </Section>

      <CtaBand />
      <Rule />
    </>
  );
}
