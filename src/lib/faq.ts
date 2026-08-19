/**
 * FAQ content. Every answer is grounded in the carrier's own published FAQ at
 * riseinternet.com/faqs (captured 2026-08-06, see docs/scrape-report.md §5) or in the
 * Additional Fees and Payment Terms Disclosure Statement (Last Updated 5/26/2026).
 *
 * Answers are written for AEO/GEO: the first sentence is a complete, extractable
 * direct answer. Reseller-specific questions are marked `origin: 'reseller'` and make
 * no claim about carrier policy.
 */

export type FaqItem = {
  id: string;
  question: string;
  /** Plain-text answer used for both rendering and FAQPage structured data. */
  answer: string;
  origin: 'carrier' | 'reseller' | 'fees';
};

/**
 * Full authored set. Only the five entries listed in `FEATURED_IDS` below are
 * rendered and fed to the FAQPage schema — the rest are retained here so they
 * can be promoted later without re-researching the source.
 */
const faqLibrary: FaqItem[] = [
  {
    id: 'who-are-we',
    question: 'Is this the official Rise Internet website?',
    answer:
      'No. This site is operated by an independent authorized reseller of Rise Internet services, not by Rise ' +
      'Internet itself. We take your order and coordinate your installation; the network, the service agreement ' +
      'and your monthly billing relationship are with Rise Internet. Pricing and terms shown here are set by ' +
      'Rise Internet and are subject to change. The official site is riseinternet.com.',
    origin: 'reseller',
  },
  {
    id: 'rebrand',
    question: 'What happened to Rise Broadband?',
    answer:
      'Rise Broadband is now Rise Internet. The company rebranded, and risebroadband.com redirects to ' +
      'riseinternet.com. It is the same network, the same coverage footprint and the same support line — only ' +
      'the name changed. If you were a Rise Broadband customer, your service is Rise Internet service.',
    origin: 'carrier',
  },
  {
    id: 'contracts',
    question: 'Are there contracts or early termination fees?',
    answer:
      'No. Rise Internet offers service with no contracts and no early termination fees. You are not locked into ' +
      'a term, and you can cancel at any time without a termination penalty. A $50 equipment restocking fee ' +
      'applies when you cancel, which does not apply if you are swapping equipment as part of a plan change.',
    origin: 'carrier',
  },
  {
    id: 'total-cost',
    question: 'What will I actually pay each month?',
    answer:
      'Your monthly bill is the plan rate plus a $6.99 Carrier Recovery Cost and an equipment rental fee of up ' +
      'to $15 per month, as determined by your service plan. The advertised plan rates of $29.99, $49.99 and ' +
      '$79.99 already include a $20 AutoPay discount and require AutoPay enrollment; without AutoPay the rates ' +
      'are $49.99, $69.99 and $99.99. A one-time, non-refundable $99 connection fee is charged at the time of ' +
      'sale. Rise Internet bills in advance, so payment is due on the first day of each service plan month.',
    origin: 'fees',
  },
  {
    id: 'data-caps',
    question: 'Are there data limits or overage fees?',
    answer:
      'All current Rise Internet plans include unlimited data with no overage fees. Older legacy plans may still ' +
      'carry data limits, where overage is billed at $15 per 10GB increment up to $200 per month. If you have ' +
      'been a customer for a while and are unsure which plan you are on, it is worth reviewing — the newer plans ' +
      'are unlimited.',
    origin: 'carrier',
  },
  {
    id: 'fixed-wireless',
    question: 'What is fixed wireless internet, and how is it different from satellite?',
    answer:
      'Fixed wireless connects your home to nearby Rise Internet ground equipment using licensed wireless ' +
      'spectrum, rather than bouncing a signal off a satellite in orbit. Because the signal travels a short ' +
      'distance to a local tower instead of thousands of miles into space, fixed wireless delivers noticeably ' +
      'lower lag and more consistent response times for video calls, streaming and online gaming. Rise Internet ' +
      'also offers fiber in some areas, which runs a dedicated underground line directly to your home.',
    origin: 'carrier',
  },
  {
    id: 'availability',
    question: 'How do I find out if service is available at my address?',
    answer:
      'Enter your street address, city or ZIP code in the availability checker on this page, or call ' +
      '1-844-411-7473. Availability is determined address by address, not by ZIP code alone — fixed wireless ' +
      'depends on line of sight to nearby Rise equipment, and fiber depends on whether the underground plant ' +
      'has reached your street. Rise Internet currently serves Colorado, Idaho, Illinois, Iowa, Missouri, ' +
      'Nebraska, Nevada, Oklahoma, Texas and Utah.',
    origin: 'reseller',
  },
  {
    id: 'self-install',
    question: 'Can I install the service myself?',
    answer:
      'No, self-install is not available. Every Rise Internet installation is performed by a trained technician ' +
      'who assesses your home, surroundings and any obstacles so the service performs its best from day one. ' +
      'An adult 18 or older must be present for the installation and walkthrough. Most installations take a few ' +
      'hours, and the technician reviews the plan and equipment placement with you before any work begins.',
    origin: 'carrier',
  },
  {
    id: 'outdoor-work',
    question: 'Will installation require digging or outdoor work?',
    answer:
      'Outdoor work is required; whether digging is required depends on your service type. Fixed wireless is ' +
      'installed entirely above ground, so no digging is involved. Fiber uses an underground line, which may ' +
      'require digging on your property. Either way, both services terminate at a device inside your home where ' +
      'your router is set up, and your technician explains exactly what is required before starting.',
    origin: 'carrier',
  },
  {
    id: 'credit-check',
    question: 'Is there a credit check, and what if I do not pass it?',
    answer:
      'Yes, orders are subject to a soft credit and fraud check, which does not affect your credit score. If you ' +
      'do not pass, you can in most cases still proceed with a $200 refundable deposit. You may also decline the ' +
      'check entirely and pay the $200 deposit instead. The deposit is refunded through the MyRise portal after ' +
      '12 months of continuous AutoPay enrollment with on-time payments and no seasonal suspensions, or upon ' +
      'cancellation, minus any balance owed.',
    origin: 'carrier',
  },
  {
    id: 'guarantee',
    question: 'How does the 30-day money-back guarantee work?',
    answer:
      'New customers using a Rise-managed router can cancel within the first 30 days for a full refund, ' +
      'including the $99 connection fee. The guarantee is designed so you can try the service risk-free. Note ' +
      'that it applies to Rise-managed routers — if you supply your own router, the guarantee does not apply.',
    origin: 'carrier',
  },
  {
    id: 'own-router',
    question: 'Can I use my own router instead of renting equipment?',
    answer:
      'Yes, you may use your own router, though a Rise-managed router is recommended. A Rise-managed router ' +
      'stays secure and automatically up to date, and it lets support diagnose and fix problems remotely instead ' +
      'of dispatching a technician. The 30-day money-back guarantee also requires a Rise-managed router.',
    origin: 'carrier',
  },
  {
    id: 'wifi-mesh',
    question: 'What is Total Home Advanced Wi-Fi, and do I need it?',
    answer:
      'Total Home Advanced Wi-Fi is Rise Internet eero 7 mesh equipment with eero Secure features included at no ' +
      'extra cost. It is included free on the Pro plan and available for $7.50 per month on the Level Up plan. ' +
      'Each eero 7 unit covers up to 2,000 square feet and supports 120+ connected devices, so if you live in a ' +
      'larger home, have thick walls or multiple stories, additional units create a true mesh network that ' +
      'reaches every room.',
    origin: 'carrier',
  },
  {
    id: 'apartment',
    question: 'Can I get service in an apartment or rental property?',
    answer:
      'Yes, many apartments and rental homes can get Rise Internet service. Because installation requires small ' +
      'modifications where service has not been installed before, you will need to confirm with your property ' +
      'manager or landlord that they are aware and approve. Our team can help explain the process to them if ' +
      'that would be useful.',
    origin: 'carrier',
  },
  {
    id: 'slow',
    question: 'What happens if my internet is slower than the speed I bought?',
    answer:
      'Contact support and many speed issues can be resolved over the phone. If the problem persists, Rise ' +
      'Internet sends a technician to evaluate your equipment and restore optimal performance free of charge. ' +
      'Advertised speeds are maximum "up to" figures and are not guaranteed; actual speeds vary with your ' +
      'location, your equipment and network conditions.',
    origin: 'carrier',
  },
  {
    id: 'moving',
    question: 'Can I transfer my service if I move?',
    answer:
      'Often, yes. If Rise Internet can provide service at your new address, your service is moved rather than ' +
      'cancelled. If service is not available at the new address, your account is closed on the date you choose. ' +
      'It is worth checking the new address before you schedule the move.',
    origin: 'carrier',
  },
  {
    id: 'equipment-return',
    question: 'What do I have to return if I cancel?',
    answer:
      'Only the indoor equipment and cables, shipped back with a pre-paid USPS return label, one device per box. ' +
      'With fixed wireless service the exterior dish stays in place — no climbing on the roof — and a Rise ' +
      'technician removes any small external components within about two weeks after your account closes, ' +
      'without you needing to be home. Unreturned indoor equipment is billed at $150 per router unit.',
    origin: 'carrier',
  },
  {
    id: 'how-we-help',
    question: 'Why order through an authorized reseller instead of direct?',
    answer:
      'The plans, pricing and installation are identical either way — we sell the same Rise Internet service on ' +
      'the same published terms. What a reseller adds is a single point of contact who checks availability ' +
      'across both fixed wireless and fiber at your address, explains which tier actually fits your household, ' +
      'and coordinates the install. There is no reseller markup and no additional fee for ordering through us.',
    origin: 'reseller',
  },
];

/**
 * The five questions actually shown on the page, in display order. Chosen for
 * buying-decision weight: who we are, real monthly cost, commitment, what the
 * technology is, and how to find out if it reaches you.
 *
 * Keep this list and the rendered accordion in sync — the FAQPage structured
 * data is generated from it, and schema must never describe content a visitor
 * cannot see on the page.
 */
/*
 * §10 requires 7–9 rendered questions covering every archetype. The mapping,
 * in render order:
 *   who-are-we      → identity / "is this the official site"
 *   how-we-help     → why call us rather than order direct
 *   availability    → can I even get it
 *   total-cost      → what the bill actually comes to
 *   contracts       → term, ETF, cancellation
 *   fixed-wireless  → what the technology is
 *   self-install    → what installation involves
 *   own-router      → equipment and ownership
 *   data-caps       → usage limits
 */
const FEATURED_IDS = [
  'who-are-we',
  'how-we-help',
  'availability',
  'total-cost',
  'contracts',
  'fixed-wireless',
  'self-install',
  'own-router',
  'data-caps',
] as const;

export const faqItems: FaqItem[] = FEATURED_IDS.map((id) => {
  const found = faqLibrary.find((item) => item.id === id);
  if (!found) throw new Error(`FAQ id "${id}" is missing from faqLibrary`);
  return found;
});
