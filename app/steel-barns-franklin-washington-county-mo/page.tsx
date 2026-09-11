import type { Metadata } from "next";
import Link from "next/link";
import {
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
  title: "Steel Barns & Ag Buildings in Franklin & Washington County, MO",
  description:
    "Raised-center-aisle barns, loafing sheds, hay and equipment storage, and horse barns delivered across Franklin and Washington County, Missouri. Styles, sizes, options, and starting prices.",
  alternates: {
    canonical: "/steel-barns-franklin-washington-county-mo",
  },
};

export default function BarnsPage() {
  return (
    <>
      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Buildings · No. 3
        </p>
        <h1 className="mt-4 text-[clamp(2.0rem,5.2vw,3.3rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          Steel barns &amp; ag buildings for Franklin &amp; Washington County
        </h1>
        <p className="measure mt-4 text-lg">
          Hay under a dry roof, equipment out of the weather, stalls that
          don&apos;t rot. We build the American Steel barn line for farms and
          acreage around Sullivan, and set it on ground you&apos;ve prepared.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#quote" className="btn">
            Request a quote
          </a>
          <a href={site.phoneHref} className="btn btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </section>

      <Rule />

      <Section>
        <SectionHeading
          title="Barn styles"
          as="h2"
          kicker="Most builds start from one of these and get adjusted for your use, your equipment, and your snow load."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-10">
          <div className="grid gap-6">
            {[
              {
                h: "Raised-center-aisle (RCA) barn",
                p: "The classic profile: a tall center section with a lower lean-to down each side. Store hay and equipment in the middle, run stalls or a workshop in the lean-tos. Vertical roof on the center sheds snow between the sections.",
              },
              {
                h: "Vertical-roof barn",
                p: "A single-slope or gabled barn with vertical panels top to bottom. Simple, strong, and the best value for straight equipment and hay storage.",
              },
              {
                h: "Loafing shed / run-in",
                p: "Open on one long side, closed on the other three. Pasture shelter for cattle and horses. Common in 12 x 21 and 12 x 24, often with a tack or feed room boxed into one end.",
              },
              {
                h: "Horse barn with stalls",
                p: "Enclosed barn with framed openings for stall fronts, a center aisle, and a tack room. Add sliding doors on the gable ends and Dutch doors on the stalls.",
              },
            ].map((b) => (
              <div key={b.h} className="border-t-2 border-ink pt-3">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
                  {b.h}
                </h3>
                <p className="measure mt-1">{b.p}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6">
            <Frame
              src="/images/as/horse-barn.jpg"
              width={2000}
              height={1232}
              alt="A raised-center-aisle steel barn with lean-to sheds on both sides"
              sizes="(min-width: 768px) 24rem, 100vw"
              caption={`Photo courtesy of ${site.dealerOf}`}
            />
            <Frame
              src="/images/as/agricultural-barn.jpg"
              width={1024}
              height={768}
              alt="A large enclosed steel agricultural barn used for equipment storage"
              sizes="(min-width: 768px) 24rem, 100vw"
              caption={`Photo courtesy of ${site.dealerOf}`}
            />
          </div>
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Common sizes and uses" as="h2" />
        <SpecTable
          head={["Building", "Typical size", "Used for"]}
          rows={[
            ["Loafing shed", "12 × 24 × 8 ft, open front", "Pasture shelter"],
            [
              "RCA barn",
              "36 ft wide (12 center + 12 lean-tos) × 21 ft",
              "Hay, stalls, and equipment under one roof",
            ],
            ["Equipment barn", "30 × 40 × 12 ft", "Tractors and implements"],
            ["Hay storage", "24 × 30 × 12 ft", "Round bales, kept dry"],
            [
              "Horse barn",
              "30 × 30 ft with 4 stalls",
              "Horses, tack room, center aisle",
            ],
          ]}
        />
        <p className="mt-3 text-sm text-ink-soft">
          Barn builds in our area typically start around $6,400 and move with
          width, height, doors, and how much you close in.
        </p>
      </Section>

      <Rule />

      <Section>
        <SectionHeading
          title="Steel over a pole barn"
          as="h2"
          kicker="A pole barn is cheaper to frame and slower to regret. Here's what the steel frame buys you."
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <FactList
            items={[
              "Posts won't rot at the ground line",
              "Nothing for termites or carpenter bees to eat",
              "Non-combustible frame and skin",
              "Bolts to piers or a slab, and takes a wind package",
              "Goes up in days once we have the site ready",
              "20-year rust warranty on 12-gauge steel",
            ]}
          />
          <Frame
            src="/images/as/metal-barn.jpg"
            width={1030}
            height={579}
            alt="A steel barn with a vertical roof and wainscot trim in a rural field"
            sizes="(min-width: 768px) 40vw, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Options worth knowing about" as="h2" />
        <div className="grid gap-8 md:grid-cols-2">
          <FactList
            items={[
              "Lean-to on one or both sides for shade and storage",
              "Wainscot: a contrasting color band around the bottom 3 ft",
              "Closed gables and framed openings for sliders",
              "Roll-up doors, slider doors, and 36 in walk doors",
            ]}
          />
          <FactList
            items={[
              "Ridge cap and gable vents for airflow",
              "13 roof and wall colors to match the house",
              "Extra bracing and 12-gauge for high snow or wind",
              "Wall and roof insulation to cut condensation",
            ]}
          />
        </div>
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="Site prep" as="h2" />
        <p className="measure">
          We can get the pad ready or you can &mdash; either way works. Ground
          needs to be level within a few inches across the footprint, and a
          compacted gravel pad makes a solid dirt floor while keeping water
          moving. If your spot slopes, holds water, or has never been cleared,
          that&apos;s our crew&apos;s work: clearing, cut and fill, retaining
          walls, and drainage before the barn ever shows up.
        </p>
        <p className="measure mt-3">
          Concrete piers or a slab are optional on a hay or equipment barn and
          are the way to go for a horse barn or a finished shop. We drill and
          pour the piers below the frost line and set the anchors to the
          drawings. See{" "}
          <Link
            className="link-action"
            href="/concrete-pads-piers-footings-sullivan-mo"
          >
            pads, piers &amp; footings
          </Link>{" "}
          and{" "}
          <Link
            className="link-action"
            href="/grading-excavation-retaining-walls-sullivan-mo"
          >
            grading &amp; retaining walls
          </Link>
          . Not sure your spot will work? Send photos with your quote request and
          we&apos;ll tell you.
        </p>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Questions we get a lot" as="h2" />
        <FaqList
          items={[
            {
              q: "Can the barn sit on a dirt floor?",
              a: (
                <p>
                  Yes. Most equipment and hay barns run on a gravel or dirt
                  floor, and we build the compacted gravel pad under it. We
                  anchor the base rail to the ground, and we can come back and
                  pour concrete inside the frame later if you want it.
                </p>
              ),
            },
            {
              q: "Can I add lean-tos later?",
              a: (
                <p>
                  Often, if the main frame was built with it in mind. Tell us up
                  front if a lean-to is a maybe, and we&apos;ll spec the barn so
                  it can take one.
                </p>
              ),
            },
            {
              q: "How tall for a tractor with a cab?",
              a: (
                <p>
                  Plan on a 12 to 14 ft eave for cab tractors, duals, and a
                  raised loader. Measure your tallest machine at its highest
                  point and add two feet.
                </p>
              ),
            },
            {
              q: "Do you deliver to my county?",
              a: (
                <p>
                  We cover Franklin, Washington, and Crawford County and the
                  surrounding area. If you&apos;re near the edge of that, call
                  and we&apos;ll check the delivery range.
                </p>
              ),
            },
            {
              q: "Is financing available on a barn?",
              a: (
                <p>
                  Yes, both rent-to-own and bank financing. See{" "}
                  <Link className="link-action" href="/financing-rent-to-own">
                    financing and rent-to-own
                  </Link>
                  .
                </p>
              ),
            },
          ]}
        />
      </Section>

      <CtaBand
        heading="Get your barn priced"
        body="Give us the width, the length, the eave height, and what's going inside. We'll come back with a firm quote and payment options."
      />
      <Rule />
    </>
  );
}
