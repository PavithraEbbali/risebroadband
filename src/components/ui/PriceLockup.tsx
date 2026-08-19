import type { Plan } from '@/lib/plans';
import styles from './PriceLockup.module.css';

/**
 * §3 — the accessible price lockup.
 *
 * The visual arrangement of a price (struck list rate, oversized dollars,
 * shrunken cents, a "/mo" tucked against the baseline) is typography, not
 * language. Read literally by a screen reader it comes out as something like
 * "49 dot 99 29 dot 99 slash m o" — technically every character, and useless.
 *
 * So the lockup is split in two:
 *   - the visual row is `aria-hidden`, free to be laid out purely for the eye;
 *   - a generated `sr-only` sentence states the same facts in prose, built from
 *     the same `plan` record so the two cannot drift apart.
 *
 * The step-up line is not optional. On this carrier the advertised rate is the
 * AutoPay rate, and dropping AutoPay raises the bill by $20 — a visitor who
 * cannot see what the price becomes has been shown half a price. That line is
 * rendered visibly, not just to assistive tech.
 */
export default function PriceLockup({
  plan,
  tone = 'light',
}: {
  plan: Plan;
  /** The featured card is dark; the other two are light. */
  tone?: 'light' | 'dark';
}) {
  const [dollars, cents] = plan.price.toFixed(2).split('.');

  /*
   * One sentence, assembled from the record. Written as prose rather than
   * fragments so it is intelligible at speech rate on first hearing.
   */
  const spoken =
    `${plan.name} plan: ${plan.price.toFixed(2)} dollars per month with AutoPay enrollment, ` +
    `stepping up to ${plan.listPrice.toFixed(2)} dollars per month without AutoPay. ` +
    `Plus taxes, fees and surcharges, a one-time 99 dollar connection fee, ` +
    `a 6 dollars 99 cents monthly Carrier Recovery Cost, and equipment rental of up to 15 dollars per month.`;

  return (
    <div className={styles.lockup} data-tone={tone}>
      <p className="sr-only">{spoken}</p>

      {/* Purely visual from here down — every fact above is already spoken. */}
      <div className={styles.row} aria-hidden="true">
        <s className={styles.list}>${plan.listPrice.toFixed(2)}</s>
        <span className={styles.price}>
          <span className={styles.currency}>$</span>
          <span className={styles.dollars}>{dollars}</span>
          <span className={styles.cents}>.{cents}</span>
          <span className={styles.period}>/mo</span>
        </span>
      </div>

      {/* §3 step-up line. */}
      <p className={styles.stepUp} aria-hidden="true">
        With AutoPay. <strong>${plan.listPrice.toFixed(2)}/mo</strong> without.
      </p>
    </div>
  );
}
