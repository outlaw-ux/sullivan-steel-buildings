import type { Metadata } from "next";
import Link from "next/link";
import {
  CtaBand,
  FaqList,
  Frame,
  Rule,
  Section,
  SectionHeading,
  SpecTable,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "RV, Boat & Equipment Covers in Sullivan, MO",
  description:
    "Tall metal covers for motorhomes, travel trailers, boats, and tractors around Sullivan and Franklin County, MO. Height and size guidance, enclosure options, anchoring, and typical pricing.",
  alternates: { canonical: "/rv-boat-equipment-covers" },
};

export default function RvCoversPage() {
  return (
    <>
      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Buildings · No. 4
        </p>
        <h1 className="mt-4 text-[clamp(2.05rem,5.4vw,3.4rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          RV, boat &amp; equipment covers in Sullivan, MO
        </h1>
        <p className="measure mt-4 text-lg">
          UV and hail are what kill a camper roof and a gelcoat finish. A tall
          steel cover keeps the sun off for a fraction of what indoor storage
          costs over a few years. The trick is getting the height right.
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
          title="How tall does the cover need to be?"
          as="h2"
          kicker="Measure your rig at its highest point — usually the A/C shroud or a boat tower — and add one to two feet of clearance."
        />
        <SpecTable
          head={["What you're covering", "Typical height", "Cover height"]}
          rows={[
            ["Pop-up or small travel trailer", "up to 10 ft", "12 ft"],
            ["Travel trailer with A/C", "10–11 ft", "12–13 ft"],
            ["Fifth wheel", "12–13 ft", "13–14 ft"],
            ["Class A motorhome", "12–13.5 ft", "14–15 ft"],
            ["Boat on a trailer with a tower", "8–10 ft", "12 ft"],
          ]}
        />
        <p className="mt-3 text-sm text-ink-soft">
          Cover heights are the leg (eave) height. The peak of a vertical roof
          sits about 1–2 ft higher than the leg.
        </p>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="How long and how wide?" as="h2" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Length
            </h3>
            <p className="measure mt-2">
              Take the length of the rig and add at least 5 ft so you can hitch,
              unhitch, and close a rear panel without backing into it. A 32 ft
              motorhome wants a 38 to 40 ft cover.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Width
            </h3>
            <p className="measure mt-2">
              12 ft covers a single rig with slides in. Go to 18 or 20 ft if you
              want to walk both sides, open an awning, or park a truck alongside.
              24 ft fits an RV and a boat side by side.
            </p>
          </div>
        </div>
      </Section>

      <Rule />

      <Section>
        <SectionHeading
          title="Open, part-enclosed, or fully enclosed"
          as="h2"
        />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-10">
          <div className="grid gap-5">
            {[
              {
                h: "Open cover",
                p: "Roof and posts. The cheapest way to stop UV and hail. Add gable ends to keep driving rain off the front and back.",
              },
              {
                h: "Partly enclosed",
                p: "Close in the two long sides and leave the ends open to drive through. Good wind protection without a door to deal with.",
              },
              {
                h: "Fully enclosed RV garage",
                p: "All four sides plus a 12 to 14 ft roll-up door. Lockable, and it doubles as shop and storage space in the off-season.",
              },
            ].map((o) => (
              <div key={o.h} className="border-t-2 border-ink pt-3">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
                  {o.h}
                </h3>
                <p className="measure mt-1">{o.p}</p>
              </div>
            ))}
          </div>
          <Frame
            src="/images/as/rv-tab.png"
            width={720}
            height={488}
            alt="A tall vertical-roof steel cover over a Class A motorhome"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
        </div>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Boat & pontoon covers" as="h2" />
        <div className="grid gap-8 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-10">
          <Frame
            src="/images/as/Boat-Carports.jpg"
            width={2560}
            height={1920}
            alt="A steel carport cover protecting a boat on a trailer"
            sizes="(min-width: 768px) 24rem, 100vw"
            caption={`Photo courtesy of ${site.dealerOf}`}
          />
          <p className="measure">
            A 12 ft wide, 24 to 30 ft long cover at 10 to 12 ft tall handles most
            runabouts and pontoons on a trailer. If your boat has a hardtop or a
            wakeboard tower, measure to the very top and size the height from
            there. Closing in the north and west sides blocks the worst of the
            weathering.
          </p>
        </div>
      </Section>

      <Rule />

      <Section>
        <SectionHeading
          title="Typical sizes and pricing"
          as="h2"
          kicker="Ballpark figures for delivery and install in our area. Your quote depends on gauge, enclosure, doors, and site."
        />
        <SpecTable
          head={["Size (W × L × H)", "Good for", "Typical price"]}
          rows={[
            ["12 × 30 × 12 ft", "One travel trailer, open", "$2,600–$4,500"],
            ["14 × 36 × 14 ft", "Fifth wheel, part-enclosed", "$5,900–$7,000"],
            ["18 × 41 × 15 ft", "Class A with a slide room", "$8,000–$9,500"],
            ["24 × 45 × 15 ft", "RV and boat side by side", "up to $10,600"],
          ]}
        />
      </Section>

      <Rule />

      <Section band>
        <SectionHeading title="Anchoring and wind" as="h2" />
        <p className="measure">
          A tall cover is a big sail, so anchoring matters more here than on a
          low carport. We bolt to a slab with wedge anchors or to the ground with
          long mobile-home anchors, and we recommend the 12-gauge certified
          package for anything 14 ft or taller. If your site is open and
          wind-exposed, tell us &mdash; we&apos;ll add bracing.
        </p>
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="Questions we get a lot" as="h2" />
        <FaqList
          items={[
            {
              q: "Can I add sides to an open cover later?",
              a: (
                <p>
                  Yes. Panels bolt to the existing frame, so you can start open
                  and close it in a side at a time as the budget allows.
                </p>
              ),
            },
            {
              q: "Do I need concrete?",
              a: (
                <p>
                  No. Level ground or a gravel pad works for an open or
                  part-enclosed cover. A slab is worth it for a fully enclosed RV
                  garage.
                </p>
              ),
            },
            {
              q: "Will it fit my Class A?",
              a: (
                <p>
                  Measure to the top of the air conditioner and give us that
                  number. We size the leg height so the roof bows clear it with
                  room to spare.
                </p>
              ),
            },
            {
              q: "Is rent-to-own available?",
              a: (
                <p>
                  Yes, on covers and enclosed RV garages both. See{" "}
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
        heading="Price my RV or boat cover"
        body="Send us the length and the height at the tallest point. We'll size the cover and come back with a number and payment options."
      />
      <Rule />
    </>
  );
}
