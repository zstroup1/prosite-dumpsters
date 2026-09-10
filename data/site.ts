export type NavItem = {
  href: string;
  label: string;
};

export type DumpsterPricing = {
  size: string;
  durations: Array<{
    label: string;
    cardTitle: string;
    price: string;
  }>;
  includedTonnage: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceArea = {
  href: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
};

export const navItems: NavItem[] = [
  { href: "/dumpster-rentals", label: "Dumpster Rentals" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/residential-dumpster-rental", label: "Residential" },
  { href: "/construction-dumpster-rental", label: "Construction" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const dumpsterRentalNavItems: NavItem[] = [
  { href: "/dumpster-rentals/15-yard", label: "15 Yard Dumpster" },
  { href: "/dumpster-rentals/20-yard", label: "20 Yard Dumpster" },
  { href: "/dumpster-rentals/30-yard", label: "30 Yard Dumpster" },
  { href: "/dumpster-rentals/contractors-developers", label: "Contractors & Developers" },
];

export const dumpsterRentalOptions = [
  {
    href: "/dumpster-rentals/15-yard",
    size: "15 Yard Dumpster",
    description: "A practical option for cleanouts, smaller renovations, and project debris.",
    pricing: ["1–3 Days: $455", "7 Days: $495", "Up to 30 Days: $595"],
  },
  {
    href: "/dumpster-rentals/20-yard",
    size: "20 Yard Dumpster",
    description: "Built for larger cleanouts, roofing, remodeling, and construction debris.",
    pricing: ["1–3 Days: $525", "7 Days: $555", "Up to 30 Days: $665"],
  },
  {
    href: "/dumpster-rentals/30-yard",
    size: "30 Yard Dumpster",
    description: "For larger cleanouts, construction work, and contractor-led projects.",
    pricing: null,
  },
];

export const valueProps = [
  {
    title: "Fast Delivery",
    description: "Responsive scheduling for projects that need containers on-site without delays.",
  },
  {
    title: "Local Service",
    description: "Focused coverage along the Emerald Coast with route planning built for this corridor.",
  },
  {
    title: "Straightforward Rentals",
    description: "Simple scheduling, clear communication, and a process that keeps your project moving.",
  },
  {
    title: "Residential and Contractor Friendly",
    description: "Built for cleanouts, remodels, roofing, construction, and recurring commercial needs.",
  },
];

export const dumpsterPricing: DumpsterPricing[] = [
  {
    size: "15 Yard Dumpster",
    durations: [
      { label: "1–3 Days", cardTitle: "1–3 Day Rental", price: "$455" },
      { label: "7 Days", cardTitle: "7 Day Rental", price: "$495" },
      { label: "Up to 30 Days", cardTitle: "Up to 30 Day Rental", price: "$595" },
    ],
    includedTonnage: "Up to 4 tons included",
  },
  {
    size: "20 Yard Dumpster",
    durations: [
      { label: "1–3 Days", cardTitle: "1–3 Day Rental", price: "$525" },
      { label: "7 Days", cardTitle: "7 Day Rental", price: "$555" },
      { label: "Up to 30 Days", cardTitle: "Up to 30 Day Rental", price: "$665" },
    ],
    includedTonnage: "Up to 5 tons included",
  },
];

export const includedTonnageNotice =
  "Need a little more time? Additional rental days are $18/day. Loads exceeding the included weight allowance are charged at $85 per additional ton.";

export const additionalFees = [
  { label: "Driveway protection boards (pavers/pool decks)", detail: "Included on request, or $25 flat" },
  { label: "Trip fee for locked gate / no access on arrival", detail: "$75" },
  { label: "Relocation of dumpster on-site", detail: "$50" },
  { label: "Same-day/rush delivery", detail: "$50–$75" },
  { label: "Prohibited item found in load", detail: "$25–$75 per item" },
  { label: "Permit assistance (public right-of-way placement)", detail: "Quote-based + $25 admin fee" },
];

export const howItWorksSteps = [
  {
    title: "Text Us",
    description: "Tell us where you need the dumpster and what you're working on.",
  },
  {
    title: "We Schedule It",
    description: "We'll confirm the right dumpster, pricing, and delivery details.",
  },
  {
    title: "We Deliver",
    description: "Your dumpster shows up where you need it, when you need it.",
  },
];

export const audiences = [
  "Homeowners",
  "Contractors",
  "Property Managers",
  "Businesses",
];

export const projectTypes = [
  "Home cleanouts",
  "Remodeling",
  "Roofing",
  "Construction debris",
  "Property cleanups",
  "Estate cleanouts",
  "Commercial projects",
  "Landscaping debris",
];

export const whyProsite = [
  "Dependable delivery windows that support active jobsites and home projects.",
  "Consistent communication before delivery, during the rental, and at pickup.",
  "Local route knowledge across Destin, Miramar Beach, Santa Rosa Beach, 30A, and Panama City Beach.",
  "Scheduling that works for homeowners, contractors, and property teams.",
  "Clean, professional equipment backed by the promise: On Site. On Time.",
];

export const faqs: FAQItem[] = [
  {
    question: "What size dumpster do I need?",
    answer:
      "ProSite offers 15-yard, 20-yard, and 30-yard dumpster options. Text us about your project, and we will help you choose the right option.",
  },
  {
    question: "How long can I keep the dumpster?",
    answer:
      "Published 15-yard and 20-yard rental durations are 1–3 days, 7 days, or up to 30 days. Text us to coordinate a 30-yard dumpster rental.",
  },
  {
    question: "What can I put in a dumpster?",
    answer:
      "Common construction, renovation, cleanout, and property cleanup debris are often acceptable, but material rules can vary by load type. Use the project details field to describe debris so any restrictions can be addressed before delivery.",
  },
  {
    question: "Where can the dumpster be placed?",
    answer:
      "Placement depends on access, surface conditions, and local site requirements. Driveways, jobsites, and commercial lots are common options when there is safe clearance for delivery and pickup.",
  },
  {
    question: "Do I need to be home for delivery?",
    answer:
      "Not always. Clear placement instructions, site access, and contact details usually matter more than being physically on site.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Service is focused on Florida's Emerald Coast corridor from Destin to Panama City Beach, including Miramar Beach, Santa Rosa Beach, and the 30A communities.",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    href: "/service-areas/destin-fl",
    label: "Destin",
    title: "Dumpster Rental Destin FL",
    description: "Responsive dumpster rentals for home projects, construction, and cleanups in Destin.",
    highlights: ["Neighborhood cleanouts", "Renovation debris", "Contractor scheduling"],
  },
  {
    href: "/service-areas/miramar-beach-fl",
    label: "Miramar Beach",
    title: "Dumpster Rental Miramar Beach FL",
    description: "Reliable roll-off containers for residential and commercial work in Miramar Beach.",
    highlights: ["Vacation property work", "Remodel support", "Fast local coverage"],
  },
  {
    href: "/service-areas/santa-rosa-beach-fl",
    label: "Santa Rosa Beach",
    title: "Dumpster Rental Santa Rosa Beach FL",
    description: "Dumpster rentals for clean, organized projects across Santa Rosa Beach.",
    highlights: ["Home cleanouts", "Roofing jobs", "Property cleanup logistics"],
  },
  {
    href: "/service-areas/30a-fl",
    label: "30A",
    title: "Dumpster Rental 30A FL",
    description: "Roll-off dumpsters tailored to projects across the 30A communities.",
    highlights: ["Remodel planning", "Limited-access sites", "Coastal property service"],
  },
  {
    href: "/service-areas/panama-city-beach-fl",
    label: "Panama City Beach",
    title: "Dumpster Rental Panama City Beach FL",
    description: "Dependable dumpster rentals for projects in Panama City Beach and nearby job corridors.",
    highlights: ["Commercial cleanouts", "Construction support", "Flexible pickup timing"],
  },
];

export const servicePageContent = {
  rentals: {
    title: "Dumpster Rentals Across the Emerald Coast",
    intro:
      "ProSite Dumpsters provides roll-off dumpster rentals for homeowners, contractors, property managers, and businesses working between Destin and Panama City Beach.",
    bullets: [
      "15-yard, 20-yard, and 30-yard options for cleanouts, renovations, and construction debris.",
      "Scheduling built to keep driveways, renovations, and jobsites moving.",
      "Coverage focused only on the service corridor listed on this site.",
    ],
  },
  residential: {
    title: "Residential Dumpster Rental",
    intro:
      "Residential dumpster rentals help keep driveways, remodels, cleanouts, and storm-related cleanup projects organized from start to finish.",
    bullets: [
      "Good for garage cleanouts, moving prep, remodeling debris, and yard waste projects.",
      "Simple scheduling for homeowners who want straightforward delivery and pickup.",
      "Container guidance based on project size, debris volume, and space constraints.",
    ],
  },
  construction: {
    title: "Construction Dumpster Rental",
    intro:
      "Construction projects need dependable dumpster service that supports active crews, changing timelines, and coordinated pickups.",
    bullets: [
      "Built for contractors handling demolition, framing, roofing, renovation, and site cleanup.",
      "Supports repeat job scheduling across the Destin to Panama City Beach corridor.",
      "Focus on clear communication and efficient placement planning for jobsites.",
    ],
  },
  commercial: {
    title: "Commercial Dumpster Rental",
    intro:
      "Commercial dumpster rentals support property turnover, retail updates, office cleanouts, and maintenance projects that need organized waste handling.",
    bullets: [
      "Useful for property managers, facility teams, business owners, and specialty contractors.",
      "Fits cleanup phases, renovation schedules, and short-duration commercial projects.",
      "Service designed for professionalism, responsiveness, and clean equipment.",
    ],
  },
};

export const quoteFormOptions = {
  projectTypes: [
    "Home cleanout",
    "Remodeling",
    "Roofing",
    "Construction debris",
    "Property cleanup",
    "Estate cleanout",
    "Commercial project",
    "Landscaping debris",
  ],
  dumpsterSizes: ["Not Sure", "15 Yard", "20 Yard", "30 Yard"],
  timeframes: ["1–3 days", "7 days", "Up to 30 days"],
};
