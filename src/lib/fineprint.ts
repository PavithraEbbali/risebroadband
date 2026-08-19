/**
 * §2.5 fine-print grid data.
 *
 * Every figure here is verbatim from the carrier's "Additional Fees and Payment
 * Terms Disclosure Statement" (Last Updated 5/26/2026), captured in
 * docs/scrape-report.md §3. Nothing is estimated, rounded or inferred.
 *
 * The point of this section is the one Google Ads reviewers care about most:
 * the $29.99 headline is not what the first bill says. Recurring charges are
 * separated from one-time and conditional ones so a visitor can total the real
 * monthly cost without reading a PDF.
 */

export type FeeRow = {
  label: string;
  cost: string;
  when: string;
};

/** Charges that land on the bill every month for a typical new order. */
export const recurringFees: FeeRow[] = [
  {
    label: 'Plan rate with AutoPay',
    cost: '$29.99 – $79.99',
    when: 'Monthly. Requires AutoPay enrollment.',
  },
  {
    label: 'Plan rate without AutoPay',
    cost: '$49.99 – $99.99',
    when: 'Monthly, if AutoPay is not enrolled or later cancelled.',
  },
  {
    label: 'Carrier Recovery Cost',
    cost: '$6.99',
    when: 'Monthly, per service plan.',
  },
  {
    label: 'Equipment Rental Fee',
    cost: 'Up to $15',
    when: 'Monthly, set by your service plan.',
  },
  { label: 'Paper Statement Fee', cost: '$5', when: 'Monthly, unless you use paperless billing.' },
];

/** Charged once, at or around the start of service. */
export const oneTimeFees: FeeRow[] = [
  {
    label: 'Connection Fee',
    cost: '$99',
    when: 'At time of sale. Non-refundable.',
  },
  {
    label: 'Refundable deposit',
    cost: '$200',
    when:
      'Only if the soft credit and fraud check is bypassed or not passed. Refundable through MyRise ' +
      'after 12 months of continuous AutoPay and on-time payments with no seasonal suspensions.',
  },
];

/** Only billed if the described situation occurs. */
export const conditionalFees: FeeRow[] = [
  { label: 'Late Payment Fee', cost: 'Up to $20', when: 'Per month, after the due date.' },
  {
    label: 'Reconnection Fee',
    cost: '$35 or $99',
    when:
      '$35 plus first month before equipment retrieval; $99 plus first month after retrieval. ' +
      'Restoring service following non-payment.',
  },
  { label: 'Restocking Fee', cost: '$50', when: 'Following cancellation. Waived on a plan-change equipment swap.' },
  { label: 'Unreturned Router Fee', cost: '$150', when: 'Per unit, if not returned within 30 days of cancellation.' },
  {
    label: 'Unrecoverable Equipment Fee',
    cost: '$700',
    when: 'Fixed wireless only, if equipment is missing or damaged within 30 days after cancellation.',
  },
  { label: 'Convenience Fee', cost: '$10', when: 'Paying by phone with a representative.' },
];

/**
 * Terms that change what a visitor owes but are not line items. Each is
 * traceable to the carrier's published FAQ or disclosure statement.
 */
export const materialTerms = [
  'No annual contract and no early termination fee.',
  'Rise Internet bills fee-in-advance: payment is due on the first day of the service plan, and service may be suspended until it is paid.',
  'The 30-day money-back guarantee applies to new customers on Rise-managed routers, and the refund includes the connection fee.',
  'Speeds shown are maximum "up to" rates. Actual speeds vary by location, equipment and network conditions.',
  'Taxes, government fees and surcharges are additional and vary by address.',
] as const;
