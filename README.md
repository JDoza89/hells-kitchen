# Blok Clad — Storyblok product landing

Next.js 15 (App Router) + Storyblok integration for the **Blok Clad** luxury cookware PLP (`blok-clad` story, space `576483045338294`, US API region).

## HTTPS preview URL (Storyblok Visual Editor)

**Current preview (Vercel):**

### https://temporary-fast-bugle-szpw24p.vercel.app/en/blok-clad

Set Storyblok **Settings → Visual Editor → Location** to that URL (HTTPS required). Root `/` redirects to `/en/blok-clad`.

This deployment is an unclaimed Vercel temporary preview (~1 hour TTL). To keep a permanent URL, import the repo in [Vercel](https://vercel.com) and set env vars from `.env.example`, or claim via the link printed by `npx vercel deploy --temporary`.

Locales:

| Locale | Path |
|--------|------|
| English (default) | `/en/blok-clad` |
| Spanish | `/es/blok-clad` |
| Japanese | `/ja/blok-clad` |

For draft / Visual Editor preview with Next.js draft mode:

```
https://temporary-fast-bugle-szpw24p.vercel.app/api/draft?secret=YOUR_STORYBLOK_PREVIEW_SECRET&locale=en&slug=blok-clad
```

Configure the preview URL in Storyblok: **Settings → Visual Editor → Location**. Use the HTTPS deployment URL above (not `localhost`).

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en/blok-clad`).

## Environment variables

| Variable | Description |
|----------|-------------|
| `STORYBLOK_ACCESS_TOKEN` | Preview or public token for CDN API (US region) |
| `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN` | Same token for Storyblok bridge in the browser |
| `STORYBLOK_REGION` | `us` (default) |
| `STORYBLOK_SPACE_ID` | `576483045338294` |
| `STORYBLOK_PREVIEW` | `true` to prefer draft content when not in draft mode |
| `STORYBLOK_PREVIEW_SECRET` | Secret for `/api/draft` entry |

Without `STORYBLOK_ACCESS_TOKEN`, the app renders a **mock** `blok-clad` story with the same blok component names and localized copy for `en`, `es`, and `ja`. Add a preview token from Storyblok (**Settings → Access tokens**) to load the live published story.

## Storyblok blok mapping

React components under `src/components/storyblok/` map 1:1 to:

- `product_landing` → `ProductLanding`
- `plp_hero`, `plp_proof_strip`, `plp_material_story`, `plp_benefits`, `plp_inbox`, `plp_finishes`, `plp_reviews`, `plp_specs`, `plp_waitlist`, `plp_seo`
- Nested: `plp_sticky_teaser`, `plp_footer`, `plp_quote_chip`, `plp_benefit_item`, `plp_finish_item`, `plp_review_item`, `plp_spec_row`, `plp_layer_label`

## Waitlist API

`POST /api/waitlist` with JSON:

```json
{ "email": "you@example.com", "finish": "brushed_steel" }
```

Default finish: `brushed_steel`. Entries are stored in-memory on the server instance (suitable for preview; use a database in production).

## Design — “Quiet heat”

- Background: `#F7F4F0` (warm plaster)
- Ink + copper accent (`src/lib/design.ts`, Tailwind theme in `globals.css`)
- Sticky teaser (`plp_sticky_teaser`) is hidden before **2026-10-01** UTC

## Locales

Middleware redirects `/` → `/en/blok-clad`. The header switcher links between `en`, `es`, and `ja`. Story fetches pass `language` to Storyblok when a token is configured.
