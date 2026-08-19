import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'TCPA Policy',
  description:
    'Our Telephone Consumer Protection Act policy: how we obtain consent to call and text, how to opt out, ' +
    'and our internal do-not-call procedures.',
  alternates: { canonical: '/tcpa-policy' },
};

export default function TcpaPolicyPage() {
  return (
    <LegalShell
      title="TCPA Policy"
      summary="How we obtain consent before calling or texting you, what that consent covers, and how to withdraw it at any time."
      updated="2026-08-06"
      callout={
        <>
          <p>
            <strong>To stop text messages,</strong> reply <strong>STOP</strong> to any message from
            us. <strong>To stop calls,</strong> say &ldquo;put me on your do-not-call list&rdquo; on
            any call, or email{' '}
            <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. We honour both
            immediately and no later than 10 business days.
          </p>
          <p>
            Consent to be contacted is <strong>never</strong> a condition of purchasing anything from
            us.
          </p>
        </>
      }
    >
      <section>
        <h2>Our commitment</h2>
        <p>
          {site.resellerLegalName} complies with the Telephone Consumer Protection Act (47 U.S.C.
          § 227), the Federal Communications Commission rules implementing it (47 C.F.R. § 64.1200),
          the Federal Trade Commission Telemarketing Sales Rule, and applicable state telemarketing
          and autodialer statutes. This policy explains how we apply those rules in practice.
        </p>
      </section>

      <section>
        <h2>When and how we obtain consent</h2>
        <p>
          We contact you by phone, SMS or email only where we have a lawful basis to do so. In
          practice that means one of the following:
        </p>
        <ul>
          <li>
            <strong>You asked us to.</strong> You submitted an address, requested a callback, or
            otherwise initiated an enquiry. We contact you about that enquiry.
          </li>
          <li>
            <strong>Prior express written consent.</strong> Where we intend to use an automatic
            telephone dialling system, an artificial or prerecorded voice, or to send marketing
            texts, we obtain separate, affirmative, written consent first.
          </li>
          <li>
            <strong>An established business relationship,</strong> within the limits and time
            periods the rules allow.
          </li>
        </ul>
        <p>Where we rely on prior express written consent, the consent request will:</p>
        <ol>
          <li>Clearly identify {site.resellerName} as the party you are consenting to hear from.</li>
          <li>
            State plainly that you agree to receive calls and/or texts at the number you provided,
            including calls made using an automatic telephone dialling system or a prerecorded or
            artificial voice.
          </li>
          <li>Disclose that message and data rates may apply and state the message frequency.</li>
          <li>
            State conspicuously that <strong>consent is not a condition of purchase</strong>.
          </li>
          <li>
            Require an affirmative act — ticking an unchecked box, or an electronic or written
            signature. We never pre-tick consent boxes and never bundle consent into a general
            terms acceptance.
          </li>
        </ol>
        <p>
          We retain a record of each consent, including the exact wording shown, the timestamp, the
          IP address and the page URL, for at least five years after consent is withdrawn.
        </p>
      </section>

      <section>
        <h2>What we will contact you about</h2>
        <ul>
          <li>The result of the availability check you requested.</li>
          <li>Plan options that can actually be delivered at your address.</li>
          <li>Order confirmation and installation scheduling coordination.</li>
          <li>
            Follow-up on an enquiry you started but did not complete, where you consented to
            follow-up.
          </li>
        </ul>
        <p>
          We do not sell, rent or transfer your telephone number to third-party marketers, and we do
          not obtain leads from list brokers or third-party lead generators who claim consent on
          your behalf.
        </p>
      </section>

      <section>
        <h2>Calling hours and identification</h2>
        <p>
          We place calls only between <strong>8:00 a.m. and 9:00 p.m.</strong> in your local time
          zone, determined by the area code and, where known, the service address. On every call we
          identify {site.resellerName} by name, state that we are an independent authorized reseller
          of {site.carrierName} service, give the purpose of the call, and provide a telephone
          number you can call back. We transmit accurate caller ID and never spoof a number.
        </p>
      </section>

      <section>
        <h2>Text messaging</h2>
        <ul>
          <li>We send text messages only to numbers that have given prior express written consent.</li>
          <li>
            Message frequency varies with your enquiry; typically fewer than 6 messages per month.
          </li>
          <li>
            <strong>Message and data rates may apply</strong> depending on your mobile plan.
          </li>
          <li>
            Reply <strong>STOP</strong>, END, QUIT, CANCEL or UNSUBSCRIBE to opt out. You will
            receive a single confirmation message and then nothing further.
          </li>
          <li>Reply <strong>HELP</strong> for assistance, or call <a href={site.salesPhoneHref} data-call-cta>{site.salesPhone}</a>.</li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
        </ul>
      </section>

      <section>
        <h2>Do-not-call lists</h2>
        <p>
          We maintain an internal do-not-call list and we scrub against the National Do Not Call
          Registry and applicable state registries before any outbound marketing campaign. A request
          to stop contact is:
        </p>
        <ul>
          <li>Honoured on the call or message on which it is made;</li>
          <li>Recorded on our internal list within one business day;</li>
          <li>Effective across all channels and campaigns within 10 business days;</li>
          <li>Kept on our internal list for a minimum of five years;</li>
          <li>Honoured regardless of any established business relationship.</li>
        </ul>
        <p>
          You do not need to give a reason, and exercising this right will never affect the price,
          availability or quality of service offered to you.
        </p>
      </section>

      <section>
        <h2>How to opt out</h2>
        <ul>
          <li>
            <strong>Texts</strong> — reply STOP to any message.
          </li>
          <li>
            <strong>Calls</strong> — tell the representative you want to be added to the do-not-call
            list.
          </li>
          <li>
            <strong>Email</strong> — write to{' '}
            <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> with the phone number to
            suppress.
          </li>
          <li>
            <strong>Phone</strong> — call <a href={site.salesPhoneHref} data-call-cta>{site.salesPhone}</a>.
          </li>
          <li>
            <strong>Mail</strong> — {site.mailingAddress.line1}, {site.mailingAddress.city},{' '}
            {site.mailingAddress.region} {site.mailingAddress.postalCode}.
          </li>
        </ul>
        <p>
          After opting out of marketing, we may still send transactional messages strictly necessary
          to an order already in progress — for example an installation appointment confirmation.
          You can decline those too by telling us.
        </p>
      </section>

      <section>
        <h2>Staff training and monitoring</h2>
        <p>
          Everyone who contacts consumers on our behalf is trained on this policy before making a
          single call and at least annually thereafter. Calls may be monitored or recorded for
          quality and compliance, and where they are, you will be told at the start of the call. Any
          representative who does not honour an opt-out is removed from outbound contact duties.
        </p>
      </section>

      <section>
        <h2>Third parties</h2>
        <p>
          If we engage a vendor to contact consumers on our behalf, that vendor is contractually
          bound to this policy, must maintain its own compliant consent records, must honour our
          internal do-not-call list, and is subject to audit. {site.carrierName} may separately
          contact you about your service under its own policies; those communications are outside
          our control and outside this policy.
        </p>
      </section>

      <section>
        <h2>Complaints</h2>
        <p>
          If you believe you received a call or message from us in error or without consent, contact{' '}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> with the date, time and
          number involved. We investigate every complaint, respond within 10 business days, and
          correct the underlying cause. You may also report concerns to the FCC at fcc.gov/complaints
          or the FTC at donotcall.gov.
        </p>
      </section>
    </LegalShell>
  );
}
