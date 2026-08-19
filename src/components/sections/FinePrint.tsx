import { conditionalFees, materialTerms, oneTimeFees, recurringFees, type FeeRow } from '@/lib/fineprint';
import { PRICING_DISCLAIMER, site } from '@/lib/site';
import styles from './FinePrint.module.css';

/**
 * §2.5 — the cost disclosure grid, modelled on the FCC Broadband Facts label.
 *
 * Deliberately the plainest block on the page: no photography, no entrance
 * animation, no card chrome. It sits immediately under the plan cards because
 * its whole job is to answer "so what does the bill actually say" before the
 * visitor forms a number in their head from the $29.99 headline.
 *
 * Rendered as three real <table>s rather than a CSS grid so the relationship
 * between charge, amount and condition survives a screen reader and a
 * copy-paste into an email.
 */
function FeeTable({ id, caption, rows }: { id: string; caption: string; rows: FeeRow[] }) {
  return (
    <div className={styles.block}>
      <table className={styles.table} aria-labelledby={id}>
        <caption id={id} className={styles.caption}>
          {caption}
        </caption>
        <thead>
          <tr>
            <th scope="col">Charge</th>
            <th scope="col" className={styles.amountCol}>
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className={styles.rowHead}>
                <span className={styles.rowLabel}>{row.label}</span>
                <span className={styles.rowWhen}>{row.when}</span>
              </th>
              <td className={styles.amount}>{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FinePrint() {
  return (
    <section id="fine-print" className={styles.section} aria-labelledby="fineprint-heading">
      <div className={`shell ${styles.inner}`}>
        <header className={styles.head}>
          <span className={styles.kicker}>The full cost</span>
          <h2 id="fineprint-heading" className={styles.heading}>
            What the bill actually says
          </h2>
          <p className={styles.lede}>
            Advertised rates are the plan rate only. Below is every charge {site.carrierName}{' '}
            publishes, taken verbatim from its Additional Fees and Payment Terms Disclosure
            Statement. We would rather you see this now than on your first statement.
          </p>
        </header>

        <div className={styles.grid}>
          <FeeTable id="fp-recurring" caption="Every month" rows={recurringFees} />
          <FeeTable id="fp-onetime" caption="One time" rows={oneTimeFees} />
          <FeeTable id="fp-conditional" caption="Only if it applies" rows={conditionalFees} />
        </div>

        <div className={styles.terms}>
          <h3 className={styles.termsHead}>Terms that affect what you owe</h3>
          <ul className={styles.termsList}>
            {materialTerms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </div>

        <p className={styles.disclaimer}>{PRICING_DISCLAIMER}</p>
      </div>
    </section>
  );
}
