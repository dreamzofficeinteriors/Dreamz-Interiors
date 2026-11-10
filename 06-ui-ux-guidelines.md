# 06. UI/UX Guidelines

## Layout
- 12-column grid desktop (max 1440px, 24px gutters); 4-column mobile (16px gutters).
- One H1 per page. Large, generous whitespace; imagery leads, text supports.
- Alternate `--paper` and `--stone` sections; use `--charcoal` for key dark moments (process, CTA band).
- Breakpoints: mobile under 768px, tablet 768-1024px, desktop over 1024px.

## Components
| Component | Behavior |
|---|---|
| Header | Transparent over hero, solid after; Talk to us always visible |
| MobileMenu | Full-screen; opens with a clip-path circle from the menu button |
| TalkToUs (mobile floating) | Opens Call / WhatsApp / Request a callback |
| Hero | H1, subline, two CTAs, video or image with poster |
| StatBar | Four proof points; numbers count up once |
| SolutionCard | Title, one-line description, link; whole card clickable |
| ProjectCard | Image, name, type, one number, link |
| PinnedProcess | Five steps; one visible at a time on desktop; stacked on mobile |
| CommitmentList | Three commitments with plain headings |
| FAQAccordion | Keyboard operable, one open at a time, `aria-expanded` |
| CTABand | "Tell us the brief. We'll take it from here." plus three contact paths |
| CallbackForm | See forms below |
| Footer | Nav, contact, legal, descriptor line |

## Forms
Fields: name, phone, company, project type (Commercial furniture / Modular / Turnkey / Not sure), city, short brief (optional), consent checkbox.
- Inline validation with clear, specific error text; labels always visible (no placeholder-only labels).
- Phone field accepts Indian formats; large tap targets (44px minimum).
- Honeypot and rate limiting; success state says what happens next ("A designer will call you back. [CONFIRM: timeframe]").
- Privacy note and link near the form; disclose that calls may be handled by an AI assistant and may be recorded [CONFIRM wording].

## Contact UX
- Mobile: `tel:` link on the call button.
- Desktop: show the number plus the callback form (optionally a QR code).
- WhatsApp opens with the prefilled message: "Hi Dreamz, I'd like to discuss a workspace project."
- Never make the phone the only path.

## Responsive behavior
- Mobile first. Pinned and horizontal sections become vertical stacks under 768px.
- Hero video swaps to a lighter version or poster on mobile and when data saver is on.
- Tap targets at least 44px; no hover-only information.

## Accessibility (WCAG 2.2 AA)
Semantic landmarks, skip link, keyboard-operable menu/accordion/forms, visible focus states, alt text, form labels and errors, sufficient contrast, `prefers-reduced-motion` support, no information conveyed by animation alone, no scroll behavior that traps keyboard or screen-reader users.

## Performance UX
Targets: LCP under 2.5s, CLS under 0.1, INP under 200ms on mobile. Reserve image dimensions, preload hero image and heading font, lazy-load below the fold, keep the loader under ~2.5s and skippable.

## Empty and error states
Friendly, plain messages: form failure ("Something went wrong. Please call or message us on WhatsApp instead."), missing project data, 404 with links to Solutions and Contact.
