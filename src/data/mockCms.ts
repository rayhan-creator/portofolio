import { Project, GithubProfileStats, TechItem } from '../types'

export interface ProfileInfo {
  name: string
  nickname: string
  role: string
  tagline: string
  email: string
  github: string
  githubUsername: string
  instagram: string
  linkedin: string
  location: string
  status: string
  bioShort: string
  bioLong: string
  philosophy: string
}

export const RAYHAN_PROFILE: ProfileInfo = {
  name: 'Rayhan Adrian',
  nickname: 'Ray',
  role: 'Creative Front-End Web Developer & UI/UX Specialist',
  tagline: 'Merging Clean Code with Liquid Glassmorphic Aesthetics',
  email: 'mhdrayhanadr@gmail.com',
  github: 'https://github.com/rayhan-creator',
  githubUsername: 'rayhan-creator',
  instagram: 'https://www.instagram.com/ryhnadrn_eann',
  linkedin: 'https://linkedin.com/in/rayhan-adrian',
  location: 'Indonesia (Remote Worldwide)',
  status: 'Tersedia untuk Proyek & Kolaborasi 2026/2027',
  bioShort: 'Front-end web developer yang berfokus menciptakan pengalaman web modern, clean, dan interaktif dengan estetika Glassmorphism & fluid animations.',
  bioLong: 'Halo! Saya Rayhan Adrian (biasa dipanggil Ray). Saya adalah front-end web developer yang memadukan kreativitas visual dengan clean code berkinerja tinggi. Bagi saya, website bukan sekadar kode teknis, melainkan cerita visual yang harus terasa hidup, intuitif, dan menyenangkan saat dijelajahi.',
  philosophy: 'Terinspirasi oleh estetika minimalis, ketenangan alam 🌲, dan fluid physics. Tujuannya adalah menciptakan karya web modern yang responsif tanpa jeda, seringan sentuhan kaca cair.'
}

export const RAYHAN_PROJECTS: Project[] = [
  {
    id: 'forestia-eco-ui',
    title: 'Forestia Eco Platform',
    category: 'E-Commerce & Minimalist Web',
    year: '2026',
    client: 'Forestia Bio Goods',
    summary: 'Platform web e-commerce bertema alam dengan animasi daun interaktif, fluid checkout, dan dark/light glass mode.',
    description: 'Didesain dan dibangun dari nol menggunakan React, Tailwind CSS, dan Framer Motion. Mengintegrasikan micro-interactions halus, navigasi tanpa reload, serta sistem katalog dinamis dengan filtering instan.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'UI/UX'],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Bundle Size', value: '42 kB' },
      { label: 'Responsiveness', value: '100% Fluid' },
    ],
    githubUrl: 'https://github.com/rayhan-creator/forestia-eco-ui',
    liveUrl: 'https://forestia.demo.app',
    accentColor: '#10b981',
    featuredImage: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    ],
    achievements: [
      'Arsitektur komponen modular berbasis atomik',
      'Desain responsif fluid clamp tanpa layout shift (CLS 0.0)',
      'Dukungan Dark Mode & Glassmorphism terintegrasi'
    ]
  },
  {
    id: 'lumina-glass-dashboard',
    title: 'Lumina Glassmorphic OS',
    category: 'Design Systems & Web App',
    year: '2026',
    client: 'Personal Open Source',
    summary: 'Dashboard web interaktif dengan fisika frosted glass, dynamic ambient glow, dan real-time widget controls.',
    description: 'Eksperimen antarmuka canggih yang menghadirkan depth 3D pada UI web browser. Menggunakan Three.js shards di latar belakang, backdrop-filter blur GPU-accelerated, dan manipulasi kursor custom.',
    tags: ['Three.js', 'React', 'Tailwind CSS', 'GSAP', 'Vite'],
    metrics: [
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'Component Set', value: '35+ Glass' },
      { label: 'Satisfaction', value: '100%' },
    ],
    githubUrl: 'https://github.com/rayhan-creator/lumina-glass-dashboard',
    liveUrl: 'https://lumina-glass.demo.app',
    accentColor: '#06b6d4',
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    ],
    achievements: [
      'Shader kaca transmisi 3D dengan refleksi cahaya mouse',
      'Inertia dragging widgets dengan pegas fisika realistis',
      'Dukungan multi-layer frosted blur adaptif'
    ]
  },
  {
    id: 'zenith-media-showcase',
    title: 'Zenith Creative Portfolio',
    category: 'Front-End Architecture',
    year: '2025',
    client: 'Zenith Studio',
    summary: 'Website portofolio multimedia sinematik dengan horizontal kinetic scroll dan eksplorasi typography mewah.',
    description: 'Mengintegrasikan Lenis smooth virtual scroll dan GSAP timeline untuk transisi halaman tanpa patah-patah. Memanfaatkan Playfair Display typography dan interaksi hover pecahan teks.',
    tags: ['GSAP', 'Lenis Scroll', 'React 18', 'Tailwind CSS'],
    metrics: [
      { label: 'Scrub Latency', value: '< 2ms' },
      { label: 'Typography', value: 'Fluid Clamp' },
      { label: 'Asset Load', value: 'Instant' },
    ],
    githubUrl: 'https://github.com/rayhan-creator/zenith-showcase',
    liveUrl: 'https://zenith-showcase.demo.app',
    accentColor: '#8b5cf6',
    featuredImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    ],
    achievements: [
      'Sinkronisasi 100% mulus antara Lenis & GSAP ScrollTrigger',
      'Pemisahan chunk rollup cerdas untuk kecepatan load optimal',
      'Desain grid asimetris yang mematahkan kebiasaan layout kotak konvensional'
    ]
  },
  {
    id: 'vortex-task-flow',
    title: 'Vortex Productivity Canvas',
    category: 'Web App & State Management',
    year: '2025',
    client: 'Productivity Labs',
    summary: 'Aplikasi manajemen alur kerja minimalis dengan canvas interaktif, drag & drop lancar, dan visualisasi status real-time.',
    description: 'Dibangun untuk para kreator dan developer yang membutuhkan workspace digital tanpa distraksi. Dilengkapi autosave lokal, keyboard shortcuts, dan sound effects halus saat tugas diselesaikan.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      { label: 'Action Latency', value: '0ms' },
      { label: 'Sync Status', value: 'Real-time' },
      { label: 'User Delight', value: '99%' },
    ],
    githubUrl: 'https://github.com/rayhan-creator/vortex-task-flow',
    liveUrl: 'https://vortex-flow.demo.app',
    accentColor: '#f43f5e',
    featuredImage: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80',
    ],
    achievements: [
      'Fluid gesture dragging dengan damping spring',
      'Arsitektur state terdistribusi tanpa re-render berlebih',
      'Micro-animations berbasis CSS variable kustom'
    ]
  }
]

export const RAYHAN_TECH_ITEMS: TechItem[] = [
  { name: 'React 18 & Vite', category: 'core', proficiency: 95, highlight: 'Hooks, Suspense, State Management, Atomic Components', iconName: 'Layers' },
  { name: 'Tailwind CSS', category: 'core', proficiency: 98, highlight: 'Glassmorphism, Dark Mode, Custom Themes, Responsive Utilities', iconName: 'Palette' },
  { name: 'JavaScript & TypeScript', category: 'core', proficiency: 94, highlight: 'ESNext, Strict Typing, DOM Manipulation, Async/Await', iconName: 'Code2' },
  { name: 'HTML5 & Modern CSS3', category: 'core', proficiency: 99, highlight: 'Semantic Architecture, Clamp Functions, Grid, Flexbox', iconName: 'Code2' },
  { name: 'Three.js & R3F', category: 'graphics3d', proficiency: 88, highlight: '3D Glass Refraction, Meshes, Lighting, Shaders', iconName: 'Box' },
  { name: 'GSAP & ScrollTrigger', category: 'animation', proficiency: 92, highlight: 'Complex Timelines, Kinetic Scrollers, Pinning', iconName: 'Sparkles' },
  { name: 'Framer Motion', category: 'animation', proficiency: 95, highlight: 'Spring Physics, Layout Transitions, Gestures', iconName: 'Activity' },
  { name: 'Lenis Smooth Scroll', category: 'animation', proficiency: 96, highlight: 'Virtual Inertia Scrolling, Zero-Lag Integration', iconName: 'MousePointer' },
  { name: 'UI/UX & Figma', category: 'tools', proficiency: 92, highlight: 'Wireframing, Design Systems, Glass Aesthetics, Prototyping', iconName: 'Palette' },
  { name: 'Git & GitHub', category: 'infra', proficiency: 94, highlight: 'Version Control, Branching, GitHub Actions, Open Source', iconName: 'Database' },
]

export const RAYHAN_GITHUB_FALLBACK: GithubProfileStats = {
  username: 'rayhan-creator',
  totalStars: 428,
  totalRepos: 24,
  totalFollowers: 185,
  contributionsThisYear: 1420,
  pinnedRepos: [
    {
      name: 'forestia-eco-ui',
      description: 'Nature-inspired clean e-commerce UI built with React & Tailwind CSS.',
      stars: 186,
      forks: 32,
      primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
      url: 'https://github.com/rayhan-creator/forestia-eco-ui',
      updatedAt: '2 days ago'
    },
    {
      name: 'lumina-glass-dashboard',
      description: 'Ultra-modern glassmorphic interface and UI component kit with Three.js.',
      stars: 142,
      forks: 28,
      primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
      url: 'https://github.com/rayhan-creator/lumina-glass-dashboard',
      updatedAt: '1 week ago'
    },
    {
      name: 'zenith-showcase',
      description: 'Friction-based horizontal scroll portfolio template with Lenis & GSAP.',
      stars: 64,
      forks: 14,
      primaryLanguage: { name: 'React', color: '#61dafb' },
      url: 'https://github.com/rayhan-creator/zenith-showcase',
      updatedAt: '2 weeks ago'
    },
    {
      name: 'rayhan-portfolio-v2',
      description: 'Personal portfolio codebase powered by Interactive Glassmorphism and WebGL.',
      stars: 36,
      forks: 8,
      primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
      url: 'https://github.com/rayhan-creator',
      updatedAt: 'Yesterday'
    }
  ],
  topLanguages: [
    { name: 'TypeScript & JavaScript', percentage: 58.4, color: '#3178c6' },
    { name: 'HTML & CSS / Tailwind', percentage: 26.2, color: '#38bdf8' },
    { name: 'React & Three.js', percentage: 15.4, color: '#61dafb' }
  ]
}

export const RAYHAN_EXPERIENCE = [
  {
    period: '2025 - Sekarang',
    role: 'Creative Front-End Developer',
    place: 'Freelance & Open Source Projects',
    description: 'Mengembangkan website portofolio interaktif, landing page modern, dan antarmuka web berbasis React, Tailwind, dan GSAP untuk berbagai klien.'
  },
  {
    period: '2024 - 2025',
    role: 'Web Development & UI/UX Explorer',
    place: 'Self-Directed & School Projects',
    description: 'Memperdalam fondasi algoritma JavaScript, responsive design dengan Tailwind CSS, eksperimen animasi CSS, dan arsitektur komponen React.'
  },
  {
    period: '2023 - 2024',
    role: 'Awal Perjalanan Web Developer',
    place: 'Digital Design & Code Foundation',
    description: 'Mempelajari HTML5 semantik, CSS modern, dasar-dasar UI/UX di Figma, serta membangun puluhan mini-project web interaktif.'
  }
]
