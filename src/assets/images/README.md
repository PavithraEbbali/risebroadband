# Drop generated images here

Real human photography — documentary/editorial style, not stock.
Filenames must match exactly. Full prompts in docs/image-plan.md.

  hero-family.jpg         2752x1536   Hero (optional swap)     TEXT OVERLAYS - left half dark
  coverage-family.jpg     2400x1000   TrustBand background     TEXT OVERLAYS - left 2/3 dark
  wifi-household.jpg      2400x1400   Advanced Wi-Fi bg        TEXT OVERLAYS - left half dark
  step-1-check.jpg        1200x900    How it works, step 1
  step-2-survey.jpg       1200x900    How it works, step 2
  step-3-install.jpg      1200x900    How it works, step 3
  step-4-live.jpg         1200x900    How it works, step 4
  support-agent.jpg       1200x1400   FAQ side panel
  cta-household.jpg       2400x1200   Final CTA background     TEXT OVERLAYS - CENTRE dark

Optional (recommend skipping - see plan):
  plan-family.jpg         800x600
  plan-levelup.jpg        800x600
  plan-pro.jpg            800x600

These three go in src/app/ instead - Next.js resolves them by filename:

  src/app/opengraph-image.jpg   1200x630    TEXT OVERLAYS - left 2/3 dark
  src/app/icon.png              512x512
  src/app/apple-icon.png        180x180

The five TEXT OVERLAYS slots are the ones that matter. Pick takes on how dark
the named region is, not on which image looks best standalone.
