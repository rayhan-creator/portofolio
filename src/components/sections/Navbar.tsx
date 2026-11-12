import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, ArrowUpRight, Sparkles, FileText } from 'lucide-react'
import { RAYHAN_PROFILE } from '../../data/mockCms'

interface NavbarProps {
  onNavigate: (sectionId: string) => void
  totalStars?: number
  onOpenCvModal?: () => void
}

export function Navbar({ onNavigate, totalStars = 428, onOpenCvModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Tentang Saya', target: '#about' },
    { label: 'Portofolio', target: '#work' },
    { label: 'Keahlian', target: '#tech-stack' },
    { label: 'GitHub Live', target: '#github-stats' },
    { label: 'Kontak', target: '#contact' },
  ]

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false)
    onNavigate(target)
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            data-cursor="pointer"
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-glass"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-sm tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                RAYHAN ADRIAN
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-sans -mt-0.5">
                Front-End Developer
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-glass">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                data-cursor="pointer"
                className="relative px-3.5 py-1.5 text-xs font-sans font-medium text-slate-300 hover:text-white rounded-full transition-colors hover:bg-white/[0.06]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Island */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 backdrop-blur-xl border border-emerald-500/20 text-[11px] font-sans text-slate-300 shadow-glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-300 font-medium">Open for Projects & Internship</span>
            </div>

            {/* GitHub Pill */}
            <a
              href={RAYHAN_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-xs font-sans text-slate-200 hover:text-cyan-200 transition-all duration-300 shadow-glass group"
            >
              <Github className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 transition-colors" />
              <span className="font-semibold">{totalStars}</span>
              <span className="text-[10px] text-slate-400">★</span>
            </a>

            {/* Resume Button */}
            {onOpenCvModal && (
              <button
                onClick={onOpenCvModal}
                data-cursor="pointer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-200 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume / CV</span>
              </button>
            )}

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              data-cursor="pointer"
              className="relative px-4 py-2 rounded-full overflow-hidden text-xs font-sans font-medium text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-semibold">
                Hubungi
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-cursor="pointer"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-slate-900/95 backdrop-blur-3xl border border-white/15 shadow-glass-lg md:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleNavClick(item.target)}
                  className="flex items-center justify-between p-3 rounded-xl text-left text-sm font-sans font-medium text-slate-200 hover:bg-white/10 transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>
              ))}
              {onOpenCvModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenCvModal()
                  }}
                  className="flex items-center justify-between p-3 rounded-xl text-left text-sm font-sans font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/40"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Unduh CV / Resume
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-sans">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {RAYHAN_PROFILE.location}
              </span>
              <span>{RAYHAN_PROFILE.email}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
