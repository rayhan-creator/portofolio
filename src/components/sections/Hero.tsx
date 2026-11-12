import { useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import { ArrowDownRight, Sparkles, Code2, Compass, Layers } from 'lucide-react'

interface HeroProps {
  onExploreWork: () => void
  onOpenContact: () => void
}

export function Hero({ onExploreWork, onOpenContact }: HeroProps) {
  const [isShattered, setIsShattered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Floating coordinates for interactive portrait tracking
  const mouseX = useSpring(0, { damping: 20, stiffness: 180 })
  const mouseY = useSpring(0, { damping: 20, stiffness: 180 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x * 30)
    mouseY.set(y * 30)
  }

  const primaryTitle = "TRANSCENDENCE"
  const secondaryTitle = "OF DIGITAL GLASS"

  // Random scatter vectors for each letter when shattered
  const lettersPrimary = primaryTitle.split('').map((char, i) => {
    // deterministic pseudo-random offset
    const angle = (i / primaryTitle.length) * Math.PI * 2
    const distance = 80 + (i % 3) * 45
    return {
      char,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 25,
      rotate: (i % 2 === 0 ? 1 : -1) * (25 + (i * 12) % 45),
      scale: 0.65 + (i % 3) * 0.2,
    }
  })

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Fluid Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] h-[400px] bg-gradient-to-r from-cyan-500/15 via-violet-600/15 to-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Fluid Content Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">

        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 mb-8 shadow-glass"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-sans tracking-widest uppercase text-slate-300 font-medium">
            Ultra-Responsive Glassmorphism Engine
          </span>
          <span className="text-white/20">|</span>
          <span className="text-xs font-serif italic text-cyan-300">Edition 2027</span>
        </motion.div>

        {/* Exploding Text Container with 3D Portrait Layer */}
        <div
          className="relative py-6 sm:py-10 select-none group cursor-pointer"
          onMouseEnter={() => setIsShattered(true)}
          onMouseLeave={() => setIsShattered(false)}
          data-cursor="pointer"
          data-cursor-text="SHATTER"
        >
          {/* 3D PORTRAIT & HOLOGRAPHIC REVELATION LAYER (Unveiled on shatter) */}
          <motion.div
            animate={{
              opacity: isShattered ? 1 : 0.08,
              scale: isShattered ? 1.05 : 0.85,
              filter: isShattered ? 'blur(0px)' : 'blur(12px)',
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: mouseX, y: mouseY }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-violet-500 to-rose-400 shadow-[0_0_80px_rgba(6,182,212,0.45)]">
              {/* Glass Ring Halo */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-950/80 backdrop-blur-2xl border border-white/30 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="3D Holographic Portrait"
                  className="w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal opacity-90 scale-105 transition-all duration-700"
                />
                {/* Iridescent Scan Line Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse pointer-events-none" />
                <div className="absolute bottom-4 inset-x-4 py-1.5 px-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-center">
                  <span className="text-[11px] font-sans font-medium text-cyan-200 tracking-wider">
                    AURELIUS // PRINCIPAL ARCHITECT
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Luxury Serif Exploding Titles */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Exploding Line 1 */}
            <div className="flex flex-wrap justify-center overflow-visible">
              {lettersPrimary.map((item, index) => (
                <motion.span
                  key={index}
                  animate={
                    isShattered
                      ? {
                          x: item.x,
                          y: item.y,
                          rotate: item.rotate,
                          scale: item.scale,
                          opacity: 0.75,
                          filter: 'blur(1px)',
                        }
                      : {
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                          opacity: 1,
                          filter: 'blur(0px)',
                        }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 18,
                    mass: 0.6,
                    delay: isShattered ? index * 0.012 : (lettersPrimary.length - index) * 0.008,
                  }}
                  className="inline-block font-serif font-black text-fluid-hero text-slate-100 tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                >
                  {item.char}
                </motion.span>
              ))}
            </div>

            {/* Line 2 with Iridescent Shimmer */}
            <motion.h2
              animate={
                isShattered
                  ? { y: 25, opacity: 0.45, scale: 0.95 }
                  : { y: 0, opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="font-serif italic font-medium text-fluid-h2 text-iridescent mt-1 sm:mt-3 tracking-wide"
            >
              {secondaryTitle}
            </motion.h2>
          </div>

          {/* Interactive Cue */}
          <motion.div
            animate={{ opacity: isShattered ? 0 : 0.8 }}
            className="mt-3 flex items-center justify-center gap-2 text-xs font-sans text-slate-400"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span className="tracking-widest uppercase text-[10px] text-cyan-300/80 font-medium">
              Hover title to shatter & unveil core
            </span>
          </motion.div>
        </div>

        {/* Narrative Description (Poppins 300) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl font-sans font-light text-fluid-body text-slate-300 mt-6 sm:mt-8 leading-relaxed"
        >
          Pioneering the next paradigm of computational aesthetics. Sculpting high-frequency 3D WebGL experiences, frictionless kinetic interactions, and fluid dark-material interfaces that dissolve the boundaries of the digital canvas.
        </motion.p>

        {/* Fluid Action Island */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Action Button */}
          <button
            onClick={onExploreWork}
            data-cursor="pointer"
            className="group relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 text-slate-950 font-sans font-semibold text-sm tracking-wide shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5"
          >
            <Compass className="w-4 h-4 text-slate-900 group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore Curated Works</span>
            <ArrowDownRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary Glass Action Button */}
          <button
            onClick={onOpenContact}
            data-cursor="pointer"
            className="group relative px-7 py-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 text-slate-200 font-sans font-medium text-sm tracking-wide shadow-glass hover:bg-white/[0.08] transition-all duration-300 hover:scale-[1.02] flex items-center gap-2.5"
          >
            <Code2 className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Schedule Briefing</span>
          </button>
        </motion.div>

        {/* Fluid Badges Grid Breaking Standard Grid Boundaries */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          {[
            { label: 'Latency', val: '< 4ms', desc: 'Hardware Shaders' },
            { label: 'Aesthetics', val: '9.1 Awwwards', desc: 'Site of the Day' },
            { label: 'Render Budget', val: '120 FPS', desc: 'Virtual Smooth' },
            { label: 'Fluidity', val: '100% Clamp', desc: 'Zero Breakpoints' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/35 backdrop-blur-md border border-white/10 flex flex-col items-start text-left hover:border-cyan-500/30 transition-all duration-300"
            >
              <span className="text-[10px] font-sans uppercase tracking-widest text-slate-400">
                {item.label}
              </span>
              <span className="font-serif font-bold text-lg text-white mt-0.5 text-iridescent">
                {item.val}
              </span>
              <span className="text-[11px] font-sans text-slate-400 mt-1">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
