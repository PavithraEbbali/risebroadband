import styles from './RiseLogo.module.css';

type Props = {
  /**
   * Colour of the wordmark letters. The bolt is always brand orange.
   * `auto` inherits `color` from the parent, which lets a caller cross-fade the
   * mark between light and dark backgrounds with a single CSS transition.
   */
  tone?: 'ink' | 'invert' | 'auto';
  className?: string;
  /** Rendered as the accessible name; the glyphs themselves are decorative. */
  label?: string;
};

/**
 * Rise Internet wordmark: "R", an angled orange bolt standing in for the "I",
 * then "SE" with a service-mark, and a wide-tracked "INTERNET" rule beneath.
 *
 * Built from live text rather than a flat image so it stays crisp at any size,
 * inherits the Barlow face already loaded for the page, and costs no extra
 * network request. The bolt is the one genuinely custom shape, so it is an
 * inline SVG path.
 */
export default function RiseLogo({ tone = 'ink', className, label = 'Rise Internet' }: Props) {
  return (
    <span
      className={[styles.logo, styles[tone], className].filter(Boolean).join(' ')}
      role="img"
      aria-label={label}
    >
      <span className={styles.wordRow} aria-hidden="true">
        <span className={styles.word}>R</span>

        <svg
          className={styles.bolt}
          viewBox="0 0 26 72"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          focusable="false"
        >
          {/* Slanted bar with a clipped upper-left corner — the "I" of RISE. */}
          <path d="M9.6 0H26L16.4 72H0L9.6 0Z" fill="currentColor" />
        </svg>

        <span className={styles.word}>SE</span>
        <span className={styles.mark}>℠</span>
      </span>

      <span className={styles.sub} aria-hidden="true">
        Internet
      </span>
    </span>
  );
}
