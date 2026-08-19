/**
 * §8.2 client constants — the single source of truth for identity.
 *
 * ⚠️ OPERATOR ACTION REQUIRED before any ad spend (§11):
 *   1. `entityLegalName` / `registeredAddress` / `email` must be the REAL
 *      registered entity. They must match the Google Ads verified-advertiser
 *      identity string-for-string (§7.1).
 *   2. `tfnDisplay` / `tfnE164` must be a TFN unique to THIS site and program
 *      (§8.2). The number below is a placeholder: the previously-used
 *      1-844-411-7473 is Rise Internet's OWN published support line — routing
 *      order calls to the carrier's support queue fails §12.4 (agents must
 *      answer with the reseller greeting) and poisons call-conversion data.
 *   3. `agreementNoun` must match the signed agreement verbatim — carriers
 *      audit this word (§2.0).
 */
export const site = {
  // ---- operator identity (§2.0, §2.9, §7.1) ----
  entityLegalName: 'Peak Connect Communications LLC',
  brandName: 'Peak Connect',
  /** "retailer" | "dealer" | "agent" | "reseller" — from the signed agreement. */
  agreementNoun: 'reseller',

  // ---- carrier ----
  carrierName: 'Rise Internet',
  carrierFormerName: 'Rise Broadband',
  carrierSite: 'https://www.riseinternet.com',
  /** §7.5 trademark attribution — verified against the carrier's legal footer. */
  carrierTrademarkOwner: 'Rise Internet',
  carrierSupportPhone: '1-844-411-7473',

  // ---- contact (§2.9 — all four required by Google Misrepresentation) ----
  tfnDisplay: '(888) 555-0142',
  tfnE164: '+18885550142',
  email: 'orders@peakconnect.example',
  privacyEmail: 'privacy@peakconnect.example',
  registeredAddress: {
    line1: '1000 Commerce Way, Suite 200',
    city: 'Denver',
    region: 'CO',
    postalCode: '80202',
    country: 'US',
  },

  /** §2.2.6 — must match ad scheduling and actual staffing. State real hours only. */
  hours: 'Mon–Sun 8am–10pm ET',

  // ---- tech (§8.1, §8.3, §8.6) ----
  url: 'https://www.peakconnect.example',
  locale: 'en_US',
  gtagId: 'AW-XXXXXXXXXX',
  conversionLabel: 'CALL_LABEL',
  gscToken: '',

  /** §2.2.8 / §8.1 — FCC Broadband Map vintage, rendered in ZIP result copy. */
  fccDataVintage: 'Mar 2026',

  /*
   * Back-compat aliases. The legal pages and older components read these names;
   * they resolve to the §8.2 canonical fields above so there is still exactly
   * one source of truth. Prefer the canonical names in new code.
   */
  get resellerName() {
    return this.brandName;
  },
  get resellerLegalName() {
    return this.entityLegalName;
  },
  get salesPhone() {
    return this.tfnDisplay;
  },
  get salesPhoneHref() {
    return `tel:${this.tfnE164}`;
  },
  get supportEmail() {
    return this.email;
  },
  get mailingAddress() {
    return this.registeredAddress;
  },
} as const;

/** Convenience: the tel: href used by every `[data-call-cta]` anchor. */
export const TEL_HREF = `tel:${site.tfnE164}`;

/** §2.0 top bar. */
export const TOP_DISCLOSURE =
  `Independent Authorized ${site.agreementNoun.replace(/^./, (c) => c.toUpperCase())} of ` +
  `${site.carrierName}® — Not ${site.carrierName}.`;

/** §2.2.1 hero eyebrow — same constant, point of persuasion. */
export const HERO_EYEBROW =
  `Independent Authorized ${site.agreementNoun.replace(/^./, (c) => c.toUpperCase())}`;

/** §7.1 full footer disclosure. */
export const RESELLER_DISCLOSURE =
  `${site.entityLegalName} is an independent authorized ${site.agreementNoun} of ` +
  `${site.carrierName} services. ${site.entityLegalName} is not ${site.carrierName} and does not ` +
  `own the ${site.carrierName} trademarks. ${site.carrierName}, ${site.carrierFormerName} and ` +
  `related marks are trademarks of ${site.carrierTrademarkOwner}, used under authorization. ` +
  `Service subject to availability; not all offers available in all areas.`;

/** §7.5 trademark attribution line. */
export const TRADEMARK_LINE =
  `${site.carrierName} and ${site.carrierFormerName} are trademarks of ` +
  `${site.carrierTrademarkOwner}. eero is a trademark of Amazon.com, Inc. or its affiliates.`;

/** §7.4 pricing disclaimer, rendered under every plan section. */
export const PRICING_DISCLAIMER =
  'Promotional rates shown include a $20 AutoPay discount and require enrollment in AutoPay; ' +
  'without AutoPay the rates are $49.99, $69.99 and $99.99 per month. Plus taxes, fees and ' +
  'surcharges. A one-time $99 non-refundable connection fee applies at the time of sale, along ' +
  'with a $6.99 monthly Carrier Recovery Cost and equipment rental of up to $15 per month as ' +
  'determined by your service plan. Speeds up to the rate shown; actual speeds vary. ' +
  'Availability, pricing and speeds vary by address. Call to confirm availability at your ' +
  `address. Pricing as of Aug 2026; subject to change by ${site.carrierName}.`;
