'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import TopDisclosureBar from '@/components/compliance/TopDisclosureBar';
import OperatorMark from '@/components/brand/OperatorMark';
import { primaryNav as nav } from '@/lib/nav';
import { site } from '@/lib/site';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  const pathname = usePathname();
  /*
   * The nav targets are sections of the home page. A bare "#plans" resolves to
   * nothing on a legal route, so off-home the links have to carry the path.
   * On the home page they stay hash-only, so the browser's native
   * `scroll-behavior: smooth` handles them with no JavaScript involved.
   */
  const onHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined}>
      {/* §2.0 lives inside the fixed header rather than above it. Kept outside,
          the header's `top: 0` slid underneath and clipped the logo; kept here
          the disclosure is also permanently on screen instead of only at the
          top of the page. */}
      <TopDisclosureBar />

      <div className={`shell ${styles.bar}`}>
        {/* §2.1 — the operator's own mark, never the carrier's. The reseller
            relationship is stated in words by the disclosure bar directly
            above, which is where §2.0 puts it. */}
        <Link href="/" className={styles.brand}>
          {/* tone="auto" inherits colour from .brand, which flips with the
              header's scrolled state — white over the dark hero, ink once the
              bar goes solid. */}
          <OperatorMark tone="auto" className={styles.logo} />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {nav.map((item) => (
              <li key={item.href}>
                {onHome ? (
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={`/${item.href}`} className={styles.navLink}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={site.salesPhoneHref} data-call-cta className={styles.phone}>
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.phoneIcon}>
              <path
                d="M4.2 3.5h3l1.3 3.3-1.7 1.3a9.5 9.5 0 0 0 4.1 4.1l1.3-1.7 3.3 1.3v3a1.2 1.2 0 0 1-1.3 1.2A12.6 12.6 0 0 1 3 4.8 1.2 1.2 0 0 1 4.2 3.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span>{site.salesPhone}</span>
          </a>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.burgerBar} data-top />
            <span className={styles.burgerBar} data-mid />
            <span className={styles.burgerBar} data-bot />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            className={styles.drawer}
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile">
              <ul className={styles.drawerList}>
                {nav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.05, duration: 0.4 }}
                  >
                    {onHome ? (
                      <a
                        href={item.href}
                        className={styles.drawerLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={`/${item.href}`}
                        className={styles.drawerLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className={styles.drawerFoot}>
              <a href={site.salesPhoneHref} data-call-cta className={styles.drawerPhone}>
                {site.salesPhone}
              </a>
              <p className={styles.drawerNote}>
                Independent authorized reseller — not the official {site.carrierName} site.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
