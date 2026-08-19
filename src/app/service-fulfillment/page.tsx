import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Fulfillment',
  description:
    'How a Rise Internet order is fulfilled: availability checks, credit checks, installation, fees, ' +
    'the 30-day guarantee, cancellation and equipment return.',
  alternates: { canonical: '/service-fulfillment' },
};

export default function ServiceFulfillmentPage() {
  return (
    <LegalShell
      title="Service Fulfillment"
      summary="What happens after you submit an address, who does what, what it costs, and how cancellation and returns work."
      updated="2026-08-06"
      callout={
        <p>
          <strong>Division of responsibility.</strong> {site.resellerName} checks availability,
          explains the plans and places your order. {site.carrierName} performs the installation,
          provides the network and equipment, holds your service agreement, and bills you directly.
        </p>
      }
    >
      <section>
        <h2>Step 1 — Availability check</h2>
        <p>
          You submit a street address, city or ZIP code. We check it against {site.carrierName}{' '}
          coverage for both fixed wireless and fiber. Availability is determined address by address:
          being inside a state we serve does not guarantee your specific address is reachable.
        </p>
        <ul>
          <li>
            <strong>Fixed wireless</strong> requires a viable radio path to nearby{' '}
            {site.carrierName} ground equipment. Terrain, trees and buildings can block it.
          </li>
          <li>
            <strong>Fiber</strong> requires that underground plant has already been built to your
            street.
          </li>
        </ul>
        <p>
          Submitting an address is a request for information. It is not an order, it does not
          reserve capacity, and it creates no obligation on either side. We currently serve
          addresses within Colorado, Idaho, Illinois, Iowa, Missouri, Nebraska, Nevada, Oklahoma,
          Texas and Utah.
        </p>
      </section>

      <section>
        <h2>Step 2 — Plan selection and order placement</h2>
        <p>
          We confirm which speed tiers are actually deliverable at your address and what each costs,
          including the fees below. When you decide, we submit the order to {site.carrierName}. From
          that point your agreement is with {site.carrierName} on its published terms, and{' '}
          {site.carrierName} — not us — accepts or declines the order.
        </p>
        <p>
          <strong>There is no reseller markup and no fee for ordering through us.</strong> You pay
          the same published {site.carrierName} rate either way.
        </p>
      </section>

      <section>
        <h2>Step 3 — Soft credit and fraud check</h2>
        <p>
          {site.carrierName} runs a soft credit and fraud check on new orders. A soft check does not
          affect your credit score.
        </p>
        <ul>
          <li>
            If you do not pass, you can in most circumstances still proceed with a{' '}
            <strong>$200 refundable deposit</strong>.
          </li>
          <li>
            You may decline the check entirely and pay the $200 refundable deposit instead.
          </li>
          <li>
            The deposit is refunded through the MyRise portal after 12 months of continuous AutoPay
            enrollment with on-time payments and no seasonal suspensions, or upon cancellation, less
            any balance owed at that time.
          </li>
          <li>
            In some circumstances {site.carrierName} may be unable to provide service, in which case
            you will receive more information by mail within a few business days.
          </li>
        </ul>
      </section>

      <section>
        <h2>Step 4 — Installation</h2>
        <p>
          <strong>Self-install is not available.</strong> All installations are performed by a
          trained {site.carrierName} technician who assesses your home, surroundings and any
          obstacles so the connection performs correctly from day one.
        </p>
        <ul>
          <li>
            <strong>An adult 18 or older must be present</strong> for the installation and
            walkthrough.
          </li>
          <li>Most installations take a few hours.</li>
          <li>
            The technician reviews the plan and explains equipment placement before any work begins.
          </li>
          <li>
            <strong>Fixed wireless</strong> is installed entirely above ground — no digging.
          </li>
          <li>
            <strong>Fiber</strong> uses an underground line, which may require digging on the
            property.
          </li>
          <li>
            Either service terminates at an indoor device where your router or routers are set up.
          </li>
          <li>
            <strong>Renters:</strong> confirm with your property manager or landlord before the
            appointment. Installation requires small modifications where service has not previously
            been installed.
          </li>
        </ul>
      </section>

      <section>
        <h2>Fees and charges</h2>
        <p>
          The following are {site.carrierName}&rsquo;s published fees, as set out in its Additional
          Fees and Payment Terms Disclosure Statement. They are set by {site.carrierName}, not by
          us, and are subject to change.
        </p>
        <table>
          <thead>
            <tr>
              <th>Charge</th>
              <th>When it applies</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Connection fee</td>
              <td>At time of sale. Non-refundable.</td>
              <td>$99</td>
            </tr>
            <tr>
              <td>Equipment rental</td>
              <td>Monthly, as determined by your service plan</td>
              <td>Up to $15/mo</td>
            </tr>
            <tr>
              <td>Carrier Recovery Cost</td>
              <td>Monthly</td>
              <td>$6.99</td>
            </tr>
            <tr>
              <td>Refundable deposit</td>
              <td>If the credit check is declined or bypassed</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Restocking fee</td>
              <td>On cancellation. Not charged when swapping as part of a plan change.</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Unreturned router</td>
              <td>Indoor equipment not returned within 30 days</td>
              <td>$150 per unit</td>
            </tr>
            <tr>
              <td>Unrecoverable equipment (fixed wireless)</td>
              <td>If equipment is missing, damaged or unrecoverable</td>
              <td>$700</td>
            </tr>
            <tr>
              <td>Late payment fee</td>
              <td>After the due date</td>
              <td>Up to $20/mo</td>
            </tr>
            <tr>
              <td>Reconnection fee</td>
              <td>To restore an account disconnected for nonpayment</td>
              <td>$35 or $99, plus first month</td>
            </tr>
            <tr>
              <td>Paper statement</td>
              <td>Monthly, if you opt in to mailed statements</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Convenience fee</td>
              <td>Phone payment taken by a call-centre representative</td>
              <td>$10</td>
            </tr>
          </tbody>
        </table>
        <p>
          {site.carrierName} bills in advance: payment is due on the first day of each service plan
          month. If payment is not received by that date the account is late and service may be
          interrupted or suspended until paid in full.
        </p>
      </section>

      <section>
        <h2>Billing and AutoPay</h2>
        <p>
          The monthly rates advertised on this site include a <strong>$20 AutoPay discount</strong>{' '}
          and require AutoPay enrollment to apply. Without AutoPay the rates are $20 per month
          higher on every tier. Your billing date is tied to your installation date; bills are
          issued roughly two weeks in advance and are due when the service month begins.
        </p>
        <p>
          All payment processing, card storage and billing are handled by {site.carrierName}. We do
          not accept, process or store payment details — see our{' '}
          <a href="/pci-dss">PCI DSS Compliance</a> page.
        </p>
      </section>

      <section>
        <h2>The 30-day money-back guarantee</h2>
        <p>
          New customers using a <strong>Rise-managed router</strong> may cancel within the first 30
          days for a full refund, including the connection fee. If you supply your own router, the
          guarantee does not apply. This is {site.carrierName}&rsquo;s guarantee and is administered
          by {site.carrierName}.
        </p>
      </section>

      <section>
        <h2>Cancellation, moving and equipment return</h2>
        <ul>
          <li>
            <strong>No contracts and no early termination fees.</strong> You may cancel at any time.
            A $50 restocking fee applies on cancellation.
          </li>
          <li>
            <strong>Moving:</strong> if {site.carrierName} can serve your new address, service is
            transferred rather than cancelled. If it cannot, the account closes on a date you
            choose.
          </li>
          <li>
            <strong>Returns:</strong> only indoor equipment and cables need to be returned, using a
            pre-paid USPS label, one device per box.
          </li>
          <li>
            <strong>Fixed wireless:</strong> the exterior dish stays in place. A technician removes
            any small external components within about two weeks of account closure; you do not need
            to be home.
          </li>
          <li>
            <strong>New occupants:</strong> a new buyer or tenant can set up their own account using
            the equipment already in place.
          </li>
        </ul>
      </section>

      <section>
        <h2>Support and service problems</h2>
        <p>
          Technical support, outage response and repairs are provided by {site.carrierName}, 24
          hours a day, at{' '}
          <a href={`tel:${site.carrierSupportPhone.replace(/[^0-9]/g, '')}`}>
            {site.carrierSupportPhone}
          </a>. If speeds are persistently
          below what you purchased, {site.carrierName} will send a technician to evaluate the
          equipment free of charge. Larger or multi-storey homes may need additional mesh units for
          full coverage.
        </p>
        <p>
          If something goes wrong with an order we placed for you and you are not getting anywhere,
          contact us at <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> and we will
          help chase it — though we cannot override {site.carrierName}&rsquo;s decisions or
          timelines.
        </p>
      </section>

      <section>
        <h2>What we cannot do</h2>
        <ul>
          <li>Change {site.carrierName}&rsquo;s prices, waive its fees or alter its terms.</li>
          <li>Guarantee an installation date, a speed result or a coverage outcome.</li>
          <li>Access, modify or credit your {site.carrierName} billing account.</li>
          <li>Dispatch technicians or resolve outages.</li>
          <li>Accept payments or hold payment card details.</li>
        </ul>
      </section>
    </LegalShell>
  );
}
