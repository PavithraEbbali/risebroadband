'use client';

import { motion, type Variants } from 'framer-motion';
import type { ElementType } from 'react';
import styles from './RevealText.module.css';

type Props = {
  text: string;
  /** Split granularity. Chars are heavier — reserve them for short display lines. */
  by?: 'word' | 'char';
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Fraction of the element that must be visible before the reveal fires. */
  amount?: number;
};

/**
 * Scroll-triggered text reveal. Each unit rises out of an overflow-clipped mask,
 * so the letters appear to be pushed up from behind a hard edge rather than
 * simply fading in.
 *
 * The whole string is exposed to assistive tech as one label and the split
 * fragments are hidden, otherwise a screen reader announces it letter by letter.
 */
export default function RevealText({
  text,
  by = 'word',
  as = 'span',
  className,
  delay = 0,
  stagger,
  amount = 0.5,
}: Props) {
  const units = by === 'char' ? Array.from(text) : text.split(' ');
  const step = stagger ?? (by === 'char' ? 0.022 : 0.055);

  /*
   * The reduced-motion branch must not change the DOM shape. `useReducedMotion`
   * returns null during SSR and a boolean after hydration, so returning plain
   * text here (as an earlier version did) made the server and client trees
   * disagree and React threw a hydration mismatch for every reduced-motion
   * visitor. Instead the same split markup is always emitted and the motion is
   * neutralised by starting in the final state.
   */
  const container: Variants = {
    hidden: {},
    shown: { transition: { delayChildren: delay, staggerChildren: step } },
  };

  const unit: Variants = {
    hidden: { y: '108%', rotate: by === 'char' ? 4 : 2 },
    shown: {
      y: '0%',
      rotate: 0,
      transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const Wrapper = motion[as as 'span'] ?? motion.span;

  return (
    <Wrapper
      className={[styles.root, className].filter(Boolean).join(' ')}
      variants={container}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
      data-reveal
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={styles.units}>
        {units.map((value, index) => (
          <span key={`${value}-${index}`} className={styles.mask}>
            <motion.span className={styles.unit} variants={unit} data-motion>
              {value}
              {by === 'word' && index < units.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </span>
    </Wrapper>
  );
}
