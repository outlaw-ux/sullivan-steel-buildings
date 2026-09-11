export const site = {
  name: "Sullivan Steel Buildings & Carports",
  shortName: "Sullivan Steel Buildings",
  legalEntity: "Strode Properties Inc",
  dealerOf: "American Steel Carports, Inc.",
  phone: "(314) 393-6394",
  phoneHref: "tel:+13143936394",
  email: "quotes@sullivansteelbuildings.com",
  address: {
    city: "Sullivan",
    state: "MO",
    zip: "63080",
  },
  addressLine: "Sullivan, MO",
  facebook: "https://www.facebook.com/ls4e1",
  siteUrl: "https://www.sullivansteelbuildings.com",
  // American Steel's 3D configurator, keyed to our dealer number.
  builderUrl: "https://build.americansteelinc.com/dealer/?dealer=SV005728",
} as const;

export const serviceArea = [
  "Sullivan",
  "Bourbon",
  "Cuba",
  "St. Clair",
  "Stanton",
  "Gray Summit",
  "Woodland Lakes",
  "Franklin County",
  "Washington County",
  "Crawford County",
];

export const nav = [
  {
    label: "Carports & garages",
    href: "/metal-carports-garages-sullivan-mo",
  },
  {
    label: "Barns & ag buildings",
    href: "/steel-barns-franklin-washington-county-mo",
  },
  { label: "RV & boat covers", href: "/rv-boat-equipment-covers" },
  { label: "Site prep", href: "/site-prep-groundwork-sullivan-mo" },
  { label: "Financing", href: "/financing-rent-to-own" },
];

/*
 * The site-work side of the business: everything that happens before the
 * building lands and everything that happens inside it afterward. The hub page
 * is also in `nav`; the rest hang off it and off the footer.
 */
export const siteWorkNav = [
  {
    label: "Site prep & groundwork",
    href: "/site-prep-groundwork-sullivan-mo",
  },
  {
    label: "Concrete pads, piers & footings",
    href: "/concrete-pads-piers-footings-sullivan-mo",
  },
  {
    label: "Grading, excavation & retaining walls",
    href: "/grading-excavation-retaining-walls-sullivan-mo",
  },
  {
    label: "Insulation, drywall & electrical",
    href: "/insulation-drywall-electrical-metal-buildings",
  },
  {
    label: "Cabin & home interior build-outs",
    href: "/cabin-home-interior-build-outs-sullivan-mo",
  },
];

export const buildingTypes = [
  "Carport",
  "Metal garage",
  "RV or boat cover",
  "Barn or ag building",
  "Storage shed",
  "Workshop",
  "Camping cabin or living quarters",
  "Custom building",
  "Site prep or concrete only",
  "Interior finish or build-out only",
  "Not sure yet",
];
