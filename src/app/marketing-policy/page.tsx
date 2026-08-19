import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Marketing Policy',
  description:
    'Our advertising standards as an authorized Rise Internet reseller: how we present pricing, disclose ' +
    'our reseller status, and keep claims accurate.',
  alternates: { canonical: '/marketing-policy' },
};

export default function MarketingPolicyPage() {
  return (
    <LegalShell
      title="Marketing Policy"
      summary="The standards we hold our own advertising to — disclosure, pricing accuracy, claim substantiation and channel conduct."
      updated="2026-08-06"
      callout={
        <p>
          <strong>Our first rule:</strong> nobody should ever be confused about who they are dealing
          with. Every advertisement, landing page and call we make identifies{' '}
          {site.resellerName} as an <strong>independent authorized reseller</strong> of{' '}
          {site.carrierName} — never as {site.carrierName} itself.
        </p>
      }
    >
      <section>
        <h2>Scope</h2>
        <p>
          This policy governs all marketing performed by or for {site.resellerLegalName}: paid
          search, paid social, display, video, email, SMS, telephone, print, direct mail, affiliate
          arrangements and this website. It applies equally to any agency, contractor or affiliate
          working on our behalf.
        </p>
        <p>
          It does not govern {site.carrierName}&rsquo;s own advertising, which is{' '}
          {site.carrierName}&rsquo;s responsibility.
        </p>
      </section>

      <section>
        <h2>Reseller disclosure</h2>
        <ul>
          <li>
            Every landing page carries a visible independent-reseller disclosure{' '}
            <strong>above the fold, near the primary headline</strong> — not hidden in a footer, not
            behind a link, not in reduced-contrast text.
          </li>
          <li>
            Advertisement copy and display URLs never imply that we are {site.carrierName}, that we
            are its official website, or that we are its customer service department.
          </li>
          <li>
            We do not register or use domains, business names or social media handles designed to be
            mistaken for {site.carrierName}.
          </li>
          <li>
            Telephone representatives identify {site.resellerName} and our reseller status at the
            start of every call.
          </li>
          <li>
            We link to riseinternet.com so anyone looking for the carrier directly can get there.
          </li>
        </ul>
      </section>

      <section>
        <h2>Pricing accuracy</h2>
        <p>
          Pricing is where advertising most often goes wrong, so we hold ourselves to specific rules:
        </p>
        <ul>
          <li>
            We publish only prices that {site.carrierName} has itself published. We do not estimate,
            round, extrapolate or invent a number to make an advertisement work.
          </li>
          <li>
            Any condition attached to a price is disclosed <strong>with</strong> the price, not
            somewhere else on the page. The AutoPay requirement appears next to every AutoPay rate.
          </li>
          <li>
            Excluded charges are disclosed: the one-time $99 connection fee, the $6.99 monthly
            Carrier Recovery Cost, and equipment rental of up to $15 per month.
          </li>
          <li>
            <strong>We do not manufacture urgency.</strong> The struck-through prices on{' '}
            {site.carrierName} plan cards represent the ongoing AutoPay discount, not a limited-time
            promotion. Because {site.carrierName} publishes no expiry date or introductory term, we
            state none — no countdown timers, no &ldquo;offer ends soon&rdquo;, no fabricated
            deadlines.
          </li>
          <li>
            Strikethrough pricing is used only where {site.carrierName} itself uses it, and the
            struck figure is always the genuine non-discounted rate.
          </li>
          <li>
            Where {site.carrierName} changes its pricing, we update our materials promptly and
            withdraw any advertisement we cannot immediately correct.
          </li>
        </ul>
      </section>

      <section>
        <h2>Speed and performance claims</h2>
        <ul>
          <li>
            Speeds are always presented as maximum &ldquo;up to&rdquo; figures, never as guaranteed
            or typical throughput.
          </li>
          <li>
            Device and stream counts are reproduced as {site.carrierName} publishes them, with the
            &ldquo;+&rdquo; qualifier intact.
          </li>
          <li>
            We do not claim a speed tier is available in a location without confirming it for that
            address.
          </li>
          <li>
            Comparisons to satellite or cable are limited to characteristics {site.carrierName}{' '}
            itself describes, and are framed as general technology differences rather than as
            measured benchmarks against a named competitor.
          </li>
          <li>Wi-Fi 7 claims always note that compatible client devices are required.</li>
        </ul>
      </section>

      <section>
        <h2>Claim substantiation</h2>
        <p>
          Before any factual claim is published, we record its source and the date it was verified.
          Statistics about network scale, coverage or company history are attributed to{' '}
          {site.carrierName}&rsquo;s published materials. Claims we cannot source are not published.
        </p>
        <p>
          <strong>We do not publish testimonials, reviews, ratings or star scores that we have not
          genuinely received.</strong> {site.carrierName} publishes no customer reviews, so we do
          not present any as though it did, and we do not deploy review or rating structured data we
          cannot substantiate. Where we eventually publish customer feedback of our own, it will be
          real, attributed, unedited in substance, and clearly identified as feedback about{' '}
          {site.resellerName}.
        </p>
      </section>

      <section>
        <h2>Advertising platform compliance</h2>
        <p>
          We advertise in accordance with the policies of the platforms we use, including Google Ads
          policies on misrepresentation, unacceptable business practices, affiliate and reseller
          disclosure, and destination-page requirements. In practice:
        </p>
        <ul>
          <li>Landing pages match the advertisement that led to them, with no bait-and-switch.</li>
          <li>Advertised prices are visible on the landing page without further clicks.</li>
          <li>Contact details and business identity are available on every page.</li>
          <li>We do not run advertisements implying an official carrier relationship we lack.</li>
          <li>We do not use trademark terms in ad copy in a manner platform policy prohibits.</li>
        </ul>
      </section>

      <section>
        <h2>Email and SMS conduct</h2>
        <ul>
          <li>We send commercial email only to addresses that opted in, and honour CAN-SPAM.</li>
          <li>
            Every commercial email carries an accurate sender identity, a non-deceptive subject
            line, our physical mailing address, and a working one-click unsubscribe honoured within
            10 business days.
          </li>
          <li>SMS is governed by our <a href="/tcpa-policy">TCPA Policy</a>.</li>
          <li>We never purchase email or phone lists from third-party lead vendors.</li>
        </ul>
      </section>

      <section>
        <h2>Accessibility and fair presentation</h2>
        <p>
          Disclosures are presented in plain language at a legible size and adequate contrast. We do
          not shrink, grey out, collapse, obscure with animation, or place behind a hover state any
          information a consumer needs to understand the offer. Material terms are readable at
          375px viewport width, not only on desktop.
        </p>
      </section>

      <section>
        <h2>Accountability</h2>
        <p>
          Marketing materials are reviewed against this policy before release and re-reviewed
          whenever {site.carrierName} changes its published terms. Any agency or affiliate acting
          for us is contractually bound to this policy and may be audited; failure to comply ends
          the arrangement.
        </p>
        <p>
          If you have seen advertising attributed to us that appears inaccurate or misleading,
          please report it to <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> with a
          screenshot or link. We investigate every report, correct or withdraw the material where
          warranted, and respond to you.
        </p>
      </section>
    </LegalShell>
  );
}
