import Link from 'next/link';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        padding: 'var(--step-8) var(--bay-x)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '52ch' }}>
        <p className="eyebrow">404</p>
        <h1
          className="display"
          style={{
            fontSize: 'var(--type-title)',
            color: 'var(--ink-strong)',
            margin: 'var(--step-4) 0',
          }}
        >
          That page isn&rsquo;t here
        </h1>
        <p style={{ color: 'var(--ink-mute)', marginBottom: 'var(--step-6)' }}>
          The link may be out of date. You can head back to the plans, or call{' '}
          <a href={site.salesPhoneHref} data-call-cta style={{ color: 'var(--ember-text)', fontWeight: 600 }}>
            {site.salesPhone}
          </a>{' '}
          and we&rsquo;ll check availability at your address.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: '3rem',
            padding: '0 var(--step-6)',
            borderRadius: 'var(--bend-pill)',
            background: 'var(--wash-cta)',
            boxShadow: 'var(--lift-cta)',
            color: 'var(--ink-invert)',
            fontWeight: 600,
          }}
        >
          Back to plans
        </Link>
      </div>
    </div>
  );
}
