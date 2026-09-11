export type SiteWorkItem = {
  no: number;
  name: string;
  img: string;
  width: number;
  height: number;
  alt: string;
  blurb: string;
  spec: string;
  href: string;
};

/*
 * Site work and finishing: the crew work that happens before the building is
 * set and after it's standing. Unlike the catalog in products.ts these are
 * priced per job after a site visit, so there are no starting prices here.
 */
export const siteWork: SiteWorkItem[] = [
  {
    no: 1,
    name: "Concrete pads & slabs",
    img: "/images/as/install-metal-garage.jpg",
    width: 1600,
    height: 747,
    alt: "A two-car metal garage set on a finished concrete pad",
    blurb:
      "Formed, poured, and finished slabs sized to your building, with the turndown edge and anchor layout the installers need.",
    spec: "4–6 in slab · fiber or rebar · vapor barrier · turndown edge",
    href: "/concrete-pads-piers-footings-sullivan-mo",
  },
  {
    no: 2,
    name: "Piers & footings",
    img: "/images/as/horse-barn.jpg",
    width: 2000,
    height: 1232,
    alt: "A raised-center-aisle steel barn set on piers in a rural field",
    blurb:
      "Drilled and poured piers below the frost line for barns, cabins, and buildings on ground you don't want to pour all the way across.",
    spec: "Below frost depth · sonotube or formed · anchor bolts set to plan",
    href: "/concrete-pads-piers-footings-sullivan-mo#piers",
  },
  {
    no: 3,
    name: "Excavation & grading",
    img: "/images/as/horizontal-carports-scaled.jpg",
    width: 2560,
    height: 1920,
    alt: "A wide steel building on a graded and compacted gravel pad",
    blurb:
      "Cut, fill, haul, and compact until the footprint is flat and the water runs away from it instead of under it.",
    spec: "Brush clearing · cut and fill · compacted base rock · drainage",
    href: "/grading-excavation-retaining-walls-sullivan-mo",
  },
  {
    no: 4,
    name: "Retaining walls",
    img: "/images/as/agricultural-barn.jpg",
    width: 1024,
    height: 768,
    alt: "A steel ag building sitting on a cut-and-filled hillside pad",
    blurb:
      "Block, poured, and rock walls to hold a cut back and turn a sloped lot into a usable building pad or driveway.",
    spec: "Segmental block · poured concrete · boulder walls · drainage behind",
    href: "/grading-excavation-retaining-walls-sullivan-mo#retaining-walls",
  },
  {
    no: 5,
    name: "Insulation, drywall & electrical",
    img: "/images/as/insulated-metal-garage.jpg",
    width: 1024,
    height: 768,
    alt: "The inside of an insulated metal garage with finished walls",
    blurb:
      "Furring, insulation, wiring, lights, outlets, and a hung and finished drywall interior so the shop is usable year round.",
    spec: "Spray foam or batt · panel and circuits · taped and finished drywall",
    href: "/insulation-drywall-electrical-metal-buildings",
  },
  {
    no: 6,
    name: "Interior build-outs & cabins",
    img: "/images/as/carport-with-storage.jpg",
    width: 1600,
    height: 1200,
    alt: "A steel building with an enclosed, finished room built onto one end",
    blurb:
      "Full interiors for camping cabins, shouses, and living quarters: framing, rooms, bath and kitchen finish, floors, and trim.",
    spec: "Framing · rooms and lofts · finish carpentry · flooring and trim",
    href: "/cabin-home-interior-build-outs-sullivan-mo",
  },
];

export const sitePrepSteps = [
  {
    title: "We walk the site",
    body: "We look at slope, drainage, rock, access for the delivery truck, and where the utilities run. You get one written scope covering dirt, concrete, and the building.",
  },
  {
    title: "We build the base",
    body: "Clearing, cut and fill, retaining walls if the grade needs them, then the pad, piers, or footings, poured and cured before delivery week.",
  },
  {
    title: "We set and finish it",
    body: "The building goes up on ground that's already right, and we come back inside for insulation, wiring, drywall, and the build-out.",
  },
];
