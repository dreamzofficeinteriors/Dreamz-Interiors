# ANTIGRAVITY FOLLOW-UP PROMPT

Paste this into Antigravity after adding the eight brand documents to the repo.

---

You are continuing the build of the Dreamz marketing website. Eight brand and technical documents are now the source of truth. They are located in `/docs/brand/`:

1. `01-brand-strategy.md`: philosophy, positioning, promise, personality, claims policy
2. `02-website-sitemap.md`: pages, navigation, journey, conversion paths
3. `03-content-strategy.md`: page-by-page copy and placeholders
4. `04-visual-identity.md`: colors, type, grid, imagery
5. `05-brand-voice.md`: tone, vocabulary, writing rules, approved lines
6. `06-ui-ux-guidelines.md`: layout, components, forms, responsive, accessibility
7. `07-animation-plan.md`: scroll animations, fallbacks, core code
8. `08-technical-architecture.md`: stack, structure, integrations, SEO, deployment, build phases

## Step 0: read and confirm (before writing code)
Read all eight documents in full, in order. If an earlier master prompt exists in the repo, these documents supersede it. Then reply with:
- a summary of what you will build in 10 bullets or fewer,
- any conflicts or gaps you found between the documents,
- the full list of `[CONFIRM]` items.
Do not wait for an answer on the conflicts unless they block you; state the assumption you are making and proceed.

## Rules
- The documents are authoritative. Do not invent brand facts, claims, clients, awards, prices, timelines or contact details. Unknown items stay as visible `[CONFIRM: ...]` placeholders in `/content` and are tracked in `PROGRESS.md`.
- Never claim in-house manufacturing or guaranteed on-time delivery. Warranty wording: "1-year warranty. Water and fire damage are not covered."
- All copy lives in `/content`, not in components. Follow `05-brand-voice.md` for every string, including error messages and form text.
- Placeholder images must be clearly labelled; no stock photos implying real projects.
- Accessibility, reduced motion and mobile fallbacks are requirements, not extras.

## Execution: phase by phase
Use the four build phases in `08-technical-architecture.md`. Create `PROGRESS.md` first with the phase checklist, then start **Phase 1 immediately** after Step 0.

| Phase | Primary documents |
|---|---|
| 1. Foundation and brand system | 04, 05, 08, 06 (shell and primitives) |
| 2. Pages and components | 02, 03, 06, 04 |
| 3. Motion and integrations | 07, 08, 06 (forms, contact UX) |
| 4. Validation and deployment | 01 (claims policy), 06 (accessibility, performance), 08 (deployment) |

At the end of each phase:
1. Run typecheck, lint and a production build; fix all errors.
2. Update `PROGRESS.md`: completed items, files changed, open `[CONFIRM]` items, known issues.
3. Check the work against the relevant documents and list any deviations.
4. Give a short summary, then **stop for my review** before starting the next phase. I will reply "continue" or give changes.

Begin with Step 0 now.
