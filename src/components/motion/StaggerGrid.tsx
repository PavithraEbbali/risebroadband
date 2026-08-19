'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: 'ul' | 'div';
};

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const gridItem: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  shown: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.66, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Staggered entrance for grids and lists. Pair with `StaggerItem` for children —
 * the parent owns the timing, each child owns its own transform.
 *
 * Reduced motion is handled entirely in CSS, never by branching here. An earlier
 * version returned a plain element when `useReducedMotion()` was true, which
 * broke hydration: the hook returns null during SSR, so the server emitted
 * Framer's `opacity: 0` initial style while the client rendered an unstyled
 * element. React does not patch up mismatched attributes, so the server's
 * `opacity: 0` stuck and every card in this grid stayed invisible for
 * reduced-motion users. Markup must therefore be identical either way; the
 * `[data-motion]` rule in globals.css neutralises the visual result.
 */
export default function StaggerGrid({
  children,
  className,
  stagger = 0.09,
  delay = 0,
  amount = 0.2,
  as = 'div',
}: Props) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      data-reveal
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'li' | 'div' | 'article';
}) {
  const Tag = motion[as];

  return (
    <Tag className={className} variants={gridItem} data-motion>
      {children}
    </Tag>
  );
}
