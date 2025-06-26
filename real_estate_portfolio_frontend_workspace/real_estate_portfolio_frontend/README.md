# EleganceEstate - Real Estate Agent Portfolio

An elegant, modern static portfolio website for real estate professionals, built using Next.js 14, Tailwind CSS, and Framer Motion. Showcases property listings, agent achievements, testimonials, agent bio, and a contact form.

## Features

- Responsive multi-section homepage
- Interactive property cards with hover effects
- Agent achievements/awards showcase
- Client testimonials with animated horizontal scroll
- Visually engaging animations and transitions
- Agent profile sidebar section
- Static contact form protected via Formspree, with mailto fallback
- Modern, elegant, totally static site design

## Design

- **Colors**: Primary (`#17415e`), Secondary (`#bcd4e6`), Accent (`#fbb040`)
- **Typography**: Inter font (modern sans-serif)
- **Layout**: Single page, prominent hero/banner, sections for listings, achievements, testimonials, profile, and contact.
- **Image Assets**: Place signature agent photos as `/agent-hero.png` and `/agent-profile.png` in the `public/` or `src/app/` directory for best results.

## Getting Started

```bash
npm install
npm run dev
```

## Build for static export

```bash
npm run build
```
The export outputs to `/out/`.

## Customization

- Update static property and testimonial data in `src/app/page.tsx`.
- Adjust styling by editing `globals.css` or `tailwind.config.js`.
- Swap agent images in `/src/app/` (named `agent-hero.png`, `agent-profile.png`).
- Replace email in Contact section for your workflow needs.

---

Designed to be clean, fast and easily adaptable for professional real estate portfolios.
