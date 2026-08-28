# Prime Outlet Luxe

Build a premium, mobile-first multibrand fashion store website for "Prime Outlet" — a clothing, footwear and accessories store located in Ganaur, Sonipat, Haryana, India. The site should feel like a ₹1 lakh+ boutique brand website — cinematic, animated, and high-end.

BRAND IDENTITY:

- Colors: Deep black (#0a0a0a) background, warm gold accent (#C9A227 or similar champagne gold), white text, subtle charcoal grey (#1a1a1a) for card surfaces.

- Logo: A crown-topped "P" monogram (placeholder acceptable), paired with wordmark "PRIME OUTLET" in bold uppercase, tagline "MULTIBRAND STORE" in smaller tracked-out letters below it.

- Typography: Modern bold sans-serif for headings (like Poppins or Clash Display), clean sans-serif for body (Inter).

- Overall mood: Luxury streetwear meets boutique — sharp, minimal, high contrast, lots of negative space, smooth motion.

TECH:

- Fully responsive, MOBILE-FIRST (design primarily for a 390px viewport, then scale up).

- Use Framer Motion (or equivalent) for all animations — scroll-triggered reveals, staggered entrances, smooth easing (ease-out, spring physics where relevant).

- Sticky/floating WhatsApp contact button, bottom-right, always visible.

SECTIONS (in order):

1. HERO SECTION

   - Full-screen height on mobile.

   - Background: a dark, slightly dimmed store-interior style image/gradient.

   - Top-left floating pill badge: "📍 GANAUR, SONIPAT"

   - Center: Logo mark animates in with a scale + fade (crown "P" icon drops in first, then wordmark "PRIME OUTLET" slides in letter-by-letter, then tagline "MULTIBRAND STORE" fades in below).

   - Below that: headline "Style That Fits You" in large bold gold-white gradient text.

   - Two CTA buttons side by side: "Shop Now" (solid gold, black text) and "Visit Store" (outlined white/gold, transparent bg).

   - Subtle scroll-down chevron animation at bottom.

2. BRAND STRIP

   - Horizontal infinite auto-scrolling marquee (no user interaction needed) of brand names/logos: Puma, Adidas, Nike, U.S. Polo Assn, and 2-3 more placeholder brand names.

   - Small uppercase label above: "PREMIUM BRANDS · BEST PRICES"

3. CATEGORY TABS

   - Three pill-style tabs centered: "MEN" / "WOMEN" / "KIDS"

   - Active tab has gold background + black text with smooth sliding pill indicator behind it (layoutId shared animation).

   - Selecting a tab filters the next section's content with a smooth crossfade/slide transition.

4. FEATURED COLLECTION — 3D CARD DECK (this is the centerpiece, be very detailed and polished)

   - On scroll into view, 5 product cards animate in with a staggered drop sequence: center card animates in first (drops from top with slight bounce/spring), then the two immediate side cards animate in (slightly smaller, slightly rotated -8deg/+8deg, offset behind center), then the two outer cards animate in last (even smaller, more rotated, more offset, further back in z-index).

   - Final resting layout: a fanned deck — center card largest and fully opaque/sharp, side cards progressively smaller, more rotated, and slightly dimmed/blurred (like a hand of cards fanned out), creating depth with z-index and scale.

   - This deck sits on a solid black card/panel background.

   - USER INTERACTION: cards are draggable horizontally (or swipeable on mobile). Dragging shifts which card is "active" (front and center) — the deck re-arranges smoothly, cards animate to new positions/scale/rotation with spring physics as a new card becomes active.

   - Whichever card is currently most-visible/active in front should have a subtle glow or scale-up highlight compared to others.

5. PRODUCT DETAIL STRIP (directly below the card deck)

   - A dark panel showing the REAL product details of whichever card is currently active in the deck above: product photo thumbnail, product name, price (in ₹), and a small "View" button.

   - This content should crossfade/slide smoothly every time the active card changes in the deck above (synced animation).

6. SUGGESTIONS — MIXED SHOWCASE

   - Heading: "You May Also Like"

   - Horizontal scroll-snap row of product cards mixing Men/Women/Kids items, each card has a small colored tag chip in the corner showing category (Men/Women/Kids), product image, name, price.

7. FOOTWEAR SPOTLIGHT

   - Separate heading: "Footwear Edit"

   - Similar horizontal scroll carousel but only shoes — Adidas, Puma, Nike sneakers with prices.

8. STORE GALLERY

   - Instagram-grid style 2-3 column gallery of store interior/exterior photos with subtle hover/tap zoom.

9. LOCATION & CONTACT

   - Two-column on desktop, stacked on mobile.

   - Left: Address "Sonipat, Ganaur MC Road", opening hours "10:00 AM – 9:00 PM, All 7 Days Open", phone number with click-to-call, Instagram handle with link.

   - Right: Embedded Google Map (placeholder pin acceptable).

   - Prominent "Chat on WhatsApp" gold button.

10. FOOTER

    - Logo + tagline, quick nav links, social icons (Instagram, WhatsApp, Facebook), copyright line "© 2026 Prime Outlet. All rights reserved."

GENERAL ANIMATION RULES:

- Every section should have a scroll-triggered entrance animation (fade + slight upward slide, staggered for grouped elements).

- Keep animations smooth and premium — no jarring or overly fast transitions. Use easing curves like cubic-bezier(0.16, 1, 0.3, 1) or spring(damping: 20, stiffness: 90).

- Maintain generous padding/whitespace — the layout should breathe, never feel cramped, even on small mobile screens.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://prime-chic-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/42a553fb-2aa9-44ba-a2b6-3ac707f1d12a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
