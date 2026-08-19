'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { site } from '@/lib/site';
import step1 from '@/assets/images/step-1-check.jpeg';
import step2 from '@/assets/images/step-2-survey.jpeg';
import step3 from '@/assets/images/step-3-install.jpeg';
import styles from './HowItWorks.module.css';

const stepImages = [step1, step2, step3];

/**
 * Steps are grounded in the carrier's published FAQ: technician-only install,
 * adult 18+ present, a few hours on site, above-ground fixed wireless or
 * underground fiber terminating at an indoor device. See docs/scrape-report.md §5.
 */
const steps = [
  {
    n: '01',
    title: 'You call us',
    body:
      'One call is the whole order path — there is no cart and no checkout here. Tell us your address and we ' +
      'read back exactly what is reachable at it, at the price it actually bills at.',
  },
  {
    n: '02',
    title: 'We confirm the plan and the real cost',
    body:
      'Availability is decided address by address, not by ZIP code. We check fixed wireless and fiber at your ' +
      'exact location, then walk the full bill line by line: plan rate, AutoPay discount, the $99 connection ' +
      'fee, the $6.99 Carrier Recovery Cost and any equipment rental.',
  },
  {
    n: '03',
    title: 'A technician installs and you go live',
    body:
      'Self-install is not offered. Rise Internet dispatches a trained technician, who assesses line of sight, ' +
      'mounts fixed wireless above ground or runs fiber underground, and confirms the service performs before ' +
      'leaving. An adult 18 or older must be present.',
  },
] as const;

/*
 * §4 allows one animation approach, and the rest of the site is Framer, so the
 * GSAP + ScrollTrigger driver that used to live here is gone. The reveal is now
 * a plain staggered `whileInView`.
 *
 * Reduced motion is handled in CSS via the `[data-motion]` hook in globals.css
 * rather than by branching on `useReducedMotion()`. Branching rendered output on
 * that hook desyncs hydration — it returns null on the server and a boolean on
 * the client — and React does not patch mismatched style attributes, which
 * previously left whole sections stuck at opacity 0.
 */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={`shell ${styles.head}`}>
        <div>
          <span className={styles.kicker}>Getting connected</span>
          <h2 id="how-heading" className={styles.heading}>
            Three steps. <span className={styles.headingSoft}>One call.</span>
          </h2>
        </div>
        <p className={styles.lede}>
          Fixed wireless links your home to nearby Rise Internet ground equipment over licensed
          spectrum — a short hop to a local tower instead of a round trip to orbit.
        </p>
      </div>

      {/* Horizontal snap rail. Compact and self-contained, unlike the full-bleed
          rows this replaced, which spent half the viewport on a photo and left
          the copy in a narrow gutter. */}
      <div className={styles.railWrap}>
        <motion.ol
          className={`shell ${styles.rail}`}
          initial="rest"
          whileInView="live"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ rest: {}, live: { transition: { staggerChildren: 0.12 } } }}
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              className={styles.panel}
              data-motion
              variants={{
                rest: { opacity: 0, y: 32 },
                live: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <div className={styles.shot}>
                <Image
                  src={stepImages[i]}
                  alt={step.title}
                  fill
                  sizes="(max-width: 720px) 78vw, 26vw"
                  quality={70}
                  placeholder="blur"
                  className={styles.shotImg}
                />
                <span className={styles.num} aria-hidden="true">
                  {step.n}
                </span>
              </div>
              <h3 className={styles.panelTitle}>{step.title}</h3>
              <p className={styles.panelBody}>{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      {/* §2.7 — the flow terminates in the call, not in a form. */}
      <div className={`shell ${styles.close}`}>
        <p className={styles.closeCopy}>
          Step one takes about five minutes. We will confirm what is reachable at your address
          before anything is ordered.
        </p>
        <a
          href={site.salesPhoneHref}
          className={styles.closeCta}
          data-call-cta
          aria-label={`Call ${site.tfnDisplay} to start your order`}
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.closeIcon}>
            <path
              d="M4.2 3.5h3l1.3 3.3-1.7 1.3a9.5 9.5 0 0 0 4.1 4.1l1.3-1.7 3.3 1.3v3a1.2 1.2 0 0 1-1.3 1.2A12.6 12.6 0 0 1 3 4.8 1.2 1.2 0 0 1 4.2 3.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
          {site.tfnDisplay}
        </a>
        <span className={styles.closeHours}>{site.hours}</span>
      </div>
    </section>
  );
}
