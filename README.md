# Rise Internet — Authorized Reseller Landing Site

A single-page, phone-lead landing site for an **independent authorized reseller** of Rise
Internet (formerly Rise Broadband) fixed wireless and fiber service, plus nine legal policy
routes.

Built with Next.js App Router, TypeScript and CSS Modules. Ships as a **static export** — no
server runtime, no route handlers, no ISR.

---

## ⚠️ Read this before deploying

The site is feature-complete and builds clean, but **three values in
[`src/lib/site.ts`](src/lib/site.ts) are placeholders** and must be replaced with real operator
data before any advertising spend. They are not code problems — they need information from the
operator.

| Field | Current | Why it blocks launch |
| --- | --- | --- |
| `entityLegalName`, `registeredAddress`, `email` | `Peak Connect Communications LLC`, Denver placeholder | Must be the real registered entity and must match the Google Ads verified-advertiser identity string-for-string. |
| `tfnDisplay` / `tfnE164` | `(888) 555-0142` | Must be a toll-free number unique to **this** site and program. The number previously used here, `1-844-411-7473`, is Rise Internet's own published support line — routing order calls there means agents answer as the carrier, not the reseller, and it poisons call-conversion data. |
| `gtagId` / `conversionLabel` | `AW-XXXXXXXXXX` | Analytics stays inert until this is a real `AW-` id. Nothing is sent, no consent signals fire. |

`agreementNoun` (currently `reseller`) must also match the signed carrier agreement verbatim —
carriers audit that word.

---

## Getting started

```bash
npm install
```

```bash
npm run dev
```

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Copy lint, then static export to `out/` |
| `npm run lint:copy` | Banned-phrase check only |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run verify` | Lint + typecheck + build |

> **Do not run `next build` while the dev server is running.** It corrupts `.next` and every
> route starts returning 500. Stop the server, `rm -rf .next`, then build.

## Deploying to Vercel

`next.config.mjs` sets `output: 'export'`, so Vercel serves the contents of `out/` as static
files. No environment variables are required — everything configurable lives in `src/lib/site.ts`
and is baked in at build time. Import the repo and accept the detected Next.js defaults.

Because the export is static, changing any value in `site.ts` requires a rebuild to take effect.

---

## How this is organised

```
src/
  app/            routes — home + 9 legal pages, robots.ts, sitemap.ts
  components/
    brand/        OperatorMark (header), RiseLogo (footer only)
    compliance/   TopDisclosureBar, StickyCallBar, Analytics
    sections/     the home page, top to bottom
    motion/       Reveal primitives (Framer only)
    ui/           AddressCheck, PriceLockup
  lib/            site.ts, plans.ts, fineprint.ts, faq.ts, schema.ts, trust.ts
scripts/          lint-copy.mjs + lint-allowlist.txt
docs/             scrape-report.md — sourcing evidence for every published figure
ai.wing           running changelog; newest entry first
```

## Things that will bite you

These are load-bearing decisions, not preferences. Each one was a bug at some point.

**Pricing is sourced, not authored.** Every figure in `plans.ts` and `fineprint.ts` is verbatim
from the carrier's published pages, traced in [`docs/scrape-report.md`](docs/scrape-report.md).
The struck-through price is *not* a promotion — `listPrice - price === 20` on all three tiers is
exactly the AutoPay discount. There is no promotional end date anywhere on the source, so none is
asserted. **Do not add urgency copy.**

**No reviews exist.** The carrier publishes no ratings, reviews or testimonials. There is
deliberately no `AggregateRating` or `Review` in the structured data. Any rating on this site
would be fabricated.

**`npm run build` runs the copy linter first, and a banned phrase fails the build.** Rules live in
[`scripts/lint-copy.mjs`](scripts/lint-copy.mjs). To exempt a genuine false positive, add the
narrowest possible substring to `lint-allowlist.txt` — never weaken a rule.

**Every sales `tel:` link needs `data-call-cta`.** Conversions fire from one delegated listener on
that attribute, so a new call button is tracked the moment it ships. The two links to the
*carrier's* support number deliberately omit it — they are not sales leads.

**Never branch rendered output on `useReducedMotion()`.** It returns `null` during SSR and a
boolean after, so branching desyncs hydration; React does not patch mismatched style attributes
and content stays stuck at `opacity: 0`. Reduced motion is handled in CSS via the `[data-reveal]`
and `[data-motion]` hooks in `globals.css`.

**Never put a closing `clip-path` and `whileInView` on the same element.** `inset(0% 0% 0% 100%)`
collapses the box, so IntersectionObserver reports it as never intersecting and the animation
never fires. Put `whileInView` on an unclipped wrapper.

**The header height is variable.** The disclosure sentence wraps to two lines under ~480px and
three under ~380px, taking the header from 106px to ~140px. The hero's mobile top padding is a
flat value for exactly this reason — a `vw`-based clamp shrinks where the header grows. Re-measure
at 360px after changing that sentence.

**Section wrappers are styled for their children.** `FinalCta`'s `.formWrap` broke twice when
content was added under a rule written for the previous content.

---

## Compliance architecture

The disclosure is not decoration and is load-bearing for Google Ads policy:

- **Top bar** (`TopDisclosureBar`) — `Independent Authorized Reseller of Rise Internet® — Not Rise
  Internet.` Server-rendered, not dismissible, lives inside the fixed header so it is always on
  screen. Nothing about it may depend on hydration or a cookie choice.
- **Hero eyebrow** — repeats it at the point of persuasion.
- **Header carries the operator's own mark only.** `OperatorMark` is monochrome with no
  carrier-derived colour, shape or typeface; a recoloured carrier mark is still a carrier mark.
  `RiseLogo` is used in the footer only, under authorization, tagged "Authorized Reseller".
- **Footer** — legal entity, postal address, phone and email (all four are required), full
  reseller disclosure and trademark attribution.
- **Structured data is `Organization`, never `LocalBusiness`** — this is a telephone sales
  operation for someone else's network, and `LocalBusiness` asserts premises customers visit.

## Licence

Private and unlicensed. Carrier trademarks belong to Rise Internet; `eero` is a trademark of
Amazon.com, Inc. or its affiliates.
