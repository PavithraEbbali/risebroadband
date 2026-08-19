# Image plan — real human photography

Rewritten around people. The previous version leaned on abstract fibre, product
renders and empty landscape; none of that says who this service is for. Rise
serves households in rural and small-town Colorado, Idaho, Illinois, Iowa,
Missouri, Nebraska, Nevada, Oklahoma, Texas and Utah — the imagery should look
like those homes and those people.

## How to hand them over

Drop files into `src/assets/images/` using the **exact filenames** below.

Three exceptions go in `src/app/` instead, because Next.js resolves them by
filename convention rather than by import:

```
src/app/opengraph-image.jpg     1200 x 630
src/app/icon.png                512 x 512
src/app/apple-icon.png          180 x 180
```

Use `src/assets/`, **not** `public/`. Static imports let Next emit AVIF/WebP,
auto-generate a blur placeholder, and reserve the layout box so the image costs
no layout shift. Files in `public/` get none of that.

---

## The house style for people

Everything below should read as **documentary / editorial photography, not stock
photography**. The difference is worth stating explicitly because generators
default to the wrong one:

- **Candid, mid-moment, unposed.** Nobody looking at camera and grinning.
  Nobody in a crisp white shirt against a white background.
- **Real homes.** Worn furniture, lived-in kitchens, actual weather. Not a
  staged showroom.
- **Natural available light.** Window light, lamps, golden hour. No studio
  three-point lighting.
- **Real skin texture.** Ask for it — smoothed plastic skin is the fastest tell
  that an image is generated.
- **Mixed ages and ethnicities across the set.** Rural America is not
  monolithic, and a set where everyone matches looks obviously art-directed.
- **35mm, f/2–f/2.8, shallow depth of field, fine grain, muted natural colour.**

Two things to reject on sight: visible brand logos on clothing or equipment, and
any legible text the generator invents on screens or signage.

**On faces:** AI-generated people avoid model-release problems, which is exactly
why we're generating rather than licensing. But don't push a generation toward
resembling a recognisable real person, and for the wide background shots keep
faces small and non-identifiable anyway.

---

## The critical constraint: dark negative space

Five of these sit **behind live text**. This has been the single biggest source
of rework on this build — the hero went through several rounds because the
artwork's bright area collided with the copy column, and every fix that dimmed
the image was a fix you rejected, correctly.

For every slot marked **"text overlays"**, the prompt states exactly which part
of the frame must stay dark and empty. **Choose takes on how dark that region
is, not on which image looks best on its own.** Anything that fails I have to
scrim or crop, which dulls the photo — the same argument we already had once.

Target for the text region: near-black, roughly #0a0f1a–#1a2230.

---

## Slots

| # | File | Section | Size / ratio | Text overlays? |
|---|------|---------|--------------|----------------|
| 1 | `hero-family.jpg` | Hero *(optional swap)* | 2752 × 1536 · 16:9 | **Yes** — left half |
| 2 | `coverage-family.jpg` | TrustBand band | 2400 × 1000 · 2.4:1 | **Yes** |
| 3 | `wifi-household.jpg` | Advanced Wi-Fi bg | 2400 × 1400 · 12:7 | **Yes** — left half |
| 4 | `step-1-check.jpg` | How it works · step 1 | 1200 × 900 · 4:3 | No |
| 5 | `step-2-survey.jpg` | How it works · step 2 | 1200 × 900 · 4:3 | No |
| 6 | `step-3-install.jpg` | How it works · step 3 | 1200 × 900 · 4:3 | No |
| 7 | `step-4-live.jpg` | How it works · step 4 | 1200 × 900 · 4:3 | No |
| 8 | `support-agent.jpg` | FAQ · side panel | 1200 × 1400 · 6:7 | No |
| 9 | `cta-household.jpg` | Final CTA bg | 2400 × 1200 · 2:1 | **Yes** — centre |
| 10 | `opengraph-image.jpg` | Social share | 1200 × 630 · 1.91:1 | **Yes** — left two thirds |
| 11 | `icon.png` | Favicon | 512 × 512 | No |
| 12 | `apple-icon.png` | iOS icon | 180 × 180 | No |

**Optional extra set** — three plan-card thumbnails (#13–15) at the end. My
recommendation is still to skip these; reasoning there.

---

## Prompts

### 1 — `hero-family.jpg` · Hero background · 2752×1536 · **optional**

> Editorial documentary photograph. Interior of a modest farmhouse living room
> in rural America in the early evening. A mother in her late thirties and her
> ten-year-old daughter sit close together on a worn fabric couch positioned in
> the RIGHT third of the frame, lit by the glow of a laptop and a warm side
> lamp, both relaxed and absorbed mid-conversation, completely candid and
> unaware of the camera. The LEFT half of the frame is deep shadow — a plain
> dark wall and empty room with almost no detail. A large window behind them
> shows blue-hour fields fading outside. Natural available light only, warm
> tungsten against cool dusk. Shot on 35mm at f/2, shallow depth of field, fine
> grain, muted natural colour, realistic skin texture and pores. Authentic, not
> stock-photo styling. No text, no logos.

*Why optional:* the hero has been through a lot of iteration and the fibre image
is now dialled in — brightness restored, contrast measured, gradient headline
tuned to it. Swapping in a photo means redoing that tuning. Worth it if you want
people front and centre, but it is the one slot where "leave it" is defensible.

*Critical:* left half near-black. The headline, lede and address form all live
there, and the headline is currently a bright orange gradient that needs a dark
backdrop.

---

### 2 — `coverage-family.jpg` · TrustBand background · 2400×1000

> Ultra-wide documentary photograph at blue hour. A family of three stands on
> the porch of a weathered farmhouse at the far RIGHT of the frame, small in the
> composition, with warm interior light spilling out of the open doorway behind
> them. The LEFT two thirds of the frame is open farmland receding into deep
> navy darkness, with a very low horizon line in the bottom third and almost no
> detail. A slim telecom relay tower stands barely visible in silhouette on a
> distant ridge. Cinematic, quiet, understated. Natural colour, fine film grain.
> Faces small and not the focal point. No text, no logos, no vehicles.

*Why:* this band carries the ten-state coverage list. Putting an actual family
under it makes "we serve these places" mean something.

*Critical:* the band is short and wide and the marquee runs straight across it —
keep everything low and right, and the whole left two thirds dark.

---

### 3 — `wifi-household.jpg` · Advanced Wi-Fi background · 2400×1400

> Wide documentary photograph looking into a modern open-plan home at night,
> shot from outside through large windows. Three family members are visible in
> different rooms simultaneously — a teenager gaming at a desk in an upstairs
> window on the far RIGHT, a father on a video call at a kitchen island in the
> centre-right, a young child reading on a tablet on a couch below. Warm
> interior light glowing against a deep navy-black exterior night. The LEFT half
> of the frame is dark siding and night sky, near-black and empty. Cinematic,
> calm, natural colour grading, fine grain. Faces small and non-identifiable.
> No text, no logos.

*Why:* this section's whole argument is *simultaneous* use across a whole home.
One frame showing three people online in three rooms says it better than the
spec list does.

*Critical:* left half near-black — the headline and lede are left-aligned there.

---

### 4 — `step-1-check.jpg` · How it works · 1200×900

> Candid over-the-shoulder photograph of a woman in her thirties sitting at a
> kitchen table, typing into a laptop. Warm morning light through a window on
> the left, a lived-in rural farmhouse kitchen softly blurred behind her.
> Natural skin texture, unposed, documentary style, shallow depth of field,
> muted natural colour. Nothing legible on the laptop screen. No text, no logos.

### 5 — `step-2-survey.jpg` · How it works · 1200×900

> Candid documentary photograph of a technician in a plain unbranded work jacket
> standing in a rural yard, looking up and gesturing toward the roofline of a
> house while a homeowner in casual clothes stands beside him, listening. Late
> afternoon sun, long shadows, open fields behind them. Authentic and unposed,
> natural colour, shallow depth of field. No text, no logos or company branding
> on clothing.

### 6 — `step-3-install.jpg` · How it works · 1200×900

> Documentary photograph of a technician on a residential rooftop at golden
> hour, hands working, mounting a small white fixed-wireless antenna to a short
> mast. Low three-quarter camera angle, warm atmospheric haze, rural rooftops
> and open fields blurred far behind. Shallow depth of field, natural colour,
> fine grain, face turned away from camera. No text, no logos.

### 7 — `step-4-live.jpg` · How it works · 1200×900

> Warm candid photograph of a family of four in a living room in the evening,
> relaxed and mid-moment — one child on a tablet, two adults talking on the
> couch, a television glowing softly out of focus. Lit only by lamps and screen
> light. Documentary style, unposed, muted natural colour, realistic skin
> texture. No text, no logos.

*Why the four:* the install steps are currently text-only since the diagram came
out. Four faces along that row turns an abstract process into something that
looks like it happens to actual people.

*Consistency note:* generate all four in one session so the colour grading and
grain match. A set that drifts in tone reads as clipart.

---

### 8 — `support-agent.jpg` · FAQ side panel · 1200×1400

> Natural editorial portrait of a friendly customer-support representative in
> their thirties wearing a lightweight headset, seated at a simple desk in a
> bright modern office, mid-conversation and genuinely smiling, looking slightly
> off camera rather than into the lens. Soft daylight from a window on the left,
> clean uncluttered background thrown well out of focus. Warm and approachable,
> authentic rather than glossy corporate stock. Shallow depth of field, natural
> skin texture. No text, no logos, no legible screens.

*Why:* "24/7 US-based support" is one of the strongest claims on the page and it
currently sits in a column of plain text. A real face next to the FAQ makes the
support promise concrete.

---

### 9 — `cta-household.jpg` · Final CTA background · 2400×1200

> Wide cinematic photograph of a family on the porch of a rural home at dusk,
> seen from a distance and small within a broad landscape. Warm light spills
> from the doorway. Deep navy-blue evening sky fills the upper half; fields lie
> in shadow below. The CENTRE of the frame is open, dark and empty. Quiet,
> hopeful, understated documentary style, natural colour, fine grain. Faces not
> identifiable. No text, no logos.

*Critical:* the CTA headline and address form are **centred**, so unlike the
others the dark space needs to be through the middle, not the left.

---

### 10 — `opengraph-image.jpg` · Social share card · 1200×630

> Cinematic wide banner. A rural American family on a farmhouse porch at blue
> hour, positioned in the RIGHT third of the frame, with warm light spilling
> from the doorway behind them. The entire LEFT two thirds is deep navy-black
> open sky and shadowed field, clean and empty. Documentary style, natural
> colour, fine grain. No text, no logos.

*Why this is not optional:* there is **no social share image at all** right now.
Every link to this site — Slack, WhatsApp, LinkedIn, iMessage — renders as a
bare title with no picture. I overlay the headline and wordmark server-side, so
the art must leave the left two thirds clear.

---

### 11 — `icon.png` · Favicon · 512×512

> Minimal app icon. Solid deep charcoal (#131313) rounded-square background.
> Centred, a single bold abstract lightning-bolt slash in vivid orange
> (#ff5601), angled slightly right, clean geometric edges. Flat vector style,
> high contrast, generous padding. No text, no letters, no gradients, no people.

### 12 — `apple-icon.png` · 180×180

Same prompt, exported at 180×180.

*Why:* `/favicon.ico`, `/icon.png` and `/apple-icon.png` all currently **404**.
The mark should echo the bolt in the wordmark.

---

## Optional — plan card thumbnails (#13–15) · 800×600 each

`plan-family.jpg` — *Candid photo of two children and a parent watching a film
together on a couch, warm evening lamp light, lived-in rural home, unposed,
natural colour.*

`plan-levelup.jpg` — *Candid photo of a young adult in a small home office on a
video call, second monitor beside them, natural daylight, small-town house.*

`plan-pro.jpg` — *Candid photo of a teenager gaming at a desk with headphones on,
evening, mixed warm lamp and cool screen light, focused expression.*

**My recommendation is still to skip these.** The three cards already carry
speed, two prices, a discount note, three spec rows, a blurb and a CTA. Adding a
photo to each pushes the buttons further down and makes the grid taller than a
laptop viewport, which costs conversions on the most important block of the
page. Generate them if you want them, but I would hold.

---

## Generation settings

- Set the **exact aspect ratio** in the tool, then export at the pixel size in
  the table. Don't pad or letterbox to fit.
- Generate 3–4 variants per slot. For the five overlay slots, pick on **darkness
  of the text region** first and composition second.
- Reject any take with invented text or signage — generators add it constantly.
- Generate the four `step-*` images in one session so their grade matches.

## What happens when the files land

I'll wire each with `next/image` static imports (AVIF/WebP, blur placeholder,
correct `sizes`, `priority` only for the LCP element), build the layout each slot
needs — the How-it-works row and the FAQ panel both need real structural changes,
not just a background swap — add scrims only where measurement shows they're
needed, then report contrast numbers for every text run sitting over an image.
