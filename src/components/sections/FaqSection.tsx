'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { faqItems } from '@/lib/faq';
import { site } from '@/lib/site';
import supportAgent from '@/assets/images/support-agent.jpeg';
import styles from './FaqSection.module.css';

/**
 * FAQ accordion. Answers are written direct-answer-first so a generative engine
 * or a featured snippet can lift the opening sentence and have it stand alone.
 *
 * The first item is open by default — it carries the reseller disclosure, which
 * should not require an interaction to read.
 */
export default function FaqSection() {
  const [open, setOpen] = useState<string | null>(faqItems[0].id);
  const reduced = useReducedMotion();

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className="shell">
        <div className={styles.layout}>
          <header className={styles.head}>
            <p className={`eyebrow ${styles.eyebrow}`}>Questions &amp; answers</p>
            <h2 id="faq-heading" className={styles.heading}>
              Everything worth
              <br />
              knowing before
              <br />
              <span className={styles.headingAccent}>you order</span>
            </h2>
            <p className={styles.lede}>
              Answers below are drawn from Rise Internet&rsquo;s own published FAQ and fee schedule.
              Anything we could not verify from the source is not stated here.
            </p>
            <figure className={styles.portrait}>
              <Image
                src={supportAgent}
                alt="A Rise Internet support representative on a headset"
                fill
                sizes="(max-width: 900px) 100vw, 30vw"
                quality={76}
                placeholder="blur"
                className={styles.portraitImg}
              />
              <figcaption className={styles.portraitCap}>
                customer support, 24 hours a day
              </figcaption>
            </figure>

            <p className={styles.helpline}>
              Still unsure?{' '}
              <a href={site.salesPhoneHref} data-call-cta className={styles.phone}>
                {site.salesPhone}
              </a>
            </p>
          </header>

          <ul className={styles.list}>
            {faqItems.map((item, idx) => {
              const isOpen = open === item.id;
              return (
                <li key={item.id} className={styles.item} data-open={isOpen || undefined}>
                  <h3 className={styles.questionWrap}>
                    <button
                      type="button"
                      className={styles.question}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      id={`faq-button-${item.id}`}
                      onClick={() => setOpen(isOpen ? null : item.id)}
                    >
                      <span className={styles.qIndex} aria-hidden="true">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.questionText}>{item.question}</span>
                      <span className={styles.toggle} aria-hidden="true">
                        <span className={styles.bar} />
                        <span className={`${styles.bar} ${styles.barVertical}`} />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="panel"
                        id={`faq-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-button-${item.id}`}
                        className={styles.panel}
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className={styles.answer}>{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
