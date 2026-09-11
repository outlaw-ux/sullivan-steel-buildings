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

const PATH = "/grading-excavation-retaining-walls-sullivan-mo";

export const metadata: Metadata = {
  title: "Grading, Excavation & Retaining Walls in Sullivan, MO",
  description:
    "Dirt work for metal buildings around Sullivan, MO: clearing, cut and fill, compacted building pads, drainage, driveways, and block, poured, or rock retaining walls on sloped and rocky Ozark lots.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Grading, Excavation & Retaining Walls in Sullivan, MO",
    description:
      "Level a hillside, hold the bank back, and move the water away before the building goes up.",
    url: PATH,
  },
};

const faqs = [
  {
    q: "My lot is on a hill. Can I still get a building on it?",
    a: "Almost always. The question is whether it's cheaper to cut into the hill, build the pad up on fill, or hold the high side back with a retaining wall. On a steep lot, a wall usually wins because it gets you a flat, usable pad without a long fill slope eating half the yard.",
  },
  {
    q: "Do I need engineering for a retaining wall?",
    a: "Rule of thumb: walls over about four feet of exposed height, walls holding up a driveway or another structure, and walls with a slope loading them from above need an engineer's design. Shorter landscape and pad walls generally don't. We'll tell you which side of that line your wall falls on before we quote it.",
  },
  {
    q: "How much does dirt work cost?",
    a: "It's priced per job because it depends on how much material moves, how far it goes, whether we hit rock, and whether anything has to be hauled off or brought in. A flat spot that needs cleaning up is a day. A hillside pad with a wall and a new drive is a week or more. We give you a firm number after we walk it.",
  },
  {
    q: "What happens when you hit rock?",
    a: "Around here you often do. Shallow rock is good news for bearing and bad news for digging — pier holes and trenches get slower, and sometimes we hammer or shoot for grade. We flag the risk when we walk the site and price the likely case rather than surprising you mid-job.",
  },
  {
    q: "Can you build the driveway too?",
    a: "Yes. Access is part of site prep: a delivery truck and trailer have to get in, turn around, and back up to the pad. We cut in drives, set culverts and tubes at the ditch line, and rock the approach so the first thing that happens isn't a truck sunk to the axle.",
  },
  {
    q: "How do you keep water away from the building?",
    a: "Grade first, pipe second. The finished pad sits a little high with the ground falling away from it — figure about six inches of drop over the first ten feet. Where uphill water is heavy we add a swale above the pad, a French drain, or a tie-in for the downspouts so roof water leaves instead of running back under the base rail.",
  },
  {
    q: "Do you do site work without a building?",
    a: "Yes. Pads for someone else's building, driveways, culverts, drainage fixes, lot clearing, and retaining walls are all jobs we take on their own.",
  },
];

export default function GradingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Excavation, grading, and retaining walls",
          description:
            "Clearing, cut and fill, compacted building pads, drainage, driveways, and retaining wall construction for metal building sites in east-central Missouri.",
          path: PATH,
          serviceType: [
            "Excavation",
            "Grading",
            "Land clearing",
            "Retaining wall construction",
            "Drainage installation",
            "Driveway construction",
          ],
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />

      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Site work · No. 2
        </p>
        <h1 className="mt-4 text-[clamp(2.05rem,5.4vw,3.4rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          Grading, excavation &amp; retaining walls
        </h1>
        <p className="measure mt-4 text-lg">
          Most of the ground around Sullivan slopes, and a fair bit of it has
          rock under a few inches of clay. We clear it, cut it, fill it, compact
          it, and hold the bank back where it needs holding &mdash; so the
          building sits flat and the water goes somewhere other than under it.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#quote" className="btn">
            Get your dirt work quoted
          </a>
          <a href={site.phoneHref} className="btn btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </section>

      <div className="wrap pb-6">
        <Frame
          src="/images/as/horizontal-carports-scaled.jpg"
          width={2560}
          height={1920}
          alt="A wide steel building sitting on a graded and compacted pad with equipment parked under it"
          sizes="(min-width: 75rem) 68rem, 100vw"
          priority
          caption={`Photo courtesy of ${site.dealerOf}`}
        />
      </div>

      <Rule />

      <Section id="grading">
        <SectionHeading
          title="Clearing, cut & fill"
          no={1}
          as="h2"
          kicker="Getting a flat, firm footprint is the whole job. Everything else on this page exists to protect it."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-10">
          <div>
            <p className="measure">
              We start by stripping topsoil and organics off the footprint,
              because anything that can rot will settle later. Then we cut the
              high side, move the material to the low side, and bring the pad up
              in <strong>lifts</strong> &mdash; six to eight inches at a time,
              compacted each pass &mdash; rather than dumping it all in and
              hoping. Fill that isn&apos;t compacted in lifts is a slab crack
              waiting three years to happen.
            </p>
            <p className="measure mt-3">
              The finished pad gets built a little larger than the building so
              there&apos;s a shoulder to work from, sits proud of the surrounding
              grade, and falls away on every side. Where the cut is deep or the
              neighbor&apos;s water comes across, a swale above the pad carries
              it around instead of into it.
            </p>
          </div>
          <FactList
            items={[
              "Brush, stumps, and topsoil off the footprint",
              "Cut and fill balanced on site where we can",
              "Fill placed in compacted lifts, not one dump",
              "Base rock in and compacted for the pad",
              "Haul-off or spoil pile, your call",
              "Utilities and septic located before we dig",
            ]}
          />
        </div>
      </Section>

      <Rule />

      <Section band id="retaining-walls">
        <SectionHeading
          title="Retaining walls"
          no={2}
          as="h2"
          kicker="The tool that turns a slope into a building site. Build it to hold the load and drain what's behind it, or it becomes a maintenance problem."
        />
        <div className="grid gap-8 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-10">
          <Frame
            src="/images/as/agricultural-barn.jpg"
            width={1024}
            height={768}
            alt="A steel ag building on a cut-and-filled pad at the base of a slope"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
          <div>
            <p className="measure">
              A wall does two jobs: it holds soil back, and it gets water out
              from behind itself. The second one is what fails. Every wall we
              build gets a compacted base below grade, free-draining rock behind
              the face, drain pipe daylighted downhill, and a batter or geogrid
              where the height calls for it.
            </p>
            <p className="measure mt-3">
              Walls over roughly four feet of exposed face, walls carrying a
              driveway or a building above them, and walls with a slope pressing
              on them get an engineer&apos;s design and, usually, a permit. We
              sort that out before quoting rather than after.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <SpecTable
            head={["Wall type", "Works best for", "Notes"]}
            rows={[
              [
                "Segmental block",
                "Pad and yard walls up to moderate height",
                "Fast, clean look, geogrid into the hill as it gets taller",
              ],
              [
                "Poured concrete",
                "Tall walls and walls carrying a load above",
                "Engineered footing, the strongest option",
              ],
              [
                "Boulder / rock wall",
                "Rural lots, long banks, rock already on site",
                "Handles rough grade, looks at home on Ozark ground",
              ],
              [
                "Rock-lined swale or riprap",
                "Moving water instead of holding soil",
                "Cheaper than a wall when drainage is the real problem",
              ],
            ]}
          />
        </div>
      </Section>

      <Rule />

      <Section id="drainage">
        <SectionHeading
          title="Drainage & water"
          as="h2"
          kicker="A 30 x 40 roof turns an inch of rain into roughly 750 gallons landing along two edges of your building. Plan where it goes."
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <FactList
            items={[
              "Pad set high with ground falling away on all sides",
              "Roughly 6 in of fall in the first 10 ft from the wall",
              "Swale above the pad to cut off uphill runoff",
              "French drain where the water is already in the ground",
              "Gutter and downspout tie-ins piped away from the slab",
              "Culverts and tubes where the drive crosses a ditch",
            ]}
          />
          <div>
            <p className="measure">
              Standing water is what kills a building site. It softens the ground
              under the base rail, it finds the seam where the slab meets the
              wall panel, and on a gravel floor it turns the low corner into mud
              every spring. Fixing it after the building is up costs several
              times what it costs to grade for it on the front end.
            </p>
            <p className="measure mt-3">
              If the spot you&apos;re looking at already holds water after a hard
              rain, take a photo of it while it&apos;s wet and send that with
              your quote request. It tells us more than a dry-day walk-through.
            </p>
          </div>
        </div>
      </Section>

      <Rule />

      <Section band id="access">
        <SectionHeading title="Driveways & delivery access" as="h2" />
        <p className="measure">
          The building arrives on a truck and trailer, and the install crew needs
          to get within a few feet of the pad. Low branches, a soft field, a
          culvert that won&apos;t take the weight, or a tight turn at the road
          will all stop a delivery. We cut in and rock the drive, set the tube at
          the ditch line, widen the turn, and make sure there&apos;s somewhere to
          stage material. If your spot is tight, tell us at quote time and
          we&apos;ll measure the approach.
        </p>
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
              href: "/concrete-pads-piers-footings-sullivan-mo",
              label: "Concrete pads, piers & footings",
            },
            {
              href: "/site-prep-groundwork-sullivan-mo",
              label: "All site prep & groundwork",
            },
            {
              href: "/steel-barns-franklin-washington-county-mo",
              label: "Barns & ag buildings",
            },
            {
              href: "/cabin-home-interior-build-outs-sullivan-mo",
              label: "Cabin & home interior build-outs",
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
        heading="Send us the slope"
        body="Photos from a few angles, which way the ground falls, and roughly how big the building is. We'll tell you whether it's a grading job, a wall job, or both."
      />
      <Rule />
    </>
  );
}
