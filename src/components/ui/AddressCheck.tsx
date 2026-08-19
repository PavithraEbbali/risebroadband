'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/lib/site';
import styles from './AddressCheck.module.css';

type Props = {
  tone?: 'onDark' | 'onLight';
  id?: string;
  className?: string;
};

/**
 * Availability capture. Rise Internet determines serviceability address by
 * address, so this collects the address and hands off — it does not claim a
 * result it cannot know.
 *
 * The submit is intentionally inert client-side: wire `onSubmit` to your CRM or
 * lead endpoint. Until then it surfaces the sales line so the visitor is never
 * left at a dead end.
 */
export default function AddressCheck({ tone = 'onDark', id = 'address-check', className }: Props) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();

    // US ZIP: five digits, optionally +4.
    if (!/^\d{5}(-\d{4})?$/.test(trimmed)) {
      setError('Enter a 5-digit ZIP code so we can check your location.');
      setSubmitted(false);
      return;
    }

    setError(null);
    setSubmitted(true);
    // TODO: POST `trimmed` to the lead endpoint / serviceability API.
  };

  return (
    <div className={[styles.wrap, styles[tone], className].filter(Boolean).join(' ')}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor={id}>
          Enter your ZIP code to check Rise Internet availability
        </label>

        <div className={styles.field}>
          <svg
            className={styles.pin}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8" />
          </svg>

          <input
            id={id}
            className={styles.input}
            type="text"
            name="postal-code"
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="[0-9]{5}(-[0-9]{4})?"
            maxLength={10}
            enterKeyHint="search"
            placeholder="Enter your ZIP code"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (error) setError(null);
            }}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </div>

        <button className={styles.submit} type="submit">
          <span>Check availability</span>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.arrow}>
            <path
              d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>

      <AnimatePresence mode="wait">
        {error ? (
          <motion.p
            key="error"
            id={`${id}-error`}
            className={styles.error}
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            {error}
          </motion.p>
        ) : submitted ? (
          <motion.p
            key="ok"
            className={styles.ok}
            role="status"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            Thanks — we&rsquo;ll check ZIP <strong>{value.trim()}</strong> against both fixed wireless
            and fiber coverage. For an answer right now, call{' '}
            <a href={site.salesPhoneHref} data-call-cta>{site.salesPhone}</a>.
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
