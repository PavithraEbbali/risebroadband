import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed, Barlow_Semi_Condensed } from 'next/font/google';
import Analytics from '@/components/compliance/Analytics';
import StickyCallBar from '@/components/compliance/StickyCallBar';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { site } from '@/lib/site';
import './globals.css';

/*
 * Self-hosted via next/font — no render-blocking request to Google, and the
 * fallback metrics are auto-adjusted so swapping in the real face costs no CLS.
 */
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const barlowSemi = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '800'],
  variable: '--font-barlow-semi',
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Rise Internet Plans & Pricing | Fixed Wireless & Fiber | Authorized Reseller',
    template: `%s | ${site.resellerName}`,
  },
  description:
    'Compare Rise Internet plans from $29.99/mo with AutoPay. Fixed wireless and fiber internet for rural ' +
    'and small-town addresses across 10 states. Unlimited data, no contracts, 24/7 customer support. ' +
    'Independent authorized reseller — check availability at your address.',
  keywords: [
    'fixed wireless internet',
    'rural internet provider',
    'Rise Internet plans',
    'Rise Broadband',
    'rural high speed internet',
    'fixed wireless internet provider',
    'fiber internet rural areas',
    'internet with no contract',
    'unlimited data internet plans',
    'satellite internet alternative',
  ],
  authors: [{ name: site.resellerLegalName }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: `${site.resellerName} — Authorized ${site.carrierName} Reseller`,
    title: 'Rise Internet Plans & Pricing | Fixed Wireless & Fiber Internet',
    description:
      'Rise Internet plans from $29.99/mo with AutoPay. Unlimited data, no contracts, 24/7 customer support. ' +
      'Check availability at your address.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rise Internet Plans & Pricing | Fixed Wireless & Fiber Internet',
    description:
      'Plans from $29.99/mo with AutoPay. Unlimited data, no contracts. Independent authorized reseller.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#131313' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${barlowSemi.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {/* §2.10 — mobile tap-to-call, revealed once the hero scrolls away. */}
        <StickyCallBar />
        <Analytics />
      </body>
    </html>
  );
}
