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
import { siteWork, sitePrepSteps } from "@/lib/services";
import { faqPageSchema, serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/site-prep-groundwork-sullivan-mo";

export const metadata: Metadata = {
  title: "Site Prep & Groundwork in Sullivan, MO",
  description:
    "Excavation, grading, retaining walls, concrete pads, and piers for metal buildings around Sullivan, Franklin County, and Washington County, MO. We prep the site, set the building, and finish the inside.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Site Prep & Groundwork for Metal Buildings in Sullivan, MO",
    description:
      "Dirt work, drainage, retaining walls, pads, and piers — plus insulation, wiring, and interior build-outs after the building is up.",
    url: PATH,
  },
};

const faqs = [
  {
    q: "Do I have to hire a separate excavator and concrete crew?",
    a: "No. That's the reason this page exists. We do the dirt work, the retaining walls, the piers, and the pad ourselves, then set the building on it. One scope, one schedule, and nobody blaming the other guy when the pad is out of square.",
  },
  {
    q: "Can you do the site work if I bought the building somewhere else?",
    a: "Yes. Send us the manufacturer's drawings with the footprint, anchor layout, and leg height, and we'll build the pad or piers to match it. We also do site work on its own for shops, cabins, and driveways with no building involved.",
  },
  {
    q: "How level does the ground actually have to be?",
    a: "For an open carport, level within about three inches across the footprint is workable. For an enclosed garage or barn the base rail has to seal to a flat surface, so we grade it flat or pour a slab. Anything more than a few inches of fall across the pad is a grading job, not a shim job.",
  },
  {
    q: "How far ahead of the delivery do you need to be on site?",
    a: "Dirt work and gravel usually run one to three days depending on how much has to move. Concrete needs to cure before a crew walks a building onto it, so we pour at least a week ahead of delivery week and usually more.",
  },
  {
    q: "What about rain and wet ground?",
    a: "Dirt work is weather work. We schedule with a rain buffer and won't compact a base or pour on saturated ground, because a pad built in the mud settles later. If the weather pushes the pad, we push the delivery with it.",
  },
  {
    q: "Do you handle permits for the site work?",
    a: "We provide the building drawings and we'll tell you what your county asks for on a pad, a wall, or an electrical rough-in. Filing is usually the property owner's step, and we'll point you at the right office.",
  },
];

export default function SitePrepPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Site prep and groundwork for metal buildings",
          description:
            "Excavation, grading, retaining walls, concrete pads, piers, and footings to prepare a site for a metal building, plus interior finishing after install.",
          path: PATH,
          serviceType: [
            "Site preparation",
            "Excavation",
            "Grading",
            "Retaining wall construction",
            "Concrete pad installation",
            "Pier and footing installation",
          ],
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />

      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Site work &amp; finishing
        </p>
        <h1 className="mt-4 text-[clamp(2.05rem,5.4vw,3.4rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          Site prep &amp; groundwork in Sullivan, MO
        </h1>
        <p className="measure mt-4 text-lg">
          A steel building is only as straight as the ground under it. We move
          the dirt, hold the bank back, pour the pad or drill the piers, set the
          building, and then finish the inside &mdash; insulation, wiring,
          drywall, and the whole build-out. One crew, one number, no waiting on
          somebody else&apos;s schedule.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#quote" className="btn">
            Get your site quoted
          </a>
          <a href={site.phoneHref} className="btn btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </section>

      <div className="wrap pb-6">
        <Frame
          src="/images/as/install-metal-garage.jpg"
          width={1600}
          height={747}
          alt="A two-car metal garage set on a finished concrete pad with a graded approach"
          sizes="(min-width: 75rem) 68rem, 100vw"
          priority
          caption={`A pad poured and squared before delivery week. Photo courtesy of ${site.dealerOf}`}
        />
      </div>

      <Rule />

      <Section id="services">
        <SectionHeading
          title="What we do before the building lands"
          as="h2"
          kicker="Priced per job after we walk the site. Bring us a bare hillside or a spot that's already flat — either way this is the list."
        />
        <div>
          {siteWork.map((item) => (
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
                    <Link href={item.href} className="link-action">
                      How it works
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
        <SectionHeading title="How a site job goes" as="h2" />
        <Steps steps={sitePrepSteps} />
      </Section>

      <Rule />

      <Section>
        <SectionHeading
          title="What makes a site hard"
          as="h2"
          kicker="Six things decide what your dirt work costs. Send photos and we can usually spot most of them before we drive out."
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <FactList
            items={[
              <>
                <strong>Slope.</strong> Every foot of fall across the footprint
                is dirt that has to be cut, moved, or held back with a wall.
              </>,
              <>
                <strong>Water.</strong> Where it comes from uphill and where it
                goes once your roof adds a few thousand square feet of runoff.
              </>,
              <>
                <strong>Rock.</strong> Common on Ozark ground. Shallow rock can
                save you on fill and cost you on pier holes.
              </>,
            ]}
          />
          <FactList
            items={[
              <>
                <strong>Access.</strong> A delivery truck and trailer need room
                to get in, turn, and back up to the pad.
              </>,
              <>
                <strong>Soft ground.</strong> Old fill, topsoil, and clay have to
                come out and be replaced with compacted base rock.
              </>,
              <>
                <strong>Utilities.</strong> Lines, laterals, wells, and septic
                fields get located before a bucket goes in the ground.
              </>,
            ]}
          />
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading
          title="Which base does your building need?"
          as="h2"
          kicker="A starting point. We confirm it against your building's drawings and what your county requires."
        />
        <SpecTable
          head={["Building", "Usual base", "Why"]}
          rows={[
            [
              "Open carport",
              "Graded, compacted gravel pad",
              "Anchors drive straight into the ground; no floor needed",
            ],
            [
              "RV or equipment cover",
              "Gravel pad, or slab under the parking lane",
              "Tall frames need a flat, firm footing and good drainage",
            ],
            [
              "Enclosed garage or shop",
              "4 in concrete slab with a turndown edge",
              "The base rail seals to flat concrete and you get a floor",
            ],
            [
              "Barn or ag building",
              "Gravel pad on piers, or a partial slab",
              "Dirt floor in the bays, concrete where you work",
            ],
            [
              "Cabin or living quarters",
              "Slab or piers below the frost line",
              "Heated, finished space can't ride on shifting ground",
            ],
            [
              "Shop with a lift",
              "6 in slab, thickened under the posts",
              "Lift anchors need depth and strength the plan specifies",
            ],
          ]}
        />
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="After the building is standing" as="h2" />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-10">
          <div>
            <p className="measure">
              A bare steel shell is a good garage and a cold, damp workshop. The
              same crew comes back to fur the walls, insulate, run the wiring,
              hang and finish drywall, and build out whatever the building is
              actually for &mdash; a shop, an office corner, a bunk room, or a
              full camping cabin with a kitchen and a bath.
            </p>
            <p className="measure mt-3">
              Doing it in one run means the insulation gets behind the wiring
              instead of around it, and the anchors and conduit sleeves go in
              while the pad is still being formed. Read more on{" "}
              <Link
                className="link-action"
                href="/insulation-drywall-electrical-metal-buildings"
              >
                insulation, drywall &amp; electrical
              </Link>{" "}
              and{" "}
              <Link
                className="link-action"
                href="/cabin-home-interior-build-outs-sullivan-mo"
              >
                cabin &amp; home interior build-outs
              </Link>
              .
            </p>
          </div>
          <Frame
            src="/images/as/insulated-metal-garage.jpg"
            width={1024}
            height={768}
            alt="An insulated metal garage interior with finished walls and lighting"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Where we do site work" as="h2" />
        <p className="measure">
          {site.address.city}, Bourbon, Cuba, St. Clair, Stanton, Gray Summit,
          Woodland Lakes, and the rest of Franklin, Washington, and Crawford
          County. Hillside lots off Highway 185 and the lake properties around
          Woodland Lakes are most of what we grade, so slope and rock are
          familiar ground. Near the edge of that range? Call and we&apos;ll check
          the drive.
        </p>
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="Questions we get a lot" as="h2" />
        <FaqList items={faqs} />
      </Section>

      <CtaBand
        heading="Get the dirt work and the building in one quote"
        body="Send photos of the spot, a rough size, and which way the ground falls. We'll come back with a scope for the site work and the building together."
      />
      <Rule />
    </>
  );
}
