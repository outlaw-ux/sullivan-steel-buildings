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

const PATH = "/insulation-drywall-electrical-metal-buildings";

export const metadata: Metadata = {
  title: "Insulation, Drywall & Electrical for Metal Buildings",
  description:
    "Finish the inside of your steel building: spray foam or batt insulation, furred and framed walls, wiring, lighting, 240-volt circuits, and taped and finished drywall. Serving Sullivan and Franklin County, MO.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Insulation, Drywall & Electrical for Metal Buildings",
    description:
      "Turn a bare steel shell into a dry, lit, heated shop or finished room.",
    url: PATH,
  },
};

const faqs = [
  {
    q: "Why does my metal building sweat?",
    a: "Because a steel panel is cold and warm, humid air condenses on it. On a dew-point morning an uninsulated roof can rain on everything under it. The fix is insulation with a vapor barrier that keeps humid inside air from ever touching the cold panel — either closed-cell foam sprayed straight to the steel, or faced insulation installed with the barrier facing the warm side.",
  },
  {
    q: "Spray foam or batt insulation?",
    a: "Closed-cell spray foam sticks to the panel, air-seals every seam, adds stiffness, and is the strongest answer to condensation — it costs the most. Batt or blanket insulation in a furred wall cavity costs less and works well when the vapor barrier is installed right and the building is reasonably tight. Most shops we finish end up with foam on the roof deck and batt in the walls.",
  },
  {
    q: "Can you hang drywall directly on steel?",
    a: "Not on the panel itself. We fur the walls out — steel hat channel or wood framing bolted or screwed to the frame — which gives you a cavity for insulation and wiring and a flat plane to hang board on. That framing is also what your cabinets, shelves, and TV brackets will hang from later.",
  },
  {
    q: "Do you handle the electrical permit and inspection?",
    a: "We'll tell you what your county requires for a detached shop, a subpanel, or a building with living space in it, and we schedule the work around the inspection. Filing is usually the property owner's step and we'll point you at the right office. Anything requiring a licensed electrician is done by one.",
  },
  {
    q: "What circuits should I plan for in a shop?",
    a: "More than you think. Plan on plenty of 120-volt receptacles around the perimeter so nothing runs on an extension cord, a 240-volt circuit for a welder, another for an air compressor or a lift, a dedicated circuit for the mini split, exterior lights and outlets, and a spare or two in the panel for whatever you buy next year. Wiring it in while the walls are open is cheap; adding it later is not.",
  },
  {
    q: "Can I heat and cool a metal building?",
    a: "Yes, and once it's insulated it's easy. A ductless mini split is the common answer for a shop or a cabin — it heats, cools, and pulls humidity out. Unit heaters and radiant tube heaters are the other shop options. None of them work well in an uninsulated shell, so insulate first.",
  },
  {
    q: "Can you finish a building I already have?",
    a: "Yes. We do interior finishing on buildings we sold and buildings we didn't, as long as the shell is sound. We'll come look at the frame, the panel condition, and how the base rail meets the slab before quoting it.",
  },
];

export default function FinishingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Metal building insulation, drywall, and electrical",
          description:
            "Interior finishing for steel buildings: furring and framing, spray foam or batt insulation, electrical rough-in and finish, lighting, and taped and finished drywall.",
          path: PATH,
          serviceType: [
            "Building insulation",
            "Drywall installation",
            "Electrical installation",
            "Interior finishing",
          ],
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />

      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Site work · No. 3
        </p>
        <h1 className="mt-4 text-[clamp(2.05rem,5.4vw,3.4rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          Insulation, drywall &amp; electrical
        </h1>
        <p className="measure mt-4 text-lg">
          A bare steel shell is a fine place to park a tractor and a miserable
          place to work in February. We fur the walls, insulate them, run the
          wiring and the lights, and hang and finish drywall &mdash; so the
          building stops sweating and starts being a room.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#quote" className="btn">
            Get your interior quoted
          </a>
          <a href={site.phoneHref} className="btn btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </section>

      <div className="wrap pb-6">
        <Frame
          src="/images/as/insulated-metal-garage.jpg"
          width={1024}
          height={768}
          alt="An insulated metal garage with finished interior walls and overhead lighting"
          sizes="(min-width: 75rem) 68rem, 100vw"
          priority
          caption={`Photo courtesy of ${site.dealerOf}`}
        />
      </div>

      <Rule />

      <Section id="insulation">
        <SectionHeading
          title="Insulation & condensation"
          no={1}
          as="h2"
          kicker="The first job isn't warmth, it's dew point. Steel panels condense, and water dripping off the roof onto your tools is the complaint we hear most."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-10">
          <div>
            <p className="measure">
              Warm, humid air inside meets a cold steel panel and gives up its
              moisture on the underside of your roof. Insulation solves it only
              if the <strong>vapor barrier</strong> is on the warm side and the
              assembly is sealed, which is why we treat air sealing and
              insulation as one job rather than two.
            </p>
            <p className="measure mt-3">
              Closed-cell spray foam applied straight to the panel is the
              belt-and-suspenders answer: it air-seals, insulates, and stops
              condensation at the surface where it would form. Faced batt in a
              furred cavity costs less and works when it&apos;s installed
              carefully. Reflective double-bubble is the budget option and is
              better than nothing under a carport roof, but it is not what
              we&apos;d put in a heated shop.
            </p>
          </div>
          <Frame
            src="/images/as/clearspan-tab.png"
            width={720}
            height={488}
            alt="A wide clear-span steel workshop interior with no center posts"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
        <div className="mt-8">
          <SpecTable
            head={["Option", "Typical R-value", "Good for", "Watch out for"]}
            rows={[
              [
                "Closed-cell spray foam",
                "R-6 to R-7 per inch",
                "Heated shops, cabins, anything finished",
                "Highest cost; has to be sprayed before furring",
              ],
              [
                "Faced batt in a furred wall",
                "R-11 to R-19 wall",
                "Walls behind drywall",
                "Vapor barrier must face the warm side",
              ],
              [
                "Blown or batt at the ceiling",
                "R-30 to R-49",
                "Finished ceilings under a vented roof",
                "Needs airflow above the insulation",
              ],
              [
                "Reflective double bubble",
                "About R-3 to R-4",
                "Unheated storage, carport roofs",
                "Not enough on its own for a heated space",
              ],
            ]}
          />
          <p className="mt-3 text-sm text-ink-soft">
            R-values are manufacturer typicals for planning. We spec the actual
            assembly to your building and how you intend to heat it.
          </p>
        </div>
      </Section>

      <Rule />

      <Section band id="framing-drywall">
        <SectionHeading
          title="Furring, framing & drywall"
          no={2}
          as="h2"
          kicker="Drywall doesn't go on a metal panel. It goes on the framing we build inside it — which is also what everything you hang on the wall will hold onto."
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <FactList
            items={[
              "Wood or steel furring fixed to the building frame",
              "Cavity depth chosen for the insulation you want",
              "Blocking where cabinets, shelves, and brackets land",
              "Interior partition walls for offices and bathrooms",
              "Drywall hung, taped, and finished ready for paint",
              "Or steel liner panel if you'd rather hose the walls down",
            ]}
          />
          <div>
            <p className="measure">
              Not every building wants drywall. In a working shop, a steel liner
              panel takes abuse, wipes clean, and never gets a hole punched in it
              by a ladder. In an office corner, a bunk room, or a cabin, drywall
              is the right call &mdash; it takes paint, it takes trim, and it
              reads like a house instead of a garage.
            </p>
            <p className="measure mt-3">
              We&apos;ll usually mix them: liner panel to four feet or across the
              work bay, drywall on the finished end. Tell us how the space gets
              used and we&apos;ll lay it out that way.
            </p>
          </div>
        </div>
      </Section>

      <Rule />

      <Section id="electrical">
        <SectionHeading
          title="Electrical"
          no={3}
          as="h2"
          kicker="Wiring goes in while the walls are open. This is the part people regret undersizing."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Power to the building
            </h3>
            <p className="measure mt-2">
              A detached shop usually gets a feeder from the house panel to a
              subpanel in the building, run underground in conduit. That trench
              is dirt work, so we dig it while the excavator is already on site
              and sleeve through the slab before it&apos;s poured. Size the
              feeder for what the building will draw with everything on, not for
              a single circuit.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Inside the building
            </h3>
            <p className="measure mt-2">
              Subpanel, receptacles around the perimeter, 240-volt circuits for a
              welder, compressor, or lift, LED high bays or strip lights laid out
              for the bays, switching at both doors, exterior lights and outlets,
              and a dedicated circuit for the mini split. We leave spare capacity
              in the panel on purpose.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <FactList
            items={[
              "Underground feeder and trench from the house or meter",
              "Subpanel sized with room to grow",
              "120-volt receptacles spaced so cords stay short",
              "240-volt circuits for welder, compressor, lift, or EV charger",
              "LED lighting laid out to the work areas, switched at each door",
              "Rough-in coordinated with insulation so nothing gets buried wrong",
            ]}
          />
        </div>
        <p className="measure mt-6 text-sm text-ink-soft">
          Electrical work that requires a licensed electrician is done by one,
          and we schedule around whatever inspection your county calls for.
        </p>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Do it in the right order" as="h2" />
        <SpecTable
          head={["Stage", "What happens", "When"]}
          rows={[
            [
              "Sleeves & trench",
              "Conduit through the slab, feeder trench dug",
              "Before the pad is poured",
            ],
            [
              "Shell up",
              "Building delivered, set, and anchored",
              "Delivery week",
            ],
            [
              "Furring & partitions",
              "Framing fixed to the steel, rooms laid out",
              "After the shell",
            ],
            [
              "Rough-in",
              "Wiring, boxes, any plumbing rough",
              "Before insulation",
            ],
            [
              "Insulation",
              "Foam or batt, vapor barrier to the warm side",
              "After rough-in",
            ],
            [
              "Drywall & finish",
              "Board hung, taped, finished, painted; devices trimmed out",
              "Last",
            ],
          ]}
        />
        <p className="measure mt-4 text-sm text-ink-soft">
          Skipping ahead is what makes finishing expensive &mdash; every stage
          out of order means opening something back up.
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
              href: "/cabin-home-interior-build-outs-sullivan-mo",
              label: "Cabin & home interior build-outs",
            },
            {
              href: "/concrete-pads-piers-footings-sullivan-mo",
              label: "Concrete pads, piers & footings",
            },
            {
              href: "/metal-carports-garages-sullivan-mo",
              label: "Metal garages & workshops",
            },
            {
              href: "/site-prep-groundwork-sullivan-mo",
              label: "All site prep & groundwork",
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
        heading="Get the inside finished"
        body="Tell us the building size, how you'll heat it, and what you plan to plug in. We'll price insulation, wiring, and drywall as one scope."
      />
      <Rule />
    </>
  );
}
