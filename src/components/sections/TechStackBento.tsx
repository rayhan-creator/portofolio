import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Layers,
  Sparkles,
  Box,
  Activity,
  MousePointer,
  Palette,
  Code2,
  Radio,
  Database,
  Cpu,
  Zap,
  Sliders,
  CheckCircle2,
} from 'lucide-react'
import { RAYHAN_TECH_ITEMS } from '../../data/mockCms'
import { GlassCard } from '../common/GlassCard'

export function TechStackBento() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [dispersionSlider, setDispersionSlider] = useState(65)
  const [physicsSlider, setPhysicsSlider] = useState(80)

  const filteredItems = activeCategory === 'all'
    ? RAYHAN_TECH_ITEMS
    : RAYHAN_TECH_ITEMS.filter((t) => t.category === activeCategory)

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers className="w-5 h-5" />
      case 'Box': return <Box className="w-5 h-5" />
      case 'Sparkles': return <Sparkles className="w-5 h-5" />
      case 'Activity': return <Activity className="w-5 h-5" />
      case 'MousePointer': return <MousePointer className="w-5 h-5" />
      case 'Palette': return <Palette className="w-5 h-5" />
      case 'Code2': return <Code2 className="w-5 h-5" />
      case 'Radio': return <Radio className="w-5 h-5" />
      case 'Database': return <Database className="w-5 h-5" />
      default: return <Cpu className="w-5 h-5" />
    }
  }

  return (
    <section id="tech-stack" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient aura */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-300 text-xs font-sans uppercase tracking-widest font-medium mb-3">
            <Zap className="w-3.5 h-3.5 text-violet-400" />
            Keahlian & Tooling
          </div>
          <h2 className="font-serif font-bold text-fluid-h2 text-white">
            Bento Matrix <span className="font-serif italic font-normal text-iridescent">& Kapabilitas Teknis</span>
          </h2>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'Semua Keahlian' },
            { id: 'core', label: 'Core & Architecture' },
            { id: 'animation', label: 'Animasi & Fisika' },
            { id: 'graphics3d', label: '3D WebGL' },
            { id: 'tools', label: 'UI/UX & Desain' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor="pointer"
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fluid Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* BENTO CARD 1: 3D Spatial & WebGL Shaders (Spans 2 cols) */}
        <GlassCard
          glowColor="cyan"
          irregularShape="organic"
          className="md:col-span-2 p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  <Box className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-white">
                    3D Spatial & Glass Shaders
                  </h3>
                  <span className="text-xs font-sans text-slate-400">
                    Three.js & React Three Fiber (R3F)
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                120 FPS
              </span>
            </div>

            <p className="font-sans text-sm text-slate-300 leading-relaxed font-light mb-6">
              Membangun latar belakang interaktif dan elemen 3D bereaksi terhadap gerakan kursor, transmisi kaca fisik, dan pembiasan cahaya dinamis yang memperkaya estetika portofolio.
            </p>

            {/* Interactive Dispersion Test Rig */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 mb-4">
              <div className="flex justify-between items-center text-xs font-sans text-slate-300 mb-2">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Simulasi Refraksi Kaca Real-time
                </span>
                <span className="font-mono text-cyan-300">{(dispersionSlider / 50).toFixed(2)}x IOR</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={dispersionSlider}
                onChange={(e) => setDispersionSlider(Number(e.target.value))}
                className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />

              <div
                className="mt-3 h-3 rounded-full overflow-hidden transition-all duration-150"
                style={{
                  background: `linear-gradient(90deg, #06b6d4 0%, #8b5cf6 ${dispersionSlider}%, #10b981 100%)`,
                  filter: `blur(${dispersionSlider > 75 ? 1 : 0}px)`,
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {['Physical Materials', 'Interactive Geometry', 'Camera Controls', 'Stardust Particles'].map((feat) => (
              <span key={feat} className="text-[11px] font-sans px-2.5 py-1 rounded-md bg-white/5 text-slate-300">
                {feat}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* BENTO CARD 2: Kinetic Motion Physics (Spans 2 cols on lg) */}
        <GlassCard
          glowColor="violet"
          irregularShape="cut-corner"
          className="md:col-span-1 lg:col-span-2 p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-400/20 text-violet-300">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-white">
                    Animasi Halus & Fisika Kinetik
                  </h3>
                  <span className="text-xs font-sans text-slate-400">
                    Lenis Smooth Scroll + GSAP ScrollTrigger
                  </span>
                </div>
              </div>
            </div>

            <p className="font-sans text-sm text-slate-300 leading-relaxed font-light mb-6">
              Pengalaman scrolling virtual yang terintegrasi tanpa patah-patah dengan akselerasi hardware. Dikombinasikan dengan pegas Framer Motion untuk transisi interaktif.
            </p>

            {/* Kinetic Ball Interactive Playground */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 mb-4 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs font-sans text-slate-300">
                <span>Tes Damping Inersia Pegas</span>
                <span className="font-mono text-violet-300">{physicsSlider} N/m</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={physicsSlider}
                onChange={(e) => setPhysicsSlider(Number(e.target.value))}
                className="w-full accent-violet-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="h-10 rounded-lg bg-slate-900 flex items-center px-4 overflow-hidden relative">
                <motion.div
                  animate={{
                    x: [0, (physicsSlider * 2), 20, (physicsSlider * 1.5), 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5 - (physicsSlider / 40),
                    ease: 'easeInOut',
                  }}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {['ScrollTrigger Timeline', 'Framer Spring', 'Hardware Acceleration', 'Custom Cursor'].map((feat) => (
              <span key={feat} className="text-[11px] font-sans px-2.5 py-1 rounded-md bg-white/5 text-slate-300">
                {feat}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* BENTO CARD 3: Liquid Clamp Engine */}
        <GlassCard
          glowColor="emerald"
          irregularShape="pill-skew"
          className="md:col-span-1 lg:col-span-1 p-6 flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 mb-3">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white mb-1">
              Desain Fluid & Responsif
            </h3>
            <p className="font-sans text-xs text-slate-300 leading-relaxed font-light mb-4">
              Tipografi dan komponen otomatis menyesuaikan ukuran layar dari smartphone hingga monitor ultra-wide tanpa jeda breakpoint.
            </p>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 font-mono text-[11px] text-emerald-300 space-y-1">
              <div>clamp(2.75rem,</div>
              <div className="pl-3">6.5vw + 0.5rem,</div>
              <div className="pl-3">7.5rem)</div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-sans text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            100% Fluid & Mobile Optimized
          </div>
        </GlassCard>

        {/* BENTO CARDS: Dynamic Filtered Skills Matrix */}
        {filteredItems.map((tech) => (
          <GlassCard
            key={tech.name}
            glowColor="cyan"
            irregularShape="standard"
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-white/5 text-cyan-300">
                  {getIcon(tech.iconName)}
                </div>
                <span className="font-mono text-xs font-semibold text-cyan-300">
                  {tech.proficiency}%
                </span>
              </div>

              <h4 className="font-serif font-bold text-base text-white mb-1">
                {tech.name}
              </h4>
              <p className="font-sans text-xs text-slate-400 font-light leading-relaxed">
                {tech.highlight}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                  style={{ width: `${tech.proficiency}%` }}
                />
              </div>
            </div>
          </GlassCard>
        ))}

      </div>
    </section>
  )
}
