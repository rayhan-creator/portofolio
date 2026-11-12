import { useState, useEffect } from 'react'
import { ArrowUp, Github, Instagram, Linkedin, Globe, Sparkles, Mail } from 'lucide-react'
import { RAYHAN_PROFILE } from '../../data/mockCms'

interface FooterProps {
  onBackToTop: () => void
}

export function Footer({ onBackToTop }: FooterProps) {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeString(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.5)]">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl text-white tracking-wider">
                RAYHAN ADRIAN
              </span>
            </div>
            <p className="font-sans text-xs text-slate-400 max-w-sm font-light">
              Front-End Developer & UI Specialist. Memadukan estetika Glassmorphism dengan performa web modern.
            </p>
          </div>

          {/* Real-time Clock & Coordinates */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>JAKARTA (WIB): {timeString}</span>
            </div>
            <div className="hidden sm:block">
              <span>LAT: 6.2088° S // LON: 106.8456° E</span>
            </div>
          </div>

          {/* Smooth Back to Top */}
          <button
            onClick={onBackToTop}
            data-cursor="pointer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-xs font-sans text-slate-300 hover:text-cyan-200 transition-all duration-300"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs font-sans text-slate-400 font-light">
          <div>
            © {new Date().getFullYear()} {RAYHAN_PROFILE.name}. Dibuat dengan React, Three.js, Tailwind CSS & Lenis.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={RAYHAN_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={RAYHAN_PROFILE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-rose-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={RAYHAN_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${RAYHAN_PROFILE.email}`}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-emerald-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
