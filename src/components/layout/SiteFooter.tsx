import Link from 'next/link';
import RiseLogo from '@/components/brand/RiseLogo';
import { legalPages } from '@/lib/legalNav';
import { primaryNavAbsolute } from '@/lib/nav';
import { RESELLER_DISCLOSURE, TRADEMARK_LINE, site } from '@/lib/site';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            {/* Scoped out of the §2.1 header ban: the carrier mark is used here
                under authorization, tagged "Authorized Reseller", directly above
                the operator's own legal entity and the §7.5 attribution line.
                The accessible name must be the CARRIER's — it depicts the Rise
                Internet wordmark, and labelling it with the operator's name
                announced "Peak Connect" over Rise glyphs. */}
            <div className={styles.lockup}>
              <RiseLogo tone="invert" className={styles.logo} label={site.carrierName} />
              <span className={styles.resellerTag}>
                Authorized
                <br />
                Reseller
              </span>
            </div>
            <a href={site.salesPhoneHref} data-call-cta className={styles.phone}>
              {site.salesPhone}
            </a>
            {/* §2.9 — Google Misrepresentation requires all four: the legal
                entity name, a postal address, a phone number and an email. */}
            <address className={styles.address}>
              <span className={styles.entity}>{site.entityLegalName}</span>
              {site.registeredAddress.line1}
              <br />
              {site.registeredAddress.city}, {site.registeredAddress.region}{' '}
              {site.registeredAddress.postalCode}
              <br />
              <a href={`mailto:${site.email}`} className={styles.email}>
                {site.email}
              </a>
            </address>
          </div>

          {/* Mirrors the primary nav — both read from lib/nav.ts. */}
          <nav className={styles.col} aria-labelledby="footer-explore">
            <h2 id="footer-explore" className={styles.colHead}>
              Explore
            </h2>
            <ul className={styles.colList}>
              {primaryNavAbsolute.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-labelledby="footer-legal">
            <h2 id="footer-legal" className={styles.colHead}>
              Policies
            </h2>
            <ul className={styles.colList}>
              {legalPages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Full reseller disclosure. */}
        <div className={styles.disclosure}>
          <p>{RESELLER_DISCLOSURE}</p>
          {/* §7.5 — trademark attribution, naming the owner of every mark used. */}
          <p>{TRADEMARK_LINE}</p>
          <p>
            Pricing, speeds, plan structure and service terms are set by {site.carrierName} and are
            subject to change without notice. Speeds shown are maximum &ldquo;up to&rdquo; figures
            and are not guaranteed. Service availability is confirmed address by address. All
            product names, logos and brands are property of their respective owners.
          </p>
        </div>

        <div className={styles.base}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {site.resellerLegalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
