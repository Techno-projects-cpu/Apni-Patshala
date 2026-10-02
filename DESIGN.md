# Design rationale

Why the redesign looks and behaves the way it does. This document exists because a redesign without reasoning is just
a different set of opinions — and because if the Apni Pathshala team ever reads this, they deserve to know the thinking
behind each decision, not just the result.

> Unofficial student project. No donations, payments or personal data are collected anywhere in this app.

---

## 1. The starting problem

The brief was "more polished and modern". To make that concrete rather than vibes-based, here is what was actually
wrong with the experience being redesigned:

| Problem on the original | What it costs the reader |
| --- | --- |
| Dense, stacked content with no narrative order | You can't tell what the organisation *does* in 10 seconds |
| Popups on click for POD adoption / start-a-pod | Content hidden behind interaction; hostile on mobile |
| Repeated duplicate blocks (POD grids, FAQ, impact) | Feels unmaintained even when it isn't |
| Sliders and carousels | Most slides are never seen; bad for keyboard and screen readers |
| Tiny type, weak hierarchy | Hard to skim, hard to read on a cheap phone |
| Impact numbers buried | The most impressive thing about the org is the least visible |

Everything below is a response to one of those rows.

---

## 2. Information architecture: a story, not a sitemap

The original site is organised like a WordPress site — by content type. This one is organised **like an argument**:

```
Idea  →  Proof  →  Mechanism  →  People  →  Action
PODs  →  numbers →  Apna PC   →  team   →  Start a POD
```

**Why:** a visitor's real question is never "where is your About page". It's *"what is this, is it real, how does it
work, who runs it, what do I do next?"* Each page answers exactly one of those, and the home page walks the whole
ladder so a reader who never clicks anything still leaves informed.

Navigation was deliberately capped at **7 items**, because the moment a nav needs a second line it stops being
navigation. "Start a POD" is then duplicated as a persistent blue button in the header — that's the one conversion
that matters, so it shouldn't require the reader to go looking for it.

---

## 3. Colour: sampled, not invented

Every hex value comes from Apni Pathshala's own artwork, so the redesign reads as *their* brand rather than a
designer's new one.

| Token | Value | Reasoning |
| --- | --- | --- |
| Brand blue | `#0266FF` | Sampled from their banners. Blue = institutional trust, education, calm. Used for structure, links and primary actions. |
| Flame orange | `#F58220` | Sampled from their logo and wordmark. Warmth, energy, humanness. Used **sparingly** — accents, highlights, and the single most emotional CTA. |
| Ink navy | `#060E21` → `#0E1B36` | Dark sections. Pure black looks cheap and harsh; navy keeps the palette coherent and reads as premium. |

The ratio matters more than the values: **roughly 80% white space and navy, 15% blue, 5% orange.** An NGO site that
shouts in orange everywhere looks like a fundraiser; one that's calm with occasional warmth looks like an institution
you can trust. The gradient headline blends blue → orange so the two colours read as one system rather than two teams.

---

## 4. Typography: two fonts, two jobs

- **Plus Jakarta Sans** for headings — geometric, humanist, slightly soft terminals. It reads as modern and
  approachable rather than corporate-stern, which is the right emotional register for "education for every child".
- **Inter** for body text — designed for screens, huge x-height, open apertures. It survives being read at 14px on a
  ₹7,000 Android phone in a village, which is a real constraint of this audience, not a hypothetical one.
- **Self-hosted via `@fontsource-variable`** rather than a Google Fonts request. Two reasons: no third-party request
  means no privacy leakage and no render-blocking round-trip, and PODs run on flaky connections where a font CDN
  failing means the whole page looks broken.

Fine detail: headings get `letter-spacing: -0.022em` and `text-wrap: balance`, paragraphs get `text-wrap: pretty`.
This is not decoration — it stops single orphan words dropping onto their own line in headings, which is the tiny
thing that makes a page look amateur.

---

## 5. Layout and rhythm

- **80rem max width, generous gutters.** Line length is the single biggest readability lever; full-width text on a
  laptop is unreadable regardless of font.
- **Consistent vertical beat:** every section is `py-20 / sm:py-24 / lg:py-28`. Once a reader feels the rhythm, they
  stop noticing the layout and start reading the content.
- **Asymmetric hero (`1.08fr / 0.92fr`)** instead of a 50/50 split. Perfect symmetry looks static; a slight imbalance
  makes the eye move.
- **Whitespace as the main design decision.** The original's problem was density. Roughly 40% of this layout is
  deliberate emptiness — that *is* the polish.

---

## 6. Motion: short, once, and switchable off

Motion is used to guide attention, never to perform.

- Reveals fire **once** (`once: true`), 18px of travel, 0.6s. Scrolling back up doesn't re-animate — that single
  choice is the difference between "considered" and "gimmicky".
- Easing is `[0.16, 1, 0.3, 1]` (expo-out): fast start, soft settle. This curve is why modern interfaces feel
  responsive; a linear ease feels mechanical.
- `useReducedMotion` plus a global `prefers-reduced-motion` guard. Accessibility isn't a nice-to-have here — a
  vestibular trigger is a genuine harm.
- The **stat counters** animate on scroll because the impact numbers are the most persuasive content on the site.
  A number that arrives feels like evidence; a number that's just sitting there gets skimmed past.
- Marquees (states, partners) have **masked fade edges and pause on hover**. Hard-edged marquees look like 2012
  stock tickers; the fade makes the list feel infinite rather than cut off.

---

## 7. Components, and why each shape was chosen

| Element | Choice | Why |
| --- | --- | --- |
| Buttons | Fully rounded pills | Softer, friendlier, more modern than rectangles; also larger tap targets |
| Primary vs accent | Blue for navigation/structure, orange reserved for giving | If everything is loud, nothing is |
| Cards | `rounded-3xl`, 1px near-invisible border, soft shadow, lift on hover | Elevation is a physical metaphor — "lift" reads as interactive without a chevron |
| Figures | Locked aspect ratios + slow 900ms zoom + gradient caption | Real, unpolished phone photos look intentional when they're framed consistently |
| Status pills | Green dot for **Active** PODs | A live dot communicates "this is running right now" faster than the word "Active" |
| FAQ accordions | One open at a time, animated height | Long FAQ lists are unreadable otherwise; collapsing keeps them scannable |
| Icons | Lucide, plus 4 hand-written brand glyphs for socials | Consistent stroke weight; the socials needed hand-drawing because no icon library carries them |

Images are WebP, `loading="lazy"` everywhere except the hero, `decoding="async"`, and every aspect ratio is locked.
Locked ratios prevent layout shift — the thing that makes a page feel janky on a slow connection.

---

## 8. The trust layer — the most important design decision

The brief was explicit: anyone who opens this must be told a student made it, and that donations go to the real team.
Rather than bolting on a warning banner, this became the site's **voice**.

Three layers, escalating:

1. **A thin navy ribbon** pinned above the header, on every page. Factual, calm, always visible. It's the first pixel
   of the page, so nobody can be misled by accident.
2. **A one-time modal** on first visit. Deliberately designed to *not* feel like a legal disclaimer: it leads with
   respect ("a student built this"), explains the situation in plain language, and offers two honest next steps —
   *explore the concept* or *I want to donate*. Dismissible with Esc, stored in `localStorage`, never shown twice.
   A wall of legalese would have been technically compliant and practically useless.
3. **A dedicated `/donate` page** whose headline is literally *"Do not donate on this website. There is no way to."*

Design choices on that page, specifically:

- It uses the **flame orange** family. Orange reads as caution *and* warmth — the right tone for "stop, but here's
  where to actually go".
- It uses **green** for the "verify before you pay anyone" block, because that's reassurance, not alarm.
- It lists Apni Pathshala's **real published contacts** with copy-to-clipboard buttons, plus a **pre-written email**
  anyone can send in 30 seconds. Telling people "don't donate here" without giving them the alternative is just an
  obstruction; the useful version is a redirection.
- **There is no donation UI at all — not even a mock.** No amount buttons, no "₹500 / ₹1000 / custom" selector, no
  disabled form. This was the hardest constraint and the most important one: a fake donation interface on an
  unofficial site is the single most dangerous thing this project could have shipped, and a good-looking one would be
  *worse* than a broken one.

The same principle shows up in the footer disclaimer, the `404` page ("this page isn't in the lesson plan"), and
every "Start a POD" button pointing at Apni Pathshala's genuine Google Form rather than a form of my own.

---

## 9. Accessibility

- `:focus-visible` rings in brand blue with an offset — visible for keyboard users, invisible for mouse users.
- `aria-label` on every icon-only link; `aria-expanded` on the mobile menu and accordions.
- Semantic HTML: `section`/`figure`/`figcaption`, `blockquote` for quotes, `dl`/`dt`/`dd` for the spec table,
  `ol`/`li` for the journey timeline.
- Contrast: `ink-950` on white and white on `brand-700`+ keep body copy well past 4.5:1.
- The mobile menu locks body scroll and restores it on close — a small thing that prevents the page scrolling
  underneath the overlay.

---

## 10. Deliberately *not* done

Worth listing, because restraint is a design decision too:

- **No carousel/slider.** Carousels hide content, break keyboard navigation and have terrible engagement. The original
  uses them; this doesn't.
- **No popups for content.** POD adoption and start-a-pod are real pages.
- **No autoplaying video or scroll-jacking.** Both make a site feel like an ad.
- **No stock photography.** Their own photos do the work. Stock would undermine the "is this real" test that this
  content has to pass.
- **No copy of their logo file.** The mark here is a hand-redrawn SVG approximation — same idea (two learners in blue
  and orange over a shared path), drawn from scratch. Using their asset file would have crossed from tribute into
  impersonation.
- **No contact form.** Nothing collects data, so there's nothing to submit.

---

## 11. Known trade-offs / what I'd do next

Being honest about the gaps is better than pretending there aren't any:

- **Bundle size is 522 KB raw (~158 KB gzip)** in one chunk. Route-level `React.lazy` code-splitting would cut the
  first load substantially — worth doing before this ever saw real traffic.
- **Images are the full-resolution sources.** Proper `srcset` with 480/960/1440 variants would cut mobile data use
  meaningfully, which matters for this audience specifically.
- **No automated visual regression tests.** A headless browser in CI would catch layout breakage the type-checker and
  the SSR smoke test can't see.
- **Content is a snapshot.** The impact numbers are transcribed as of when I read their site; a real deployment would
  pull them from a source of truth rather than hard-code them.

---

## The one-line summary

**Calm, blue, spacious, and honest.** The design's job was to make an impressive organisation legible in ten seconds —
and to make sure nobody mistakes a student's portfolio piece for a place to send money.
