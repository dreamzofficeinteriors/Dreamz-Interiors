# 08. Technical Architecture

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS with design tokens as CSS variables
- GSAP + ScrollTrigger + SplitText via `@gsap/react`; Lenis for smooth scroll
- `next/font` (Archivo, Inter)
- zod for validation
- Build with Antigravity; host on **Vercel** by default, portable to **Render** (no Vercel-only APIs without a documented adapter)

## Project structure
```
/app
  (site)/page.tsx, about/, solutions/[slug]/, projects/[slug]/, process/, contact/
  api/callback/route.ts
  layout.tsx, globals.css, sitemap.ts, robots.ts
/components
/content   brand.ts, home.ts, solutions.ts, projects.ts, process.ts, faqs.ts, contact.ts
/lib       gsap.ts, seo.ts, validation.ts
/public    placeholders/
/docs      brand/ (these 8 documents), ai-agent-brief.md, deployment.md
PROGRESS.md
.env.example
```

## Component architecture
Server components by default; client components only where animation or interaction needs them (RevealTitle, ClipImage, SmoothScroll, MobileMenu, FAQAccordion, CallbackForm, pinned sections). All copy comes from `/content`.

## Animation integration
See 07-animation-plan.md. GSAP registered once in `lib/gsap.ts`; Lenis mounted once in the layout and synced to ScrollTrigger through the GSAP ticker; `matchMedia` for mobile and reduced-motion fallbacks.

## Image and video handling
`next/image` with `sizes`, AVIF/WebP, fixed dimensions to prevent layout shift. Hero video compressed (mp4/webm), poster fallback, muted, lazy where off-screen, lighter mobile source.

## Contact form, WhatsApp and AI call agent
- `CallButton`: `tel:` on mobile; number plus callback form on desktop. `NEXT_PUBLIC_PHONE_NUMBER`.
- `WhatsAppButton`: `https://wa.me/<number>?text=<prefilled>`. `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- `/api/callback`: validate with zod, honeypot, rate limit, forward JSON to `LEAD_WEBHOOK_URL` (can trigger the AI agent callback, a CRM or a sheet), optional email notification, safe error logging.
- The AI voice platform is configured separately; the site stays platform-agnostic. Write `docs/ai-agent-brief.md` covering: honest AI greeting and human handoff, about five questions (name, space type and size, scope, timeline, best contact), concrete next step plus WhatsApp recap, capture partial leads if the call drops, FAQ knowledge base from 03, no firm prices or promised deadlines, escalation rules, 20-30 real test calls before launch.

## Environment variables (`.env.example`)
```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PHONE_NUMBER=
NEXT_PUBLIC_WHATSAPP_NUMBER=
LEAD_WEBHOOK_URL=
NOTIFY_EMAIL_TO=
NEXT_PUBLIC_ANALYTICS_ID=
```

## SEO and analytics
- Unique metadata per page, Open Graph and Twitter images, `sitemap.xml`, `robots.txt`, canonical URLs, one H1 per page.
- JSON-LD: `Organization` (`areaServed: India`), `FAQPage` on FAQs, `BreadcrumbList` on case studies. No structured data for [CONFIRM] facts.
- One lightweight analytics provider. Events: call click, WhatsApp click, callback submit, quote CTA click, project view. Respect consent requirements.

## Deployment and domain strategy
- Vercel by default; Render notes in `docs/deployment.md`.
- Environments: preview per branch, production on main.
- Domain: apex plus `www` redirect, HTTPS, env vars set per environment [CONFIRM: domain name and registrar].
- Pre-launch: resolve or visibly flag every [CONFIRM], run Lighthouse, accessibility checks, form and webhook end-to-end test.

## Build phases
1. **Foundation and brand system:** scaffold, fonts, tokens, `/content`, layout shell, primitives, SEO base, `.env.example`.
2. **Pages and components:** all pages and reusable components with placeholders, fully responsive.
3. **Motion and integrations:** animation inventory, contact integrations, analytics events, structured data, AI agent brief.
4. **Validation and deployment:** content/navigation audit, mobile journeys, accessibility, performance, deployment config, final report and launch checklist.
