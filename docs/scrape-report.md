# Source Scrape Report — risebroadband.com
**Captured:** 2026-08-06 · **Method:** headless Chromium, fully hydrated DOM + live `getComputedStyle` CSS custom-property dump

---

## 0. CRITICAL FINDING — the brand has been renamed

`https://www.risebroadband.com/` returns **HTTP 301 → `https://www.riseinternet.com/`**.

```
HTTP/1.1 301 Moved Permanently
Location: https://www.riseinternet.com:443/
HTTP/1.1 200 OK
```

The live site is branded **"Rise Internet"** throughout. Footer reads `© 2026 RISE INTERNET`.
Legal doc filenames still carry legacy `rise-broadband-*` slugs (e.g. `/legal/rise-broadband-sms-terms-and-conditions`, `/legal/broadband-internet-terms-and-conditions-of-service`), confirming a rebrand rather than a different company.

**Every design token, price, and content string below is from the current Rise Internet site.**

Bot protection: `sitemap.xml` → 403 to plain HTTP clients; same-origin `fetch()` from page context → HTTP 202 challenge. Only real browser navigation returned content. All data below came from real navigation.

---

## 1. Design tokens (verbatim from live CSS custom properties)

### Brand color ramp
| Token | Value |
|---|---|
| `--color-brand` / `--palette-orange-100` | `#ff5601` |
| `--color-brand-light` / `--palette-pricing-badge-end` | `#ff7a2e` |
| `--color-brand-hover` / `--palette-orange-red` | `#cc4800` |
| `--color-brand-deep` / `--palette-hero-end` | `#d93f09` |
| `--color-brand-button-hover` | `#d05714` |
| `--color-brand-button-press` | `#af3e00` |
| `--color-text-brand` / `--palette-brand-orange` | `#e85c0d` |
| `--color-brand-tint` / `--palette-orange-tint` | `#fceadf` |
| `--color-brand-subtle` | `#ff560114` |
| `--palette-orange-20 / 40 / 80` | `#ff560133` · `#ff560166` · `#ff5601cc` |

### Neutrals
| Token | Value |
|---|---|
| `--color-surface-dark` / `--palette-black-100` | `#161616` |
| `--color-surface-dark-raised` / `--palette-grey-800` | `#262626` |
| `--color-surface-light` | `#ffffff` |
| `--color-surface-subtle` / `--palette-grey-050` | `#f8f8f8` |
| `--color-surface-muted` / `--palette-grey-125` | `#f1f1f1` |
| `--color-surface-card-frame` / `--palette-grey-150` | `#ececec` |
| `--color-border` / `--palette-grey-100` | `#eff0ea` |
| `--color-border-divider` / `--palette-grey-175` | `#dcdcdc` |
| `--color-text-primary` | `#161616` |
| `--color-text-secondary` | `#262626` |
| `--color-text-muted` / `--palette-grey-400` | `#706a6a` |
| `--color-text-tier` / `--palette-grey-600` | `#626262` |
| `--color-text-subtle` / `--palette-grey-200` | `#b3b3b3` |
| `--color-success` | `#15e063` |
| `--color-error` | `#f82100` |
| `--color-map-water` | `#61cce3` |

### Gradients
```css
--gradient-brand:        radial-gradient(circle at center,#ff7b00 0%,#e34c06 100%);
--gradient-brand-linear: linear-gradient(to right,#e43d00 0%,#ff5601 50%,#ff7c01 87%,#ff7c01 100%);
--gradient-hero:         linear-gradient(165deg,#ff5601 0%,#d93f09 100%);
--gradient-hero-highlight: radial-gradient(120% 85% at 50% -30%,#ffffff38 0%,transparent 55%);
--gradient-cta-bg:       radial-gradient(115% 130% at 50% 108%,#ce26006b 0%,transparent 52%),
                         linear-gradient(180deg,#ff781f 0%,#ff5601 44%,#c91800 100%);
--gradient-cta-bg-hover: radial-gradient(115% 130% at 50% 108%,#ce26004d 0%,transparent 52%),
                         linear-gradient(180deg,#ff8c38,#ff6510 46%,#de3000);
--gradient-cta-bg-active:radial-gradient(115% 130% at 50% 108%,#5010008c 0%,transparent 48%),
                         linear-gradient(180deg,#e05500,#c92800 52%,#8c1400);
--gradient-featured-frame: radial-gradient(ellipse 130% 100% at 100% 0%,#ff7a2e 0%,#cc4800 58%);
--gradient-rule-brand:   linear-gradient(90deg,#fff0 0%,#ff5601 50%,#fff0 100%);
--gradient-card-shade-strong: linear-gradient(122deg,#000000a6,#0006 45%,#0000 101%);
```

### Typography — **Barlow superfamily**, three widths
```css
--font-sans:         "Barlow", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--font-display:      "Barlow Condensed", "Barlow", system-ui, -apple-system, sans-serif;
--font-display-semi: "Barlow Semi Condensed", "Barlow", system-ui, -apple-system, sans-serif;
```
Loaded weights (from `document.fonts`):
- Barlow — 400, 500, 600, 700
- Barlow Condensed — 700, 800
- Barlow Semi Condensed — 500, 600, 800

Weight tokens: `normal 400 · medium 500 · semibold 600 · bold 700 · extrabold 800`

**Fluid display scale**
```css
--rise-display-3xl: clamp(4.5rem, 14vw + 1rem, 15rem);
--rise-display-2xl: clamp(3rem, 8vw + 2rem, 10rem);
--rise-display-xl:  clamp(2.25rem, 6vw + 1.5rem, 7.5rem);
--rise-display-xl-sub: clamp(2.75rem, 5vw + 1rem, 5.5rem);
--rise-display-section: clamp(2.25rem, 5vw + 1.25rem, 4.5rem);
--rise-display-lg:  clamp(2rem, 4vw + 1rem, 4.5rem);
--rise-display-md:  clamp(1.75rem, 3vw + 1rem, 3rem);
--rise-display-sm:  clamp(1.25rem, .884vw + 1.043rem, 2rem);
--rise-body-xl:     1.75rem;
```
Static text ramp: `xs .75 · sm .875 · base 1 · lg 1.125 · xl 1.25 · 2xl 1.5 · 3xl 1.875 · 5xl 3rem`

**Line-height tokens:** `display .95 · xxl .9 · snug 1.05 · xl 1 · small 1.28 · xxs 1.286 · tight 1.25 · md 1.3 · body 1.4 · normal 1.5 · relaxed 1.625`
**Tracking:** `normal 0em · wide .025em · wider .05em`. Body copy computes to **-0.16px @16px** (≈ `-0.01em`); display uses `-0.01em`.

### Spacing / layout
```css
--spacing: .25rem;                 /* 4px base unit */
--section-padding-x: clamp(1rem, 4vw, 4rem);
--section-padding-y: clamp(3rem, 6vw + 1.5rem, 6rem);
--content-max-width: 1280px;
--content-max-width-narrow: 1024px;
--container-max-width: 1640px;
--container-4xl: 1440px;
```

### Radii
```
xs 4px · sm 8px · md 12px · lg 16px · xl .75rem · 2xl 1rem · card 20px · 3xl 1.5rem · pill 9999px
```

### Shadows
```css
--shadow-card:    0 4px 24px #0000000f;
--shadow-card-lg: 0 12px 48px #00000014;
--shadow-card-xl: 0 40px 75px 0 #00000040, 0 20px 25px 0 #0000001a;
--shadow-card-float: 0 10px 23px 0 #4040401a, 0 42px 42px 0 #40404017,
                     0 94px 57px 0 #4040400d, 0 168px 67px 0 #40404003;
--shadow-nav:      0 7px 21.7px #0000000d;
--shadow-nav-menu: 0 22px 58px #40404014;
--shadow-cta-brand-resting: inset 0 1px 0 #ffffff38, 0 6px 18px #cc480047;
--shadow-cta-brand-hover:   inset 0 1px 0 #ffffff38, 0 10px 26px #cc480061;
--shadow-cta-dark-resting:  inset 0 1px 0 #ffffff1f, 0 6px 18px #0000002e;
--shadow-cta-inset-highlight: inset 0 1px 0 #ffffff24;
--shadow-search:   0 4px 20px #0000001a;
--shadow-takeover-card: 0 39px 39px #40404017, 0 155px 62px #40404003;
```

### Motion
```css
--duration-xfast: .15s · --duration-fast: .18s · --duration-base: .32s
--duration-slow: .52s  · --duration-xslow: .9s
--ease-out-expo:     cubic-bezier(.16,1,.3,1);
--ease-out-quart:    cubic-bezier(.25,1,.5,1);
--ease-in-out-quart: cubic-bezier(.76,0,.24,1);
--ease-spring:       cubic-bezier(.34,1.56,.64,1);
```
Observed CTA interaction: `hover:scale-[1.02] active:scale-[0.98]`, `duration-[var(--duration-fast)] ease-[var(--ease-out-expo)]`, `rounded-full`, height `h-14`, `px-6`.

**Z-index:** `--z-nav-menu 1 · --z-nav 80 · --z-nav-sticky 90 · --z-nav-mobile 100`

---

## 2. Plans & pricing — VERBATIM (homepage + `/compare-plans`, identical on both)

Section eyebrow (home): `SIMPLY DEPENDABLE, AFFORDABLE SERVICE`
Section eyebrow (compare): `INTERNET ON YOUR TERMS` / `Clear pricing. No contracts. No hidden fees.`

### Tier 1 — "Pro" · badge: **Recommended**
- Speed: `Up to 1 Gbps`
- Price: ~~`$99.99`~~ → **`$79.99`** `/ month`
- Disclaimer: `Price includes a $20 AutoPay discount.` (plural `Prices include…` on /compare-plans)
- `Simultaneous HD video streaming` — `50+ streams`
- `Connected devices` — `30+ devices`
- `Total Home Advanced Wi-Fi 7` — **`Free`**
- Blurb: `Professional online gaming, emerging technology needs, massive file downloads and uploads`
- CTA: `Check availability` → `https://www.riseinternet.com/service/check`

### Tier 2 — "Level Up"
- Speed: `Up to 500 Mbps`
- Price: ~~`$69.99`~~ → **`$49.99`** `/ month`
- Disclaimer: `Price includes a $20 AutoPay discount.`
- `Simultaneous HD video streaming` — `10+ streams`
- `Connected devices` — `20+ devices`
- `Total Home Advanced Wi-Fi` — ~~`$15`~~ **`$7.50/mo`**
- Blurb: `Full smart home connection, fast large file downloads and uploads, competitive online gaming`
- CTA: `Check availability`

### Tier 3 — "Family"
- Speed: `Up to 150 Mbps`
- Price: ~~`$49.99`~~ → **`$29.99`** `/ month`
- Disclaimer: `Price includes a $20 AutoPay discount.`
- `Simultaneous HD video streaming` — `2+ streams`
- `Connected devices` — `10+ devices`
- *(no Advanced Wi-Fi line item on this tier)*
- Blurb: `Smart home support & online gaming performance`
- CTA: `Check availability`

### ⚠️ Correct reading of the strikethrough pricing
The struck price minus the live price is **exactly $20 on all three tiers** (`99.99−20=79.99`, `69.99−20=49.99`, `49.99−20=29.99`). This is **not a time-limited promo** — it is the ongoing **AutoPay discount** rendered as a strikethrough. **No promotional end date, no "for 12 months" term, and no intro-period language exists anywhere on the site.** Any "limited time" framing would be a fabrication.

### "EVERY PLAN INCLUDES" (from /compare-plans)
`Unlimited data` · `No contracts` · `No hidden fees` · `US-based support`

### Guarantee banner (homepage top strip, verbatim)
> `Love us or your money back! If you aren't 100% satisfied after 30 days, get your money back, guaranteed.`

Hero headline: `SPEED, SERVICE, AND VALUE`
Hero sub: `See what you can do with reliable internet + remarkable service.`

---

## 3. Additional fees — `/legal/additional-fees-disclosure-statement` (Last Updated 5/26/2026)

Preamble, verbatim:
> `Unless otherwise stated in a specific promotional offer detail, all Rise Internet residential internet service orders are subject to additional fees as disclosed below.`
> `Rise Internet is a fee in advance company, meaning payment is due on the first day of the Service Plan. If payment is not received by that date, the account is considered late, and Service is subject to interruption or suspension until full payment is made.`

| Fee | Period | Cost |
|---|---|---|
| Connection Fee | At time of sale. Non-refundable. | **$99** |
| Equipment Rental Fee | Monthly, per Service Plan | Up to **$15/mo** |
| Carrier Recovery Cost | Monthly, per Service Plan | **$6.99** |
| Data Overage Charges | Per occurrence | $15 per 10GB, up to $200/mo |
| Unrecoverable Equipment Fee (Fixed Wireless only) | Within 30 days after cancellation | $700 if missing/damaged |
| Unreturned VOIP Equipment Fee | Return within 30 days | $70 |
| Unreturned Router Fee | Return within 30 days | $150 per unit |
| Directory Assistance (411) | Per call | $1.50 |
| ATA Voice Rental Fee | Per month | $1.00 |
| Convenience Fee | Phone payment w/ rep | $10 |
| Paper Statement Fee | Per month | $5 |
| Insufficient Funds / Returned Check | Per incident | At or below state-law max |
| Late Payment Fee | After due date | Up to $20/mo |
| Reconnection Fee | Restore after nonpayment | $35 + first month (pre-retrieval); $99 + first month (post-retrieval) |
| Restocking Fee | Following cancellation | **$50** |

**This is the material fine print for Google Ads compliance** — the `$29.99` headline carries a `$99` connection fee + `$6.99` carrier recovery cost + up to `$15` equipment rental, and requires AutoPay.

---

## 4. Advanced Wi-Fi — `/advanced-wifi`

Title: `Whole-Home Wi-Fi with eero Secure — Rise Internet (2026)`
Hero: `WHOLE-HOME WI-FI. BUILT-IN PROTECTION.`
> `Premium Wi-Fi. Advanced security. No extra cost. Take Rise Internet's eero 7 equipment instead of your own, and eero Secure features come along for the ride — free.`
Badge: `Includes free — eero Secure`

**Hardware = eero 7.** `THE POWER OF WI-FI 7 WITHIN REACH.`
- `Supports wired speeds up to 2.3 Gbps and wireless speeds up to 1.8 Gbps`
- `Coverage up to 2,000 sq. ft.`
- `Connectivity: Dual-band 2.4 GHz and 5 GHz. Two auto-sensing Ethernet ports (2 x 2.5 GbE ports)`
- `Supports 120+ connected devices`
- `Power supply: 16W USB-C power adapter`

Security section: `IT'S A ROUGH NEIGHBORHOOD ONLINE. WE MAKE IT SAFER.`
Seven feature items, verbatim labels: `Active threat protection` · `Network insights` · `Ad blocking` · `Advanced Wi-Fi scheduling` · `Block and allow sites` · `Content filter` · `Hotspot backup`

Family section: `BUILT-IN TOOLS FOR RAISING A FAMILY ONLINE.`

Page footer disclaimer, verbatim:
> `eero products and services are subject to the disclaimers located at: eero.com/legal/disclaimers. Wi-Fi 7 speeds require compatible client devices. Rise Internet service availability and pricing terms apply — see riseinternet.com for details.`

**Mesh pricing:** only ever expressed on the plan cards — `Free` (Pro, Wi-Fi 7), `$15 → $7.50/mo` (Level Up), absent (Family). There is **no standalone price list** for the add-on and **no stated term** for the $7.50 rate.

---

## 5. FAQ — `/faqs` (REAL, complete; 4 tabbed categories, 24 Q&As)

Hero: `GOT QUESTIONS? WE'RE HERE TO HELP` / `Explore our FAQs to get the answers you need.`
Categories: `New Customers` · `Speeds & Service` · `Reliability & Support` · `Billing & Account`

Notable extracted facts (all verbatim-sourced, full text in scrape log):
- **No contracts, no early termination fees.**
- **30-day money-back guarantee** applies to `new customers with Rise-managed routers`; refund includes the connection fee.
- **Self-install is NOT available** — all installs are technician-performed.
- **An adult 18+ must be present** for installation; most installs take `a few hours`.
- Customer may use their own router; Rise-managed router recommended.
- **Soft credit + fraud check**; can be bypassed or failed with a **$200 refundable deposit**, refundable via MyRise after 12 months of continuous AutoPay/on-time payments/no seasonal suspensions, or on cancellation minus balance owed.
- **Two technologies: Fiber** (dedicated underground line) **and Fixed Wireless** (above-ground, connects to nearby Rise equipment). Fixed Wireless dish stays in place on cancellation; tech removes external components.
- `areas with internet speeds up to 5 Gigs!` — speeds vary by address.
- $50 restocking fee on cancellation; waived when swapping equipment during a plan change.
- Persistent speed issues → free technician visit.
- Larger/multi-story homes may need additional routers for true mesh; free appointment for `latest Wi-Fi 7 mesh routers`.

---

## 6. Company / trust — `/about`, `/areas-we-serve`, `/business`

**About** (`Who We Are`): `Trusted. Dependable. Hardworking.`
Animated counters: **`21+ years`** · **`4.2M households served`**
Pillars: `Real people when you call` (24/7) · `Local techs who care` · `Clear and honest pricing` · `Internet that works for real life`

**Service area — 10 states:** Colorado, Idaho, Illinois, Iowa, Missouri, Nebraska, Nevada, Oklahoma, Texas, Utah.
Positioning line: `AMERICA'S HEARTLAND RELIES ON RISE` · `we're bringing better, faster internet to more communities across the Midwest`

**Business** (`/business`): `INTERNET THAT WORKS AS HARD AS YOU DO`. Two tracks — `FOR GROWING BUSINESSES` (→ Check availability) and `FOR LARGER OPERATIONS` (→ Get a quote). **Zero pricing published.**

**Phone:** `1-844-411-7473` · 24/7 support

---

## 7. Homepage section structure (in DOM order)

1. Top guarantee strip — 30-day money-back
2. Hero — `SPEED, SERVICE, AND VALUE` + address combobox `Enter your address, city or zip code` + `Check availability` submit
3. Plans — 3 cards, `Recommended` badge on Pro
4. `INTERNET ON YOUR TERMS` — 3 add-on cards (Advanced Wi-Fi / Digital Phone ActivePhone / Service Upgrades)
5. `PLANS FOR YOU, BY YOU` — Build your plan
6. `NO MORE COMPROMISE` — Unlimited data · Reliably fast · 24/7 US support
7. `GO FASTER THAN EVER WITH RISE` — 1 Gbps
8. `WE'RE ON YOUR TEAM` — support, 24/7, 1-844-411-7473
9. Footer — `YOU DESERVE BETTER INTERNET, LET'S MAKE IT HAPPEN.` / `No hidden fees. No contracts. No hassle.`

**There is no residential/business split hero** — business is a single top-nav link. **There is no testimonials/reviews block.** A sticky mobile address bar reveals after the hero and hides at the footer (`revealAfter: [data-component="hero"]`, `hideWhenVisible: [data-component="footer"]`).

### Footer nav (verbatim groups)
- **Internet** — Check Availability · Compare Plans · Areas We Serve · High-Speed Internet · Business
- **Add-ons** — Advanced Wi-Fi · Digital Phone · Service Upgrades
- **About Rise** — Who We Are · News & Stories · Jobs
- **Support** — Support Center · FAQs · Contact Us
- **My Account** — MyRise Portal · Pay My Bill · Account Support · 1-844-411-7473
- Legal row — Terms and Conditions · Privacy Policy · Open Internet Statement and Policy · All Other Policies and Agreements
- Social — Facebook, X, Instagram, LinkedIn, YouTube (`getriseinternet` handles)

### Meta (homepage)
- Title: `Rise Internet | Speed, Service, and Value (2026)`
- Description: `Get reliable high-speed internet with no contracts, no hidden fees, unlimited data, and 24/7 US-based support. Check availability with Rise Internet.`

---

## 8. ⚠️ FLAGGED — could not be confirmed / does not exist on source

| # | Item | Status |
|---|---|---|
| 1 | **Customer reviews / testimonials with names, platforms, dates** | **DO NOT EXIST.** Checked homepage, /compare-plans, /about, /high-speed-internet, /business, /advanced-wifi, /faqs, /areas-we-serve. Zero review, testimonial, star-rating, or Trustpilot content site-wide. Step 2 §4 cannot be fulfilled from source. |
| 2 | **Separate Fiber vs Fixed Wireless speed tiers & pricing** | Both technologies confirmed to exist (FAQ), but the 3 published tiers are **technology-agnostic**. No fiber-only or fixed-wireless-only price list published. |
| 3 | **Business plan pricing** | None published. Enterprise is quote-only. |
| 4 | **Promo end date / intro term length** | **None exists.** The strikethrough is the $20 AutoPay discount, not a time-limited promo. |
| 5 | **Advanced Wi-Fi $7.50/mo term length** | Not stated. Shown as a 50%-off strikethrough with no duration or expiry. |
| 6 | **"Up to 5 Gigs" tier** | Mentioned in FAQ prose only (`areas with internet speeds up to 5 Gigs!`). Not a purchasable published tier — no price, no card. |
| 7 | **City-level plan pages** | None. Coverage is state-level only (10 states). |
| 8 | `sitemap.xml` | 403 to non-browser clients; nav + footer link graph used instead. |
