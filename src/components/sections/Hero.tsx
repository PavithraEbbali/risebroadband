import AddressCheck from '@/components/ui/AddressCheck';
import HeroBackground from '@/components/hero/HeroBackground';
import HeroReveal from '@/components/hero/HeroReveal';
import { plans } from '@/lib/plans';
import { HERO_EYEBROW, site } from '@/lib/site';
import heroFiber from '@/assets/hero-fiber.jpeg';
import styles from './Hero.module.css';

const cheapest = plans.reduce((low, plan) => (plan.price < low.price ? plan : low), plans[0]);

/**
 * Hero.
 *
 * Deliberately static. The background is the artwork and nothing else — no 3D
 * deck, no pointer parallax, no scroll parallax, no glints, no ambient glows,
 * no scrim or blur over the image. Text legibility is carried by text-shadow on
 * the type itself, so nothing is layered over the picture.
 *
 * The section is pinned to the artwork's own 2752×1536 aspect ratio, so at
 * normal widths the image is shown whole at its native framing rather than
 * cropped or scaled into.
 *
 * No hooks here, so this stays a server component; only AddressCheck ships JS.
 */
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <HeroBackground image={heroFiber} />

      <div className={`shell ${styles.inner}`}>
        {/* §2.2.1 — the disclosure repeated at the point of persuasion, not
            only in the top bar. */}
        <HeroReveal lcp delay={0.02}>
        <p className={styles.eyebrow}>{HERO_EYEBROW} of {site.carrierName}</p>
        </HeroReveal>

        <HeroReveal lcp delay={0.05}>
        <h1 id="hero-heading" className={`display ${styles.heading}`}>
          <span className={styles.headingLine}>Fixed wireless internet</span>
          <span className={styles.headingLine}>
            built for <em className={styles.accent}>rural</em> addresses
          </span>
        </h1>
        </HeroReveal>

        <HeroReveal delay={0.22}>
        <p className={styles.lede}>
          Rise Internet — formerly Rise Broadband — brings fixed wireless and fiber to homes across
          ten states where cable never arrived. Unlimited data, no contracts, and 24/7 customer
          support, from <strong className={styles.price}>${cheapest.price.toFixed(2)}/mo</strong>{' '}
          with AutoPay.
        </p>
        </HeroReveal>

        <HeroReveal delay={0.36} className={styles.action}>
        <div className={styles.actionInner}>
          {/* §2.2.4 — the call IS the conversion. It is the primary control,
              renders the number as visible text rather than hiding it behind a
              verb, and is first in the tab order after the copy. */}
          <a
            href={site.salesPhoneHref}
            data-call-cta
            className={styles.callCta}
            aria-label={`Call ${site.tfnDisplay} to order ${site.carrierName} service`}
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
              <span className={styles.callVerb}>Call to order</span>
              <span className={styles.callNum}>{site.tfnDisplay}</span>
            </span>
          </a>

          {/* §2.2.6 — real staffed hours, and §2.2.7 support routing, so an
              existing customer is sent to the carrier instead of consuming a
              sales call and being told no. */}
          <p className={styles.callMeta}>
            <span className={styles.hours}>{site.hours}</span>
            <span className={styles.routing}>
              New orders only. Already a {site.carrierName} customer? Call{' '}
              <a href={`tel:${site.carrierSupportPhone.replace(/[^0-9]/g, '')}`}>
                {site.carrierSupportPhone}
              </a>
              .
            </span>
          </p>

          {/* Secondary. A ZIP is not a serviceability answer — Rise Internet
              qualifies address by address — so this hands off rather than
              claiming a result it cannot know. */}
          <details className={styles.zipWrap}>
            <summary className={styles.zipToggle}>Or check your ZIP first</summary>
            <AddressCheck id="hero-address" tone="onDark" />
          </details>
        </div>
        </HeroReveal>
      </div>
    </section>
  );
}
