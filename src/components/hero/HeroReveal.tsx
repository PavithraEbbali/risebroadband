'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Entrance wrapper for a hero copy block.
 *
 * `lcp` marks the element Chrome will pick as the LCP candidate — the headline.
 * That one animates transform ONLY and never fades, because an element at
 * opacity 0 is not counted as painted and a fade would push LCP out by the full
 * transition. Everything below it is free to fade.
 *
 * Markup is identical whether or not reduced motion is set — only the
 * transition duration changes — so this cannot desync SSR from hydration the
 * way branching on the hook would.
 */
export default function HeroReveal({
  children,
  delay = 0,
  lcp = false,
  className,
}: {
  children: ReactNode;
  delay?: number;
  lcp?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: lcp ? 1 : 0, y: lcp ? 34 : 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 0.95,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
