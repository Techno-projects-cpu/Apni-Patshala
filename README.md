# Apni Pathshala — a student's modern redesign concept

A polished, modern reimagining of **[apnipathshala.org](https://www.apnipathshala.org)** — India's largest
community-run network of digital learning PODs.

> ### ⚠️ Read this first
> This is an **unofficial, student-made design concept**. It is **not affiliated with, endorsed by or operated by
> Apni Pathshala**. It collects **no donations, no payments and no personal data** whatsoever — there is no payment
> link, UPI ID or bank detail anywhere in this project.
>
> If you want to support Apni Pathshala, please contact their real team directly:
> **startapod@apnipathshala.org** · **+91 92701 85253** · **[apnipathshala.org](https://www.apnipathshala.org)**

---

## Why this exists

I'm a student learning web design and development. I came across Apni Pathshala — hundreds of small, community-run
computer learning centres, run by local teachers, NGOs and volunteers — and thought the work deserved a website that
felt as modern as the mission. So I rebuilt the experience as a design exercise, using **their own published words,
numbers and photographs**, and I'm hoping the team sees it.

If anything here is useful to them, it's theirs to take.

## What's inside

| Page | What it covers |
| --- | --- |
| `/` | Hero, mission, the POD explainer, the HEART framework, software ecosystem, live PODs, student stories, partners, FAQ, and a note from the student who built it |
| `/pods` | What a POD is, key features, who can start one, and a filterable directory of real PODs published by Apni Pathshala |
| `/apna-pc` | The hardware and software stack — real specs, ports, "in the box" list, and the creative toolkit |
| `/about` | Vision, mission, founder, team bios and the partner/reach map |
| `/start-a-pod` | What an approved POD receives, the requirements checklist, a 5-step journey, and an extensive FAQ |
| `/stories` | Real student stories from Apni Pathshala's published series, filterable by theme |
| `/donate` | **The important page.** Why you can't donate here, how to reach the real team, and what their site says supporters can actually do |
| `/contact` | Official contact routes and POD coordinator details, published by Apni Pathshala |

Global touches: an unofficial-project ribbon, a first-visit notice explaining who built this, a footer disclaimer, and
links to the official site on every page.

## Tech stack

- **React 19** + **TypeScript** (strict) with **Vite**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **React Router** for the multi-page structure
- **Motion** (`motion/react`) for scroll reveals, counters and transitions
- **Lucide** icons, plus a few hand-written brand glyphs
- **Self-hosted fonts** — Plus Jakarta Sans (display) + Inter (body), via `@fontsource-variable`

### Brand tokens

Colours sampled directly from Apni Pathshala's official artwork:

| Token | Value | Use |
| --- | --- | --- |
| Brand blue | `#0266FF` | Primary actions, headings, links |
| Flame orange | `#F58220` | Accents, highlights, the second half of the wordmark |
| Ink navy | `#060E21` → `#0E1B36` | Dark sections and body text |

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run preview    # preview the build
npm run lint       # oxlint
npm run smoke      # renders every route server-side to catch broken components
```

## Project layout

```
public/media/          optimised photographs (WebP) sourced from Apni Pathshala's public site
public/favicon.svg     hand-drawn nod to the Apni Pathshala mark
image-search/          the original downloaded source images the media/ folder was generated from
scripts/ssr-smoke.tsx  dev-only route smoke test
src/
  components/          Navbar, Footer, Logo, NoticeModal, SocialIcons, shared UI primitives
  data/site.ts         every fact, quote and listing used across the site (with sources noted)
  pages/               the eight routes
  index.css            Tailwind theme tokens, base styles and custom utilities
```

## About the content and imagery

- Facts, figures, POD listings, team roles, FAQs, software names and programme details are **transcribed from Apni
  Pathshala's public pages** (Home, About Us, PODs, Start a POD, Apna PC, Contact Us, Student Stories, Volunteering)
  and their public social profiles, and are labelled as such throughout.
- Photographs are **Apni Pathshala's own published images**, re-cropped and optimised for the web. All rights to that
  imagery, the brand and the wordmark remain with Apni Pathshala.
- The logo here is a **hand-redrawn SVG approximation**, not their official asset file.
- Numbers shown in the interface are their published figures; anything important should be verified at
  [apnipathshala.org](https://www.apnipathshala.org).

If you are part of Apni Pathshala and would like this taken down, changed, or handed over properly — that's completely
fine, and the intention was only ever admiration.
