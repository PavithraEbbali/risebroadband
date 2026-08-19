'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import styles from './StickyCallBar.module.css';

/**
 * §2.10 — persistent tap-to-call on mobile.
 *
 * Appears only after the hero has scrolled past, so it never covers the hero's
 * own primary CTA. Visibility is driven by scroll position rather than by an
 * IntersectionObserver on the hero, so it also behaves on legal routes where no
 * hero exists.
 *
 * Note the `--call-bar-h` custom property: the bar is fixed, so the body needs
 * matching bottom padding or it crops the footer's last line on short screens.
 */
export default function StickyCallBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.bar} data-shown={shown || undefined} aria-hidden={!shown}>
      <a
        href={site.salesPhoneHref}
        className={styles.cta}
        data-call-cta
        tabIndex={shown ? undefined : -1}
        aria-label={`Call ${site.tfnDisplay} to order ${site.carrierName} service`}
      >
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.icon}>
          <path
            d="M4.2 3.5h3l1.3 3.3-1.7 1.3a9.5 9.5 0 0 0 4.1 4.1l1.3-1.7 3.3 1.3v3a1.2 1.2 0 0 1-1.3 1.2A12.6 12.6 0 0 1 3 4.8 1.2 1.2 0 0 1 4.2 3.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.label}>
          <span className={styles.num}>{site.tfnDisplay}</span>
          <span className={styles.sub}>{site.hours}</span>
        </span>
      </a>
    </div>
  );
}
