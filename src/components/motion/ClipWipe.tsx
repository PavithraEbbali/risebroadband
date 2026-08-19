'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Edge the wipe travels from. */
  from?: 'left' | 'right' | 'bottom' | 'top';
  delay?: number;
  duration?: number;
  amount?: number;
};

const closed: Record<NonNullable<Props['from']>, string> = {
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
  bottom: 'inset(100% 0% 0% 0%)',
  top: 'inset(0% 0% 100% 0%)',
};

const OPEN = 'inset(0% 0% 0% 0%)';

/**
 * Clip-path wipe transition. Reveals content by animating an inset rather than
 * opacity, which keeps the type at full contrast for the entire transition —
 * a cross-fade would push it through a low-contrast midpoint.
 *
 * The trigger and the clip MUST live on different elements. A fully closed
 * inset collapses the element's visible box to zero, and IntersectionObserver
 * then reports `isIntersecting: false` no matter where the page is scrolled —
 * so an element carrying both `whileInView` and its own closed clip can never
 * fire the very animation that would open it. It stays invisible forever.
 *
 * The outer wrapper is therefore never clipped: it owns the viewport trigger
 * and propagates the variant down to the clipped child.
 */
export default function ClipWipe({
  children,
  className,
  from = 'left',
  delay = 0,
  duration = 0.9,
  amount = 0.35,
}: Props) {
  const wipe: Variants = {
    closed: { clipPath: closed[from] },
    open: {
      clipPath: OPEN,
      transition: { duration, delay, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      initial="closed"
      whileInView="open"
      viewport={{ once: true, amount }}
      data-reveal
    >
      {/* Reduced motion is neutralised by the `[data-motion]` rule in
          globals.css, which forces clip-path back to none. */}
      <motion.div className={className} variants={wipe} data-motion>
        {children}
      </motion.div>
    </motion.div>
  );
}
