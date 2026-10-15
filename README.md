# THE GREENHOUSE EFFECT — Earth’s Natural Shield. Humanity’s Climate Challenge.

A complete, production-quality, cinematic interactive educational science documentary website exploring Earth's energy balance, greenhouse gases, anthropogenic emissions, empirical climate observations, systemic impacts, and global solutions.

## Architecture & Features

- **Frontend Only:** Pure client-side application. No database, server, authentication, or external API dependencies. Completely offline-capable once bundled.
- **Complete Preserved Script:** Contains 100% of the prescribed narration paragraphs, gas facts, scientific notes, disclaimers, chapter takeaways, and closing statements stored under `src/content/`.
- **Cinematic Visual System:**
  - Procedural Three.js 3D Earth with atmospheric rim Fresnel glow, cloud layers, and starfield.
  - High-fidelity SVG/CSS vector Earth fallback for reduced motion, mobile constraints, or non-WebGL environments.
  - Consistent radiation visual language:
    - **Solar shortwave radiation (SW):** Solid amber arrows with filled triangular heads.
    - **Reflected sunlight:** Dashed amber arrows with open chevron heads.
    - **Terrestrial infrared radiation (IR):** Coral sinusoidal waves with circular heads.
    - **Atmosphere & oceans:** Blue tones.
    - **Solutions & interventions:** Mint tones.
    - Standardized, accessible radiation legend in relevant scenes.
- **Ten Complete Chapters:**
  1. `intro` — Full-screen cinematic hero with Earth, solar bloom, and editorial typography.
  2. `definition` — 5-step atmospheric energy progression, interactive gas markers (H₂O, CO₂, CH₄, N₂O, O₃), definition pull quote, and scientific notes.
  3. `science` — 6-stage radiative mechanism SVG diagram and interactive qualitative simulation with 3-position slider, buttons, qualitative meter, and disclaimer.
  4. `comparison` — Natural vs. enhanced greenhouse effect split comparison and central takeaway.
  5. `causes` — 5 illustrated emission scenes (fossil fuels, deforestation, agriculture/livestock, industrial calcination, waste management) and convergence banner.
  6. `impacts` — 5 progressive climate consequences (rising temperatures, land ice melt vs. floating sea ice, extreme events, coral bleaching, agriculture & health).
  7. `evidence` — Empirical lines of proof, weather vs. climate conceptual chart, 5 observational instruments, and 4-tab Interactive Evidence Explorer.
  8. `solutions` — 7 decarbonisation pathways, transition from night into dawn palette, mitigation vs. adaptation dual pillars, and convergence into unified Earth.
  9. `future` — 5 sequential takeaways with subdued recap, closing statement, final line, and Explore Again control.
  10. `references` — Authoritative scientific references (NASA, NOAA, NOAA Climate, IPCC), educational disclaimers, and accessible footer controls.

## Tech Stack

- **React 18** with **TypeScript** strict mode
- **Vite** with Rollup chunk splitting
- **Tailwind CSS** with CSS custom properties
- **Three.js** & **React Three Fiber** / **Drei**
- **Lucide React** icons
- **@fontsource-variable/inter** (Locally bundled font)

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  content/
    chapters.ts      # Navigation and hero copy
    stages.ts        # 6 radiative stages and simulation parameters
    gases.ts         # Chapter 1 narration, 5 gas facts, definition pull quote
    comparison.ts    # Natural vs enhanced comparison copy
    causes.ts        # 5 human emission sources and convergence
    impacts.ts       # 5 climate impact scenes and physical mechanisms
    evidence.ts      # Weather vs climate, 5 instruments, 4 evidence tabs
    solutions.ts     # 7 solution pathways and mitigation vs adaptation
    takeaways.ts     # 5 summary takeaways and closing statements
    references.ts    # Authoritative links and disclaimer note
  hooks/
    useActiveChapter.ts      # Active section and scroll progress tracking
    useReducedMotionSafe.ts  # OS preference and user-toggled reduced motion
    useWebGLSupport.ts       # Safe WebGL capability detection
    useScrollStory.ts        # Motion values for scroll-linked stages
  components/
    layout/
      Navbar.tsx             # Responsive navbar with progress bar & motion toggle
    scenes/
      CinematicEarth3D.tsx   # Three.js procedural Earth & starfield
      ProceduralEarthSVG.tsx # High-fidelity vector Earth
      EarthScene.tsx         # Responsive wrapper with WebGL detection
    diagrams/
      RadiationMechanismSVG.tsx  # 6-stage radiative energy diagram
      QualitativeSimulation.tsx  # 3-setting interactive simulation
    sections/
      HeroSection.tsx
      DefinitionSection.tsx
      ScienceSection.tsx
      ComparisonSection.tsx
      CausesSection.tsx
      ImpactsSection.tsx
      EvidenceSection.tsx
      SolutionsSection.tsx
      FutureSection.tsx
      ReferencesSection.tsx
    ui/
      RadiationLegend.tsx    # Standardized scientific radiation legend
  lib/
    utils.ts
```

## Setup & Running

### Prerequisites
- Node.js 18+ (Node.js 22 tested)
- npm 9+

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Accessibility & Responsive Design

- Mobile viewport support down to 320px with zero horizontal overflow.
- WCAG AA compliant contrast ratios across dark space, navy, and dawn themes.
- Semantic HTML tags (`<main>`, `<header>`, `<footer>`, `<section>`, `<nav>`, `<blockquote>`).
- ARIA live announcements for simulation state adjustments.
- Keyboard accessible tab lists, sliders, buttons, and popovers with focus indicators.
- Instant motion reduction toggle available in both the top navigation and footer, respecting system-level `prefers-reduced-motion` preferences.
