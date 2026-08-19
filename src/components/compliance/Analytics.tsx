'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { site } from '@/lib/site';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONFIGURED = /^AW-\d+$/.test(site.gtagId);

/**
 * §8.6 — Google Ads call-conversion tracking with Consent Mode v2.
 *
 * Consent defaults to GRANTED (US-only funnel, no EEA/UK targeting) and is then
 * downgraded in the browser when the visitor signals Global Privacy Control or
 * legacy Do Not Track. Doing it in that order matters: the default has to be in
 * the dataLayer *before* the gtag.js tag loads, so it goes in a beforeInteractive
 * inline script while the GPC downgrade runs afterwards as a normal update.
 *
 * Conversions fire from a single delegated listener on `[data-call-cta]` rather
 * than from per-button handlers. That is the whole reason §2 mandates the
 * attribute: a new call button anywhere on the site is tracked the moment it
 * ships, with no wiring step to forget.
 */
export default function Analytics() {
  useEffect(() => {
    if (!CONFIGURED) return;

    // ---- GPC / DNT downgrade ----
    const nav = navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string };
    const optedOut =
      nav.globalPrivacyControl === true ||
      nav.doNotTrack === '1' ||
      nav.msDoNotTrack === '1' ||
      (window as Window & { doNotTrack?: string }).doNotTrack === '1';

    if (optedOut) {
      window.gtag?.('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      });
    }

    // ---- delegated call-conversion ----
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest?.('[data-call-cta]')) return;
      window.gtag?.('event', 'conversion', {
        send_to: `${site.gtagId}/${site.conversionLabel}`,
      });
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (!CONFIGURED) return null;

  return (
    <>
      <Script id="consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted',wait_for_update:500});`}
      </Script>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${site.gtagId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`gtag('js',new Date());gtag('config','${site.gtagId}');`}
      </Script>
    </>
  );
}
