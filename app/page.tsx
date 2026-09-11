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
import { siteWork } from "@/lib/services";
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
            We&apos;re the local dealer for American Steel Carports, and we do
            the ground work too. Pick a size and a spot on the property. We grade
            it, pour the pad, handle the drawings and delivery, set the building,
            and finish the inside if you want it finished.
          </p>
          <ul className="mt-6 border-t border-rule font-display uppercase tracking-wide">
            {[
              "12-gauge galvanized steel framing",
              "Dirt work, retaining walls, piers, and pads by our own crew",
              "Insulation, wiring, drywall, and interior build-outs",
              "Rent-to-own and bank financing, no perfect credit needed",
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
              body: "Tell us what's going under it and where it sits. We look at the spot too — slope, drainage, and how a truck gets in.",
            },
            {
              title: "We price the whole job",
              body: "A firm number with roof style, gauge, doors, and colors spelled out, plus any dirt work or concrete the site needs and your financing options.",
            },
            {
              title: "We prep, set, and finish it",
              body: "We grade the pad and pour the base, the building goes up two to six weeks after you order, and we come back inside for insulation, wiring, and drywall if that's in the scope.",
            },
          ]}
        />
      </Section>

      <Section id="sitework">
        <SectionHeading
          title="Site work & finishing"
          as="h2"
          kicker="Most of the ground around here slopes, and a bare steel shell is a cold place to work. We handle both ends of that — before the building lands and after it's standing."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteWork.map((item) => (
            <li key={item.no} className="border border-ink bg-paper p-5">
              <span className="font-display text-sm font-bold text-press">
                No.&nbsp;{item.no}
              </span>
              <h3 className="mt-1 text-xl font-semibold uppercase tracking-[0.01em]">
                <Link href={item.href} className="hover:text-press">
                  {item.name}
                </Link>
              </h3>
              <p className="mt-2 text-ink-soft">{item.blurb}</p>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link href="/site-prep-groundwork-sullivan-mo" className="btn">
            See how site prep works
          </Link>
          <a href="#quote" className="btn btn-ghost">
            Get the site quoted
          </a>
        </div>
      </Section>

      <Rule />

      <Section band>
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

      <Section>
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

      <Section band>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading title="Talk to a builder" as="h2" />
            <p className="measure">
              Send a photo of the spot and a rough size and we&apos;ll sketch
              options and get a written quote back to you. Prefer to talk it
              through? Give us a call.
            </p>
            <ul className="mt-5 border-t border-rule font-display uppercase tracking-wide">
              <li className="border-b border-rule py-2.5">
                <a className="link-action" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
              <li className="border-b border-rule py-2.5">
                <a className="link-action" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li className="border-b border-rule py-2.5">
                Serving {site.address.city}, MO and the surrounding counties
              </li>
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
