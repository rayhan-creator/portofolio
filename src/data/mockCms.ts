import { Project, Certificate, GithubProfileStats, TechItem } from '../types'

export interface ProfileInfo {
  name: string
  fullName: string
  nickname: string
  role: string
  tagline: string
  email: string
  phone: string
  github: string
  githubUsername: string
  instagram: string
  linkedin: string
  location: string
  school: string
  status: string
  photoUrl: string
  cvPdfUrl: string
  bioShort: string
  bioLong: string
  philosophy: string
}

export const RAYHAN_PROFILE: ProfileInfo = {
  name: 'Rayhan Adrian',
  fullName: 'Muhammad Rayhan Adrian',
  nickname: 'Ray',
  role: 'Front-End Web Developer & UI/UX Specialist',
  tagline: 'Merging Clean Code with Liquid Glassmorphic Aesthetics',
  email: 'mhdrayhanadr@gmail.com',
  phone: '0899-8081-799',
  github: 'https://github.com/rayhan-creator',
  githubUsername: 'rayhan-creator',
  instagram: 'https://www.instagram.com/ryhnadrn_eann',
  linkedin: 'https://linkedin.com/in/rayhan-adrian',
  location: 'Bekasi & Jakarta, Indonesia',
  school: 'Rabbaanii Islamic School (Rekayasa Perangkat Lunak)',
  status: 'Tersedia untuk PRAKERIN, Proyek & Kolaborasi 2026/2027',
  photoUrl: '/profile.jpg',
  cvPdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
  bioShort: 'Siswa Rekayasa Perangkat Lunak di Rabbaanii Islamic School dengan ketertarikan mendalam pada Front-End, UI/UX Design, dan Mobile Application Development.',
  bioLong: 'Halo! Saya Muhammad Rayhan Adrian (biasa dipanggil Ray). Siswa kelas XI jurusan Rekayasa Perangkat Lunak di Rabbaanii Islamic School. Saya memiliki passion kuat dalam memadukan estetika UI/UX yang intuitif dengan arsitektur kode modern (React, Tailwind CSS, TypeScript, Three.js). Peraih Bintang Prestasi (Ranking 1 selama 3 semester) dan penghafal Al-Qur\'an.',
  philosophy: 'Terinspirasi oleh estetika minimalis, ketenangan alam 🌲, dan fluid physics. Tujuannya adalah menciptakan karya web modern yang responsif tanpa jeda, seringan sentuhan kaca cair.'
}

export const RAYHAN_CERTIFICATES: Certificate[] = [
  {
    id: 'dicoding-aws-cloud',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Indonesia & Amazon Web Services (AWS)',
    date: '10 Juni 2026',
    credentialId: '0LZOY82MNX65',
    verifyUrl: 'https://dicoding.com/certificates/0LZOY82MNX65',
    pdfPage: 2,
    pdfUrl: '/certificates/dicoding-aws-cloud.pdf',
    category: 'Cloud & Gen AI',
    description: 'Kompetensi kelulusan resmi dalam fondasi infrastruktur Cloud Computing AWS, implementasi AI Generatif, dan keamanan cloud.',
    accentColor: '#06b6d4'
  },
  {
    id: 'dicoding-kiro-sdd',
    title: 'Spec-Driven Development dengan Kiro',
    issuer: 'Dicoding Indonesia',
    date: '10 Juni 2026',
    credentialId: '6RPN7NWQ8X2M',
    verifyUrl: 'https://dicoding.com/certificates/6RPN7NWQ8X2M',
    pdfPage: 3,
    pdfUrl: '/certificates/dicoding-kiro-sdd.pdf',
    category: 'Software Engineering',
    description: 'Penerapan metodologi Spec-Driven Development untuk membangun perangkat lunak terstandarisasi, pengujian sistematis, dan clean architecture.',
    accentColor: '#10b981'
  },
  {
    id: 'udemy-figma-uiux',
    title: 'Figma Essential for User Interface and User Experience UI UX',
    issuer: 'Udemy (Learnify IT)',
    date: '17 Maret 2026',
    credentialId: 'UC-75bb50e54-dc4d-4dbe-889b-141a3e0059ab',
    verifyUrl: 'https://ude.my/UC-75bb50e54-dc4d-4dbe-889b-141a3e0059ab',
    pdfPage: 4,
    pdfUrl: '/certificates/udemy-figma-uiux.pdf',
    category: 'UI/UX Design',
    description: 'Sertifikasi keahlian komprehensif dalam desain UI/UX di Figma: wireframing, interactive prototyping, komponen auto-layout, dan design systems.',
    accentColor: '#8b5cf6'
  },
  {
    id: 'syahadah-tahfidz',
    title: 'Syahadah Tahfidz Al-Qur\'an (Hafalan 17 Juz)',
    issuer: 'Rumah Qur\'an Daar Syabaabil Qur\'an',
    date: 'Tersertifikasi',
    pdfPage: 5,
    pdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
    category: 'Tahfidz Al-Qur\'an',
    description: 'Syahadah resmi atas keberhasilan menyelesaikan hafalan Al-Qur\'an dengan predikat mutqin dan istiqomah (Total capaian saat ini: 24 Juz).',
    accentColor: '#10b981'
  },
  {
    id: 'taekwondo-geup-4',
    title: 'Sertifikat Ujian Kenaikan Tingkat GEUP - 4',
    issuer: 'Pengurus Besar Taekwondo Indonesia (P.B.T.I)',
    date: '16 Desember 2018',
    credentialId: '161108175740',
    pdfPage: 6,
    pdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
    category: 'Seni Bela Diri',
    description: 'Kelulusan resmi ujian kenaikan tingkat Taekwondo Indonesia yang diselenggarakan oleh P.B.T.I Pengprov DKI Jakarta.',
    accentColor: '#f59e0b'
  },
  {
    id: 'taekwondo-juara-1-open',
    title: 'Juara I - Kejuaraan Taekwondo Valentino-Della MG 11',
    issuer: 'Sapta Eka 2 GAP Open 2018 (GOR Ciracas Jakarta Timur)',
    date: '10 Maret 2018',
    pdfPage: 7,
    pdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
    category: 'Prestasi Olahraga - Juara 1',
    description: 'Piagam Penghargaan resmi peraih medali emas (Juara I) pada kejuaraan Taekwondo tingkat provinsi di GOR Ciracas.',
    accentColor: '#f43f5e'
  },
  {
    id: 'taekwondo-juara-1-valentino',
    title: 'Juara Pertama - Invitasi Taekwondo Valentino Cup 2019',
    issuer: 'Invitasi Taekwondo Valentino Cup 2019 (Mall Pondok Kelapa)',
    date: '9 Maret 2019',
    pdfPage: 8,
    pdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
    category: 'Prestasi Olahraga - Juara 1',
    description: 'Piagam Penghargaan resmi Juara Pertama Invitasi Taekwondo Valentino Cup 2019.',
    accentColor: '#e11d48'
  }
]

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
  { name: 'UI/UX Design & Figma', category: 'tools', proficiency: 96, highlight: 'Design Systems, User Flows, Wireframing, Auto-Layout', iconName: 'Palette' },
  { name: 'React 18 & Vite', category: 'core', proficiency: 95, highlight: 'Hooks, Suspense, State Management, Atomic Components', iconName: 'Layers' },
  { name: 'Tailwind CSS', category: 'core', proficiency: 98, highlight: 'Glassmorphism, Dark Mode, Fluid Clamp, Custom Shaders', iconName: 'Palette' },
  { name: 'Mobile Dev (Flutter & Dart)', category: 'core', proficiency: 90, highlight: 'Cross-platform Android/iOS Apps, Widgets, State', iconName: 'Activity' },
  { name: 'JavaScript & TypeScript', category: 'core', proficiency: 94, highlight: 'ESNext, Strict Typing, DOM Manipulation, Async/Await', iconName: 'Code2' },
  { name: 'Three.js & R3F', category: 'graphics3d', proficiency: 88, highlight: '3D Glass Refraction, Meshes, Lighting, Shaders', iconName: 'Box' },
  { name: 'GSAP & ScrollTrigger', category: 'animation', proficiency: 92, highlight: 'Complex Timelines, Kinetic Scrollers, Pinning', iconName: 'Sparkles' },
  { name: 'Lenis Smooth Scroll', category: 'animation', proficiency: 96, highlight: 'Virtual Inertia Scrolling, Zero-Lag Integration', iconName: 'MousePointer' },
  { name: 'Framer Motion', category: 'animation', proficiency: 95, highlight: 'Spring Physics, Layout Transitions, Gestures', iconName: 'Activity' },
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
    role: 'Siswa Rekayasa Perangkat Lunak (RPL)',
    place: 'Rabbaanii Islamic School, Cikarang Timur',
    description: 'Fokus mendalami UI/UX Design di Figma, Front-End Web Development (React/Tailwind), serta Mobile Development (Flutter & Dart). Meraih Bintang Prestasi (Ranking 1 selama 3 semester berturut-turut).'
  },
  {
    period: '2024 - 2025',
    role: 'Front-End & UI/UX Freelance Explorer',
    place: 'Self-Directed & Open Source Projects',
    description: 'Mengikuti berbagai sertifikasi kompetensi di Dicoding (AWS Cloud, Spec-Driven Development) dan Udemy (Figma UI/UX). Mengerjakan puluhan antarmuka modern.'
  },
  {
    period: '2018 - 2024',
    role: 'Organisasi & Prestasi Akademik/Olahraga',
    place: 'OSIS, SAPALA, Taekwondo Indonesia',
    description: 'Aktif dalam kepengurusan OSIS Seksi Ibadah, SAPALA (Santri Pecinta Alam), Juara I Kejuaraan Taekwondo Provinsi, dan menyelesaikan hafalan Al-Qur\'an hingga 24 Juz.'
  }
]
