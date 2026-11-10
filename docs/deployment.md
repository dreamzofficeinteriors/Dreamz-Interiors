# Production Deployment & Hosting Architecture

## 1. Hosting Target: Vercel (Default)
The site is built on Next.js 15 App Router and is fully optimized for zero-configuration deployment on **Vercel**:
1. Connect the Git repository to Vercel.
2. Select **Next.js** framework preset.
3. Configure environment variables (see below).
4. Automated preview deployments are generated for pull requests; `main` branch deploys to production.

---

## 2. Portability to Render (Node.js Service)
To deploy on **Render**:
1. Create a new **Web Service** in Render.
2. Connect your Git repository.
3. Select **Node** environment.
4. Set Build Command: `npm install && npm run build`
5. Set Start Command: `npm start`
6. Set Node version environment variable: `NODE_VERSION=20` (or `22`).
7. Ensure all required environment variables are set in Render's Environment tab.

---

## 3. Environment Variables Reference
| Variable | Required | Description | Example |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL | `https://dreamzworkspaces.com` |
| `NEXT_PUBLIC_PHONE_NUMBER` | Yes | E.164 phone number | `+919800000000` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | Numbers-only WhatsApp link | `919800000000` |
| `LEAD_WEBHOOK_URL` | Yes | Endpoint receiving leads & callback payloads | `https://api.crm.com/leads/webhook` |
| `NOTIFY_EMAIL_TO` | No | Email address for lead notification alerts | `leads@dreamzworkspaces.com` |
| `NEXT_PUBLIC_ANALYTICS_ID` | No | GA4 measurement ID or Plausible domain | `G-XXXXXXXXXX` |

---

## 4. Domain & DNS Strategy
1. **Primary Domain:** `https://dreamzworkspaces.com` (or `https://www.dreamzworkspaces.com`).
2. **Canonical Redirect:** Configure a 301 permanent redirect from the non-primary host to the primary host (e.g. apex to `www` or `www` to apex).
3. **SSL/TLS:** Enable automatic TLS with HSTS headers.
4. **Compression & Edge Caching:**
   - Static assets under `/_next/static/` are cached with `Cache-Control: public, max-age=31536000, immutable`.
   - Images in `/public/placeholders/` served via Next.js Image Optimization with WebP/AVIF content negotiation.

---

## 5. Pre-Launch Verification Checklist
- [ ] All 13 `[CONFIRM]` items in `PROGRESS.md` reviewed and signed off.
- [ ] Real occupied workspace photography uploaded to replace `/public/placeholders/`.
- [ ] Exact orange color sampled from the official Dreamz logo file.
- [ ] AI voice assistant telephone line tested with 20–30 test calls.
- [ ] `LEAD_WEBHOOK_URL` confirmed responding with 200 OK.
- [ ] SSL certificate active and apex redirect operational.
