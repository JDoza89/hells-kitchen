# Blok Clad — Storyblok landing page

Next.js 15 (App Router) + Storyblok for the **`blok-clad`** story (`landing_page` content type), space `576483045338294` (US CDN).

## HTTPS preview (Storyblok Visual Editor)

**Production:** https://hells-kitchen-silk.vercel.app/en/blok-clad

Set **Settings → Visual Editor → Location** to:

| Locale | URL |
|--------|-----|
| English | `https://hells-kitchen-silk.vercel.app/en/blok-clad` |
| Spanish | `https://hells-kitchen-silk.vercel.app/es/blok-clad` |
| Japanese | `https://hells-kitchen-silk.vercel.app/ja/blok-clad` |

Draft / Visual Editor entry (set `STORYBLOK_PREVIEW_SECRET` on Vercel):

```
https://hells-kitchen-silk.vercel.app/api/draft?secret=YOUR_SECRET&locale=en&slug=blok-clad
```

## Local setup

```bash
cp .env.example .env.local
# Add STORYBLOK_ACCESS_TOKEN + NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN from Storyblok (US space)
npm install
npm run dev
```

`STORYBLOK_ACCESS_TOKEN` is **required** — content is loaded only from Storyblok (no mock fallback).

## Storyblok components

| Blok | React component |
|------|-----------------|
| `landing_page` | `LandingPage` (+ sticky teaser from page fields) |
| `hero`, `proof_strip`, `material_story`, `benefits`, `in_the_box`, `finishes`, `reviews`, `specs`, `waitlist` | same name (PascalCase file) |
| `quote_chip`, `benefit_item`, `box_item`, `finish_item`, `review_item`, `spec_row`, `layer_label`, `seo` | nested items |

Fetches use `language=en|es|ja`. Spec rows use `value_imperial` for `en`, `value_metric` for `es` and `ja`.

## Waitlist

`POST /api/waitlist` — `{ "email": "you@example.com" }`

Hero and sticky teaser CTAs link to `#waitlist` (or `anchor_id` from the waitlist blok).
