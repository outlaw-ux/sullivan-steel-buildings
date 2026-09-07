export type CatalogItem = {
  no: number;
  name: string;
  img: string;
  width: number;
  height: number;
  alt: string;
  blurb: string;
  spec: string;
  priceFrom: string;
  href: string;
};

/*
 * Photos are reused from americansteelinc.com (American Steel Carports, Inc.),
 * stored under /public/images/as. Prices are typical starting points for a
 * dealer install and vary by size, gauge, roof style, and site.
 */
export const catalog: CatalogItem[] = [
  {
    no: 1,
    name: "Metal carports",
    img: "/images/as/vertical-carports-scaled.jpg",
    width: 2560,
    height: 1920,
    alt: "Vertical-roof metal carport sheltering a pickup truck",
    blurb:
      "Single, two-car, and RV-height carports. Regular, boxed-eave, or vertical roof, open on all sides or partly closed in.",
    spec: "12–24 ft wide · 14- or 12-gauge frame · regular / A-frame / vertical roof",
    priceFrom: "$1,195",
    href: "/metal-carports-garages-sullivan-mo",
  },
  {
    no: 2,
    name: "Metal garages & workshops",
    img: "/images/as/two-car-metal-garage.jpg",
    width: 1600,
    height: 1200,
    alt: "Two-car enclosed metal garage with two roll-up doors",
    blurb:
      "Fully enclosed one- to four-car garages and shop buildings. Add roll-up doors, walk doors, windows, insulation, and wainscot.",
    spec: "18×21 up to 30×50  · vertical roof standard · concrete or ground anchors",
    priceFrom: "$4,900",
    href: "/metal-carports-garages-sullivan-mo",
  },
  {
    no: 3,
    name: "Barns & ag buildings",
    img: "/images/as/horse-barn.jpg",
    width: 2000,
    height: 1232,
    alt: "Raised-center-aisle steel barn with lean-to sheds on both sides",
    blurb:
      "Raised-center-aisle barns, loafing sheds, hay and equipment storage, and horse barns with stalls. Lean-tos on one or both sides.",
    spec: "Center section 12–24 ft · lean-tos 10–12 ft · vertical roof for snow runoff",
    priceFrom: "$6,400",
    href: "/steel-barns-franklin-washington-county-mo",
  },
  {
    no: 4,
    name: "RV, boat & equipment covers",
    img: "/images/as/Boat-Carports.jpg",
    width: 2560,
    height: 1920,
    alt: "Tall steel cover protecting a boat on a trailer",
    blurb:
      "Tall covers sized for motorhomes, travel trailers, pontoons, and tractors. Open, partly enclosed, or fully enclosed with a door.",
    spec: "12–18 ft wide · 12–16 ft tall · 30–45 ft long · leave 5 ft of length to spare",
    priceFrom: "$2,600",
    href: "/rv-boat-equipment-covers",
  },
  {
    no: 5,
    name: "Storage sheds & lean-tos",
    img: "/images/as/carport-with-storage.jpg",
    width: 1600,
    height: 1200,
    alt: "Metal carport with an enclosed storage room built onto one end",
    blurb:
      "Utility sheds, mini-storage rows, and carport-with-storage combos. A dry, lockable spot for mowers, tools, and feed.",
    spec: "Attached lean-to or standalone · roll-up or walk door · gravel pad works fine",
    priceFrom: "$1,850",
    href: "/metal-carports-garages-sullivan-mo",
  },
  {
    no: 6,
    name: "Clear-span & custom buildings",
    img: "/images/as/clearspan-tab.png",
    width: 720,
    height: 488,
    alt: "Wide clear-span steel workshop building with no interior posts",
    blurb:
      "Wider, taller, column-free buildings for shops, commercial use, and equipment lines. Bring your dimensions or a sketch and we price it.",
    spec: "Up to 60+ ft wide with trusses · engineer-certified drawings available",
    priceFrom: "Quoted",
    href: "/steel-barns-franklin-washington-county-mo",
  },
];

export const warranties = [
  {
    img: "/images/as/w-frame.svg",
    label: "20-year rust-through warranty on 12-gauge framing",
  },
  {
    img: "/images/as/w-wind.svg",
    label: "Lifetime 100 mph wind warranty package available",
  },
  {
    img: "/images/as/w-workmanship.svg",
    label: "4-season workmanship warranty on the install",
  },
  {
    img: "/images/as/w-paint.svg",
    label: "10- and 20-year paint warranty options",
  },
];
