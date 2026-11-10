# 04. Visual Identity

The website palette need not match the logo (orange and silver) but must relate to it. Imagery leads; the interface supports it.

## Color
| Token | Value | Use |
|---|---|---|
| `--paper` | `#F5F3EF` | Main background |
| `--stone` | `#E6E2DB` | Alternate sections, cards |
| `--charcoal` | `#1C1C1E` | Text, dark sections |
| `--silver` | `#A8ABAF` | Secondary text, hairlines |
| `--orange` | `#E8620C` [CONFIRM: sample exact orange from the logo file] | CTAs and small accents only |

Rules: orange only for actions and small accents, so Talk to us is the most visible element. Check WCAG AA contrast; do not use small orange text on paper (use charcoal text with an orange underline or marker instead).

## Typography
- **Headings:** Archivo. Large, tight tracking, confident. Fluid `clamp()` sizes.
- **Body:** Inter, 16-18px, comfortable line height.
- Line length 60-75 characters. Headings must split cleanly into lines for the reveal animation.
- Load via `next/font` with `display: swap`.

## Spacing and grid
- 8px base unit.
- Desktop: 12 columns, max-width 1440px, 24px gutters. Mobile: 4 columns, 16px gutters.
- Section spacing: 120px+ desktop, 72px+ mobile.

## Buttons and navigation elements
- 2px corner radius (precise, commercial).
- Primary: orange fill. Secondary: charcoal outline.
- Hover/focus: clip-path fill wipe, left to right, 0.4s.
- Header transparent over hero, solid `--paper` after scrolling past it.

## Image and video art direction
- Real project photography: wide frames, natural light, warm-neutral grading, finished and occupied-looking workspaces.
- No generic stock offices; no stock imagery implying real Dreamz projects. Use clearly labelled placeholders until real photos arrive.
- Turnkey projects: before/after pairs.
- Hero video: muted, 8-10s loop, poster fallback, lighter mobile version, never audio.
- Use `next/image` with correct `sizes`, AVIF/WebP, meaningful alt text.

## Logo
Use the supplied logo file only [CONFIRM: provide SVG]. Provide light and dark versions. Do not recolor or redraw it.

## Reusable components
Header, MobileMenu, Hero, Loader, RevealTitle, ClipImage, StatBar, StatementScroll, SolutionCard, ProjectCard, PinnedHorizontalGallery, PinnedProcess, CommitmentList, FAQAccordion, CTABand, CallbackForm, TalkToUs, Footer, SmoothScroll.
