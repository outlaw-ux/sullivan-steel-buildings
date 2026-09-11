import type { Metadata } from "next";
import Link from "next/link";
import {
  BuilderLink,
  CtaBand,
  FactList,
  FaqList,
  Frame,
  Rule,
  Section,
  SectionHeading,
  SpecTable,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Metal Carports & Garages in Sullivan, MO",
  description:
    "Regular, boxed-eave, and vertical-roof metal carports plus fully enclosed 1 to 4 car garages, delivered and installed around Sullivan and Franklin County, MO. Sizes, gauge options, and starting prices.",
  alternates: { canonical: "/metal-carports-garages-sullivan-mo" },
};

export default function CarportsGaragesPage() {
  return (
    <>
      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Buildings · No. 1
        </p>
        <h1 className="mt-4 text-[clamp(2.05rem,5.4vw,3.4rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          Metal carports &amp; garages in Sullivan, MO
        </h1>
        <p className="measure mt-4 text-lg">
          From a single-car cover to a heated shop, we build the American Steel
          line for homeowners and businesses around Sullivan, Bourbon, St. Clair,
          and the rest of Franklin and Washington County. Here is how the sizes,
          roof styles, and prices work.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#quote" className="btn">
            Request a quote
          </a>
          <BuilderLink />
          <a href={site.phoneHref} className="btn btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </section>

      <Rule />

      <Section>
        <SectionHeading
          title="Carports"
          no={1}
          as="h2"
          kicker="An open or partly closed cover on steel posts. The fastest, cheapest way to get a vehicle out of the sun, hail, and snow."
        />
        <div className="grid gap-8 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-10">
          <Frame
            src="/images/as/vertical-carports-scaled.jpg"
            width={2560}
            height={1920}
            alt="A vertical-roof metal carport covering a pickup truck in a residential driveway"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
          <div>
            <p className="measure">
              Three roof styles: a <strong>regular roof</strong> with rounded
              corners is the budget pick for mild weather; a{" "}
              <strong>boxed-eave (A-frame) roof</strong> looks like a house roof
              and sheds water off the sides; a <strong>vertical roof</strong>{" "}
              runs the panels top to bottom so snow and rain slide off the ends,
              and it is the one we recommend for anything 26 ft long or longer.
            </p>
            <p className="measure mt-3">
              Standard widths are 12, 18, 20, 22, and 24 ft. Length goes up in
              5 ft steps. Legs run from 5 ft up to 12 ft &mdash; go tall if a
              lifted truck, a tractor, or a future enclosure is in the picture.
              Add a closed-in end, a gable, or side sheeting a panel at a time.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <SpecTable
            head={["Style", "Roof", "Good for", "Starts at"]}
            rows={[
              ["Economy carport", "Regular", "One car, calm weather", "$1,195"],
              [
                "Standard carport",
                "Boxed-eave",
                "Car or half-ton truck",
                "$1,595",
              ],
              [
                "Vertical-roof carport",
                "Vertical",
                "Long spans, snow, RV height",
                "$1,895",
              ],
              [
                "Two-car / RV carport",
                "Vertical",
                "Two vehicles or a motorhome",
                "$2,600",
              ],
            ]}
          />
          <p className="mt-3 text-sm text-ink-soft">
            Starting prices for delivery and install on level ground in our area.
            Your number depends on size, gauge, and site. If the ground
            isn&apos;t level yet,{" "}
            <Link className="link-action" href="/site-prep-groundwork-sullivan-mo">
              we do that part too
            </Link>
            .
          </p>
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading
          title="Metal garages"
          no={2}
          as="h2"
          kicker="A fully enclosed, lockable building. Same steel frame as the carports, closed in on all four sides with the doors and windows you choose."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-10">
          <div>
            <p className="measure">
              One to four cars, plus shop and storage builds. Roll-up doors come
              in 8&times;8, 9&times;8, and 10&times;10; a 36 in walk door and
              30&times;30 windows are common add-ons. Close attention to the eave
              height here &mdash; 9 ft is comfortable for a standard garage door,
              12 ft or more if you want a lift or an RV door.
            </p>
            <p className="measure mt-3">
              Sizes run from a tidy 18&times;21 up to 30&times;50 and beyond with
              interior trusses. For a workshop, insulation and wainscot are worth
              the upcharge: they cut condensation and make the building easier to
              heat.
            </p>
            <ul className="mt-5 border-t border-rule font-display uppercase tracking-wide">
              {[
                "18 x 21 — one car plus a workbench",
                "24 x 26 — two cars with room to walk around",
                "24 x 36 — shop with a lift bay",
                "30 x 40 — equipment, trailers, and a shop",
              ].map((line) => (
                <li key={line} className="border-b border-rule py-2.5">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <Frame
            src="/images/as/two-car-metal-garage.jpg"
            width={1600}
            height={1200}
            alt="A two-car enclosed metal garage with two roll-up doors and a walk door"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="Gauge, roof style, and anchors" as="h2" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Frame gauge
            </h3>
            <p className="measure mt-2">
              <strong>14-gauge</strong> 2.5 in tubing is the standard frame and
              is plenty for most carports. <strong>12-gauge</strong> 2.25 in
              tubing is thicker steel; it is required for the certified
              wind-and-snow package and carries American Steel&apos;s 20-year
              rust-through warranty. For an enclosed garage or anything you are
              financing over years, 12-gauge is the safer buy.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Anchors
            </h3>
            <p className="measure mt-2">
              Every building is anchored to the ground. On dirt we use rebar or
              mobile-home anchors; on a concrete slab, wedge anchors; on asphalt,
              long asphalt anchors. Tell us the surface when you request a quote
              so the right hardware is on the truck &mdash; and if we&apos;re
              pouring the{" "}
              <Link
                className="link-action"
                href="/concrete-pads-piers-footings-sullivan-mo"
              >
                pad
              </Link>{" "}
              for you, the anchor layout goes in before the concrete does.
            </p>
          </div>
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading
          title="What size do I need?"
          as="h2"
          kicker="A starting point. Send your measurements and we'll check clearances with you."
        />
        <SpecTable
          head={["What you're parking", "Recommended size (W × L × H)"]}
          rows={[
            ["Car or small SUV", "12 × 21 × 6 ft"],
            ["Full-size or lifted pickup", "12 × 26 × 9 ft"],
            ["Two vehicles, open", "18–20 × 21 × 7 ft"],
            ["Two cars, enclosed garage", "24 × 26 × 9 ft"],
            ["Truck plus a work area", "20 × 26 × 8 ft"],
            ["Shop with a car lift", "24 × 30 × 12 ft"],
          ]}
        />
      </Section>

      <Rule />

      <Section>
        <SectionHeading
          title="Ground under it, finish inside it"
          as="h2"
          kicker="The building is half the job on most properties around here. We do the other half."
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="measure">
              If the spot slopes, holds water, or has never been cleared, our
              crew grades it, builds a retaining wall where the cut needs one,
              and pours the pad or drills the piers before delivery week. Then,
              once the garage is standing, we come back to fur and insulate the
              walls, run the wiring and lights, and hang drywall so the shop is
              usable in January.
            </p>
          </div>
          <ul className="border-t border-rule">
            {[
              {
                href: "/site-prep-groundwork-sullivan-mo",
                label: "Site prep & groundwork",
              },
              {
                href: "/concrete-pads-piers-footings-sullivan-mo",
                label: "Concrete pads, piers & footings",
              },
              {
                href: "/grading-excavation-retaining-walls-sullivan-mo",
                label: "Grading, excavation & retaining walls",
              },
              {
                href: "/insulation-drywall-electrical-metal-buildings",
                label: "Insulation, drywall & electrical",
              },
            ].map((l) => (
              <li key={l.href} className="border-b border-rule py-2.5">
                <Link className="link-action" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="Serving Sullivan and nearby" as="h2" />
        <p className="measure">
          We deliver and install throughout {site.address.city}, Bourbon, Cuba,
          St. Clair, Stanton, Gray Summit, and around Woodland Lakes, plus the
          wider stretch of Franklin, Washington, and Crawford County. Woodland
          Lakes has its own building approval step; we can hand you the drawings
          you need for it.
        </p>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Questions we get a lot" as="h2" />
        <FaqList
          items={[
            {
              q: "Do I need a concrete slab first?",
              a: (
                <p>
                  Not for a carport. Level ground or a gravel pad is fine, and we
                  anchor into it. For a fully enclosed garage a slab is
                  recommended so the base rail seals to a flat surface and you
                  get a finished floor. We pour it &mdash; see{" "}
                  <Link
                    className="link-action"
                    href="/concrete-pads-piers-footings-sullivan-mo"
                  >
                    pads, piers &amp; footings
                  </Link>{" "}
                  for thickness and timing.
                </p>
              ),
            },
            {
              q: "How long from order to install?",
              a: (
                <p>
                  In our area it is usually two to six weeks, depending on the
                  plant&apos;s schedule and the size of the building. We give you
                  a delivery window when you order.
                </p>
              ),
            },
            {
              q: "Are the buildings rated for wind and snow?",
              a: (
                <p>
                  With the 12-gauge certified package, buildings are engineered
                  up to roughly 140 mph wind and 35 psf snow load, and you get
                  stamped drawings. Ask us what your county requires before you
                  order.
                </p>
              ),
            },
            {
              q: "Do you handle the permit?",
              a: (
                <p>
                  We provide the drawings. Filing with the county is usually the
                  property owner&apos;s step, but we will point you to the right
                  office and paperwork.
                </p>
              ),
            },
            {
              q: "Can I get rent-to-own on a garage?",
              a: (
                <p>
                  Yes. Carports, garages, and barns all qualify. See{" "}
                  <Link className="link-action" href="/financing-rent-to-own">
                    financing and rent-to-own
                  </Link>{" "}
                  for how it works.
                </p>
              ),
            },
          ]}
        />
      </Section>

      <CtaBand
        heading="Get your carport or garage priced"
        body="Send the size and the spot, or call and we'll size it with you. Firm quote, delivery week, and payment options come back together."
      />
      <Rule />
    </>
  );
}
