## Decisions (defaults you skipped)

- **Location:** going with **Matheran** (matches your logo; well-known Maharashtra hill station). Coords ~19.2926°N, 73.2702°E. Distances rewritten for Matheran (Mumbai ~3h, Pune ~3.5h, Nashik ~4.5h, nearest rail **Neral Junction ~21 km**).
- **Tech:** brief asks for one `.html`, but this project is TanStack Start. Building it as **one route (`src/routes/index.tsx`)** with the same look, single-page scroll, hash-anchored nav — equivalent to a one-page site.
- **Maps:** **keyless** `maps.google.com/maps?...&output=embed` (no API key needed). Reviews use 3–4 hand-written Google-style cards (no Places API call). TODO comments left for swapping in API key + Place ID later.
- **WhatsApp/Instagram:** placeholders `https://wa.me/91XXXXXXXXXX` and `https://instagram.com/HANDLE` with `TODO` comments. You can paste real handles later.
- **Hero image / room photos / gallery:** generated nature/cottage imagery (no stock photo licensing). Logo image uploaded as a Lovable asset.

## Sections (single scroll page)

1. Sticky nav — logo left; Home / Rooms / Gallery / About / Location / Reviews / Contact right; mobile hamburger
2. Hero — full-viewport bg image, olive overlay, eyebrow "Welcome to Matheran", H1 "Shree Srushti Homestay", subline, gold + ghost CTAs, scroll-down arrow
3. About — two-column, decorative olive rule, exterior photo
4. Rooms — 2-col cards (Deluxe Cottage, Family Suite, Garden Room), amenity icons, "Book This Room" → WhatsApp
5. Amenities strip — olive bg, 6 icon+text pairs
6. Gallery — 3-col (2-col mobile) grid + lightbox with prev/next + fade
7. Location — keyless Google Maps iframe (280px mobile / 420px desktop), "Open in Google Maps" button, 4 distance cards, "Get Directions" gold CTA
8. Reviews — overall rating block (4.8★, "based on 47 Google reviews", "Read all reviews on Google" link) + 3-col grid / mobile snap-scroll carousel, auto-rotate 5s with dot indicators, "Read more" expander, "via Google" badge + initial-avatar
9. Contact — WhatsApp card (green) + Instagram card (gold), address line below
10. Footer — dark olive (#2C2C1E) with logo, nav, social icons, © line
11. Floating buttons — WhatsApp + Instagram circles bottom-right with pulse + tooltip

## Design system

- Add brand tokens to `src/styles.css` under `@theme`:
  - `--color-olive #6B7C3F`, `--color-gold #B8860B`, `--color-fresh #4A7C59`, `--color-sand #F5E9D3`, `--color-ink #2C2C1E`, `--color-dark-olive #2C2C1E`
- Load Google Fonts (`Playfair Display` + `Inter`) via `<link>` in `src/routes/__root.tsx` head (never `@import` URL in styles.css). Map to `--font-serif` / `--font-sans`.
- Body bg sand, body text ink olive; no pure white surfaces.

## Animations / behavior (vanilla, no extra deps)

- Smooth scroll via CSS `scroll-behavior` + nav anchor links
- `IntersectionObserver` for fade-in-up
- Room/card hover lift, CTA scale 1.03
- Gallery lightbox: own React state + keyboard arrows + fade
- Reviews carousel: `setInterval` 5s, pause on hover, dot nav, snap-scroll on mobile
- Floating buttons: CSS pulse keyframes

## Responsive

Breakpoints 480 / 768 / 1024. Hero 36→56px. Grids collapse to 1 col. Map height 280→420. Floating buttons 48→56px.

## SEO

`head()` on the index route: title "Shree Srushti Homestay — Matheran, Maharashtra", description, og:title/desc, og:image (hero), twitter card. Logo used as favicon via root `links`.

## File changes

- `src/routes/__root.tsx` — add Google Fonts `<link>`s, favicon link
- `src/styles.css` — append brand tokens + a few `@utility` helpers (pulse, fade-up)
- `src/routes/index.tsx` — full page (replaces placeholder)
- `src/components/homestay/*` — `Nav.tsx`, `Hero.tsx`, `About.tsx`, `Rooms.tsx`, `Amenities.tsx`, `Gallery.tsx`, `Location.tsx`, `Reviews.tsx`, `Contact.tsx`, `Footer.tsx`, `FloatingButtons.tsx`, `Lightbox.tsx`
- `src/assets/` — logo + generated hero/room/gallery images as Lovable asset pointers

## Things I'm NOT doing (tell me if you want them)

- No Google Places API wiring (needs key + serverless proxy)
- No real WhatsApp number / Instagram handle yet — placeholders
- No backend/booking system — CTAs deep-link to WhatsApp
