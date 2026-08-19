'use client';

import Reveal from '@/components/motion/Reveal';
import { motion } from 'framer-motion';
import { AUTOPAY_DISCOUNT, plans, universalIncludes } from '@/lib/plans';
import PriceLockup from '@/components/ui/PriceLockup';
import { site } from '@/lib/site';
import styles from './PlanGrid.module.css';


export default function PlanGrid() {
  return (
    <section id="plans" className={styles.section} aria-labelledby="plans-heading">
      <div className="shell">
        <header className={styles.head}>
          <p className="eyebrow">Plans &amp; pricing</p>
          <h2 id="plans-heading" className={styles.heading}>
            Three speeds.
            <em className={styles.headingAccent}>Clear pricing.</em>
            No contracts.
          </h2>
          <p className={styles.lede}>
            Every current Rise Internet plan includes unlimited data. The rate you see reflects the
            ${AUTOPAY_DISCOUNT} AutoPay discount — enroll in AutoPay and it applies for as long as you
            stay enrolled.
          </p>
        </header>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <motion.article
              key={plan.id}
              className={styles.cell}
              data-featured={plan.featured || undefined}
              /*
               * The trigger lives HERE, on the unclipped wrapper. A fully closed
               * inset collapses the element's visible box, and IntersectionObserver
               * then reports isIntersecting:false forever — so an element carrying
               * both whileInView and its own closed clip can never fire the
               * animation that would open it. Same trap as ClipWipe.
               */
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, shown: {} }}
            >
              <motion.div
                className={styles.wipe}
                /*
                 * Never branch on useReducedMotion() for rendered output — the
                 * hook returns null during SSR and a boolean after hydration, so
                 * the server emits the closed clip, the client emits nothing, and
                 * React leaves the server's inline style in place. Reduced motion
                 * is neutralised by the [data-motion] rule in globals.css.
                 */
                data-motion
                variants={{
                  hidden: { clipPath: 'inset(100% 0% 0% 0%)', y: 40 },
                  shown: {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    y: 0,
                    /*
                     * Drop the clip once the wipe finishes. inset(0%) still
                     * clips to a sharp rectangle, which squared off the card's
                     * rounded corners and sliced its drop shadow.
                     */
                    transitionEnd: { clipPath: 'none' },
                    transition: {
                      duration: 0.95,
                      // Middle card lands first, outer two follow — a centre-out
                      // rhythm, not a left-to-right cascade.
                      delay: [0.16, 0, 0.16][i],
                      ease: [0.76, 0, 0.24, 1],
                    },
                  },
                }}
              >
                <div
                  className={styles.card}
                  data-featured={plan.featured || undefined}
                  aria-labelledby={`plan-${plan.id}-name`}
                >
                  {plan.badge ? <span className={styles.badge}>{plan.badge}</span> : null}

                  <div className={styles.speedBlock}>
                    <span className={styles.speedQualifier}>Up to</span>
                    <span className={styles.speed}>
                      {plan.speed}
                      <span className={styles.speedUnit}>{plan.speedUnit}</span>
                    </span>
                  </div>

                  <h3 id={`plan-${plan.id}-name`} className={styles.name}>
                    {plan.name}
                  </h3>

                  <PriceLockup plan={plan} tone={plan.featured ? 'dark' : 'light'} />

                  <p className={styles.priceNote}>{plan.priceNote}</p>

                  <dl className={styles.specs}>
                    <div className={styles.spec}>
                      <dt>Simultaneous HD streaming</dt>
                      <dd>{plan.streams}</dd>
                    </div>
                    <div className={styles.spec}>
                      <dt>Connected devices</dt>
                      <dd>{plan.devices}</dd>
                    </div>
                    {plan.wifi ? (
                      <div className={styles.spec}>
                        <dt>{plan.wifi.label}</dt>
                        <dd>
                          {plan.wifi.listValue ? (
                            <s className={styles.wifiList}>{plan.wifi.listValue}</s>
                          ) : null}
                          <span className={styles.wifiValue}>{plan.wifi.value}</span>
                        </dd>
                      </div>
                    ) : null}
                  </dl>

                  <p className={styles.blurb}>{plan.blurb}</p>

                  <div className={styles.cta}>
                    <a
                      href={site.salesPhoneHref}
                      data-call-cta
                      data-tone={plan.featured ? 'ember' : 'ink'}
                      className={styles.ctaButton}
                      aria-label={`Call ${site.tfnDisplay} about the ${plan.name} plan`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className={styles.ctaIcon}
                      >
                        <path
                          d="M4.2 3.5h3l1.3 3.3-1.7 1.3a9.5 9.5 0 0 0 4.1 4.1l1.3-1.7 3.3 1.3v3a1.2 1.2 0 0 1-1.3 1.2A12.6 12.6 0 0 1 3 4.8 1.2 1.2 0 0 1 4.2 3.5Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Call now
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <Reveal className={styles.includes} delay={0.1}>
          <p className={styles.includesLabel}>Every plan includes</p>
          <ul className={styles.includesList}>
            {universalIncludes.map((item) => (
              <li key={item} className={styles.include}>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.tick}>
                  <path
                    d="m4.5 10.5 3.4 3.4L15.5 6.3"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
