import { L } from "@/lib/consultancy/theme";

export type Industry = {
  id: string;
  n: string;
  industryLabel?: string;
  ic: string;
  engagements: number;
  clients: string[];
  clientCount?: number;
  usecases: string[];
  highlight?: { v: string; l: string };
  color?: string;
  featured?: boolean;
  cta1?: string;
};

export const DEFAULT_INDUSTRY_ID = "ins";

export const INDUSTRIES: Industry[] = [
  {
    id: "fin",
    n: "Financial Services",
    industryLabel: "AI Solutions for Finance",
    ic: "$",
    engagements: 42,
    clientCount: 6,
    clients: ["Kestrel Bank", "Atlas Capital", "Civica Credit Union"],
    usecases: [
      "Fraud detection and AML monitoring",
      "Credit risk scoring and loan underwriting AI",
      "Algorithmic trading and portfolio risk systems",
      "Customer churn prediction",
    ],
    highlight: { v: "$47M", l: "In fraud losses prevented · Regional bank" },
    cta1: "Talk to a Financial Services Lead",
    color: L,
  },
  {
    id: "health",
    n: "Healthcare",
    industryLabel: "AI in the Healthcare Industry",
    ic: "✚",
    engagements: 38,
    clientCount: 5,
    clients: ["NorthBay Health", "Mercy Regional", "Ridgeline Pharma"],
    usecases: [
      "Ambient clinical documentation AI",
      "Patient risk stratification and care gap identification",
      "Prior authorization and payer denial automation",
      "Appointment no-show prediction",
    ],
    highlight: { v: "41%", l: "Reduction in clinical admin time · Regional health network" },
    cta1: "Talk to a Healthcare Lead",
    color: "rgb(255,170,170)",
  },
  {
    id: "ins",
    n: "Insurance",
    industryLabel: "AI in Industry :- Insurance",
    ic: "⊡",
    engagements: 31,
    clientCount: 3,
    clients: ["Meridian Insurance", "Fairway P&C", "Atlas Re"],
    usecases: [
      "Claims automation",
      "SIU fraud detection",
      "Underwriting risk models",
      "Customer FNOL chatbots",
    ],
    highlight: { v: "62%", l: "Faster claims · Meridian" },
    cta1: "Talk to an Insurance Lead",
    color: L,
    featured: true,
  },
  {
    id: "mfg",
    n: "Manufacturing",
    industryLabel: "AI Solutions for Manufacturing",
    ic: "⚙",
    engagements: 29,
    clientCount: 4,
    clients: ["Oakridge Industrial", "Steele Auto", "Apex Components"],
    usecases: [
      "Predictive maintenance and downtime reduction",
      "Computer vision quality control and defect detection",
      "Production scheduling optimization",
      "Supply chain demand forecasting",
    ],
    highlight: { v: "34%", l: "Reduction in unplanned downtime · Tier 1 manufacturer" },
    cta1: "Talk to a Manufacturing Lead",
  },
  {
    id: "retail",
    n: "Retail & Commerce",
    industryLabel: "AI in Industry :- Retail",
    ic: "◫",
    engagements: 33,
    clientCount: 5,
    clients: ["Aurora Retail", "Northwind Goods", "Bayside Brands"],
    usecases: [
      "Product recommendation and personalization engines",
      "Dynamic pricing and markdown optimization",
      "Inventory demand forecasting",
      "Customer lifetime value prediction",
    ],
    highlight: { v: "18%", l: "Markdown reduction · National retailer" },
    cta1: "Talk to a Retail Lead",
  },
  {
    id: "log",
    n: "Logistics",
    industryLabel: "Vertical AI Solutions :- Logistics",
    ic: "⛟",
    engagements: 32,
    clientCount: 4,
    clients: ["Redline Logistics", "Pacific Freight", "Vector 3PL"],
    usecases: [
      "Route optimization AI",
      "Last-mile delivery visibility and tracking",
      "Warehouse automation and pick-and-pack AI",
      "Carrier performance and delay analytics",
    ],
    highlight: { v: "21%", l: "Fuel cost reduction · National carrier" },
    cta1: "Talk to a Logistics Lead",
  },
  {
    id: "gov",
    n: "Government",
    industryLabel: "AI in Industry :- Government",
    ic: "⌂",
    engagements: 14,
    clientCount: 3,
    clients: ["Civica State Agency", "Westport Municipality", "Federal Benefits Office"],
    usecases: [
      "Citizen service automation and chatbots",
      "Benefits fraud detection",
      "Document processing and form automation",
      "Workforce planning and procurement AI",
    ],
    highlight: { v: "$28M", l: "Annual savings · State agency" },
    cta1: "Talk to a Government Lead",
  },
  {
    id: "legal",
    n: "Legal & Compliance",
    industryLabel: "Vertical AI Solutions :- Legal",
    ic: "§",
    engagements: 19,
    clientCount: 3,
    clients: ["Lumen Legal", "Steel & Vance", "Ironside Compliance"],
    usecases: [
      "Contract analysis and review AI",
      "Legal research and precedent automation",
      "E-discovery and document extraction",
      "Matter billing and utilization optimization",
    ],
    highlight: { v: "82%", l: "Research time reduction · AmLaw 200 firm" },
    cta1: "Talk to a Legal Lead",
  },
  {
    id: "energy",
    n: "Energy & Utilities",
    industryLabel: "AI in Industry :- Energy",
    ic: "◈",
    engagements: 11,
    clientCount: 2,
    clients: ["Helix Energy", "Ridgepoint Utilities", "BlueGrid"],
    usecases: [
      "Grid predictive maintenance",
      "Energy consumption forecasting",
      "Regulatory compliance monitoring AI",
      "Asset performance optimization",
    ],
    cta1: "Talk to an Energy Lead",
  },
  {
    id: "edu",
    n: "Education",
    industryLabel: "Vertical AI Solutions :- Education",
    ic: "⌘",
    engagements: 8,
    clientCount: 2,
    clients: ["Heritage University", "MapleNorth Schools", "EdNorth Group"],
    usecases: [
      "Student retention and at-risk prediction",
      "Personalized learning path AI",
      "Administrative workflow automation",
      "Enrollment demand forecasting",
    ],
    cta1: "Talk to an Education Lead",
  },
  {
    id: "media",
    n: "Media & Entertainment",
    industryLabel: "AI in Industry :- Media",
    ic: "⏵",
    engagements: 13,
    clientCount: 2,
    clients: ["Beacon Studios", "Loop Media", "Crescendo Audio"],
    usecases: [
      "Content recommendation engines",
      "Subscriber churn prediction",
      "Ad yield and programmatic optimization AI",
      "Automated content tagging and metadata",
    ],
    cta1: "Talk to a Media Lead",
  },
  {
    id: "tele",
    n: "Telecom",
    industryLabel: "Vertical AI Solutions :- Telecom",
    ic: "⌁",
    engagements: 9,
    clientCount: 2,
    clients: ["Northwave Telecom", "Pinnacle Mobile", "SignalCo"],
    usecases: [
      "Network anomaly detection AI",
      "Customer churn prevention",
      "Service desk and support automation",
      "Infrastructure predictive maintenance",
    ],
    cta1: "Talk to a Telecom Lead",
  },
];

/** Home page grid order (4×3), aligned 1:1 with industries page cards. */
export const HOME_INDUSTRY_CARDS: { id: string; name: string; detail: string }[] = [
  {
    id: "health",
    name: "Healthcare",
    detail: "Diagnostic AI, EHR integration, patient operations, prior auth automation.",
  },
  {
    id: "fin",
    name: "Financial Services",
    detail: "Fraud detection, credit risk, AML, underwriting intelligence.",
  },
  {
    id: "ins",
    name: "Insurance",
    detail: "Claims automation, fraud scoring, policy servicing, document extraction.",
  },
  {
    id: "legal",
    name: "Legal & Compliance",
    detail: "Contract analysis, legal research, e-discovery, document workflows.",
  },
  {
    id: "retail",
    name: "Retail & Commerce",
    detail: "Personalization, demand forecasting, pricing, inventory optimization.",
  },
  {
    id: "mfg",
    name: "Manufacturing",
    detail: "Predictive maintenance, quality control, scheduling, production visibility.",
  },
  {
    id: "log",
    name: "Logistics",
    detail: "Route optimization, fleet intelligence, warehouse automation, ETA prediction.",
  },
  {
    id: "edu",
    name: "Education",
    detail: "Student success prediction, personalized learning, admissions and admin workflows.",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    detail: "Grid predictive maintenance, consumption forecasting, compliance monitoring, asset optimization.",
  },
  {
    id: "gov",
    name: "Government",
    detail: "Citizen service automation, infrastructure planning, benefits fraud detection.",
  },
  {
    id: "media",
    name: "Media & Entertainment",
    detail: "Content recommendation, churn prediction, ad yield optimization, automated tagging.",
  },
  {
    id: "tele",
    name: "Telecom",
    detail: "Network anomaly detection, churn prevention, support automation, infrastructure maintenance.",
  },
];

const INDUSTRY_IDS = new Set(INDUSTRIES.map((i) => i.id));

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s*&\s*/g, "-and-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const QUERY_ALIASES: Record<string, string> = {
  healthcare: "health",
  finance: "fin",
  "financial-services": "fin",
  insurance: "ins",
  manufacturing: "mfg",
  retail: "retail",
  "retail-and-commerce": "retail",
  "retail-and-e-commerce": "retail",
  logistics: "log",
  government: "gov",
  legal: "legal",
  "legal-and-compliance": "legal",
  energy: "energy",
  "energy-and-utilities": "energy",
  education: "edu",
  media: "media",
  "media-and-entertainment": "media",
  telecom: "tele",
  telecommunications: "tele",
};

export function industryHref(id: string): string {
  return `/industries?industry=${encodeURIComponent(id)}`;
}

export function resolveIndustryId(query: string): string | null {
  const raw = query.trim();
  if (!raw) return null;

  const key = slugify(raw);
  const aliasId = QUERY_ALIASES[key];
  if (aliasId && INDUSTRY_IDS.has(aliasId)) return aliasId;
  if (INDUSTRY_IDS.has(key)) return key;

  const byName = INDUSTRIES.find((i) => slugify(i.n) === key);
  return byName?.id ?? null;
}
