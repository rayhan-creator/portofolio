import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, ChevronRight, ChevronLeft, Sparkles, X, ArrowUpRight } from 'lucide-react'
import { Project } from '../../types'
import { RAYHAN_PROJECTS } from '../../data/mockCms'
import { GlassCard } from '../common/GlassCard'

gsap.registerPlugin(ScrollTrigger)

export function WorkGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120)

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === section) t.kill()
      })
    }
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen bg-slate-950/70 overflow-hidden flex flex-col justify-center py-20"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-sans uppercase tracking-widest font-medium mb-3">
            <Sparkles className="w-3 h-3" />
            Galeri Portofolio Unggulan
          </div>
          <h2 className="font-serif font-bold text-fluid-h2 text-white">
            Karya Terpilih <span className="font-serif italic font-normal text-iridescent">& Eksperimen</span>
          </h2>
        </div>
        <p className="max-w-md font-sans text-xs sm:text-sm text-slate-400 font-light">
          Scroll vertikal untuk meluncur secara horizontal menyusuri projek-projek web interaktif yang telah dibangun.
        </p>
      </div>

      {/* Friction Horizontal Track */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-8 pl-6 sm:pl-16 pr-32 select-none"
        >
          {RAYHAN_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              className="w-[85vw] sm:w-[480px] lg:w-[580px] shrink-0"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard
                irregularShape={idx % 2 === 0 ? 'cut-corner' : 'organic'}
                glowColor={idx === 0 ? 'emerald' : idx === 1 ? 'cyan' : idx === 2 ? 'violet' : 'rose'}
                className="p-6 sm:p-8 flex flex-col justify-between h-[520px] sm:h-[580px] cursor-pointer group"
                onClick={() => {
                  setActiveProject(project)
                  setGalleryIndex(0)
                }}
                data-cursor="pointer"
                data-cursor-text="DETAIL"
              >
                {/* Project Image Shell */}
                <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-[11px] font-sans font-medium text-cyan-200">
                    {project.category}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-[11px] font-sans font-medium text-slate-300">
                    {project.year}
                  </div>
                </div>

                {/* Project Header & Summary */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif font-bold text-2xl text-white group-hover:text-cyan-200 transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Metrics Badge Island */}
                  <div className="grid grid-cols-3 gap-2 my-4 py-3 px-3 rounded-xl bg-slate-950/40 border border-white/5">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="block font-serif font-bold text-sm text-white">
                          {m.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-sans text-slate-400">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-sans bg-white/[0.04] border border-white/5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep Case-Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-2xl"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900/90 backdrop-blur-3xl border border-white/20 p-6 sm:p-10 shadow-glass-lg z-10 custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 transition-colors z-20"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col gap-8">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-sans font-medium">
                      {activeProject.category}
                    </span>
                    <span className="text-xs font-sans text-slate-400">
                      Tahun: {activeProject.year} • Klien: {activeProject.client}
                    </span>
                  </div>
                  <h2 className="font-serif font-black text-3xl sm:text-5xl text-white">
                    {activeProject.title}
                  </h2>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15">
                  <img
                    src={activeProject.galleryImages[galleryIndex] || activeProject.featuredImage}
                    alt={activeProject.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  {activeProject.galleryImages.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {activeProject.galleryImages.map((_, gIdx) => (
                        <button
                          key={gIdx}
                          onClick={() => setGalleryIndex(gIdx)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            galleryIndex === gIdx ? 'bg-cyan-400 w-8' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Description & Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 flex flex-col gap-4">
                    <h4 className="font-serif font-bold text-xl text-white">Penjelasan Projek</h4>
                    <p className="font-sans text-slate-300 leading-relaxed font-light text-sm sm:text-base">
                      {activeProject.description}
                    </p>

                    <h4 className="font-serif font-bold text-xl text-white mt-4">Pencapaian & Fitur Kunci</h4>
                    <ul className="space-y-2">
                      {activeProject.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-sm text-slate-300 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div>
                      <span className="text-[11px] font-sans uppercase tracking-widest text-slate-400">
                        Metrik Kinerja
                      </span>
                      <div className="mt-3 space-y-3">
                        {activeProject.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex justify-between items-center pb-2 border-b border-white/5">
                            <span className="text-xs text-slate-300 font-sans">{m.label}</span>
                            <span className="font-serif font-bold text-cyan-300 text-sm">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-sans uppercase tracking-widest text-slate-400">
                        Teknologi Digunakan
                      </span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {activeProject.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 rounded bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-auto flex flex-col gap-2 pt-2">
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-sans font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Buka Live Preview
                        </a>
                      )}
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 text-slate-200 font-sans font-medium text-xs tracking-wider uppercase transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Lihat Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
