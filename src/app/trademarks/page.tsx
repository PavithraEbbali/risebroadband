import type { Metadata } from 'next';
import LegalShell from '@/components/layout/LegalShell';
import { RESELLER_DISCLOSURE, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Trademarks',
  description:
    'Trademark attribution and nominative fair use statement for this independent authorized Rise Internet ' +
    'reseller website.',
  alternates: { canonical: '/trademarks' },
};

export default function TrademarksPage() {
  return (
    <LegalShell
      title="Trademarks"
      summary="Whose marks appear on this site, why they appear, and the limits of that use."
      updated="2026-08-06"
      callout={
        <>
          <p>
            <strong>This is not the official {site.carrierName} website.</strong>
          </p>
          <p>{RESELLER_DISCLOSURE}</p>
          <p>
            We do not own the {site.carrierName} or {site.carrierFormerName} marks, we have no
            ownership interest in them, and nothing on this site should be read as a claim to them.
            The official site is{' '}
            <a href={site.carrierSite} target="_blank" rel="noopener noreferrer nofollow">
              riseinternet.com
            </a>
            .
          </p>
        </>
      }
    >
      <section>
        <h2>Ownership of third-party marks</h2>
        <p>
          All trademarks, service marks, trade names, trade dress, logos and brand identifiers
          referenced on this website are the property of their respective owners. Specifically:
        </p>
        <ul>
          <li>
            <strong>Rise Internet</strong> and <strong>Rise Broadband</strong>, together with
            associated logos, wordmarks and product names including{' '}
            <strong>Total Home Advanced Wi-Fi</strong>, <strong>ActivePhone</strong>,{' '}
            <strong>MyRise</strong> and <strong>Rise @Home</strong>, are marks of their owner. They
            are used on this site solely to identify the service we are authorized to resell.
          </li>
          <li>
            <strong>eero</strong> and <strong>eero Secure</strong> are marks of their owner. eero
            products and services are subject to the disclaimers published at eero.com/legal/
            disclaimers.
          </li>
          <li>
            <strong>Wi-Fi</strong> and <strong>Wi-Fi 7</strong> are marks of the Wi-Fi Alliance.
          </li>
          <li>
            Any other product, company or organization name appearing on this site is a mark of its
            respective owner.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why these marks appear here — nominative fair use</h2>
        <p>
          We reference {site.carrierName}&rsquo;s marks because there is no practical way to tell
          you which internet service we sell without naming it. That is nominative fair use, and our
          use is deliberately limited to what identification requires:
        </p>
        <ol>
          <li>
            We use the marks only as much as is reasonably necessary to identify the service and its
            plans.
          </li>
          <li>
            We do not use {site.carrierName} logos, trade dress or brand assets in a way designed to
            suggest that this site is operated by, endorsed by, or affiliated with{' '}
            {site.carrierName} beyond our authorization to resell its service.
          </li>
          <li>
            We state our independent reseller status prominently near the top of our home page, in
            our site header, in our footer, and on this page and our{' '}
            <a href="/disclaimer">Disclaimer</a> page.
          </li>
          <li>
            We do not register, use or bid on domain names, business names, social handles or
            display URLs that would cause a visitor to believe they have reached{' '}
            {site.carrierName} itself.
          </li>
        </ol>
        <p>
          Use of a mark on this site does not transfer any right, title or licence in that mark to
          you, and does not grant us ownership of it.
        </p>
      </section>

      <section>
        <h2>Our own marks</h2>
        <p>
          {site.resellerName} and the {site.resellerName} logo are marks of{' '}
          {site.resellerLegalName}. The layout, original written content, original graphics, and
          source code of this website are our copyrighted work. You may not copy, reproduce or
          create derivative works from them without written permission, except as permitted by
          applicable copyright law.
        </p>
      </section>

      <section>
        <h2>No sponsorship or endorsement implied</h2>
        <p>
          Nothing on this website should be interpreted as a statement that {site.carrierName}{' '}
          sponsors, endorses, certifies, reviews or approves the content of this site.{' '}
          {site.carrierName} is responsible for its own service, terms, pricing and published
          materials. We are responsible for this website.
        </p>
        <p>
          Where we describe {site.carrierName} plans, specifications or policies, we are restating
          {site.carrierName}&rsquo;s own published information. Where that description conflicts
          with {site.carrierName}&rsquo;s current published terms, {site.carrierName}&rsquo;s terms
          control.
        </p>
      </section>

      <section>
        <h2>Reporting a trademark concern</h2>
        <p>
          If you are a rights holder and believe any use of a mark on this site is inappropriate, we
          want to hear from you and we will act promptly. Please write to{' '}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> with the mark at issue,
          the page URL where it appears, the basis of your rights, and the change you are
          requesting. We will review and respond, and will remove or amend the use where
          appropriate.
        </p>
      </section>
    </LegalShell>
  );
}
