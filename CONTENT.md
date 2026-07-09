# Cyberwall.com — Page Content (v5)

Mirrors `Cyberwall_Landing_Page_v5_Updated.md`. Notes on what's a real
asset vs. a placeholder are called out per section.

---

## SEO / Metadata

**Site name:** cyberwall

**Title:** Cyberwall — Kerala Police's AI-Powered Digital Safety Assistant

**Description:** Cyberwall is Kerala Police's AI-powered digital safety assistant. Verify suspicious websites, messages, phone numbers, QR codes, screenshots, and more before you act — on WhatsApp, Telegram, or the official PolApp.

---

## Navbar

**Logo:** Cyberwall (logo mark, wordmark currently hidden)

**Nav links:** How it Works · Engine · Why Cyberwall · FAQ

**CTA:** Try Now → opens the Platform Selection Modal (WhatsApp / Telegram / PolApp)

---

## Hero

**Badge:** Official Kerala Police Initiative

**Headline:** Stop scams before you act.

**Subheading:** Kerala Police's AI-powered digital safety assistant.

**Body:** Verify suspicious websites, messages, phone numbers, QR codes, screenshots, and more before making a decision.

**CTAs:**

- Try Now → opens Platform Selection Modal
- Already lost money? Call 1930 → tel:1930

**Right column:** Phone mockup (placeholder — swap for a real WhatsApp conversation capture) with a "Watch Demo" play button overlay (not yet wired to a real video), and 9 floating chips: Website, SMS, Phone Number, Email, Bank Details, APK, Screenshot, Voice Note, IP Address. Chips float around the mockup on desktop; on mobile they render as a plain wrapped row below it instead of overlapping.

---

## Trust Ribbon

Kerala Police · Cyber Division · AI-Powered Public Safety

_Developed by Kerala Police to help people identify digital scams before they happen._

---

## Why Cyberwall (`#why-cyberwall`)

**Heading:** Scams Keep Changing. Cyberwall Keeps You One Step Ahead.

**The threat landscape:** Digital scams no longer come only through fake websites. They arrive through messages, calls, QR codes, fake jobs, investment offers, and social engineering.

**The Cyberwall shield:** Cyberwall helps people verify them before they act.

**How Cyberwall intercepts scams** — 3-stage flow, dashed connector before verification, solid connector after:

1. **Incoming Contact** (Call / Message / Link / QR / APK File) — amber
2. **Cyberwall Verification** (Instant Assessment) — blue
3. **Safe Decision** (Action Guided) — green

Colors are theme tokens in `globals.css` (`--color-flow-amber-*`, `--color-flow-blue-*`, `--color-flow-green-*`), not inline hex.

---

## What Can I Send?

**How you send it:** Typed Text / Prompt · Screenshot / Image · Voice Note / Audio

**What we verify:** Website · SMS · Phone Number · Email · Bank Details · APK · IP Address

**Caption:** Send whatever you're unsure about. Cyberwall understands what you're trying to verify.

---

## How & Where to Verify

**Left column — "Ask naturally."**

Just explain what's happening. Cyberwall understands your situation, performs the right security checks, and tells you what to do next.

Highlights: Fast Responses · English & Malayalam · Text • Image • Voice · Familiar Platforms

**Right column — direct platform cards** (not the modal):

- WhatsApp → Chat on WhatsApp (+91 94979 64163)
- Telegram → Open in Telegram (@Cyber_wall_bot)
- PolApp → Download App (linked to keralapolice.gov.in as a placeholder — no direct App Store/Play Store links yet)

---

## Platform Selection Modal

Triggered by every "Try Now" / "Start Verifying Now" button (native `<dialog>`, single shared instance rendered once on the page).

- **WhatsApp** (featured/primary) — Start checking immediately on the app you already use. CTA: Start Chat.
- **Telegram** — Full Cyberwall experience, including larger files and APK verification. CTA: Try on Telegram.
- **PolApp** — Built into the official Kerala Police PolApp. CTA: Download App.

Screenshots (`whatsapp_example.png`, `telergram_example.png`, `pol_app_example_new.JPG`) are placeholders — a tinted box with a phone icon stands in until the real captures are added.

---

## How Cyberwall Works

### 1. The Verification Process (`#how-it-works`)

Horizontal 3-step timeline:

1. **Share Naturally** (Understand) — Just explain the situation, upload a screenshot, or send a voice note.
2. **Threat Analysis** (Check) — The engine runs domain checks, phone checks, APK scans, and scam reports.
3. **Clear Guidance** (Guide) — Cyberwall returns a safety score and tells you exactly what to do.

CTA: Try Now → opens Platform Selection Modal

### 2. The Analysis Output: Trust Score

Score cards: **92/100** Looks Trustworthy (green) · **61/100** Proceed Carefully (amber) · **18/100** High Risk (red)

Copy: Every relevant analysis includes a Trust Score, a clear explanation, and recommended next steps. It gives you a single, unambiguous metric to decide before you act.

### 3. The Backend Engine (`#engine`)

**Heading:** AI that reasons. Security that verifies.

**Copy:** Powered by over 35+ automated verification checks running in the background. Cyberwall analyzes threat indicators in milliseconds to protect you from fraud.

**5 capability pillars**, rendered as a gapless variable-span collage (same mosaic pattern as before — spans add up exactly so there's no leftover grid cell):

1. **Link & Domain Safety** — Scans URLs for phishing threats, fake lookalike domains, age records, and active content risks.
2. **App & Malware Auditing** — Inspects Android APK files, permission requests, and digital signatures for malicious code.
3. **Identity & Message Verification** — Audits incoming caller IDs, country risk codes, and official SMS/DLT sender headers.
4. **Financial Account Screening** — Scans UPI IDs, bank accounts, and IFSC codes to detect known money laundering pathways.
5. **AI Contextual Analysis** — Uses OCR and natural language reasoning to analyze chats, screenshots, and voice call patterns.

---

## Scams Are Scaling

As digital scams become increasingly organized and AI-driven, traditional defense is no longer enough. Cyberwall is engineered as Kerala Police's proactive solution to this growing threat — putting immediate, intelligence-backed verification tools directly in the hands of citizens to intercept and block scams before they cause financial or personal harm.

**Metrics:**

- 28.1 Lakh — Cybercrime cases reported in India (2025)
- 24% — Increase compared to the previous year
- ₹814 Cr — Estimated annual financial loss in Kerala

**Sources:** MHA Year-End Review 2025 (PIB), Ministry of Home Affairs · New Indian Express Report (Jan 2026), Kerala Police Cyber Division & SCRB data — both linked as footnotes.

---

## Emergency

**Heading:** Already transferred money?

1. Stop any further payments.
2. Call 1930 immediately.
3. Report the incident as soon as possible.

CTAs: Call 1930 now · Report at cybercrime.gov.in

---

## FAQ

- Is Cyberwall free?
- Can I just ask Cyberwall a question?
- What can I send?
- What happens to screenshots and voice notes?
- How does Cyberwall respond?
- Does every response include a Trust Score?
- Does Cyberwall store my messages?
- Is the result legally binding?
- Can Cyberwall make mistakes?
- What should I do if I've already transferred money?

Full Q&A lives in `lib/faq-data.ts`, rendered on the homepage (first 4) and in full on `/faq`, with `FAQPage` JSON-LD for AI/search citation.

---

## Final CTA

**Heading:** Ask Cyberwall before you trust.

**CTA:** Start Verifying Now → opens Platform Selection Modal

---

## Footer

**Heading:** A Public Safety Initiative

**Body:** Cyberwall is Kerala Police's AI-powered digital safety initiative helping citizens make safer digital decisions before digital fraud happens.

**Legal disclaimer:** Cyberwall provides automated risk assessments based on available digital signals. Results are advisory in nature and should not be treated as final legal conclusions. Users should exercise independent judgment before making financial decisions.

**Links:** Official Kerala Police (→ keralapolice.gov.in) · Privacy · Terms · Accessibility (the latter three are listed per spec but not yet linked — no pages exist for them yet)

**Legal:** © 2026 Kerala Police. All rights reserved.

---

## Contact reference

- WhatsApp: +91 94979 64163 (wa.me/919497964163)
- Telegram: @Cyber_wall_bot (t.me/Cyber_wall_bot)
- Cybercrime helpline: 1930 (tel:1930)
- Report online: cybercrime.gov.in
- Kerala Police: keralapolice.gov.in
