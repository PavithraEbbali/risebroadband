/**
 * Trust signals and coverage data. All figures sourced from riseinternet.com
 * /about (animated counters) and /areas-we-serve on 2026-08-06.
 * See docs/scrape-report.md §6.
 */

export const trustStats = [
  { value: '21+', unit: 'years', label: 'Serving rural and small-town America' },
  { value: '4.2M', unit: 'households', label: 'Reached across the Rise Internet network' },
  { value: '10', unit: 'states', label: 'Fixed wireless and fiber coverage footprint' },
  { value: '24/7', unit: 'support', label: 'Customer support, every hour of every day' },
] as const;

/** Verbatim state list from /areas-we-serve. */
export const serviceStates = [
  'Colorado',
  'Idaho',
  'Illinois',
  'Iowa',
  'Missouri',
  'Nebraska',
  'Nevada',
  'Oklahoma',
  'Texas',
  'Utah',
] as const;

/**
 * Facts strip. Replaces the testimonial block that the source site does not have —
 * every item below is a sourced fact, not a customer quote.
 *
 * Rendered as a static wrapped list. This drove an infinite marquee until §4
 * banned it; the export name is kept because it is referenced across the trust
 * band and its contents never depended on the presentation.
 */
export const marqueeItems: { text: string; kind: 'stat' | 'state' | 'claim' }[] = [
  { text: '21+ years connecting rural America', kind: 'stat' },
  { text: 'Colorado', kind: 'state' },
  { text: 'Unlimited data', kind: 'claim' },
  { text: 'Idaho', kind: 'state' },
  { text: '4.2M households served', kind: 'stat' },
  { text: 'Illinois', kind: 'state' },
  { text: 'No contracts', kind: 'claim' },
  { text: 'Iowa', kind: 'state' },
  { text: '24/7 customer support', kind: 'stat' },
  { text: 'Missouri', kind: 'state' },
  { text: 'Full fee schedule published', kind: 'claim' },
  { text: 'Nebraska', kind: 'state' },
  { text: '30-day money-back guarantee', kind: 'stat' },
  { text: 'Nevada', kind: 'state' },
  { text: 'Fixed wireless + fiber', kind: 'claim' },
  { text: 'Oklahoma', kind: 'state' },
  { text: 'Local technicians', kind: 'claim' },
  { text: 'Texas', kind: 'state' },
  { text: 'Speeds up to 1 Gbps', kind: 'stat' },
  { text: 'Utah', kind: 'state' },
];

/** Differentiators, paraphrased from /about pillars and /business bullets. */
export const whyPoints = [
  {
    id: 'reach',
    title: 'Built for where the cable companies stopped',
    body:
      'Rise Internet is a fixed wireless and fiber network engineered for rural and small-town addresses — the ' +
      'places cable and DSL never reached. Fixed wireless connects your home to nearby Rise equipment over ' +
      'licensed spectrum, with none of the latency that comes from bouncing a signal off a satellite.',
  },
  {
    id: 'honest',
    title: 'The price on the card is the price of the plan',
    body:
      'No contracts and no early termination fees. Every current plan includes unlimited data. The monthly rate ' +
      'reflects AutoPay enrollment, and the connection, equipment and regulatory fees are disclosed up front ' +
      'rather than discovered on your first statement.',
  },
  {
    id: 'people',
    title: 'Technicians who live where you live',
    body:
      'Installations are performed by trained local technicians — self-install is not offered, because a person ' +
      'who can survey your property, walls and line of sight gets you a better connection than a box on a ' +
      'doorstep ever will. Support lines are staffed 24 hours a day.',
  },
  {
    id: 'risk',
    title: 'Thirty days to change your mind',
    body:
      'New customers on a Rise-managed router get a 30-day money-back guarantee. If the service is not right ' +
      'for your home, cancel within the first 30 days for a full refund — the connection fee included.',
  },
] as const;
