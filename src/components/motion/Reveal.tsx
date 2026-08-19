'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance travelled, in px, along the chosen axis. */
  distance?: number;
  from?: 'below' | 'above' | 'left' | 'right';
  amount?: number;
  as?: 'div' | 'li' | 'section' | 'article' | 'p';
};

const offset = (from: Props['from'], distance: number) => {
  switch (from) {
    case 'above':
      return { y: -distance, x: 0 };
    case 'left':
      return { x: -distance, y: 0 };
    case 'right':
      return { x: distance, y: 0 };
    default:
      return { y: distance, x: 0 };
  }
};

/**
 * Generic single-element scroll reveal, for blocks that do not warrant the
 * per-word split treatment of RevealText.
 *
 * Reduced motion is handled in CSS via `[data-reveal]`, not by branching on
 * `useReducedMotion()` here — see the note in StaggerGrid for why branching
 * leaves content stuck at `opacity: 0`.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  from = 'below',
  amount = 0.3,
  as = 'div',
}: Props) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      data-reveal
      initial={{ opacity: 0, ...offset(from, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
