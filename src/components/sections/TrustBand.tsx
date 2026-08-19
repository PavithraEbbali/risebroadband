'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { marqueeItems, serviceStates, trustStats } from '@/lib/trust';
import coverageFamily from '@/assets/images/coverage-family.jpeg';
import styles from './TrustBand.module.css';

/**
 * Coverage + verified-facts ticker.
 *
 * This slot would conventionally hold customer testimonials. The source site
 * publishes none — no reviews, ratings or quotes exist anywhere on
 * riseinternet.com (see docs/scrape-report.md §8) — so rather than invent
 * reviewer names and dates, the band carries only sourced facts and the
 * published coverage footprint.
 */
/**
 * Rolls a stat up when it enters view. Values that are not purely numeric
 * ("21+", "4.2M", "24/7") keep their suffix and only the number counts, so the
 * label never loses meaning mid-animation.
 */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  /*
   * Primitives, not the match array. Depending on the array re-ran the effect
   * on every render — each run reset `start`, so the count never advanced past
   * its first frame and the figures rendered as "2+" / "0.3M".
   */
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';
  const decimals = match ? (match[1].split('.')[1] ?? '').length : 0;

  /*
   * Starts on the finished value so the server and the first client render
   * agree. Seeding "0" here desynced hydration, because useReducedMotion()
   * returns null during SSR and a boolean after.
   */
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (reduced || target === null || !inView) return;
    let frame = 0;
    let start = 0;
    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / 1400);
      // easeOutExpo — fast start, long settle.
      const e = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setShown(`${(target * e).toFixed(decimals)}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, target, suffix, decimals]);

  if (target === null) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}

export default function TrustBand() {
  return (
    <section className={styles.band} aria-labelledby="coverage-heading">
      {/* Rural coverage at dusk. Sits behind the marquee and state list, which
          is why the art keeps its left two thirds near-black. */}
      <div className={styles.plate}>
        <Image
          src={coverageFamily}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={78}
          placeholder="blur"
          className={styles.plateImg}
        />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <h2 id="coverage-heading" className="sr-only">
        Rise Internet coverage and network facts
      </h2>

      {/* §4 bans the infinite marquee. The same sourced facts render as a
          static wrapped list — crawlable, readable when paused-by-default, and
          no longer a perpetual compositor job. */}
      <ul className={`shell ${styles.facts}`}>
        {marqueeItems.map((item) => (
          <li key={item.text} className={styles.fact} data-kind={item.kind}>
            {item.text}
          </li>
        ))}
      </ul>

      {/* Oversized figures. These were orphaned when the Why Rise section came
          out; they are the strongest trust signals on the page. */}
      <motion.div
        className={`shell ${styles.figures}`}
        initial="rest"
        whileInView="live"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ rest: {}, live: { transition: { staggerChildren: 0.12 } } }}
      >
        {trustStats.map((stat) => (
          <motion.div
            key={stat.value + stat.unit}
            className={styles.figure}
            data-motion
            variants={{
              rest: { opacity: 0, y: 28, scaleY: 0.94 },
              live: {
                opacity: 1,
                y: 0,
                scaleY: 1,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <span className={styles.figureValue}>
              <CountUp value={stat.value} />
            </span>
            <span className={styles.figureUnit}>{stat.unit}</span>
            <span className={styles.figureLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Static, crawlable coverage list — the marquee is presentation, this is the content. */}
      <div className={`shell ${styles.states}`}>
        <p className={styles.statesLabel}>Rise Internet serves</p>
        <ul className={styles.statesList}>
          {serviceStates.map((state) => (
            <li key={state} className={styles.state}>
              {state}
            </li>
          ))}
        </ul>
        <p className={styles.statesNote}>
          Coverage varies within each state and is confirmed address by address. Fixed wireless
          depends on line of sight to nearby Rise equipment; fiber depends on whether underground
          plant has reached your street.
        </p>
      </div>
    </section>
  );
}
