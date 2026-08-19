import { site } from '@/lib/site';
import styles from './WhyOrderThroughUs.module.css';

/**
 * §2.6 — why order through this operator rather than direct.
 *
 * This is NOT a "why choose Rise Internet" block; the carrier's merits are its
 * own. Every claim below has to be true of *us* and independently defensible,
 * because it is exactly the section a carrier compliance reviewer reads first.
 *
 * Note what is deliberately absent: no claim of exclusive pricing, no invented
 * discount, no suggestion that ordering here is cheaper than ordering direct.
 * The rates are the carrier's rates. What we sell is the ordering experience.
 */
const reasons = [
  {
    k: '01',
    title: 'Same rates, read out loud',
    body:
      `We sell ${site.carrierName}'s published rates — not a markup and not a private discount. ` +
      'What changes is that someone totals the connection fee, the recovery cost and the equipment ' +
      'rental with you on the call, so the number you agree to is the number that bills.',
  },
  {
    k: '02',
    title: 'One person, start to finish',
    body:
      'The person who takes your order is the person who confirms serviceability at your address and ' +
      'books the install window. No transfers between queues, no repeating your address three times.',
  },
  {
    k: '03',
    title: 'We tell you when the answer is no',
    body:
      'Fixed wireless needs line of sight and fiber needs plant on your street. If neither reaches you, ' +
      'we say so on the first call instead of booking a survey that will not succeed.',
  },
  {
    k: '04',
    title: 'Independent, and clear about it',
    body:
      `${site.entityLegalName} is an independent authorized ${site.agreementNoun}. Your service ` +
      `agreement, network and monthly billing are with ${site.carrierName} — we say that up front, ` +
      'in writing, on every page of this site.',
  },
] as const;

export default function WhyOrderThroughUs() {
  return (
    <section id="why-us" className={styles.section} aria-labelledby="whyus-heading">
      <div className={`shell ${styles.inner}`}>
        <header className={styles.head}>
          <span className={styles.kicker}>Ordering through {site.brandName}</span>
          <h2 id="whyus-heading" className={styles.heading}>
            Why order through us
          </h2>
          <p className={styles.lede}>
            You can order {site.carrierName} service directly from {site.carrierName}. Here is what
            is different if you call us instead.
          </p>
        </header>

        <ol className={styles.list}>
          {reasons.map((r) => (
            <li key={r.k} className={styles.item}>
              <span className={styles.num} aria-hidden="true">
                {r.k}
              </span>
              <div>
                <h3 className={styles.itemTitle}>{r.title}</h3>
                <p className={styles.itemBody}>{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
