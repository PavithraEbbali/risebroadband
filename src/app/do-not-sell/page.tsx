import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Do Not Sell or Share My Personal Information',
  description:
    'Exercise your California (CPRA) right to opt out of the sale or sharing of your personal information, ' +
    'including cross-context behavioural advertising. How to submit a request and what happens next.',
  alternates: { canonical: '/do-not-sell' },
};

/**
 * §7.2 — the ninth required legal page.
 *
 * The CPRA obligation is triggered by the advertising stack, not by whether we
 * think of ourselves as "selling" data: sharing identifiers with Google Ads for
 * cross-context behavioural advertising is a "share" under Cal. Civ. Code
 * §1798.140(ah), so the opt-out link is mandatory and must be reachable from
 * every page. It is in the footer's Policies column for that reason.
 *
 * There is no form on this page on purpose. The site is a static export with no
 * server (see next.config.mjs §8.1), so a form here could not actually deliver a
 * request — it would be theatre. The two mechanisms offered instead are ones
 * that genuinely work without a backend: the browser-level GPC signal, which
 * Analytics.tsx honours automatically, and a directly addressed email.
 */
export default function DoNotSellPage() {
  return (
    <LegalShell
      title="Do Not Sell or Share My Personal Information"
      summary="Your right under California law to opt out of the sale or sharing of your personal information — what we share, and the two ways to stop it."
      updated="2026-08-19"
      callout={
        <>
          <p>
            <strong>We do not sell your personal information for money.</strong> We do, however,
            share online identifiers (such as cookie IDs and device identifiers) with advertising
            partners including Google in order to measure and target advertising. Under the
            California Privacy Rights Act that counts as &ldquo;sharing&rdquo; for cross-context
            behavioural advertising, and you have the right to opt out of it.
          </p>
          <p>
            The fastest way to opt out is to enable{' '}
            <strong>Global Privacy Control</strong> in your browser. This site detects the GPC
            signal automatically and downgrades advertising and analytics consent without any
            further action from you.
          </p>
        </>
      }
    >
      <section>
        <h2>What we share, and with whom</h2>
        <p>
          {site.entityLegalName} operates this website as an independent authorized{' '}
          {site.agreementNoun} of {site.carrierName} services. The information involved in
          &ldquo;sharing&rdquo; is limited to advertising and measurement identifiers:
        </p>
        <ul>
          <li>
            <strong>Online identifiers</strong> — cookie IDs, device identifiers and the Google
            click identifier (GCLID) attached to your visit if you arrived from an advertisement.
          </li>
          <li>
            <strong>Internet activity</strong> — the pages you viewed on this site, and whether you
            tapped a call button.
          </li>
          <li>
            <strong>Approximate location</strong> — derived from your IP address at city level, used
            for advertising geography only.
          </li>
        </ul>
        <p>
          These are shared with Google LLC for advertising measurement and audience targeting. We do
          not share your name, telephone number, service address or any information you give us on a
          phone call with advertising partners.
        </p>
      </section>

      <section>
        <h2>What we never sell or share</h2>
        <p>
          Information you provide during a sales call — your name, telephone number, service
          address, and any details needed to place your order — is used solely to place and support
          that order with {site.carrierName}. It is disclosed to {site.carrierName} because that is
          the only way an order can be fulfilled. It is never sold, and it is never shared for
          advertising purposes.
        </p>
        <p>
          We do not knowingly sell or share the personal information of consumers under 16 years of
          age.
        </p>
      </section>

      <section>
        <h2>How to opt out</h2>
        <h3>Option 1 — Global Privacy Control (immediate)</h3>
        <p>
          Global Privacy Control is a setting your browser or a browser extension sends on your
          behalf. When this site receives it, advertising storage, ad user data, ad personalization
          and analytics storage are all set to denied for your session. It applies automatically and
          requires no request, no account and no waiting period.
        </p>
        <p>
          GPC is supported natively in some browsers and via extension in others. Enabling it opts
          you out on every site that honours it, not just this one.
        </p>

        <h3>Option 2 — send us a request</h3>
        <p>
          Email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> with the subject
          line <strong>&ldquo;Do Not Sell or Share&rdquo;</strong>. Tell us enough to identify the
          records concerned — at minimum the telephone number or email address you used with us. You
          may also call{' '}
          <a href={site.salesPhoneHref} data-call-cta>
            {site.tfnDisplay}
          </a>{' '}
          and ask the representative to record an opt-out.
        </p>
        <p>
          You do not need an account to make a request, and we will not require you to create one.
        </p>
      </section>

      <section>
        <h2>Authorised agents</h2>
        <p>
          You may use an authorised agent to submit a request on your behalf. We will ask for written
          permission signed by you, and we may still ask you to verify your own identity directly
          before we act. This is required of us, not optional.
        </p>
      </section>

      <section>
        <h2>What happens after you opt out</h2>
        <ul>
          <li>
            We will confirm receipt within <strong>10 business days</strong> and complete the request
            within <strong>45 calendar days</strong>. If we need longer we will tell you why, and the
            extension cannot exceed a further 45 days.
          </li>
          <li>
            Advertising and analytics identifiers stop being shared. You will still see
            advertisements — they simply will not be targeted using data from this site.
          </li>
          <li>
            Opting out does not delete information already collected. To request deletion, see our{' '}
            <a href="/privacy-policy">Privacy &amp; Data Protection</a> policy.
          </li>
          <li>
            An opt-out is tied to the browser and device that made it. Clearing cookies, or using a
            different browser or device, may require you to opt out again — which is a further reason
            to prefer the GPC signal.
          </li>
        </ul>
      </section>

      <section>
        <h2>No discrimination</h2>
        <p>
          We will not deny you service, charge you a different price, provide a different level of
          service, or suggest that you will receive any of those, because you exercised a privacy
          right. Your pricing and your eligibility for {site.carrierName} service are unaffected by
          this request.
        </p>
      </section>

      <section>
        <h2>Your other California rights</h2>
        <p>
          Alongside the right to opt out of sale or sharing, the CPRA gives you the right to know
          what personal information we have collected, the right to correct inaccurate information,
          the right to delete, and the right to limit the use of sensitive personal information. We
          do not collect sensitive personal information as that term is defined by the CPRA. The
          other rights, and how to exercise them, are described in our{' '}
          <a href="/privacy-policy">Privacy &amp; Data Protection</a> policy.
        </p>
      </section>

      <section>
        <h2>Complaints</h2>
        <p>
          If you believe we have not honoured a request, contact us first at{' '}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> so we can put it right. You
          also have the right to complain to the California Privacy Protection Agency or the
          California Attorney General.
        </p>
      </section>
    </LegalShell>
  );
}
