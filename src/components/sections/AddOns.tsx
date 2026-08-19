import { plans } from '@/lib/plans';
import { site } from '@/lib/site';
import styles from './AddOns.module.css';

/**
 * §2.4 — value-added services.
 *
 * Kept deliberately small. A VAS block earns its place by disclosing what the
 * add-ons cost *per plan*, not by re-selling the Wi-Fi hardware at length; the
 * spec wants attach-rate transparency, so every row below carries a price or
 * says plainly that it varies.
 *
 * Prices come from the plan records, which are verbatim from the carrier's
 * compare-plans page (docs/scrape-report.md §2). The Wi-Fi tier genuinely
 * differs by plan — free on the 1 Gbps tier, half price on 500 Mbps, list on
 * 150 Mbps — so it is rendered as a per-plan table rather than one number.
 */
const extras = [
  {
    title: 'Voice line (ATA rental)',
    price: '$1.00/mo',
    body:
      'Adds a phone line over your internet connection using a rented adapter. The adapter must be ' +
      'returned within 30 days of cancellation or a $70 fee applies.',
  },
  {
    title: 'Additional mesh units',
    price: 'Varies by home',
    body:
      'One unit covers up to 2,000 sq. ft. Larger or multi-story homes may need more for true mesh ' +
      'coverage. We confirm how many your address needs on the call rather than guessing here.',
  },
  {
    title: 'Paper statements',
    price: '$5/mo',
    body:
      'Billing is paperless by default. A mailed statement is a chargeable add-on, which is why it ' +
      'appears in the fee schedule above.',
  },
] as const;

export default function AddOns() {
  return (
    <section id="add-ons" className={styles.section} aria-labelledby="addons-heading">
      <div className={`shell ${styles.inner}`}>
        <header className={styles.head}>
          <span className={styles.kicker}>Add-ons</span>
          <h2 id="addons-heading" className={styles.heading}>
            Equipment and extras
          </h2>
          <p className={styles.lede}>
            Optional services {site.carrierName} offers alongside the plan. Each one changes your
            monthly bill, so each one is priced here.
          </p>
        </header>

        {/* Wi-Fi is the one add-on whose price is a function of the plan. */}
        <div className={styles.wifi}>
          <h3 className={styles.wifiHead}>Total Home Advanced Wi-Fi</h3>
          <p className={styles.wifiBody}>
            Whole-home mesh Wi-Fi with active threat protection, content filtering, per-device
            scheduling and network insights. Up to 2,000 sq. ft. and 120+ devices per unit. What it
            costs depends on which plan it is attached to:
          </p>
          <ul className={styles.wifiList}>
            {/* `wifi` is optional on Plan — a tier with no published Wi-Fi tier
                is skipped rather than rendered with an invented price. */}
            {plans.map((plan) =>
              plan.wifi ? (
                <li key={plan.id} className={styles.wifiRow}>
                  <span className={styles.wifiPlan}>
                    {plan.speed} {plan.speedUnit}
                  </span>
                  <span className={styles.wifiTier}>{plan.wifi.label}</span>
                  <span className={styles.wifiPrice}>
                    {plan.wifi.listValue ? (
                      <>
                        <s className={styles.wifiWas}>{plan.wifi.listValue}</s> {plan.wifi.value}
                      </>
                    ) : (
                      plan.wifi.value
                    )}
                  </span>
                </li>
              ) : null,
            )}
          </ul>
          <p className={styles.wifiNote}>
            eero is a trademark of Amazon.com, Inc. or its affiliates. Equipment rental of up to $15
            per month may apply depending on your service plan.
          </p>
        </div>

        <ul className={styles.extras}>
          {extras.map((extra) => (
            <li key={extra.title} className={styles.extra}>
              <div className={styles.extraTop}>
                <h3 className={styles.extraTitle}>{extra.title}</h3>
                <span className={styles.extraPrice}>{extra.price}</span>
              </div>
              <p className={styles.extraBody}>{extra.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
