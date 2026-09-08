import type { Metadata } from "next";
import {
  CtaBand,
  FactList,
  FaqList,
  Frame,
  Rule,
  Section,
  SectionHeading,
  SpecTable,
  Steps,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financing & Rent-to-Own for Steel Buildings",
  description:
    "Rent-to-own with no credit check and bank financing for metal carports, garages, and barns in Sullivan, MO. How each option works, what you need to apply, and what drives your price.",
  alternates: { canonical: "/financing-rent-to-own" },
};

export default function FinancingPage() {
  return (
    <>
      <section className="wrap py-[clamp(2.5rem,6vw,4rem)]">
        <p className="inline-block border border-ink px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em]">
          Ways to pay
        </p>
        <h1 className="mt-4 text-[clamp(2.05rem,5.4vw,3.4rem)] font-bold uppercase leading-[1.0] tracking-[0.005em]">
          Financing &amp; rent-to-own
        </h1>
        <p className="measure mt-4 text-lg">
          Most of our buildings leave on a payment plan, not a check. There are
          two routes: rent-to-own with no credit check, or bank financing at a
          lower rate. Here is how each one works.
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
          title="Rent-to-own"
          no={1}
          as="h2"
          kicker="No credit check. You make a first payment at delivery, then a fixed monthly amount. Pay it off early for a discount, or return the building and walk away."
        />
        <Steps
          steps={[
            {
              title: "Choose your building",
              body: "Same catalog, same prices. Pick the size, roof, doors, and colors you want.",
            },
            {
              title: "Pay at delivery",
              body: "A first payment (usually the equivalent of the first and last month) is due when the crew sets the building.",
            },
            {
              title: "Pay monthly, own it at the end",
              body: "Fixed payments over a 24 to 48 month term. Pay the balance early anytime for an early-payoff discount, and the title is yours.",
            },
          ]}
        />
        <p className="measure mt-6">
          Rent-to-own is month-to-month: if your situation changes, you can call
          the provider to pick the building up, and you are not on the hook for
          the rest of the term. Because there is no credit check and no interest
          rate, the total you pay over a full term is higher than paying cash
          &mdash; the trade is approval for almost everyone and the freedom to
          stop.
        </p>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading
          title="Financing"
          no={2}
          as="h2"
          kicker="A fixed installment loan through American Steel's lending partner. A credit check applies, and the rate is far lower than rent-to-own."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,22rem)] md:gap-10">
          <div>
            <p className="measure">
              APR starts as low as <strong>9.99%</strong> for well-qualified
              buyers, with terms up to roughly 60 months. You apply online in a
              few minutes and usually get a decision on the spot. If approved,
              the building is yours at delivery and you make one fixed payment a
              month to the lender.
            </p>
            <h3 className="mt-6 font-display text-lg font-semibold uppercase tracking-wide">
              What you need to apply
            </h3>
            <FactList
              items={[
                "A valid government photo ID",
                "Verifiable income",
                "A checking account and routing number",
                "The quote from us with the building total",
              ]}
            />
          </div>
          <Frame
            src="/images/as/financing.png"
            width={601}
            height={206}
            alt="American Steel financing options summary graphic"
            sizes="(min-width: 768px) 22rem, 100vw"
            caption={`Program details set by ${site.dealerOf}`}
          />
        </div>
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="Which one is right for you?" as="h2" />
        <SpecTable
          head={["", "Rent-to-own", "Financing"]}
          rows={[
            ["Credit check", "No", "Yes"],
            [
              "Best for",
              "Bad or no credit, want the option to stop",
              "Good credit, want the lowest total cost",
            ],
            ["Term", "24–48 months", "Up to ~60 months"],
            ["Interest", "None (built into the payments)", "APR from 9.99%"],
            [
              "Own it",
              "End of term, or early payoff discount",
              "On approval, at delivery",
            ],
            ["Return it", "Anytime, month-to-month", "No"],
          ]}
        />
        <p className="mt-3 text-sm text-ink-soft">
          Rent-to-own and financing are provided by third parties. Approval,
          terms, rates, and availability are set by those providers and can
          change. Ask us for current program details before you order.
        </p>
      </Section>

      <Rule />

      <Section band>
        <SectionHeading
          title="What affects your price"
          as="h2"
          kicker="Two carports the same length can be hundreds of dollars apart. These are the levers."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <FactList
            items={[
              "Footprint: width and length",
              "Leg height: taller frames use more steel",
              "Frame gauge: 14-gauge standard vs 12-gauge certified",
              "Roof style: regular, boxed-eave, or vertical",
            ]}
          />
          <FactList
            items={[
              "How much you close in: ends, sides, gables",
              "Doors and windows: roll-up, walk, sliders",
              "Insulation and wainscot",
              "Delivery distance and site condition",
            ]}
          />
        </div>
      </Section>

      <Rule />

      <Section>
        <SectionHeading title="Questions we get a lot" as="h2" />
        <FaqList
          items={[
            {
              q: "Is there a minimum down payment?",
              a: (
                <p>
                  Rent-to-own asks for a first payment at delivery, typically the
                  first and last month. Financing may require little or nothing
                  down depending on approval. We&apos;ll show you the exact
                  numbers with your quote.
                </p>
              ),
            },
            {
              q: "Does rent-to-own cost more overall?",
              a: (
                <p>
                  Yes. With no credit check and no stated interest rate, the sum
                  of the payments over a full term is more than the cash price.
                  You&apos;re paying for guaranteed approval and the option to
                  return it. Early payoff cuts that cost.
                </p>
              ),
            },
            {
              q: "Can I pay it off early?",
              a: (
                <p>
                  On both plans, yes. Rent-to-own has a set early-payoff
                  discount. Financing has no prepayment penalty.
                </p>
              ),
            },
            {
              q: "Do you run my credit for rent-to-own?",
              a: <p>No. Rent-to-own has no credit check at all.</p>,
            },
            {
              q: "Who do I make payments to?",
              a: (
                <p>
                  To the rent-to-own company or the lender directly, not to us.
                  We help you get it set up and then step out of the billing.
                </p>
              ),
            },
          ]}
        />
      </Section>

      <CtaBand
        heading="Get a quote with payment options"
        body="Tell us the building you want. Your quote comes back with the cash price, an estimated rent-to-own payment, and a financed payment side by side."
      />
      <Rule />
    </>
  );
}
