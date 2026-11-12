import { useState, useEffect } from 'react'
import { ArrowUp, Github, Twitter, Linkedin, Dribbble, Globe, Sparkles } from 'lucide-react'

interface FooterProps {
  onBackToTop: () => void
}

export function Footer({ onBackToTop }: FooterProps) {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/Zurich',
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
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl text-white tracking-wider">
                AURELIUS
              </span>
            </div>
            <p className="font-sans text-xs text-slate-400 max-w-sm font-light">
              Interactive Glassmorphism Portfolio & Spatial Computing Architecture. Engineered with WebGL, Lenis, and GSAP.
            </p>
          </div>

          {/* Real-time Clock & Coordinates */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>ZURICH: {timeString} CET</span>
            </div>
            <div className="hidden sm:block">
              <span>LAT: 47.3769° N // LON: 8.5417° E</span>
            </div>
          </div>

          {/* Smooth Back to Top */}
          <button
            onClick={onBackToTop}
            data-cursor="pointer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-xs font-sans text-slate-300 hover:text-cyan-200 transition-all duration-300"
          >
            <span>Elevate to Apex</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs font-sans text-slate-400 font-light">
          <div>
            © {new Date().getFullYear()} Aurelius Craft. All rights reserved. Built with Dark Material & Liquid Clamp.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
              aria-label="Dribbble"
            >
              <Dribbble className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
