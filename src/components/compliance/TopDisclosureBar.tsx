import Link from 'next/link';
import { TOP_DISCLOSURE } from '@/lib/site';
import styles from './TopDisclosureBar.module.css';

/**
 * §2.0 — the first thing in the DOM and the first thing on screen.
 *
 * This is the single control that keeps the site out of Google's
 * Misrepresentation / "unauthorized affiliate" bucket, so it is deliberately
 * server-rendered, static, and not dismissible: nothing here may depend on
 * hydration, scroll position or a cookie choice.
 */
export default function TopDisclosureBar() {
  return (
    <div className={styles.bar} role="note">
      <div className={`shell ${styles.inner}`}>
        <span className={styles.text}>{TOP_DISCLOSURE}</span>
        <Link href="/disclaimer" className={styles.link}>
          Full disclosure
        </Link>
      </div>
    </div>
  );
}
