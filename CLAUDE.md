# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **Padel Vision AI** — a B2B SaaS offering AI-powered video analysis systems for padel clubs. Hosted on GitHub Pages. No build step, no framework, no dependencies.

## Deployment

Push to `main` → auto-deploys to GitHub Pages (`padelvisionai.com` via CNAME).

## Architecture

Single-file stack: one shared `style.css`, one shared `main.js`, separate HTML per page.

```
index.html        → Homepage (hero, features, pricing cards, CTA)
products.html     → Detailed offer pages + comparison table + FAQ
contact.html      → Demo request form (Web3Forms integration)
style.css         → All styles — BEM + CSS Custom Properties, 2000+ lines
main.js           → All JS — vanilla, IIFE pattern, ~230 lines
```

Navigation markup is **duplicated** in every HTML file (desktop nav + mobile menu + footer). When editing nav links, update all pages.

## The 3 Products

| # | Name | Price |
|---|------|-------|
| 01 | Court Connecté | 1 900 € install + 140 €/mois |
| 02 | Court Intelligence ★ | 1 900 € install + 240 €/mois |
| 03 | Court Préstige | 2 900 € install + 380 €/mois |

Offers are negotiable. ROI phrase: 1 match = 13 € × 4 players = 52 €, so monthly fee is covered after 3/5/8 matches respectively.

## CSS Conventions

- **BEM**: `block__element--modifier` throughout
- **No utility classes** — always use or extend BEM blocks
- Design tokens live at the top of `style.css` under `/* 1. DESIGN TOKENS */`
- Key tokens: `--forest` (#1B3C2D), `--gold-mid` (#B08030), `--parchment` (#F0E8D6)
- Typography: Playfair Display (headings), Cormorant Garamond (leads), EB Garamond (body), Courier Prime (labels/mono). **No sans-serif fonts anywhere.**
- Breakpoints: mobile-first, `480px → 768px → 1200px`

## JS Architecture (main.js)

Single IIFE with 7 sequential modules. The critical pattern:

```js
// Must be first — CSS hides .reveal elements only when this class is present
document.documentElement.classList.add('js-ready');
```

Scroll reveal: `.reveal` elements are hidden by `.js-ready .reveal { opacity: 0 }` and shown via `IntersectionObserver` adding `.is-visible`. Without JS, all content is visible by default.

## Contact Form

Uses **Web3Forms** (serverless, static-compatible). The access key is hardcoded in `main.js`:
```js
const WEB3FORMS_KEY = 'REMPLACER_PAR_VOTRE_CLE_WEB3FORMS';
```
Get a free key at web3forms.com by submitting `padel.vision.ai@gmail.com`.

## Design Direction

**Heritage Intelligence** — 1970s Wimbledon/Roland Garros aesthetic combined with AI precision. All serif fonts, positive letter-spacing on uppercase labels, `border-radius: 0` on buttons, Roman numerals for numbering. No emojis, no rounded corners, no sans-serif.
