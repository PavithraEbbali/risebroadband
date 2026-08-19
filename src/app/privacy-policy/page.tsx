import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy & Data Protection',
  description:
    'How this Rise Internet authorized reseller collects, uses, shares and protects personal information, ' +
    'and the privacy rights available to you.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy & Data Protection"
      summary="What we collect when you check availability or contact us, why we collect it, who receives it, and the choices you have."
      updated="2026-08-06"
      callout={
        <>
          <p>
            <strong>The short version.</strong> We collect the address and contact details you give
            us so we can check {site.carrierName} availability and place your order. We share that
            information with {site.carrierName} because they are the ones who provide the service.
            We do not sell your personal information. You can ask us to delete it at any time.
          </p>
          <p>
            Once you become a {site.carrierName} customer, {site.carrierName} handles your account
            data under its own privacy policy, which is separate from this one.
          </p>
        </>
      }
    >
      <section>
        <h2>Who is responsible for your information</h2>
        <p>
          The independent authorized reseller that operates this website is the controller of the
          personal information described in this policy. We can be reached at{' '}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>, at{' '}
          <a href={site.salesPhoneHref} data-call-cta>{site.salesPhone}</a>, or at {site.mailingAddress.line1},{' '}
          {site.mailingAddress.city}, {site.mailingAddress.region}{' '}
          {site.mailingAddress.postalCode}.
        </p>
        <p>
          This policy covers only what we do. It does not cover {site.carrierName}&rsquo;s handling
          of your information once you are its customer — that is governed by the{' '}
          <a
            href="https://www.riseinternet.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {site.carrierName} Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>

        <h3>Information you give us directly</h3>
        <ul>
          <li>
            <strong>Service address</strong> — the street address, city or ZIP code you enter in an
            availability checker. This is the core of what we do; without it we cannot tell you
            whether service is reachable.
          </li>
          <li>
            <strong>Contact details</strong> — name, telephone number and email address, when you
            provide them so we can respond.
          </li>
          <li>
            <strong>Household requirements</strong> — anything you tell us about how many people and
            devices use the connection, so we can point you at an appropriate speed tier.
          </li>
          <li>
            <strong>Correspondence</strong> — the content of emails, web form messages and, where
            recorded and disclosed to you at the time, telephone calls.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Device and connection data</strong> — IP address, browser type and version,
            operating system, screen size and referring URL.
          </li>
          <li>
            <strong>Usage data</strong> — pages viewed, time on page, scroll depth, links and
            buttons clicked, and the path you took through the site.
          </li>
          <li>
            <strong>Approximate location</strong> — derived from IP address at city or regional
            level, used to show relevant coverage information. This is not precise GPS location and
            we do not request device location permissions.
          </li>
        </ul>
        <p>
          Details of the cookies and similar technologies used to collect this are in our{' '}
          <a href="/cookies-policy">Cookies Policy</a>.
        </p>

        <h3>What we deliberately do not collect</h3>
        <p>
          We do not ask for and do not want your Social Security number, date of birth, driver&rsquo;s
          licence number, bank account details or payment card numbers. Identity verification, the
          soft credit and fraud check, deposits and all payment processing are performed by{' '}
          {site.carrierName} directly. If anyone claiming to represent us asks you for those details,
          do not provide them — contact us at{' '}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
        </p>
      </section>

      <section>
        <h2>How we use your information</h2>
        <ul>
          <li>To check whether {site.carrierName} service is available at the address you gave us.</li>
          <li>To respond to your questions and explain the plans available at your address.</li>
          <li>To submit and coordinate your order with {site.carrierName}.</li>
          <li>
            To contact you about an enquiry you started, including follow-up calls, texts and emails
            where you have consented — see our <a href="/tcpa-policy">TCPA Policy</a>.
          </li>
          <li>To keep records of consent, orders and communications as required by law.</li>
          <li>
            To measure and improve the website — which pages are useful, where visitors get stuck,
            and whether our advertising is working.
          </li>
          <li>To detect, prevent and investigate fraud, abuse and security incidents.</li>
        </ul>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>We share personal information only in these circumstances:</p>
        <ul>
          <li>
            <strong>{site.carrierName}</strong> — necessarily. To check serviceability and place an
            order, your address and contact details must be passed to the carrier. Once received,{' '}
            {site.carrierName} processes that data under its own privacy policy.
          </li>
          <li>
            <strong>Service providers acting for us</strong> — website hosting, customer relationship
            management, email and telephony, and analytics providers. They are permitted to use the
            data only to perform services for us and are bound by contract to protect it.
          </li>
          <li>
            <strong>Advertising and analytics partners</strong> — in the limited form described in our{' '}
            <a href="/cookies-policy">Cookies Policy</a>, and only where you have consented to
            non-essential cookies.
          </li>
          <li>
            <strong>Professional advisers</strong> — lawyers, accountants and auditors where
            reasonably required.
          </li>
          <li>
            <strong>Legal and safety</strong> — where required by law, subpoena or court order, or
            where necessary to protect the rights, property or safety of any person.
          </li>
          <li>
            <strong>Business transfer</strong> — if our business is merged, acquired or sold, your
            information may transfer as part of that transaction. You will be notified of any change
            in control of your data.
          </li>
        </ul>
        <p>
          <strong>We do not sell your personal information</strong> and we do not share it for
          cross-context behavioural advertising in the sense those terms are used under the
          California Consumer Privacy Act.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <ul>
          <li>
            <strong>Availability enquiries that do not become orders</strong> — up to 24 months, then
            deleted or anonymised.
          </li>
          <li>
            <strong>Enquiries that become orders</strong> — for the duration of the relationship plus
            the period required by applicable record-keeping and tax law, typically up to 7 years.
          </li>
          <li>
            <strong>Marketing consent records</strong> — at least 5 years after consent is withdrawn,
            because we must be able to evidence that consent existed.
          </li>
          <li>
            <strong>Website analytics</strong> — typically 14 months in aggregated form.
          </li>
        </ul>
      </section>

      <section>
        <h2>Your privacy rights</h2>
        <p>
          Depending on where you live, you may have some or all of the following rights. We honour
          these requests for all visitors regardless of state of residence, as a matter of practice.
        </p>
        <ul>
          <li>
            <strong>Know and access</strong> — ask what personal information we hold about you and
            obtain a copy.
          </li>
          <li>
            <strong>Correct</strong> — have inaccurate information corrected.
          </li>
          <li>
            <strong>Delete</strong> — ask us to delete your information, subject to legal retention
            obligations.
          </li>
          <li>
            <strong>Opt out of sale or sharing</strong> — we do not sell or share personal
            information, so there is nothing to opt out of, but the right stands.
          </li>
          <li>
            <strong>Non-discrimination</strong> — we will not deny service, charge a different price
            or provide a lesser quality of service because you exercised a privacy right.
          </li>
          <li>
            <strong>Withdraw consent</strong> — withdraw marketing or contact consent at any time.
          </li>
          <li>
            <strong>Appeal</strong> — if we decline a request, you may appeal by replying to our
            decision. We will respond to the appeal within 45 days.
          </li>
        </ul>
        <p>
          To exercise any of these, email{' '}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> or call{' '}
          <a href={site.salesPhoneHref} data-call-cta>{site.salesPhone}</a>. We will verify your identity by
          confirming details already in our records — we will not ask you for new sensitive
          identifiers to do so. We respond within 45 days and may extend once by a further 45 days
          where a request is complex, telling you if we do. An authorised agent may submit a request
          on your behalf with written proof of authority.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          This website is directed to adults purchasing residential internet service. We do not
          knowingly collect personal information from anyone under 16. If you believe a child has
          given us personal information, contact us and we will delete it promptly.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We maintain administrative, technical and physical safeguards appropriate to the
          sensitivity of the information we hold. These include TLS encryption for data in transit,
          encryption at rest for stored records, role-based access limited to staff who need it,
          multi-factor authentication on administrative systems, and periodic review of access
          rights and vendor security. Where card payments are involved, they are handled by{' '}
          {site.carrierName} or by PCI DSS validated processors — see our{' '}
          <a href="/pci-dss">PCI DSS Compliance</a> page.
        </p>
        <p>
          No method of transmission or storage is completely secure, and we cannot guarantee absolute
          security. If a breach affects your personal information, we will notify you and the
          relevant authorities as required by applicable law.
        </p>
      </section>

      <section>
        <h2>Do Not Track and Global Privacy Control</h2>
        <p>
          Browsers vary in how they implement Do Not Track and there is no common standard for
          honouring it, so we do not respond to DNT headers. We do honour the Global Privacy Control
          (GPC) signal where our consent tooling detects it, treating it as a request to disable
          non-essential cookies and opt out of any sharing for advertising purposes.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We will update this policy when our practices change. Material changes will be signposted
          on this page, and the &ldquo;last updated&rdquo; date above will change. Where required by
          law we will seek fresh consent rather than relying on a passive update.
        </p>
      </section>
    </LegalShell>
  );
}
