import type { Metadata } from "next";
import Link from "next/link";
import {
  CtaBand,
  FactList,
  FaqList,
  Frame,
  JsonLd,
  Rule,
  Section,
  SectionHeading,
  SpecTable,
  Steps,
} from "@/components/ui";
import { faqPageSchema, serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/cabin-home-interior-build-outs-sullivan-mo";

export const metadata: Metadata = {
  title: "Camping Cabin & Home Interior Build-Outs in Sullivan, MO",
  description:
    "Interior build-outs for camping cabins, shouses, barndominiums, and living quarters in steel buildings around Sullivan and Franklin County, MO. Framing, insulation, electrical, drywall, baths, kitchens, and finish work.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Camping Cabin & Home Interior Build-Outs in Sullivan, MO",
    description:
      "Turn a steel shell into a finished cabin, shouse, or living quarters — framing through trim.",
    url: PATH,
  },
};

const faqs = [
  {
    q: "What's the difference between a camping cabin and a house?",
    a: "Mostly how the county classifies it and what that triggers. A small seasonal cabin on a recreational property is a simpler project than a permanent dwelling, which brings full residential code: egress windows in sleeping rooms, smoke and CO alarms, insulation minimums, a septic permit, and inspections. Tell us which one you're building and we'll scope it against the right rulebook.",
  },
  {
    q: "Can you build out a shell I already have?",
    a: "Yes. Buildings we sold and buildings we didn't. We look at the frame, the panel condition, the way the base rail meets the slab, and the header heights before we quote, because those decide how the interior walls land.",
  },
  {
    q: "Do you do plumbing and septic?",
    a: "We coordinate them. Plumbing, well, and septic work is done by licensed trades, scheduled into our sequence so the rough-in happens before the pad is poured and before insulation goes up. We handle the framing, insulation, electrical, drywall, and finish ourselves.",
  },
  {
    q: "Can it be off-grid?",
    a: "It can. Off-grid cabins we've planned run on a solar array and battery with a propane range and on-demand water heater, a holding or cistern tank, and a mini split sized small. Tell us up front, because an off-grid build changes the panel, the insulation spec, and the appliance choices from day one.",
  },
  {
    q: "How long does a build-out take?",
    a: "After the shell is standing and the pad is cured, a simple one-room cabin is usually a few weeks. A full living-quarters build with a kitchen, a bath, and multiple rooms runs longer and depends on inspections, fixture lead times, and how much of the finish work you want to take on yourself.",
  },
  {
    q: "Can I finish part of it now and the rest later?",
    a: "That's the most common way it goes. We frame and wire the whole footprint, finish the part you need now — say a bunk room and a bath — and leave the rest open with the rough-in already in the walls. The second phase is then finish work instead of demolition.",
  },
  {
    q: "Can the build-out go on rent-to-own or financing?",
    a: "The building itself does. Site work and interior finishing are quoted and paid separately from the manufacturer's rent-to-own contract, so we'll show you both numbers and how they line up.",
  },
];

export default function BuildOutsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Cabin and home interior build-outs",
          description:
            "Interior build-outs for camping cabins, shouses, barndominiums, and living quarters inside steel buildings: framing, insulation, electrical, drywall, kitchens, baths, flooring, and trim.",
          path: PATH,
          serviceType: [
            "Interior build-out",
            "Cabin construction",
            "Finish carpentry",
            "Drywall installation",
            "Building insulation",
          ],
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />

      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Site work · No. 4
        </p>
        <h1 className="mt-4 text-[clamp(2.05rem,5.4vw,3.4rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          Camping cabin &amp; home interior build-outs
        </h1>
        <p className="measure mt-4 text-lg">
          A steel shell is the cheapest square footage you can buy. What turns it
          into a weekend cabin, a shouse, or a place somebody actually lives is
          everything that happens after the doors go on &mdash; walls, wiring,
          insulation, drywall, a bath, a kitchen, floors, and trim. That&apos;s
          the part we do.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#quote" className="btn">
            Start a build-out
          </a>
          <a href={site.phoneHref} className="btn btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </section>

      <div className="wrap pb-6">
        <Frame
          src="/images/as/carport-with-storage.jpg"
          width={1600}
          height={1200}
          alt="A steel building with an enclosed, finished room built onto one end"
          sizes="(min-width: 75rem) 68rem, 100vw"
          priority
          caption={`Photo courtesy of ${site.dealerOf}`}
        />
      </div>

      <Rule />

      <Section id="scope">
        <SectionHeading
          title="What a build-out includes"
          as="h2"
          kicker="Pick the whole list or the part you need. Most people start with a shell, a bath, and a place to sleep, then keep going."
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <FactList
            items={[
              "Interior framing: rooms, closets, lofts, and partitions",
              "Insulation with the vapor barrier on the warm side",
              "Electrical: panel, circuits, lighting, and devices",
              "Drywall hung, taped, finished, and painted",
              "Bath and kitchen finish, with plumbing by licensed trades",
            ]}
          />
          <FactList
            items={[
              "Flooring: LVP, sealed concrete, or laminate",
              "Interior doors, trim, and finish carpentry",
              "Mini split or unit heat sized to the space",
              "Stairs and railing to a sleeping loft",
              "Covered porch framing and a finished entry",
            ]}
          />
        </div>
      </Section>

      <Rule />

      <Section band id="cabins">
        <SectionHeading
          title="Camping cabins"
          no={1}
          as="h2"
          kicker="Small, tight, and cheap to run. Built for weekends on a hunting or river property — and for the folks renting them out by the night."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-10">
          <div>
            <p className="measure">
              The steel shell and a slab or pier base go in first, then we build
              the cabin inside it: one room or two, a sleeping loft if the eave
              height allows, a three-quarter bath, a kitchenette along one wall,
              and a mini split that heats and cools the whole thing on a single
              circuit. Insulated well, a cabin this size costs very little to
              hold at temperature between visits.
            </p>
            <p className="measure mt-3">
              For seasonal or off-grid use we plan around solar and battery,
              propane for cooking and hot water, and a cistern or holding tank.
              For a rental cabin we plan around durability &mdash; LVP floors,
              scrubbable paint, a bath that can be cleaned in ten minutes, and
              exterior lighting on a photocell.
            </p>
          </div>
          <Frame
            src="/images/as/partially-enclosed-carport.jpg"
            width={1600}
            height={1200}
            alt="A partially enclosed steel building with one end closed in, the shell a cabin build-out starts from"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
        <div className="mt-8">
          <SpecTable
            head={["Cabin size", "Sleeps", "Typical layout"]}
            rows={[
              [
                "12 × 24 ft",
                "2–3",
                "One room, three-quarter bath, kitchenette wall",
              ],
              [
                "16 × 30 ft",
                "4–5",
                "Bedroom, open living, full bath, small kitchen",
              ],
              [
                "20 × 36 ft",
                "6+",
                "Two bedrooms plus a loft, full kitchen and bath",
              ],
              [
                "24 × 40 ft",
                "6+",
                "Living quarters at one end, garage bay at the other",
              ],
            ]}
          />
          <p className="mt-3 text-sm text-ink-soft">
            Layouts are starting points. Bring a sketch on a napkin and
            we&apos;ll work from that.
          </p>
        </div>
      </Section>

      <Rule />

      <Section id="shouse">
        <SectionHeading
          title="Shouses, barndominiums & living quarters"
          no={2}
          as="h2"
          kicker="Shop on one end, house on the other, one roof over both. The most building for the money there is."
        />
        <div className="grid gap-8 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-10">
          <Frame
            src="/images/as/four-car-metal-garage.jpg"
            width={1599}
            height={1200}
            alt="A large steel building with multiple bays, suited to a shop-and-living-quarters layout"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
          <div>
            <p className="measure">
              The layout that works is a hard line between the two halves: a
              fire-rated, insulated wall between the shop bay and the living end,
              separate heating for each, and the living-end plumbing grouped on
              one wall so the slab only has to be sleeved in one place. Get the
              window and door openings framed into the shell order &mdash;
              cutting a window into a finished wall panel later is doable but
              nobody enjoys it.
            </p>
            <p className="measure mt-3">
              Living quarters are a permitted, inspected build in most counties
              around here: egress windows in bedrooms, alarms, insulation
              minimums, and a septic permit if you&apos;re not on sewer. We
              sequence the work around those inspections, and we&apos;ll tell you
              early what your county expects.
            </p>
          </div>
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="How a build-out goes" as="h2" />
        <Steps
          steps={[
            {
              title: "Layout & scope",
              body: "We walk the building or the plan, mark where rooms and plumbing land, and write one scope covering framing through trim.",
            },
            {
              title: "Rough-in",
              body: "Framing, electrical, and any plumbing rough go in together, inspected where required, then insulation closes the walls.",
            },
            {
              title: "Finish",
              body: "Drywall, paint, flooring, doors, trim, fixtures, and the heat. You get a finished room, not a punch list.",
            },
          ]}
        />
      </Section>

      <Rule />

      <Section>
        <SectionHeading
          title="Decide these early"
          as="h2"
          kicker="Five choices that are cheap on paper and expensive after the shell is up."
        />
        <FactList
          items={[
            <>
              <strong>Eave height.</strong> A loft needs headroom. Decide before
              the building is ordered, not after it&apos;s standing.
            </>,
            <>
              <strong>Window and door openings.</strong> Framed into the order,
              placed where the finished rooms want light.
            </>,
            <>
              <strong>Where the plumbing lands.</strong> It gets sleeved through
              the slab before the pour. See{" "}
              <Link
                className="link-action"
                href="/concrete-pads-piers-footings-sullivan-mo"
              >
                pads, piers &amp; footings
              </Link>
              .
            </>,
            <>
              <strong>How you&apos;ll heat it.</strong> That drives the
              insulation spec and the electrical panel size.
            </>,
            <>
              <strong>Occupancy.</strong> Seasonal cabin or permanent dwelling
              &mdash; it changes the code path and the permits.
            </>,
          ]}
        />
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Questions we get a lot" as="h2" />
        <FaqList items={faqs} />
      </Section>

      <Section>
        <SectionHeading title="Keep going" as="h2" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              href: "/insulation-drywall-electrical-metal-buildings",
              label: "Insulation, drywall & electrical",
            },
            {
              href: "/site-prep-groundwork-sullivan-mo",
              label: "All site prep & groundwork",
            },
            {
              href: "/metal-carports-garages-sullivan-mo",
              label: "Metal garages & workshops",
            },
            {
              href: "/financing-rent-to-own",
              label: "Financing & rent-to-own",
            },
          ].map((l) => (
            <li key={l.href} className="border-b border-rule py-2.5">
              <Link className="link-action" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        heading="Price a cabin or a build-out"
        body="Tell us the building size, how many people sleep in it, and whether it's seasonal or year-round. We'll scope the shell, the base, and the interior together."
      />
      <Rule />
    </>
  );
}
