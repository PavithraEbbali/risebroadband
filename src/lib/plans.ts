/**
 * Plan data transcribed verbatim from riseinternet.com homepage and /compare-plans
 * on 2026-08-06. See docs/scrape-report.md §2.
 *
 * IMPORTANT — the struck-through price is NOT a limited-time promotion. On every tier
 * `listPrice - price === 20`, which is exactly the AutoPay discount the carrier discloses.
 * No promotional end date or intro term exists anywhere on the source site, so none is
 * asserted here. Do not add urgency copy to these records.
 */

export type PlanAddOn = {
  label: string;
  /** Rendered struck-through when a discounted value is present. */
  listValue?: string;
  value: string;
};

export type Plan = {
  id: string;
  /** Tier name exactly as published. */
  name: string;
  /** e.g. "1 Gbps" — always paired with the "Up to" qualifier at render time. */
  speed: string;
  speedUnit: string;
  /** Numeric Mbps, used only for structured data and sorting. */
  speedMbps: number;
  /** Price before the AutoPay discount. */
  listPrice: number;
  /** Price with AutoPay enrolled. */
  price: number;
  /** Verbatim card disclaimer. */
  priceNote: string;
  streams: string;
  devices: string;
  wifi?: PlanAddOn;
  /** Verbatim use-case blurb from the card. */
  blurb: string;
  featured: boolean;
  /** Verbatim badge text, when the card carries one. */
  badge?: string;
};

export const AUTOPAY_DISCOUNT = 20;

export const plans: Plan[] = [
  {
    id: 'family',
    name: 'Family',
    speed: '150',
    speedUnit: 'Mbps',
    speedMbps: 150,
    listPrice: 49.99,
    price: 29.99,
    priceNote: 'Price includes a $20 AutoPay discount.',
    streams: '2+ streams',
    devices: '10+ devices',
    blurb: 'Smart home support & online gaming performance',
    featured: false,
  },
  {
    id: 'level-up',
    name: 'Level Up',
    speed: '500',
    speedUnit: 'Mbps',
    speedMbps: 500,
    listPrice: 69.99,
    price: 49.99,
    priceNote: 'Price includes a $20 AutoPay discount.',
    streams: '10+ streams',
    devices: '20+ devices',
    wifi: {
      label: 'Total Home Advanced Wi-Fi',
      listValue: '$15',
      value: '$7.50/mo',
    },
    blurb: 'Full smart home connection, fast large file downloads and uploads, competitive online gaming',
    featured: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    speed: '1',
    speedUnit: 'Gbps',
    speedMbps: 1000,
    listPrice: 99.99,
    price: 79.99,
    priceNote: 'Price includes a $20 AutoPay discount.',
    streams: '50+ streams',
    devices: '30+ devices',
    wifi: {
      label: 'Total Home Advanced Wi-Fi 7',
      value: 'Free',
    },
    blurb: 'Professional online gaming, emerging technology needs, massive file downloads and uploads',
    featured: true,
    badge: 'Recommended',
  },
];

/** Verbatim from /compare-plans "EVERY PLAN INCLUDES". */
export const universalIncludes = [
  'Unlimited data',
  'No contracts',
  'Full fee schedule published',
  '24/7 customer support',
] as const;

/** Verbatim guarantee strip from the homepage. */
export const GUARANTEE_COPY =
  "Love us or your money back! If you aren't 100% satisfied after 30 days, get your money back, guaranteed.";
