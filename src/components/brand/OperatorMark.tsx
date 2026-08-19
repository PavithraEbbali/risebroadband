import { site } from '@/lib/site';
import styles from './OperatorMark.module.css';

type Props = {
  /**
   * Letter colour. `auto` inherits `color` from the parent so the header can
   * cross-fade the mark between the dark hero and the solid scrolled bar with
   * a single CSS transition.
   */
  tone?: 'ink' | 'invert' | 'auto';
  className?: string;
};

/**
 * The operator's own wordmark (§2.1).
 *
 * §2.1 bans the carrier's logo — and anything derived from it — from the
 * header. "Derived" is the operative word: recolouring the carrier mark, or
 * simplifying it, or rebuilding it in the same typographic register still reads
 * as the carrier's identity. So this mark is deliberately built to share
 * *nothing* with Rise Internet's:
 *
 *   - No orange. Rise's mark is defined by its brand orange, so this one is
 *     monochrome and inherits `color` from its parent. The ember ramp is used
 *     everywhere else on the site, but never in this mark.
 *   - No bolt, and no stacked word-over-rule lockup. Those two shapes ARE the
 *     Rise mark. This is a squared monogram tile beside a single baseline.
 *   - Different type. Rise's wordmark is the condensed display face in caps;
 *     this uses the normal-width text face in sentence case.
 *
 * The carrier association belongs in the disclosure bar directly above this
 * (§2.0), which states it in words. It does not belong in the logo slot.
 *
 * Content comes from `site.brandName`, falling back to a neutral placeholder if
 * the operator entity has not been filled in yet — the mark must never render
 * empty, and it must never silently fall back to the carrier's name.
 */
const BRAND = site.brandName?.trim() || 'Operator';

/** "Peak Connect" -> "PC". One letter if the name is a single word. */
const INITIALS = BRAND.split(/\s+/)
  .map((word) => word[0])
  .filter(Boolean)
  .slice(0, 2)
  .join('')
  .toUpperCase();

/*
 * Split so the second word can sit at a lighter weight — the weight contrast is
 * what gives a plain text wordmark its shape, in place of a glyph.
 */
const [FIRST, ...REST] = BRAND.split(/\s+/);

export default function OperatorMark({ tone = 'ink', className }: Props) {
  return (
    <span
      className={[styles.mark, styles[tone], className].filter(Boolean).join(' ')}
      role="img"
      aria-label={`${BRAND} home`}
    >
      <span className={styles.tile} aria-hidden="true">
        {INITIALS}
      </span>

      <span className={styles.word} aria-hidden="true">
        <span className={styles.strong}>{FIRST}</span>
        {REST.length ? <span className={styles.light}>{REST.join(' ')}</span> : null}
      </span>
    </span>
  );
}
