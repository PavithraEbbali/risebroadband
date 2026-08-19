import Link from 'next/link';
import { legalPages } from '@/lib/legalNav';
import { site } from '@/lib/site';
import styles from './LegalShell.module.css';

type Props = {
  title: string;
  /** One-line summary shown under the title. */
  summary: string;
  updated: string;
  children: React.ReactNode;
  /** Rendered as a highlighted callout directly under the header. */
  callout?: React.ReactNode;
};

/**
 * Shared chrome for the eight policy routes: page header, sibling-policy nav,
 * and a contact block. Content itself is authored per page.
 */
export default function LegalShell({ title, summary, updated, children, callout }: Props) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="shell">
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <h1 className={`display ${styles.title}`}>{title}</h1>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.updated}>
            Last updated: <time dateTime={updated}>{formatDate(updated)}</time>
          </p>
        </div>
      </header>

      <div className={`shell ${styles.body}`}>
        <article className={styles.prose}>
          {callout ? <aside className={styles.callout}>{callout}</aside> : null}
          {children}

          <section>
            <h2>Contact us about this policy</h2>
            <p>
              Questions about this policy can be directed to {site.resellerLegalName} at{' '}
              <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>, by phone at{' '}
              <a href={site.salesPhoneHref} data-call-cta>{site.salesPhone}</a>, or by mail at{' '}
              {site.mailingAddress.line1}, {site.mailingAddress.city},{' '}
              {site.mailingAddress.region} {site.mailingAddress.postalCode}.
            </p>
            <p>
              Matters concerning your {site.carrierName} service agreement, billing or network
              policies are handled by {site.carrierName} directly — see{' '}
              <a href={site.carrierSite} target="_blank" rel="noopener noreferrer nofollow">
                riseinternet.com
              </a>
              .
            </p>
          </section>
        </article>

        <aside className={styles.sidebar} aria-label="Other policies">
          <h2 className={styles.sidebarHead}>Our policies</h2>
          <ul className={styles.sidebarList}>
            {legalPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={styles.sidebarLink}
                  data-current={page.label === title || undefined}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#hero-address" className={styles.sidebarCta}>
            Check availability
          </Link>
        </aside>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
