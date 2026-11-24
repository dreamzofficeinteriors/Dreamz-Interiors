# Dreamz Website — Pre-Launch Placeholders & Content Checklist

This checklist tracks all remaining placeholders, content confirmation flags (`[CONFIRM]`), image replacement slots, and third-party integrations needed before final public launch.

---

## 1. Contact & Corporate Information

Edit in: [`content/contact.ts`](file:///e:/DREAMZ%20INTERIORS/THE%20WEBSITE/Dreamz%20Codebase/content/contact.ts)

- [ ] **Official Email Addresses** (`content/contact.ts#L64-L68`)
  - General inquiries: Currently `dreamzinteriorspune@gmail.com`
  - Project/BOQ submissions: Currently `dreamzofficeinteriors@gmail.com`
  - *Confirm whether to keep these or use domain emails (e.g., `contact@dreamzofficeinteriors.com`).*
- [ ] **Corporate Office Address** (`content/contact.ts#L69-L77`)
  - Currently: `Techno Center, Behind Gawade Petroleum, PCMC, Pune, Maharashtra 411033`
  - *Confirm exact unit / floor number and legal registered address.*
- [ ] **Business Operating Hours** (`content/contact.ts#L78-L83`)
  - Currently: `Monday – Saturday, 9:30 AM – 6:30 PM IST` vs `10:00 AM – 6:30 PM IST`
  - *Confirm opening hour.*
- [ ] **Phone & AI Voice Line** (`content/contact.ts#L47-L56`)
  - Primary number: `+91 7498 061 700`
  - WhatsApp line: `+91 7498 061 700`
  - *Confirm if this number is connected to the AI voice intake service or a direct operations lead.*
- [ ] **Call Recording / Privacy Consent** (`content/contact.ts#L53-L55` & `app/privacy/page.tsx#L40`)
  - *Confirm legal wording for AI voice brief recording and transcription consent.*

---

## 2. Brand & Company Story

Edit in: [`content/about.ts`](file:///e:/DREAMZ%20INTERIORS/THE%20WEBSITE/Dreamz%20Codebase/content/about.ts) and [`content/brand.ts`](file:///e:/DREAMZ%20INTERIORS/THE%20WEBSITE/Dreamz%20Codebase/content/brand.ts)

- [ ] **Founding Background & Year** (`content/about.ts#L20-L25`)
  - Founding year (e.g. 2018 / 2020)
  - Founder / leadership names and background
- [ ] **Exact Brand Orange Hex Code** (`app/globals.css#L14`)
  - Currently set to `#E8620C`.
  - *Sample exact hex from the master vector logo if different.*

---

## 3. Project Case Studies & Metrics

Edit in: [`content/projects.ts`](file:///e:/DREAMZ%20INTERIORS/THE%20WEBSITE/Dreamz%20Codebase/content/projects.ts)

*Currently uses anonymized profiles to protect client confidentiality. Confirm whether to keep them anonymized or display real client names & logos:*

- [ ] **Project 01 — Commercial Furniture Fit-Out** (`content/projects.ts#L48-L117`)
  - Client profile: `"Fintech Enterprise"` *(keep anonymized or specify client)*
  - Location: `"Gurugram, Haryana"`
  - Metrics to confirm: `450+ Workstations`, `28 Days Handover`, `45,000 sq. ft.`
- [ ] **Project 02 — Modular Systems & Focus Pods** (`content/projects.ts#L118-L184`)
  - Client profile: `"Technology R&D Center"` *(keep anonymized or specify client)*
  - Location: `"Outer Ring Road, Bengaluru"`
  - Metrics to confirm: `600+ Modular Seats`, `3 Floors`, `60,000 sq. ft.`
- [ ] **Project 03 — Turnkey Handover** (`content/projects.ts#L185-L256`)
  - Client profile: `"Commercial Real Estate Developer"` *(keep anonymized or specify developer)*
  - Location: `"Lower Parel, Mumbai"`
  - Metrics to confirm: `25,000 sq. ft. Fit-Out`, `100% Spec Adherence`
- [ ] **Project 04 — Executive Suites & Meeting Rooms** (`content/projects.ts#L257-L320`)
  - Client profile: `"Management Consulting Firm"` *(keep anonymized or specify firm)*
  - Location: `"Kalyani Nagar, Pune"`
  - Metrics to confirm: `180+ Executive Seats`, `12 Meeting Rooms`, `18,000 sq. ft.`

---

## 4. Operational Inclusions & Timelines

Edit in: [`content/solutions.ts`](file:///e:/DREAMZ%20INTERIORS/THE%20WEBSITE/Dreamz%20Codebase/content/solutions.ts) and [`content/faqs.ts`](file:///e:/DREAMZ%20INTERIORS/THE%20WEBSITE/Dreamz%20Codebase/content/faqs.ts)

- [ ] **Turnkey Scope Definition** (`content/solutions.ts#L250-L350`)
  - *Confirm exact boundary of turnkey: space planning, furniture, modular partitions, data/electrical raceways vs full civil/HVAC/fire.*
- [ ] **Typical Delivery Timelines** (`content/faqs.ts#L42-L46`)
  - Commercial Furniture: Stated as `3 to 6 weeks`
  - Modular Workstations: Stated as `4 to 7 weeks`
  - Turnkey Projects: Stated as `6 to 10 weeks`
- [ ] **Minimum Project Threshold** (`content/faqs.ts#L50-L54`)
  - Currently stated as `20+ workstations`.
- [ ] **PDF Product Catalogue** (`components/Footer.tsx#L186`)
  - *Confirm if a downloadable product brochure or PDF catalogue is available to link in the footer.*

---

## 5. Visual & Photography Assets

Directory: [`public/placeholders/`](file:///e:/DREAMZ%20INTERIORS/THE%20WEBSITE/Dreamz%20Codebase/public/placeholders)

### Primary Site Photos (Already Replaced & Live)
- [x] `hero-poster.jpg` & `og-cover.jpg` — Executive high-rise open-plan floor
- [x] `solution-commercial.jpg` & `project-04.jpg` — Modern Greenery-Filled Corporate Office
- [x] `solution-modular.jpg` & `project-02.jpg` — Executive glass cabins and focus pods
- [x] `solution-turnkey.jpg` & `project-03.jpg` — Biophilic architectural corridor with planters
- [x] `project-01.jpg` — Accor Indonesia Jakarta workspace

### Secondary Gallery Slots Available for Replacement
- [ ] `project-01-detail-1.jpg` — Gallery detail 1 for Project 01
- [ ] `project-01-detail-2.jpg` — Gallery detail 2 for Project 01
- [ ] `project-02-detail-2.jpg` — Gallery detail 2 for Project 02
- [ ] `project-03-before.jpg` — "Before" renovation shot for Turnkey comparison slider
- [ ] `project-03-detail-2.jpg` — Gallery detail 2 for Project 03
- [ ] `project-04-detail-1.jpg` — Gallery detail 1 for Project 04
- [ ] `logo.png` — Official high-resolution transparent SVG/PNG logo file

---

## 6. Integrations & Environment Variables

Edit in: [`.env`](file:///e:/DREAMZ%20INTERIORS/THE%20WEBSITE/Dreamz%20Codebase/.env)

- [ ] **`NEXT_PUBLIC_SITE_URL`**
  - Set to your custom production domain (e.g. `https://dreamzofficeinteriors.com`) once DNS is mapped from Cloudflare Pages.
- [ ] **`LEAD_WEBHOOK_URL`**
  - Endpoint to forward callback requests from the website form directly to your CRM (HubSpot, Zoho, Salesforce, Google Sheets, or Make/Zapier).
- [ ] **`NEXT_PUBLIC_GA_ID`**
  - Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) for website traffic tracking.
