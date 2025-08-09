# Portfolio Website Project Documentation

## Project Overview

A modern, bento-grid style portfolio website built with React and Vite, featuring a dark theme with neon accents and smooth animations.

## Technology Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Package Manager**: npm

## Project Structure

```
website/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css        # Global styles and Tailwind imports
│   ├── components/
│   │   ├── About.jsx          # Personal info and skills section
│   │   ├── BentoGrid.jsx      # Main layout grid component
│   │   ├── Contact.jsx        # Contact form and social links
│   │   ├── Experience.jsx     # Work experience timeline
│   │   ├── Header.jsx         # Site header with navigation
│   │   └── Projects.jsx       # Project showcase component
│   ├── data/
│   │   ├── experience.json    # Work experience data
│   │   └── projects.json      # Project showcase data
│   ├── index.html             # Entry HTML file
│   └── main.jsx               # React entry point
├── public/                    # Static assets
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## Key Features

1. **Responsive Bento Grid Layout**

   - CSS Grid-based layout system
   - Responsive breakpoints for mobile, tablet, and desktop
   - Glass-morphism design elements

2. **Interactive UI Elements**

   - Smooth transitions and animations using Framer Motion
   - Hover effects on cards and buttons
   - Custom scrollbar styling

3. **Theme and Styling**

   - Dark theme with neon accents (green #00FFB2 and blue #1E90FF)
   - Custom font pairing (Poppins for headings, Inter for body text)
   - Consistent spacing and typography system

4. **Performance Optimizations**
   - Component-based architecture
   - Lazy loading of components
   - Optimized images and assets
   - Efficient CSS with Tailwind's JIT compiler

## Development Workflow

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   cd website
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Making Changes

1. **Component Updates**

   - Components are in `src/components/`
   - Each component is a self-contained React functional component
   - Use Framer Motion for animations
   - Follow Tailwind CSS class naming conventions

2. **Styling Updates**

   - Global styles in `src/assets/styles/main.css`
   - Theme configuration in `tailwind.config.js`
   - Use Tailwind utility classes for component-specific styling

3. **Content Updates**
   - Update experience data in `src/data/experience.json`
   - Update project data in `src/data/projects.json`
   - Text content is maintained within components

### Best Practices

1. **Code Organization**

   - Use meaningful component names
   - Keep components focused and single-responsibility
   - Maintain consistent file structure

2. **Performance**

   - Optimize images before adding to the project
   - Use appropriate image formats (WebP where possible)
   - Minimize unnecessary re-renders

3. **Accessibility**
   - Use semantic HTML elements
   - Maintain proper heading hierarchy
   - Include alt text for images
   - Ensure sufficient color contrast

## Deployment

The site is built using Vite and can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist` directory

## Contributing

1. Create a new branch for features/fixes
2. Make changes and test locally
3. Ensure all lint checks pass
4. Submit a pull request with clear description

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)

# Bento Portfolio — Visual & Interaction Design Spec (v2)

## Brand & Look

- **Mode:** dark-first with light-mode toggle (dedicated card).
- **One accent color:** `#22E6A8` (Teal/Mint). Use only for interactive elements and key highlights.
- **Neutrals:**

  - Bg base: `#0D0F12`
  - Card: `#14171B`
  - Card hover: `#171B20`
  - Border: `#1F242B` (1px)
  - Text primary: `#E8ECEF`
  - Text secondary: `#9AA6B2`
  - Muted: `#6B7785`

- **Typography:** Inter (or SFR, plus system fallback).

  - Display/Name: 700 (only here)
  - Section headings & nav: 600
  - Body: 400
  - Captions/meta: 300
  - **No bold blocks elsewhere.** Emphasis uses **underline** or accent color.

- **Icon set:** Lucide or Tabler. Keep stroke 1.5px, size 18–20px desktop, 16px mobile.

## Layout & Grid

- **Canvas:** max-width 1200px, center aligned, `padding-inline: 24px`.
- **Grid:** CSS grid with fluid columns + card min widths.

  ```css
  .bento {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }
  @media (min-width: 1360px) {
    .bento {
      gap: 20px;
    }
  }
  ```

- **Card anatomy:** 12–14px radius, 1px border, subtle inner highlight.

  - Padding: 20–24px desktop, 16px tablet, 12px mobile.
  - Shadow: `0 4px 16px rgba(0,0,0,.25)`; on hover elevate to `0 8px 24px rgba(0,0,0,.35)`.

- **Header = a card.** Sits in grid; on wide screens it spans 2–3 columns.

  - Left: name + role; Right: compact nav chips.
  - Remove “AS” text; replace with a small **logo mark** (suggest: simple hexagon or bracket `{}` icon).

## Navigation (Top Chips = Filters)

- Chips (Projects, Experience, Skills, Contact, All).

  - Style: outline pill, 28–32px height, 12px gap. Active uses accent **fill**. Underline on hover.

- **Back control:** circular fab at top-left of the viewport when filtered.

  - 40px circle, border + subtle glow, icon: `ArrowLeft`.
  - Tooltip: “Back to overview”.

## Card Types & Content (concise but richer)

- **Name/Intro card** (spans 2 cols desktop):

  - Title: “Abhishek Saxena” (underline on hover only).
  - Role line.
  - Tiny “currently” line (e.g., “MS CE @ GWU • Washington, DC”).
  - Two ghost buttons: `View résumé ↗`, `Email ↗`. Each shows a **↗** arrow to signal link.

- **Projects (each a card):**

  - Thumbnail (top, 16:9, subtle rounded).
  - Title (underlined); 1‑line pitch.
  - Chip stack (max 4).
  - Footer: `GitHub ↗`, optional `Live ↗`.
  - **Collapsed meta:** 1 metric or result line (e.g., “stable training on CIFAR‑10”).

- **Experience (one card per employer):**

  - Company logo (24–28px mono).
  - Role, dates, location/meta line.
  - **Collapsed bullets:** exactly 2 bullets; numbers in accent.
  - Hidden “more” count (e.g., “+2 more”) visible when not expanded.

- **Skills card:** chips grouped (Lang, Frameworks, Tools). On mobile, **icons replace labels** (python, java, docker, react, k8s). Long‑press or tap shows label.
- **Education card:** school badges + degree; one‑line summary.
- **Contact card:** icon links (Mail, GitHub, LinkedIn) with `↗`. Include location and small “Response time: \~24h”.
- **Summary card (new):** 3–4 bullets that sell you quickly (leadership, systems, ML, impact). Acts like an elevator pitch.

## Responsive Rules

- **Breakpoints:**

  - ≥1200: 4–5 columns
  - 900–1199: 3 columns
  - 600–899: 2 columns
  - <600: 1 column

- **Text scaling:** clamp sizes.

  ```css
  .title {
    font-size: clamp(20px, 3.2vw, 28px);
  }
  .h2 {
    font-size: clamp(16px, 2.2vw, 20px);
  }
  .body {
    font-size: clamp(13px, 1.6vw, 16px);
  }
  ```

- **Mobile iconization:** In nav, use icons with short labels hidden until tap (or show in tooltip). Skills chips become icons; project meta truncates to one line.

## Interactions & Motion

### Filter flow (when a top chip is clicked)

1. **Header ripple:** active chip fills with accent (120ms).
2. **Non‑matching cards**: fade to 35% opacity & scale to 0.96 (150ms, `easeOut`), pointer-events disabled.
3. **Matching cards**: elevate (`shadow+`), scale to 1.02 (90ms), then **reflow to top** using Framer Motion layout (250–320ms, `easeInOut`).
4. **Expanded state for the group**:

   - Height grows to fit extra content (200–240ms).
   - Images slide in (y: 8px → 0, 160ms, stagger 40ms).

5. **Back FAB** appears (fade+scale, 120ms). Clicking it reverses the sequence.

### Card hover & focus

- Hover: subtle lift + border accent tint.
- Focus (keyboard): 2px focus ring `#22E6A8aa` outside border.

### Link behavior

- External links open **new tab**; card remains but **dims the rest to 50%** for 1.2s then restores, so the user never “loses” the grid.
- All linkables show **↗** or an icon button on the right edge of the title row.

### Light/Dark toggle card

- A square utility card with a **half‑moon** icon.
- Toggle animates background and text tokens over 220ms using CSS variables.

  - Dark→Light: cards become `#FFFFFF` bg, borders `#E7EAF0`, text `#0C1116`, accent unchanged.

## Accessibility

- Minimum contrast: 4.5:1 for body, 3:1 for large text.
- Hit targets ≥ 40×40px.
- Reduced motion: respect `prefers-reduced-motion` (disable scale/slide, use simple fade).

## Empty States / Loading

- Use skeleton bars inside cards (3–4 lines).
- If a project has no image, show a neutral geometric placeholder with the project’s initials.

## Component Library (React + Tailwind + Framer Motion)

- **Atoms:** Button, Chip, IconLink, Tag, Avatar, LogoMark.
- **Molecules:** BentoCard, ProjectCard, ExperienceCard, SkillGroup, ContactList, SummaryCard, ModeToggleCard.
- **Organisms:** HeaderCard (with filter chips), BentoGrid.
- **State model:** `filter: 'all' | 'projects' | 'experience' | 'skills' | 'contact'`, `mode: 'dark' | 'light'`.

**Key Tailwind tokens (suggestion):**

```js
--bg: #0D0F12; --card: #14171B; --card-hover:#171B20;
--border:#1F242B; --text:#E8ECEF; --muted:#9AA6B2; --accent:#22E6A8;
```

## Assets & Content To Add (to cure “bleakness”)

- **Company logos** (mono): Fidelity, Tune AI, Frappe.
- **Project thumbnails**: 16:9 mockups or code/graph visuals.
- **Skill icons**: Python, Java, React, Docker, K8s, PyTorch.
- **Personal logo mark** (simple hex or `{A}` ligature).
- **Headshot or avatar** (subtle vignette) in the Intro card.

## What to remove/change from current build

- Remove the “AS” text badge; replace with the logo icon.
- Make the top header a **card** inside the grid (with border), not a floating bar.
- Reduce global font weight (400 body / 600 headings only).
- Enforce **card min-width 280px** to stop squishing.
- Pick **one accent** (teal above); change all blues/greens to that token.
- Convert bold highlights to **underline** or accent-colored text.
