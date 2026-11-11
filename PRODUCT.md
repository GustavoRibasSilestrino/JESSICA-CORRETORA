# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS, requested by the user ("html e CSS"). A few lines of vanilla JS are acceptable only where HTML/CSS cannot do the job (the contact form that builds a WhatsApp message, reveal-on-scroll). No framework, no build step. Deploy target: Vercel (static). Source repo: https://github.com/GustavoRibasSilestrino/JESSICA-CORRETORA.git

## Users

- Buyers of high-end residential property in Sorocaba (SP) and region: people with real purchasing power who value discretion, time and a trusted advisor over volume of listings.
- Owners who want to sell or place a high-end property with a private, curated approach rather than mass listing.
- Arrive mostly from Instagram, referrals and local search, usually on a phone, and decide whether Jessica feels like someone they would trust with a large transaction.

## Product Purpose

Personal-brand site for Jessica Albuquerque, a real estate broker (corretora) specialised in high-end properties, working with exclusive, consultative service. Success is a qualified visitor starting a private conversation with her (WhatsApp), not browsing a catalogue.

## Positioning

Consultative and exclusive: she advises before she sells, serves a limited number of clients personally, and works with a curated set of properties. A portal or large agency cannot truthfully claim a single named broker who handles each client's search personally from first conversation to keys.

## Operating Context

- Location: Sorocaba, São Paulo, Brazil. Language: pt-BR.
- Primary contact channel: WhatsApp, plus a short form that composes a WhatsApp message (name, interest: comprar / vender / avaliar, region or property type, optional note).
- Typical journey: first conversation, understanding of the client's profile, curated property selection, private visits, negotiation and closing support.

## Capabilities and Constraints

- Single-page site, mobile-first, fast, deployed as static files.
- Services to present: compra, venda e avaliação de imóveis de alto padrão; acompanhamento consultivo ponta a ponta.
- Undecided / to be supplied by the user and shown only as clearly marked placeholders: WhatsApp number, CRECI number, Instagram handle, e-mail, real listings, real photos, testimonials, years of experience, volume of sales.
- Do not invent: prices, sales figures, client names, testimonials, awards, CRECI.

## Brand Commitments

- Name: Jessica Albuquerque (corretora de imóveis).
- Tone: discreet, precise, warm, never pushy; speaks of "atendimento exclusivo e consultivo".
- No logo exists yet; the name set in type is the mark.
- Typeface: Poppins across the whole site (user decision, 2026-11-11).
- The entrance is the user-supplied mansion image (`public/assets/mansao.webp`): scrolling moves the camera toward the house, the door opens, and the site appears once inside (user decision, 2026-11-11).

## Evidence on Hand

- `public/assets/mansao.webp` (1672 x 941): contemporary mansion at dusk, supplied by the user for the entrance animation. It is not a listing and must not be presented as a property for sale.
- No photos of Jessica, no real property photos, no testimonials, no numbers.
- Other imagery is stock architecture photography from Unsplash (hotlinked, URLs verified), to be replaced by real material. Property cards are illustrative profiles and are labelled as such.

## Product Principles

1. Consult first, sell second: the site invites a conversation, it does not push a catalogue.
2. Discretion is the luxury: restraint, space and calm outrank ornament.
3. One person, one relationship: Jessica is visible and answerable, not an agency façade.
4. Never claim what is not supplied: placeholders are marked, not faked.
5. The next step is always one tap away on a phone.

## Accessibility & Inclusion

WCAG 2.2 AA contrast, visible keyboard focus, `prefers-reduced-motion` respected, touch targets of at least 44px, pt-BR `lang`, readable on small phones.
