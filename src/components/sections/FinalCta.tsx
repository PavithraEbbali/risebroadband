'use client';

import Image from 'next/image';

import RevealText from '@/components/motion/RevealText';
import Reveal from '@/components/motion/Reveal';
import AddressCheck from '@/components/ui/AddressCheck';
import { site } from '@/lib/site';
import ctaHousehold from '@/assets/images/cta-household.jpeg';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section id="get-started" className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.plate}>
        <Image
          src={ctaHousehold}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={74}
          placeholder="blur"
          className={styles.plateImg}
        />
      </div>
      <div className={styles.glow} aria-hidden="true" />

      <div className={`shell ${styles.inner}`}>
        <RevealText
          as="h2"
          by="word"
          text="Find out what you can actually get at your address"
          className={`display ${styles.heading}`}
        />

        <Reveal delay={0.08}>
          <p className={styles.lede}>
            One check covers both fixed wireless and fiber. No contract, no obligation, and no
            reseller markup — you pay the same published Rise Internet rate either way.
          </p>
        </Reveal>

        {/* Call first. This is a phone-lead funnel: the ZIP field cannot
            answer serviceability, a representative can. */}
        <Reveal delay={0.16} className={styles.formWrap}>
          <a
            href={site.salesPhoneHref}
            data-call-cta
            className={styles.callCta}
            aria-label={`Call ${site.tfnDisplay} to check availability and order`}
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.callIcon}>
              <path
                d="M4.2 3.5h3l1.3 3.3-1.7 1.3a9.5 9.5 0 0 0 4.1 4.1l1.3-1.7 3.3 1.3v3a1.2 1.2 0 0 1-1.3 1.2A12.6 12.6 0 0 1 3 4.8 1.2 1.2 0 0 1 4.2 3.5Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.callLabel}>
              <span className={styles.callVerb}>Call to check &amp; order</span>
              <span className={styles.callNum}>{site.tfnDisplay}</span>
            </span>
          </a>
          <p className={styles.callMeta}>
            {site.hours} · New orders only. Existing {site.carrierName} customers, call{' '}
            <a href={`tel:${site.carrierSupportPhone.replace(/[^0-9]/g, '')}`}>
              {site.carrierSupportPhone}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <details className={styles.zipWrap}>
            <summary className={styles.zipToggle}>Or leave your ZIP and we&rsquo;ll check</summary>
            <AddressCheck id="cta-address" tone="onDark" className={styles.form} />
          </details>
        </Reveal>
      </div>
    </section>
  );
}
