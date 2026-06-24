# PRD — Davy Levy · Link in Bio

## Problem statement (original, abridged)
Mobile-first "Link in Bio" page for Davy Levy (Estrategista Digital) with:
- Background #F5F5F7, modern sans-serif (Inter).
- Centered header: profile photo, name, subtitle, social row (Instagram, Facebook, TikTok, YouTube).
- Dark rounded (24px) cards with orange pill CTAs and a right-side product/mockup slot.
- Card 1 → "TV GRÁTIS" → https://famelack.com/tv/br with globe image.
- Card 2 → "Ferramentas de Investigação" → sub-page with DeHashed, Jimpl, Sync.me.
- Card 3 → "Meus vídeos" (Instagram icon) → sub-page with 4 Instagram reels.
- Green pastel (#E6F4EA) "Suporte aos Alunos" card linking to WhatsApp.
- Footer: "Apenas para parcerias" + mailto:parceriasdavytech@gmail.com.

## Architecture
- Pure front-end React app (no backend / no Mongo touched).
- Routing via react-router-dom: `/`, `/ferramentas`, `/videos`.
- Brand SVG icons handcoded in `/app/frontend/src/components/icons/SocialIcons.jsx`.
- Inter font loaded via Google Fonts.
- Tailwind utility classes + small CSS helpers in `index.css`.

## User persona
Single owner-content creator (Davy Levy) directing Instagram/TikTok traffic to:
1. Famelack TV affiliate link (primary monetisable click).
2. Internal Ferramentas + Vídeos discovery pages.
3. WhatsApp support for existing students.

## Implemented (2026-12)
- Main page (`/`) with header, social row, 3 dark CTA cards, green Suporte card, footer.
- Ferramentas sub-page (`/ferramentas`) with 3 external tool cards.
- Vídeos sub-page (`/videos`) with 4 Instagram reel cards.
- Mobile-first layout, 480px max width, 24px card radius, orange `#FF7A1A` pill CTAs.
- Profile + globe images served from Google Drive via `lh3.googleusercontent.com/d/<id>`.
- 100% pass rate on the frontend e2e test (48 assertions).

## Backlog / next iterations (P1/P2)
- P1 — Replace Google Drive image hosting with a CDN or local `/public` upload for resilience.
- P1 — Replace placeholder `wa.me/?text=...` with the actual WhatsApp number for Suporte.
- P2 — Click tracking / UTM tagging for Famelack and external tool links.
- P2 — Light dark-mode toggle.
- P2 — Lightweight admin to edit cards without redeploying (would require backend).

## Open questions
- WhatsApp number for Suporte aos Alunos.
- Whether to host the profile/globe images in `/app/frontend/public/` for offline-safe delivery.
