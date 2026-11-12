import { Project, GithubProfileStats, TechItem } from '../types'

export const CMS_PROJECTS: Project[] = [
  {
    id: 'chronos-synthetics',
    title: 'Chronos Synthetics',
    category: 'Spatial Computing & WebGL',
    year: '2026',
    client: 'Chronos Labs Zurich',
    summary: 'A luxury temporal physics simulation with real-time procedural raytracing and volumetric glass refraction.',
    description: 'Engineered an interactive spatial design system enabling quantitative analysts to visualize high-frequency multi-dimensional market flows in immersive 3D space. Utilized WebGL shaders, compute shaders via WebGPU fallbacks, and custom glass transmission models.',
    tags: ['React Three Fiber', 'GLSL Shaders', 'WebGPU', 'GSAP', 'TypeScript'],
    metrics: [
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'Latency', value: '< 4ms' },
      { label: 'Active Users', value: '45k+' },
    ],
    githubUrl: 'https://github.com/aurelius-craft/chronos-synthetics',
    liveUrl: 'https://chronos-synthetics.demo.io',
    accentColor: '#06b6d4',
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    ],
    achievements: [
      'Featured on Awwwards Site of the Day (9.12/10)',
      'Sub-50ms initial load time with progressive texture decoding',
      'Custom chromatic aberration and refraction rendering pipeline'
    ]
  },
  {
    id: 'lumina-neomorphic-os',
    title: 'Lumina OS Interface',
    category: 'Design Systems & NextGen UI',
    year: '2026',
    client: 'Aetheria Protocol',
    summary: 'Micro-kernel operating system web shell built with liquid glass physics and dynamic ambient light tracing.',
    description: 'Designed and built the browser-based control plane for decentralized autonomous servers. Every window, widget, and panel incorporates real-time frosted glass refraction calculated based on the cursor position and surrounding UI light sources.',
    tags: ['Glassmorphism', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Vite'],
    metrics: [
      { label: 'Render Budget', value: '16.6ms' },
      { label: 'Theme Tokens', value: '380+' },
      { label: 'CSS Footprint', value: '14.2kb' },
    ],
    githubUrl: 'https://github.com/aurelius-craft/lumina-os',
    liveUrl: 'https://lumina-os.demo.io',
    accentColor: '#8b5cf6',
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    ],
    achievements: [
      'Zero layout shifts with fluid clamp font & layout engine',
      'Hardware-accelerated backdrop blur with SVG fallback filters',
      'Interactive window dragging with fluid inertia physics'
    ]
  },
  {
    id: 'vortex-neural-canvas',
    title: 'Vortex Neural Canvas',
    category: 'Generative AI & Node Flow',
    year: '2025',
    client: 'Vortex Intelligence',
    summary: 'An infinite multi-agent canvas orchestrator with friction-based kinetic scrolling and real-time inference graphing.',
    description: 'Architected a nodal workflow editor supporting 10,000+ simultaneous nodes rendered seamlessly on an HTML5 2D/3D dual-layer canvas. Integrated streaming SSE sockets and custom GPU-accelerated bezier connector curves.',
    tags: ['React', 'WebGL', 'Three.js', 'WebSockets', 'Tailwind'],
    metrics: [
      { label: 'Live Nodes', value: '10,000+' },
      { label: 'Stream Speed', value: '80 Tok/s' },
      { label: 'Rating', value: '4.98 / 5' },
    ],
    githubUrl: 'https://github.com/aurelius-craft/vortex-canvas',
    liveUrl: 'https://vortex-canvas.demo.io',
    accentColor: '#10b981',
    featuredImage: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    ],
    achievements: [
      'Invented custom node culling algorithm saving 85% CPU overhead',
      'Won FWA of the Day in November 2025',
      'Smooth inertial zoom and friction pan matching native desktop feel'
    ]
  },
  {
    id: 'solaris-haptics',
    title: 'Solaris Haptic Soundscape',
    category: 'Audio Engineering & WebGL',
    year: '2025',
    client: 'SoundCore Bio',
    summary: 'Audiovisual synesthesia platform rendering audio frequency spectrums into glowing iridescent crystalline geometry.',
    description: 'Connected Web Audio API analyzer nodes to Three.js vertex shaders in real time. Features parametric 3D audio reverberation zones and customized sound effects on hover and click interactions.',
    tags: ['Web Audio API', 'Three.js', 'GLSL', 'Lenis', 'GSAP'],
    metrics: [
      { label: 'FFT Bins', value: '2048' },
      { label: 'Sample Rate', value: '96 kHz' },
      { label: 'Audio Latency', value: '1.2ms' },
    ],
    githubUrl: 'https://github.com/aurelius-craft/solaris-haptics',
    liveUrl: 'https://solaris-haptics.demo.io',
    accentColor: '#f43f5e',
    featuredImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
    ],
    achievements: [
      'Real-time frequency deconstruction with zero dropped audio frames',
      'Featured in Creative Applications Network',
      'Embedded ambient spatial binaural sound engine'
    ]
  }
]

export const TECH_ITEMS: TechItem[] = [
  { name: 'React 18 / Next.js', category: 'core', proficiency: 98, highlight: 'Server Actions, RSC, Fluid State', iconName: 'Layers' },
  { name: 'Three.js / R3F', category: 'graphics3d', proficiency: 94, highlight: 'Custom Shaders, Glass Dispersion, PBR', iconName: 'Box' },
  { name: 'GSAP & ScrollTrigger', category: 'animation', proficiency: 96, highlight: 'Complex Timelines, Kinetic Scrollers', iconName: 'Sparkles' },
  { name: 'Framer Motion', category: 'animation', proficiency: 95, highlight: 'Layout Shifts, Spring Physics, Gestures', iconName: 'Activity' },
  { name: 'Lenis Smooth Scroll', category: 'animation', proficiency: 98, highlight: 'Inertia Virtual Scroll & Momentum', iconName: 'MousePointer' },
  { name: 'Tailwind CSS & Glass', category: 'core', proficiency: 99, highlight: 'Clamp Typography, Backdrop Filters', iconName: 'Palette' },
  { name: 'TypeScript', category: 'core', proficiency: 96, highlight: 'Strict Type-Safety, AST Analysis', iconName: 'Code2' },
  { name: 'Web Audio / Lottie', category: 'tools', proficiency: 90, highlight: 'Micro-interactions, Sound FX, SVG', iconName: 'Radio' },
  { name: 'GraphQL & REST CMS', category: 'infra', proficiency: 92, highlight: 'Contentful, Sanity, GitHub GraphQL API', iconName: 'Database' },
]

export const FALLBACK_GITHUB_STATS: GithubProfileStats = {
  username: 'aurelius-craft',
  totalStars: 1842,
  totalRepos: 48,
  totalFollowers: 620,
  contributionsThisYear: 2419,
  pinnedRepos: [
    {
      name: 'glassmorphic-engine',
      description: 'Ultra-performant GPU-accelerated glass refraction & dispersion primitives for React Three Fiber.',
      stars: 874,
      forks: 112,
      primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
      url: 'https://github.com/aurelius-craft/glassmorphic-engine',
      updatedAt: '2 days ago'
    },
    {
      name: 'lenis-gsap-bridge',
      description: 'Production-tested sync bridge connecting Lenis virtual smooth scrolling with GSAP ScrollTrigger timelines.',
      stars: 541,
      forks: 67,
      primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
      url: 'https://github.com/aurelius-craft/lenis-gsap-bridge',
      updatedAt: '1 week ago'
    },
    {
      name: 'liquid-clamp-tailwind',
      description: 'Zero-breakpoint fluid container-query typography generator using pure CSS clamp() algorithms.',
      stars: 329,
      forks: 34,
      primaryLanguage: { name: 'CSS', color: '#563d7c' },
      url: 'https://github.com/aurelius-craft/liquid-clamp-tailwind',
      updatedAt: '3 weeks ago'
    },
    {
      name: 'exploding-text-webgl',
      description: 'Voronoi-based 3D typography shatter effect on cursor proximity for Three.js.',
      stars: 482,
      forks: 58,
      primaryLanguage: { name: 'GLSL', color: '#438eff' },
      url: 'https://github.com/aurelius-craft/exploding-text-webgl',
      updatedAt: 'Yesterday'
    }
  ],
  topLanguages: [
    { name: 'TypeScript', percentage: 54.2, color: '#3178c6' },
    { name: 'GLSL / Shaders', percentage: 22.8, color: '#438eff' },
    { name: 'React / JSX', percentage: 14.5, color: '#61dafb' },
    { name: 'CSS / Tailwind', percentage: 8.5, color: '#38bdf8' }
  ]
}
