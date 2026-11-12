import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, FileText, Maximize2, X, Sparkles } from 'lucide-react'
import { RAYHAN_CERTIFICATES } from '../../data/mockCms'
import { Certificate } from '../../types'
import { GlassCard } from '../common/GlassCard'
import { PdfPageCanvas } from '../common/PdfPageCanvas'

export function CertificatesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoomCert, setZoomCert] = useState<Certificate | null>(null)
  const timerRef = useRef<any>(null)

  const activeCert = RAYHAN_CERTIFICATES[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % RAYHAN_CERTIFICATES.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + RAYHAN_CERTIFICATES.length) % RAYHAN_CERTIFICATES.length)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomCert) return
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [zoomCert])

  return (
    <section id="certificates" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-sans uppercase tracking-widest font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            Sertifikasi & Penghargaan Resmi
          </div>
          <h2 className="font-serif font-bold text-fluid-h2 text-white">
            Galeri <span className="font-serif italic font-normal text-iridescent">Sertifikat</span>
          </h2>
        </div>

        {/* Carousel Slide Indicators & Controls */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-slate-400">
            <strong className="text-cyan-300 text-sm">{currentIndex + 1}</strong> / {RAYHAN_CERTIFICATES.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              data-cursor="pointer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-200 transition-colors"
              aria-label="Previous Certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              data-cursor="pointer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-200 transition-colors"
              aria-label="Next Certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Carousel Display Card */}
      <GlassCard irregularShape="standard" glowColor="cyan" className="p-6 sm:p-10 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCert.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Interactive Canvas Rendering of PDF Page (Spans 7 cols) */}
            <div className="lg:col-span-7 relative group cursor-pointer" onClick={() => setZoomCert(activeCert)}>
              <div className="relative rounded-2xl overflow-hidden border border-white/15 p-2 bg-slate-950/70 shadow-glass-lg transition-transform duration-300 group-hover:scale-[1.01]">
                <PdfPageCanvas
                  pdfUrl="/cv-muhammad-rayhan-adrian.pdf"
                  pageNumber={activeCert.pdfPage}
                  scale={1.4}
                  className="w-full min-h-[300px] sm:min-h-[420px]"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-sans text-xs backdrop-blur-[2px]">
                  <Maximize2 className="w-4 h-4 text-cyan-400" />
                  <span>Klik untuk Memperbesar</span>
                </div>

                {/* Badge Category */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/15 text-[11px] font-sans font-medium text-cyan-200">
                  {activeCert.category}
                </div>
              </div>
            </div>

            {/* Right: Certificate Information & Links (Spans 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-sans text-emerald-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sertifikasi Terverifikasi</span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight mb-2">
                  {activeCert.title}
                </h3>

                <span className="text-xs font-sans text-cyan-300 font-medium block mb-4">
                  Diterbitkan oleh: {activeCert.issuer}
                </span>

                <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {activeCert.description}
                </p>

                {/* Meta details */}
                <div className="space-y-2.5 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-sans">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Tanggal:</span>
                    <span className="font-medium text-white">{activeCert.date}</span>
                  </div>
                  {activeCert.credentialId && (
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="text-slate-400">ID Kredensial:</span>
                      <span className="font-mono text-cyan-300 text-[11px]">{activeCert.credentialId}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Halaman PDF:</span>
                    <span className="font-mono text-slate-300">Halaman {activeCert.pdfPage}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`/cv-muhammad-rayhan-adrian.pdf#page=${activeCert.pdfPage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-sans font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Buka di Dokumen PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {activeCert.verifyUrl && (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-sans font-medium text-xs tracking-wider uppercase transition-colors"
                  >
                    <span>Verifikasi Asli</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination Thumbnails */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 flex-wrap">
          {RAYHAN_CERTIFICATES.map((cert, idx) => (
            <button
              key={cert.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans transition-all duration-200 ${
                currentIndex === idx
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="font-mono text-[10px] mr-1.5 opacity-60">0{idx + 1}</span>
              <span>{cert.title.length > 25 ? cert.title.slice(0, 25) + '...' : cert.title}</span>
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {zoomCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomCert(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[92vh] overflow-y-auto bg-slate-900 border border-white/20 rounded-3xl p-6 shadow-glass-lg z-10 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <h3 className="font-serif font-bold text-xl text-white">
                    {zoomCert.title}
                  </h3>
                  <span className="text-xs font-sans text-slate-400">
                    {zoomCert.issuer} • Halaman {zoomCert.pdfPage}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`/cv-muhammad-rayhan-adrian.pdf#page=${zoomCert.pdfPage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs hover:bg-cyan-500/30 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka PDF</span>
                  </a>
                  <button
                    onClick={() => setZoomCert(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-auto max-h-[75vh] flex justify-center p-2 rounded-xl bg-slate-950">
                <PdfPageCanvas
                  pdfUrl="/cv-muhammad-rayhan-adrian.pdf"
                  pageNumber={zoomCert.pdfPage}
                  scale={2.0}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
