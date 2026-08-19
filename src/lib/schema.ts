import { faqItems } from './faq';
import { plans } from './plans';
import { site } from './site';
import { serviceStates } from './trust';

/**
 * Structured data. Every claim mirrors what is rendered on the page — no schema
 * asserts a price, rating or offer that a visitor cannot also see.
 *
 * Deliberately omitted: AggregateRating and Review. The carrier publishes no
 * reviews (docs/scrape-report.md §8) and fabricating rating markup is both a
 * structured-data violation and a Google Ads misrepresentation risk.
 */

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

/**
 * Organization, deliberately NOT LocalBusiness.
 *
 * LocalBusiness asserts premises that customers visit and makes the entity
 * eligible for local-pack placement. This is a telephone sales operation for a
 * carrier's network, so claiming it would be a misrepresentation — and it would
 * invite exactly the "are you the carrier's local office?" confusion the whole
 * disclosure architecture exists to prevent.
 *
 * `parentOrganization` is likewise absent on purpose: we are not owned by, nor a
 * division of, the carrier. The relationship is expressed only through the
 * Offer's `seller`, which is what it actually is.
 */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: `${site.brandName} — Authorized ${site.carrierName} Reseller`,
    legalName: site.entityLegalName,
    url: site.url,
    telephone: site.tfnDisplay,
    email: site.email,
    description:
      `${site.entityLegalName} is an independent authorized ${site.agreementNoun} of ` +
      `${site.carrierName} fixed wireless and fiber internet service. It is not ` +
      `${site.carrierName} and does not own the ${site.carrierName} trademarks.`,
    disambiguatingDescription:
      `Independent reseller. Not affiliated with, endorsed by, or operated by ${site.carrierName}.`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.tfnE164,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.mailingAddress.line1,
      addressLocality: site.mailingAddress.city,
      addressRegion: site.mailingAddress.region,
      postalCode: site.mailingAddress.postalCode,
      addressCountry: site.mailingAddress.country,
    },
    areaServed: serviceStates.map((name) => ({
      '@type': 'State',
      name,
    })),
    /* Must match `site.hours` and the ad schedule. A 00:00-23:59 claim here
       while the line is staffed 8am-10pm is the kind of mismatch that produces
       abandoned calls and a policy complaint. */
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '22:00',
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: site.url,
    name: `${site.brandName} — Authorized ${site.carrierName} Reseller`,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

/**
 * One Product per speed tier. `price` is the AutoPay rate actually displayed on
 * the card, and the AutoPay condition is stated in the offer description so the
 * markup cannot be read as an unconditional price.
 */
export function planSchemas() {
  return plans.map((plan) => ({
    '@type': 'Product',
    '@id': `${site.url}/#plan-${plan.id}`,
    name: `${site.carrierName} ${plan.name} — up to ${plan.speed} ${plan.speedUnit}`,
    description:
      `${plan.blurb}. Supports ${plan.streams} of simultaneous HD video streaming and ` +
      `${plan.devices} connected devices. Unlimited data, no contract.`,
    category: 'Internet Service Plan',
    brand: { '@type': 'Brand', name: site.carrierName },
    offers: {
      '@type': 'Offer',
      price: plan.price.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/LimitedAvailability',
      seller: { '@id': ORG_ID },
      description:
        `$${plan.price.toFixed(2)} per month with AutoPay enrollment ` +
        `($${plan.listPrice.toFixed(2)} without AutoPay). Excludes a one-time $99 connection fee, ` +
        'a $6.99 monthly Carrier Recovery Cost, and equipment rental of up to $15 per month. ' +
        'Subject to availability at the service address.',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: plan.price.toFixed(2),
        priceCurrency: 'USD',
        unitCode: 'MON',
        billingIncrement: 1,
      },
      eligibleRegion: serviceStates.map((name) => ({ '@type': 'State', name })),
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Maximum download speed',
        value: `${plan.speed} ${plan.speedUnit}`,
      },
      { '@type': 'PropertyValue', name: 'Data allowance', value: 'Unlimited' },
      { '@type': 'PropertyValue', name: 'Contract required', value: 'No' },
    ],
  }));
}

export function faqSchema() {
  return {
    '@type': 'FAQPage',
    '@id': `${site.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema() {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Rise Internet plans', item: `${site.url}/#plans` },
    ],
  };
}

/** Single @graph payload — one script tag beats five. */
export function homeGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema(),
      ...planSchemas(),
      faqSchema(),
    ],
  };
}
