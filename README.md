# Gaurav Deore — Personal Portfolio

> A production-ready, editorial-style personal portfolio for **Gaurav Deore** — Frontend Developer & Python/Data Analytics Enthusiast. Built with React 18, Vite 6, Tailwind CSS, and Framer Motion.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 👤 About

**Gaurav Deore** (Deore Gaurav Manohar)
- 🎓 MCA Student — Anantrao Pawar College of Engineering & Research (APCOER), Pune
- 🎓 B.Sc. CS (Grade A) — KTHM College, Nashik (Savitribai Phule Pune University)
- 💼 Frontend Developer | Python & Data Analytics Enthusiast
- 📍 Nashik / Pune, Maharashtra, India
- 📧 gauravdeore63286@gmail.com
- 📞 +91 82083 97053
- 🔗 [LinkedIn](https://www.linkedin.com/in/gaurav66) · [GitHub](https://github.com/Gaurav63286)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Run Locally

```bash
# Clone the repo
git clone https://github.com/Gaurav63286/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:5173/** in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Bundler** | Vite 6 |
| **Styling** | Tailwind CSS 3 |
| **Animation** | Framer Motion 11 |
| **Icons** | Lucide React |
| **Utilities** | clsx, tailwind-merge |
| **Audio** | Web Audio API (native) |
| **Contact Form** | Web3Forms API |
| **Fonts** | Syne, Space Grotesk, Instrument Serif, Space Mono |

---

## 📁 Project Structure

```
Portfolio/
│
├── public/                        # Static assets
│   ├── gaurav.jpg                 # Profile photo
│   ├── favicon.svg                # Site favicon
│   ├── resume.pdf                 # Downloadable resume
│   └── certificates/              # Certificate images
│       ├── aws-ml-ai.jpg
│       ├── frontend-reliance.jpg
│       ├── ibm-ml-python.jpg
│       ├── mscit.jpg
│       └── python-coursera.jpg
│
├── src/
│   ├── data/
│   │   └── portfolioData.js       # ⭐ Central data store (single source of truth)
│   │
│   ├── components/
│   │   ├── Navbar.jsx             # Floating header with theme switcher & audio toggle
│   │   ├── Hero.jsx               # Full-screen editorial hero with mouse parallax
│   │   ├── IntroStatement.jsx     # Bold editorial intro paragraph
│   │   ├── About.jsx              # About section with 4-pillar grid
│   │   ├── SkillsAccordion.jsx    # Interactive expandable skills registry
│   │   ├── SelectedWork.jsx       # Project showcase grid
│   │   ├── ProjectModal.jsx       # Full case study modal with ARIA support
│   │   ├── Experience.jsx         # Timeline for education & certifications
│   │   ├── Contact.jsx            # Contact form + direct links
│   │   ├── Footer.jsx             # Live IST clock footer
│   │   ├── CustomCursor.jsx       # Custom cursor (disabled on touch/reduced motion)
│   │   └── UI/
│   │       ├── GrainOverlay.jsx   # CSS grain texture overlay
│   │       ├── MagneticButton.jsx # Magnetic hover effect button
│   │       └── ProjectMockup.jsx  # Per-project animated UI mockups
│   │
│   ├── utils/
│   │   ├── themeContext.jsx       # Theme provider (4 themes + localStorage)
│   │   └── sound.js               # Web Audio API sound system
│   │
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles & CSS variables
│
├── index.html                     # HTML shell with SEO meta tags
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
└── package.json                   # Dependencies
```

---

## 🎨 Design System

### Themes (4 total — persisted to localStorage)

| Theme | Accent Color |
|-------|-------------|
| **Electric Lime** (default) | `#BFFF00` |
| **Cyan** | `#00F0FF` |
| **Amber** | `#F5A623` |
| **Rose** | `#FF4D6D` |

Themes are managed via `ThemeProvider` in `src/utils/themeContext.jsx` and applied as CSS custom properties on `:root`.

### Typography

| Font | Usage |
|------|-------|
| **Syne** | Display / headlines (`font-display`) |
| **Instrument Serif** | Editorial italic accents (`font-editorial-serif`) |
| **Space Grotesk** | Body / UI (`font-sans`) |
| **Space Mono** | Code / labels (`font-mono`) |

### Animation

- Physics-based spring animations via **Framer Motion**
- Mouse parallax on the hero section
- Accordion expand/collapse with `AnimatePresence`
- Magnetic hover effect on buttons
- `prefers-reduced-motion` respected — animations disabled for users who prefer it

---

## 📄 Sections

### 1. Hero
- Full-screen dark hero with editorial typography
- Gaurav's portrait in a "viewfinder" frame with grayscale-to-color hover
- Mouse parallax on the name and photo
- CTAs: View Projects, Resume (downloadable PDF), Email, GitHub, LinkedIn
- Availability indicator badge

### 2. Intro Statement
- Bold editorial paragraph introducing Gaurav

### 3. About
- Personal statement and 4-pillar grid:
  - Frontend & Web Systems
  - Core Computer Science
  - Tools, Git & Databases
  - Python & System Logic

### 4. Technical Stack (Skills Accordion)
- Interactive accordion — hover to preview, click to lock open
- Scroll-aware: hover-expand disabled while scrolling to prevent layout jitter
- Categories include: Frontend, Python/Data, Backend, Tools

### 5. Selected Work (Projects)
- Animated project cards with per-project UI mockups
- Click to open full **Case Study Modal** containing:
  - Overview & description
  - Problem → Solution architecture
  - Key features list
  - Technology stack badges
  - GitHub & Live Demo buttons

#### Projects

| # | Project | Category | Tech Stack | Links |
|---|---------|----------|-----------|-------|
| 01 | **REVLYTICS** | Analytics & Python | Next.js, Python, Pandas, Recharts | [GitHub](https://github.com/Gaurav63286/REVLYTICS/tree/main) · [Live](https://revlytics-chi.vercel.app/) |
| 02 | **NEXORA UI System** | Design System | React, Vite, Tailwind CSS, Framer Motion | [GitHub](https://github.com/Gaurav63286/-NEXORA-UI-SYSTEM) · [Live](https://nexora-ui-two.vercel.app/) |
| 03 | **CareerAI** | AI/ML & Full-Stack | Next.js, FastAPI, Python, NLP, spaCy | [GitHub](https://github.com/Gaurav63286/Career-AI) |

### 6. Education & Certifications (Timeline)

| # | Entry |
|---|-------|
| 01 | MCA — APCOER, Pune (2026 – Present) · **Currently Pursuing** |
| 02 | B.Sc. CS — KTHM College, Nashik (Jun 2023 – Jul 2026) · **Grade A** |
| 03 | Certifications — MS-CIT, Reliance Frontend, AWS AI/ML, IBM ML, Python (Coursera) |
| 04 | Achievements & Activities — System Design, DSA & Technical Growth |

### 7. Contact
- **Live contact form** powered by [Web3Forms](https://web3forms.com/) — messages go to `gauravdeore63286@gmail.com`
- Loading state (`TRANSMITTING...`) and error handling on form submit
- Direct cards for Phone, WhatsApp, Email copy
- LinkedIn and GitHub social links
- Footer shows live IST clock in **12-hour format**

---

## ♿ Accessibility

| Feature | Status |
|---------|--------|
| Semantic HTML5 structure | ✅ |
| ARIA roles on modals (`role="dialog"`, `aria-modal`, `aria-labelledby`) | ✅ |
| Escape key to close modals | ✅ |
| Keyboard navigation throughout | ✅ |
| Visible focus states | ✅ |
| Image alt text on all `<img>` tags | ✅ |
| `prefers-reduced-motion` support | ✅ |
| Custom cursor disabled on touch & reduced-motion devices | ✅ |
| Sufficient color contrast | ✅ |

---

## 🔊 Audio System

- Built with the **Web Audio API** — no external libraries
- **Muted by default**
- Mute preference persisted to `localStorage`
- Plays subtle click and hover sounds on interactions
- Audio is never required for any functionality
- Toggle button in the Navbar

---

## 📬 Contact Form (Web3Forms)

The contact form submits to **https://api.web3forms.com/submit** and delivers messages to the owner's Gmail inbox.

- Access Key: `30b03e24-e094-4a19-9b26-546f42459cd1`
- Subject: `Portfolio Contact: {sender name}`
- Fields: Name, Email, Message
- Error handling with a red banner on failure

> **Note:** The access key is a public client-side key (Web3Forms design). It is safe to commit.

---

## 🌐 SEO

Configured in `index.html`:

```html
<title>Gaurav Deore — Frontend Developer & Python Enthusiast</title>
<meta name="description" content="..." />
<meta name="keywords" content="Gaurav Deore, Frontend Developer, Python, React, ..." />
<meta property="og:title" content="..." />
<meta property="og:image" content="/gaurav.jpg" />
<meta property="twitter:card" content="summary_large_image" />
```

---

## 🖱️ Custom Cursor

- Replaces the default OS cursor on desktop
- Automatically **disabled** when:
  - Device is touch-based (`pointer: coarse`)
  - User has `prefers-reduced-motion: reduce` enabled
- Scales and changes on `data-cursor="hover"` elements

---

## 📦 Build Output

```
dist/index.html        ~2.60 kB  (gzip: 1.03 kB)
dist/assets/*.css      ~34.2 kB  (gzip: 6.74 kB)
dist/assets/*.js      ~360.1 kB  (gzip: 108.76 kB)
```

✅ **0 build errors** — verified with `npm run build`.

---

## 🔧 Improvements Made (Session History)

### Content
- Replaced "KTHM" with "APCOER" across all components (except the B.Sc. entry which correctly stays as KTHM)
- Added MCA education entry (Currently Pursuing) at the top of the timeline
- Updated all LinkedIn URLs to `linkedin.com/in/gaurav66`
- Updated page title and meta tags from "AI/ML Enthusiast" to "Python Enthusiast"
- Removed the fake `gauravdeore.dev` domain from OG/Twitter meta tags

### Projects
- Added **NEXORA UI System** (Project 02) replacing NeuroCanvas
- Added **CareerAI** (Project 03) replacing Nexus Real-Time Engine
- Each project has its own animated UI mockup in `ProjectMockup.jsx`

### Functionality
- **Contact form** wired to Web3Forms API (was previously a fake/non-functional form)
- **Resume download** — `resume.pdf` copied to `/public/` and linked with `download` attribute
- **Footer clock** changed from 24-hour to 12-hour format
- **Scroll fix** in Skills Accordion — hover-expand suppressed while scrolling to prevent cursor trap
- Removed "EXPLORE PROJECTS" button from the Hero

### Cleanup
- Deleted `EngineeringHighlights.jsx` (removed from App.jsx and disk)
- Removed `og-image.png` reference (file didn't exist) — replaced with `/gaurav.jpg`
- No `console.log`, `TODO`, or placeholder strings remain in the codebase

### Accessibility & Performance
- `ProjectModal.jsx` — added `role="dialog"`, `aria-modal`, `aria-labelledby`
- `CustomCursor.jsx` — disables on `(prefers-reduced-motion: reduce)` and touch devices
- `sound.js` — mute state persisted to `localStorage`
- OG image correctly points to an existing asset

---

## 📋 Scripts

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

---

## 📄 License

This project is personal and open for reference. Please do not copy and deploy as your own portfolio.

---

## 🙏 Acknowledgements

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://motion.dev/) — Animation library
- [Lucide React](https://lucide.dev/) — Icon library
- [Web3Forms](https://web3forms.com/) — Contact form backend
- [Google Fonts](https://fonts.google.com/) — Syne, Space Grotesk, Instrument Serif, Space Mono
