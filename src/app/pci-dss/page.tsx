import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'PCI DSS Compliance',
  description:
    'Our payment card data security position: we do not accept or store cardholder data, and how payments ' +
    'are handled by Rise Internet and validated processors.',
  alternates: { canonical: '/pci-dss' },
};

export default function PciDssPage() {
  return (
    <LegalShell
      title="PCI DSS Compliance"
      summary="Our position on payment card data — what we handle, what we deliberately do not, and how card payments are actually processed."
      updated="2026-08-06"
      callout={
        <>
          <p>
            <strong>We do not accept, process, transmit or store payment card data.</strong> There
            is no payment form anywhere on this website.
          </p>
          <p>
            All billing and card processing for your internet service is performed by{' '}
            {site.carrierName} through its own systems and validated processors. If any page,
            caller or message claiming to be {site.resellerName} asks you for a card number,{' '}
            <strong>it is not us</strong> — please report it to{' '}
            <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
          </p>
        </>
      }
    >
      <section>
        <h2>What PCI DSS is</h2>
        <p>
          The Payment Card Industry Data Security Standard is a set of security requirements
          maintained by the PCI Security Standards Council, founded by the major card brands. It
          applies to any organisation that stores, processes or transmits cardholder data, and
          covers network security, encryption, access control, monitoring, vulnerability management
          and security policy.
        </p>
      </section>

      <section>
        <h2>How our scope is limited</h2>
        <p>
          The most reliable way to protect cardholder data is not to touch it. Our business is
          deliberately structured so that card data never enters our environment:
        </p>
        <ul>
          <li>
            <strong>No payment forms.</strong> This website collects a service address and contact
            details. It has no checkout, no card fields and no payment page.
          </li>
          <li>
            <strong>No card capture by phone.</strong> Our representatives are trained never to
            request, repeat, write down or record a payment card number, expiry date, CVV or
            billing PIN. If you offer one, they will stop you and direct you to{' '}
            {site.carrierName}.
          </li>
          <li>
            <strong>No card storage.</strong> We operate no cardholder data environment, no card
            database and no card-bearing paper records.
          </li>
          <li>
            <strong>No card data in messages.</strong> We will never ask you to send card details by
            email, SMS or web form, and we do not accept them if sent.
          </li>
        </ul>
        <p>
          Where an organisation neither stores, processes nor transmits cardholder data, its PCI DSS
          scope is minimal. We nonetheless maintain the controls below because our systems sit
          adjacent to the customer journey.
        </p>
      </section>

      <section>
        <h2>Where payments actually happen</h2>
        <ul>
          <li>
            <strong>{site.carrierName}</strong> collects the connection fee, sets up AutoPay, and
            bills your monthly service. Card handling is governed by {site.carrierName}&rsquo;s own
            security programme and its Payment Authorization Terms &amp; Conditions.
          </li>
          <li>
            <strong>Validated processors.</strong> Any card transaction associated with your service
            is handled by a PCI DSS validated service provider engaged by {site.carrierName}, not by
            us.
          </li>
          <li>
            <strong>The MyRise portal</strong> is where you manage payment methods, view statements
            and enroll in AutoPay. It is operated by {site.carrierName}.
          </li>
        </ul>
        <p>
          {site.carrierName} charges a $10 convenience fee for payments taken over the phone by a
          call-centre representative, and no fee for self-service payment through the portal.
        </p>
      </section>

      <section>
        <h2>Security controls we do maintain</h2>
        <p>
          Although we are outside the cardholder data environment, we apply comparable discipline to
          the personal information we do hold:
        </p>
        <ul>
          <li>TLS 1.2 or higher for all data transmitted between your browser and our systems.</li>
          <li>Encryption at rest for stored enquiry records.</li>
          <li>
            Role-based access control, so staff can see only the records their role requires, with
            multi-factor authentication on all administrative accounts.
          </li>
          <li>Unique named accounts — no shared logins — with access reviewed at least quarterly.</li>
          <li>Prompt application of security patches to servers, dependencies and workstations.</li>
          <li>Logging and monitoring of administrative access, retained for review.</li>
          <li>
            Vendor due diligence, including confirmation of PCI DSS validation status where a vendor
            touches payment flows.
          </li>
          <li>Annual security awareness training, including phishing and social engineering.</li>
          <li>A documented incident response procedure with defined notification obligations.</li>
        </ul>
      </section>

      <section>
        <h2>Protect yourself</h2>
        <ul>
          <li>
            Provide card details only through {site.carrierName}&rsquo;s official channels — the
            MyRise portal at riseinternet.com or the number printed on your bill.
          </li>
          <li>Check for a valid TLS certificate and the correct domain before entering anything.</li>
          <li>
            Treat any unsolicited call, text or email requesting card details as suspicious, even if
            the caller ID looks legitimate. Hang up and call back on a number you already trust.
          </li>
          <li>
            Neither we nor {site.carrierName} will ever ask for your full card number, CVV or online
            banking password by email or text.
          </li>
        </ul>
      </section>

      <section>
        <h2>Reporting a security concern</h2>
        <p>
          If you believe payment data has been requested improperly in our name, or you have found a
          security weakness in this website, report it to{' '}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. Please include what you
          observed, when, and any URLs or phone numbers involved. We acknowledge reports within two
          business days and investigate every one. We will not pursue action against good-faith
          security researchers who report responsibly and avoid privacy violations or service
          disruption.
        </p>
        <p>
          For suspected fraud on your card, contact your card issuer immediately using the number on
          the back of the card.
        </p>
      </section>

      <section>
        <h2>Review</h2>
        <p>
          This statement is reviewed at least annually, and whenever our systems or vendors change
          in a way that could affect payment data handling. Should we ever begin accepting payments
          directly, this page will be updated before that capability goes live and the appropriate
          PCI DSS validation will be completed first.
        </p>
      </section>
    </LegalShell>
  );
}
