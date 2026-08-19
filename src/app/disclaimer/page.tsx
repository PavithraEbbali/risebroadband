import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { PRICING_DISCLAIMER, RESELLER_DISCLOSURE, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Independent authorized reseller disclosure, pricing accuracy statement, and limitation of liability ' +
    'for this Rise Internet reseller website.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <LegalShell
      title="Disclaimer"
      summary="Who operates this website, what we do and do not control, and how to read the pricing shown here."
      updated="2026-08-06"
      callout={
        <>
          <p>
            <strong>This is not the official {site.carrierName} website.</strong>
          </p>
          <p>{RESELLER_DISCLOSURE}</p>
          <p>
            The official {site.carrierName} website is{' '}
            <a href={site.carrierSite} target="_blank" rel="noopener noreferrer nofollow">
              riseinternet.com
            </a>
            . If you are looking for {site.carrierName} corporate information, existing-customer
            account access, billing support or technical support, please go there directly or call
            the number on your bill.
          </p>
        </>
      }
    >
      <section>
        <h2>Our role as an authorized reseller</h2>
        <p>
          This website is operated by an independent business that is authorized to market and sell{' '}
          {site.carrierName} residential internet service. The operator of this website is not{' '}
          {site.carrierName} itself, is not a subsidiary, division, agent or joint venture of{' '}
          {site.carrierName}, and does not speak on {site.carrierName}&rsquo;s behalf.
        </p>
        <p>
          What we do is limited and specific. We help you determine whether service is available at
          your address, explain the published plans so you can choose one that fits your household,
          and submit your order. Once your order is submitted:
        </p>
        <ul>
          <li>
            The network, the equipment and the physical installation are provided by{' '}
            {site.carrierName} and its technicians.
          </li>
          <li>
            Your service agreement is with {site.carrierName}, on {site.carrierName}&rsquo;s
            published terms and conditions, not with us.
          </li>
          <li>
            Your billing relationship, your account portal and your monthly statement are with{' '}
            {site.carrierName}.
          </li>
          <li>
            Technical support, outage response, service credits and repairs are provided by{' '}
            {site.carrierName}.
          </li>
        </ul>
        <p>
          We cannot modify {site.carrierName}&rsquo;s prices, waive its fees, guarantee its
          installation timelines, or bind it to any commitment. Any statement we make about the
          service is a good-faith description of {site.carrierName}&rsquo;s published terms and is
          superseded by those terms in the event of a conflict.
        </p>
      </section>

      <section>
        <h2>The Rise Broadband to Rise Internet name change</h2>
        <p>
          {site.carrierFormerName} has been renamed {site.carrierName}. The former domain
          risebroadband.com now redirects to riseinternet.com. It is the same network, the same
          coverage footprint and the same support organization operating under a new name. We
          reference both names on this site because many customers still search for the former one.
          Neither name belongs to us.
        </p>
      </section>

      <section>
        <h2>Accuracy of pricing, speeds and offers</h2>
        <p>
          All plan names, speeds, monthly rates, add-on prices, fees and terms shown on this site
          are transcribed from {site.carrierName}&rsquo;s own published materials as of the date
          noted above. We do not set them and we do not mark them up. You pay the same published
          rate ordering through us as you would ordering direct.
        </p>
        <p>
          <strong>{PRICING_DISCLAIMER}</strong>
        </p>
        <p>
          {site.carrierName} may change pricing, plan structure, promotional terms, fees and
          coverage at any time and without notifying us. Prices can also vary by market and by
          service address. Because of this, the figures on this page are indicative, not a binding
          quote. The rate you are actually charged is the rate confirmed to you by{' '}
          {site.carrierName} at the time your order is accepted, and it appears on your service
          agreement and your first statement.
        </p>
        <p>
          If you find any figure on this site that does not match {site.carrierName}&rsquo;s current
          published terms, please tell us at{' '}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> and we will correct it.
        </p>
      </section>

      <section>
        <h2>Speed claims</h2>
        <p>
          Advertised speeds are maximum &ldquo;up to&rdquo; figures. They are not guaranteed
          minimums and they are not a promise of throughput at any given moment. Actual speeds you
          experience depend on factors including your distance from and line of sight to{' '}
          {site.carrierName} equipment, the technology serving your address (fixed wireless or
          fiber), your router and its placement, the number of devices on your network, the
          capabilities of the device you are testing with, wiring inside your home, network
          congestion, weather, and the performance of the remote server you are connecting to.
        </p>
        <p>
          Wi-Fi 7 speeds require client devices that themselves support Wi-Fi 7. Wireless speeds are
          always lower than the wired speed of the same connection.
        </p>
      </section>

      <section>
        <h2>Availability is not guaranteed</h2>
        <p>
          Service availability is determined address by address, not by ZIP code, city or state.
          Appearing within a state we list does not mean service can be delivered to your specific
          address. Fixed wireless requires a viable radio path to nearby {site.carrierName} ground
          equipment, which can be blocked by terrain, trees or buildings. Fiber requires that
          underground plant has already been built to your street.
        </p>
        <p>
          Submitting an address through this site is a request to check availability. It is not an
          order, it does not reserve service, and it does not create any obligation on either side
          until {site.carrierName} accepts an order and you agree to its terms.
        </p>
      </section>

      <section>
        <h2>No professional advice</h2>
        <p>
          Content on this site is general information about internet service. It is not legal,
          financial, tax or technical engineering advice, and it should not be relied on as the sole
          basis for a decision that matters to your business or household.
        </p>
      </section>

      <section>
        <h2>Third-party links and trademarks</h2>
        <p>
          This site links to riseinternet.com and to other third-party resources. We do not control
          those sites, we are not responsible for their content, accuracy or privacy practices, and
          a link is not an endorsement. {site.carrierName}, {site.carrierFormerName}, eero, eero
          Secure and all related names and logos are the property of their respective owners. See
          our <a href="/trademarks">Trademarks</a> page for the full statement.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
          To the fullest extent permitted by law, {site.resellerLegalName} disclaims all warranties,
          express or implied, including implied warranties of merchantability, fitness for a
          particular purpose and non-infringement, with respect to this website and its content.
        </p>
        <p>
          To the fullest extent permitted by law, {site.resellerLegalName} will not be liable for
          any indirect, incidental, special, consequential or punitive damages, or for any loss of
          profits, revenue, data or goodwill, arising from your use of this website or from your
          reliance on information published on it. Nothing in this disclaimer limits liability that
          cannot be limited under applicable law.
        </p>
        <p>
          Service outages, installation delays, equipment failures, billing disputes and service
          quality are the responsibility of {site.carrierName} under your agreement with{' '}
          {site.carrierName}.
        </p>
      </section>

      <section>
        <h2>Changes to this disclaimer</h2>
        <p>
          We may update this disclaimer to reflect changes in our practices or in{' '}
          {site.carrierName}&rsquo;s published terms. The &ldquo;last updated&rdquo; date at the top
          of this page reflects the most recent revision. Continued use of this site after a change
          constitutes acceptance of the revised disclaimer.
        </p>
      </section>
    </LegalShell>
  );
}
