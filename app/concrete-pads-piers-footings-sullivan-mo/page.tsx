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
} from "@/components/ui";
import { faqPageSchema, serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/concrete-pads-piers-footings-sullivan-mo";

export const metadata: Metadata = {
  title: "Concrete Pads, Piers & Footings in Sullivan, MO",
  description:
    "Concrete slabs, piers, and footings poured for carports, garages, barns, and cabins around Sullivan and Franklin County, MO. Slab thickness, turndown edges, anchor layout, and when piers beat a full pour.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Concrete Pads, Piers & Footings in Sullivan, MO",
    description:
      "Formed, poured, and finished slabs and piers sized to your building's anchor plan.",
    url: PATH,
  },
};

const faqs = [
  {
    q: "How thick should the slab be?",
    a: "Four inches handles cars, a workbench, and foot traffic. Go to five or six inches for loaded trailers, tractors, a dump truck, or a car lift, and we thicken it further under lift posts and heavy point loads. Tell us the heaviest thing that will ever sit on it.",
  },
  {
    q: "Do I pour the pad bigger than the building?",
    a: "Slightly. We size the slab to the building's base-rail dimensions, not the roof, because the rail is what gets anchored. A common add is a four-foot apron at the door so you aren't stepping off concrete into mud.",
  },
  {
    q: "How long does concrete need to cure before the building goes up?",
    a: "We like seven days before an install crew works on it, and we pour further ahead when the weather is cold. Concrete keeps gaining strength for a month, but a week gets it past the point where anchors and traffic can hurt it.",
  },
  {
    q: "When are piers a better idea than a slab?",
    a: "When you want a dirt or gravel floor, when the ground falls away and a slab would need a wall of fill under it, or when you only need support under the frame columns. Barns, loafing sheds, equipment covers, and cabins on a slope are the usual pier jobs.",
  },
  {
    q: "How deep do footings go?",
    a: "Below the frost line so the building doesn't heave. In this part of Missouri that's generally around 30 inches, and we confirm the number with your county before we drill. Piers also have to reach soil that will actually carry the load, which sometimes means going deeper than frost depth.",
  },
  {
    q: "Can I pour concrete inside the building later?",
    a: "Yes, and a lot of barn owners do. We set the building on piers or a gravel base now and pour the floor inside the frame when the budget comes back around. It costs a little more than pouring first because the truck can't get as close, so plan the chute access.",
  },
  {
    q: "Do you set the anchor bolts?",
    a: "We set anchor bolts to the drawings when the plan calls for cast-in anchors, and we drill wedge anchors after the fact when the building uses them. Either way we need the manufacturer's anchor layout before we form the slab.",
  },
];

export default function ConcretePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Concrete pads, piers, and footings",
          description:
            "Concrete slabs, drilled piers, and footings formed and poured for metal carports, garages, barns, and cabins in east-central Missouri.",
          path: PATH,
          serviceType: [
            "Concrete slab installation",
            "Concrete pier installation",
            "Footing installation",
            "Gravel pad installation",
          ],
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />

      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Site work · No. 1
        </p>
        <h1 className="mt-4 text-[clamp(2.05rem,5.4vw,3.4rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          Concrete pads, piers &amp; footings
        </h1>
        <p className="measure mt-4 text-lg">
          The pad is the part you only get one shot at. We form, pour, and finish
          slabs sized to your building&apos;s anchor plan, and we drill piers
          when a full pour is more concrete than the job needs. Poured and cured
          before your delivery week, not the morning of it.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#quote" className="btn">
            Get your pad quoted
          </a>
          <Link href="/site-prep-groundwork-sullivan-mo" className="btn btn-ghost">
            All site prep
          </Link>
        </div>
      </section>

      <Rule />

      <Section id="slabs">
        <SectionHeading
          title="Concrete pads & slabs"
          no={1}
          as="h2"
          kicker="A flat, square, anchored floor. It's what turns an enclosed garage into a building you can seal, heat, and finish."
        />
        <div className="grid gap-8 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-10">
          <Frame
            src="/images/as/install-metal-garage.jpg"
            width={1600}
            height={747}
            alt="A metal garage installed on a poured concrete pad"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
          <div>
            <p className="measure">
              A pad for a steel building isn&apos;t just a driveway with a
              building on it. It gets a <strong>turndown edge</strong> &mdash; a
              thickened perimeter the base rail bolts into &mdash; over a
              compacted base rock, with a vapor barrier under any floor that will
              be heated or finished. We reinforce with fiber, mesh, or rebar
              depending on what the building will carry, and we cut control
              joints so the slab cracks where we put the line instead of across
              the middle.
            </p>
            <p className="measure mt-3">
              Square and level matter more than they sound like they do. A steel
              frame is bolted, not framed on site, so a pad that&apos;s an inch
              out of square shows up as a door that won&apos;t seal. We string
              and check diagonals before the truck shows up, and the finished
              slab gets a broom finish for traction unless you want it smooth for
              a shop floor coating.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <SpecTable
            head={["Use", "Thickness", "Reinforcement", "Notes"]}
            rows={[
              [
                "Carport or shed floor",
                "4 in",
                "Fiber mesh",
                "Broom finish, saw-cut joints",
              ],
              [
                "One- or two-car garage",
                "4 in",
                "Fiber or wire mesh",
                "Turndown edge, vapor barrier",
              ],
              [
                "Shop with a lift",
                "6 in",
                "Rebar grid",
                "Thickened pads under lift posts",
              ],
              [
                "Equipment or trailer storage",
                "5–6 in",
                "Rebar grid",
                "Heavier base rock under the drive lane",
              ],
              [
                "Cabin or living quarters",
                "4 in",
                "Rebar or mesh",
                "Vapor barrier, insulated edge if heated",
              ],
              [
                "Apron at the door",
                "4 in",
                "Fiber mesh",
                "Sloped away from the building",
              ],
            ]}
          />
          <p className="mt-3 text-sm text-ink-soft">
            Final spec comes from your building&apos;s drawings and what your
            county requires. We confirm both before we form.
          </p>
        </div>
      </Section>

      <Rule />

      <Section band id="piers">
        <SectionHeading
          title="Piers & footings"
          no={2}
          as="h2"
          kicker="Concrete where the load actually is. The cheaper way to put a barn or a cabin on ground that isn't flat."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-10">
          <div>
            <p className="measure">
              We drill and pour piers under the frame columns and set the anchor
              hardware in the wet concrete. Every pier goes{" "}
              <strong>below the frost line</strong> &mdash; figure around 30
              inches in this part of Missouri, confirmed against your county
              &mdash; and down to soil that will carry the load. On rock we set
              shallower and pin into it; in soft old fill we go deeper or widen
              the base.
            </p>
            <p className="measure mt-3">
              Piers make sense when you want a dirt or gravel floor under a barn,
              when a slab would need three feet of engineered fill to sit on, or
              when you want to pour the floor inside the building later. They
              also keep a cabin&apos;s wood floor system up off the ground with
              air moving under it.
            </p>
            <ul className="mt-5 border-t border-rule font-display uppercase tracking-wide">
              {[
                "Drilled and poured below frost depth",
                "Anchor bolts set to the manufacturer's layout",
                "Sized to the column loads on the drawings",
                "Gravel or dirt floor stays an option",
              ].map((line) => (
                <li key={line} className="border-b border-rule py-2.5">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <Frame
            src="/images/as/horse-barn.jpg"
            width={2000}
            height={1232}
            alt="A raised-center-aisle steel barn set on piers with a dirt floor"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
      </Section>

      <Rule />

      <Section id="gravel">
        <SectionHeading
          title="Gravel pads: the third option"
          as="h2"
          kicker="Not everything needs concrete. For an open carport or an equipment cover, a properly built gravel pad is the right answer and a fraction of the cost."
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <FactList
            items={[
              "Topsoil and organics stripped out first",
              "Base rock in lifts, compacted, not just dumped",
              "Crowned or sloped so water leaves the footprint",
              "Edged so the rock stays put instead of spreading",
              "Anchors drive straight through into firm ground",
              "Can be poured over later if you change your mind",
            ]}
          />
          <div>
            <p className="measure">
              The mistake we get called to fix is a gravel pad that was one load
              of rock raked flat over grass. Organics rot, the pad dishes, water
              pools in the low spot, and eighteen months later the base rail is
              sitting in a puddle. A pad built right gets the soft stuff out,
              goes back in lifts, and gets compacted each pass.
            </p>
            <p className="measure mt-3">
              If you&apos;re deciding between gravel and concrete: gravel for
              open covers, equipment, hay, and anything with a dirt floor;
              concrete for anything you&apos;ll close in, heat, finish, or work
              in. See{" "}
              <Link className="link-action" href="/site-prep-groundwork-sullivan-mo#services">
                which base your building needs
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="What a pour needs from the site" as="h2" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Before we form
            </h3>
            <p className="measure mt-2">
              The footprint has to be graded, the soft ground taken out, and the
              base rock in and compacted. That&apos;s{" "}
              <Link
                className="link-action"
                href="/grading-excavation-retaining-walls-sullivan-mo"
              >
                excavation and grading
              </Link>{" "}
              work, and on a sloped lot it may mean a retaining wall goes in
              first. Utilities get located before anything is dug.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Sleeves and stub-ups
            </h3>
            <p className="measure mt-2">
              Anything that has to come up through the slab &mdash; electrical
              conduit, a drain, a plumbing rough-in for a cabin bath &mdash; goes
              in while the pad is still dirt. Tell us at quote time if the
              building will ever have power or water in it, and we sleeve for it.
              Cutting a finished slab later is loud, dusty, and avoidable.
            </p>
          </div>
        </div>
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="Questions we get a lot" as="h2" />
        <FaqList items={faqs} />
      </Section>

      <Section band>
        <SectionHeading title="Keep going" as="h2" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              href: "/grading-excavation-retaining-walls-sullivan-mo",
              label: "Grading, excavation & retaining walls",
            },
            {
              href: "/insulation-drywall-electrical-metal-buildings",
              label: "Insulation, drywall & electrical",
            },
            {
              href: "/metal-carports-garages-sullivan-mo",
              label: "Metal carports & garages",
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
        heading="Get your pad or piers priced"
        body="Send the building size, the anchor drawings if you have them, and a photo of the spot. We'll tell you what the base should be and what it costs."
      />
      <Rule />
    </>
  );
}
