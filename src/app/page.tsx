import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PlanGrid from '@/components/sections/PlanGrid';
import FinePrint from '@/components/sections/FinePrint';
import AddOns from '@/components/sections/AddOns';
import TrustBand from '@/components/sections/TrustBand';
import WhyOrderThroughUs from '@/components/sections/WhyOrderThroughUs';
import HowItWorks from '@/components/sections/HowItWorks';
import FinalCta from '@/components/sections/FinalCta';
import FaqSection from '@/components/sections/FaqSection';
import { homeGraph } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Rise Internet Plans & Pricing | Fixed Wireless & Fiber | Authorized Reseller',
  description:
    'Compare Rise Internet plans from $29.99/mo with AutoPay. Fixed wireless and fiber internet for rural ' +
    'and small-town addresses across 10 states. Unlimited data, no contracts, 24/7 customer support.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Server-rendered constant — no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph()) }}
      />

      {/* §2 running order. FAQ is last (§2.8) — nothing but the footer may
          follow it, so FinalCta moves above rather than below. */}
      <Hero />
      <PlanGrid />
      <FinePrint />
      <AddOns />
      <TrustBand />
      <WhyOrderThroughUs />
      <HowItWorks />
      <FinalCta />
      <FaqSection />
    </>
  );
}
