# AI Sales Agents — Landing Page

A production-quality, single-page B2B SaaS landing page for **AI Agent Studio's AI Sales Agents** product. Built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, and tested with Jest + React Testing Library.

---

## Local Setup

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command | Description |
|---|---|
| `npm run build` | Production build |
| `npm run type-check` | TypeScript check (no emit) |
| `npm run lint` | ESLint |
| `npm test` | Jest + RTL test suite |
| `npm run test:coverage` | Coverage report |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| Font | Geist Sans via `next/font/google` |
| Icons | Inline SVG component (`components/Icon.tsx`) |
| Testing | Jest 30 + React Testing Library 16 + `@testing-library/user-event` |
| Build | Turbopack |

No additional UI libraries, animation packages, or databases.

---

## Project Structure

```
ai-agent-studio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, font
│   ├── page.tsx            # Page shell — mounts all sections + DemoModal
│   └── globals.css         # Tailwind import + base reset
├── components/
│   ├── Header.tsx          # Sticky nav with mobile hamburger
│   ├── Footer.tsx          # Brand, anchors, legal disclaimer
│   ├── Hero.tsx            # Headline, CTAs, product visual diagram
│   ├── Problem.tsx         # Pain points + system outcomes
│   ├── AgentCard.tsx       # Reusable card for each AI agent
│   ├── Agents.tsx          # 9-agent ecosystem grid
│   ├── Workflow.tsx        # Interactive 6-stage journey explorer
│   ├── Channels.tsx        # Channel-story breakdowns
│   ├── CRMDashboard.tsx    # Product-grade CRM mock-up
│   ├── Pricing.tsx         # Two-card pricing + expandable third-party costs
│   ├── Guarantee.tsx       # 14-day guarantee with accurate wording
│   ├── Implementation.tsx  # 4-step rollout + client checklist
│   ├── FinalCTA.tsx        # Closing CTA section
│   ├── DemoModal.tsx       # Interactive live-simulation demo
│   └── Icon.tsx            # SVG icon renderer (path map)
├── data/
│   ├── agents.ts           # All 9 agent definitions
│   ├── workflow.ts         # 6 workflow stages + channel data
│   └── demo.ts             # 5 demo scenario scripts (one per channel)
├── lib/
│   └── config.ts           # Booking URL + contact email (env-driven)
└── __tests__/
    ├── Header.test.tsx
    ├── Hero.test.tsx
    ├── AgentCard.test.tsx
    ├── Workflow.test.tsx
    ├── Pricing.test.tsx
    └── DemoModal.test.tsx
```

---

## Key Design & Conversion Decisions

**Outcome-first hero** — the headline leads with the business result ("Your AI Sales Team Just Got Bigger") before explaining the mechanism. Decision-makers want outcomes, not features.

**Story before solution** — the Problem section surfaces the actual pain (fragmented channels, slow replies, broken follow-up) before presenting the product. Visitors recognise themselves before seeing the fix.

**Interactive workflow explorer** — clicking a stage in the 6-step workflow reveals detail for that stage. This respects users who want to scan vs. read, and shows system depth without overwhelming the page.

**Creative demo feature** — the `DemoModal` lets visitors pick a channel (Website, WhatsApp, Instagram, Phone, Lead List) and watch a live typing simulation of the AI agent capturing, qualifying, and booking a lead end-to-end, then updates a mock CRM entry. This demonstrates real product behaviour rather than static screenshots. It ends with a booking form.

**No invented social proof** — the design does not include fabricated testimonials, customer logos, conversion statistics, or revenue claims. Trust is built through system transparency, accurate pricing, and a clear guarantee.

**Accurate guarantee copy** — the 14-day guarantee section preserves the important scope caveat: it covers agreed system functionality, not leads, sales, or revenue. This wording is non-negotiable for legal accuracy.

**One CTA, three placements** — "Book a Demo" appears in the header, hero, and final CTA. Repeating the same primary action at natural decision points avoids friction without being pushy.

**CRM mock-up as a real artefact** — the CRM dashboard is built with HTML/CSS inside a browser-chrome frame. It shows KPI cards, pipeline stages, and lead records with status badges — convincing enough to show a CEO without being a screenshot.

---

## Accessibility & Responsiveness

- Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- Logical heading hierarchy (h1 → h2 → h3)
- Skip-to-main link for keyboard users
- Visible focus styles using `focus-visible` on all interactive elements
- ARIA labels on icon-only buttons; `aria-expanded` on toggles; `aria-pressed` on workflow stage buttons; `role="dialog"` + `aria-modal` on demo modal
- Escape-to-close and backdrop-click on modal; focus trapped within modal while open
- `prefers-reduced-motion` handled in globals.css
- CRM table transforms accessibly on small screens (stacked row layout)
- Tested representative widths: 375 px, 768 px, 1024 px, 1440 px
- No horizontal overflow; all CTAs are touch-friendly size

---

## Performance Notes

- No heavy animation libraries — only CSS transitions and Tailwind utilities
- Server Components by default; Client Components only where state is needed (Header, Workflow, Pricing, DemoModal)
- No large images or external CDN assets — all visuals are code-native SVG and CSS
- `next/font` for zero-CLS font loading
- Production build output is fully static (no server runtime required)

---

## CTA & Booking Configuration

All "Book a Demo" CTAs open `DemoModal`. The booking form inside the modal is a demonstration — no data is sent to a live endpoint.

To wire a real booking system:

1. Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_BOOKING_URL=https://calendly.com/your-link
   ```
2. In `lib/config.ts`, `BOOKING_URL` will resolve to your value.
3. Update `DemoModal.tsx` to redirect to `BOOKING_URL` or replace the form with an embed.

---

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Set `NEXT_PUBLIC_BOOKING_URL` in Vercel's Environment Variables.
4. Deploy — the build output is fully static and deploys in under a minute.

---

## Assignment Submission Checklist

- [ ] Live URL (add after Vercel deploy)
- [ ] GitHub repository URL
- [ ] Short design/conversion explanation (see Key Design Decisions above)
- [ ] Updated CV (outside this repository)

---

## Test Suite

43 tests across 6 test files:

| File | Coverage |
|---|---|
| `Header.test.tsx` | Brand, nav links, CTA, mobile menu, aria-expanded |
| `Hero.test.tsx` | Heading, CTAs, journey stages, channel labels |
| `AgentCard.test.tsx` | Name, description, channel badges, all 9 agents |
| `Workflow.test.tsx` | Heading, all 6 stage buttons, detail switching, aria-pressed, navigation |
| `Pricing.test.tsx` | Both price points, inclusions, third-party accordion toggle |
| `DemoModal.test.tsx` | Open/close, Escape key, backdrop click, channel selection, booking form, success state |

Run with: `npm test`
