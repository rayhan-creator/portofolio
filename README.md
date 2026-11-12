# AURELIUS // Interactive Glassmorphism Portfolio

> **High-End, Ultra-Responsive & Immersive "Interactive Glassmorphism" Portfolio Website**  
> Built with **Dark Material Aesthetics** (`#0f172a`), **Three.js (React Three Fiber)**, **GSAP ScrollTrigger**, **Lenis Smooth Scroll**, **Framer Motion**, and **Liquid Clamp Typography**.

---

## 💎 Design Philosophy & Aesthetics

- **Dark Material Architecture**: Grounded in deep charcoal backgrounds (`#0f172a`) with subtle iridescent highlights (`#06b6d4`, `#8b5cf6`, `#10b981`, `#f43f5e`).
- **Liquid Grid & Non-Rectangular Silhouettes**: Organic, cut-corner, and skewed pill cards breaking standard rectangular box constraints.
- **Dynamic Specular Lighting**: Real-time cursor-following ambient glare and gradient borders on glass panels with backdrop blur.
- **Fluid Typography**:
  - **Primary Headings**: *'Playfair Display'* (Serif, Bold) for a luxury feel.
  - **Body & Navigation**: *'Poppins'* (Sans-serif, Weight 300/500) for high legibility.
  - **Zero Breakpoints**: Mathematical `clamp()` functions across all headings and text blocks (`text-fluid-hero`, `text-fluid-h2`, `text-fluid-body`).

---

## 🚀 Extraordinary Packages & Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **3D Elements & Shaders** | `Three.js`, `@react-three/fiber`, `@react-three/drei` (Volumetric transmission materials, chromatic dispersion, stardust field) |
| **Kinetic Motion** | `GSAP` + `ScrollTrigger` for timeline scrub & friction scrollers, `Framer Motion` for layout shifts & spring gestures |
| **Virtual Smooth Scroll** | `Lenis` virtual scrolling synchronized seamlessly with the GSAP ticker |
| **Micro-Interactions** | `lottie-react` (vector micro-interactions), `canvas-confetti` (particle bursts) |
| **Icons** | `lucide-react` (Lightweight vector iconography) |
| **Styling & Effects** | `Tailwind CSS`, custom backdrop-filter shaders, CSS custom properties |
| **Data & Telemetry** | Dynamic headless CMS JSON schema + real-time GitHub GraphQL & REST API integration |

---

## 🏛️ Layout Sections & Core Capabilities

### 1. Hero Section // "Exploding Text & 3D Revelation"
- Hovering over the luxury serif title (*"TRANSCENDENCE"*) shatters the individual letters outwards in 3D space with spring physics.
- The shatter interaction unveils the holographic **3D Glass Portrait & Core Identity** hidden beneath.
- Fluid badges displaying real-time rendering budgets, latency benchmarks (<4ms), and fluid clamp telemetry.

### 2. Work Section // "Friction-Based Kinetic Gallery"
- Pinned horizontal-scroll gallery powered by **GSAP ScrollTrigger** with inertia friction.
- High-fidelity project cards with asymmetrical silhouettes, real-time performance metrics, and live prototype links.
- Interactive deep **Case-Study Modal** with multi-image gallery switcher, milestone checklists, and tech breakdowns.

### 3. Tech Stack // "The Bento Box Matrix"
- Fluid Bento Box layout with iridescent glowing borders and cursor-following specular glare.
- **Interactive IOR Refraction Slider**: Live simulation of chromatic dispersion and index of refraction.
- **Kinetic Physics Damping Tester**: Real-time physics spring oscillator.
- Category filtering (*3D & Shaders*, *Kinetic & Smooth*, *Core & Architecture*).

### 4. Open Source Telemetry // "GitHub Real-Time Graph"
- Real-time repository statistics fetched from the **GitHub API** with cached fallback.
- Live star counter, annual contribution metric, and commit activity.
- Interactive multi-segment language distribution progress bar.

### 5. Contact Section // "Minimalist Floating Transmission"
- Minimalist glassmorphic dispatch form with **floating label** micro-interactions.
- Dynamic project budget allocation selector.
- **LottieFiles micro-interaction** animation on button submit, culminating in an iridescent confetti celebration blast.
- Direct booking channels and live Zurich world clock (`CET`).

### 6. Interactive Custom Cursor
- Spring-damped dual-ring cursor with trailing glass aura.
- Context-aware morphing: expands into an interactive indicator over buttons, links, and text elements.
- Touch-device safe (automatically disabled on mobile/coarse pointers).

---

## 🛠️ Quickstart & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Optimized static bundles are generated in `dist/` with automated vendor chunk splitting:
- `three-vendor.js`: WebGL, Three.js, R3F, Drei
- `motion-vendor.js`: GSAP, Lenis, Framer Motion
- `ui-vendor.js`: Lucide icons, Lottie, Confetti
- `index.js`: Core application logic

### 4. Preview Production Build
```bash
npm run preview
```
