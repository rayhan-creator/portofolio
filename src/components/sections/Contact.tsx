import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import Lottie from 'lottie-react'
import { Send, CheckCircle2, Mail, MessageSquare, MapPin, Sparkles, ArrowRight, Clock, Instagram, Github } from 'lucide-react'
import { RAYHAN_PROFILE } from '../../data/mockCms'
import { GlassCard } from '../common/GlassCard'

const successLottieData = {
  v: "5.5.7",
  fr: 60,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Success Pulse",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ring",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100] }, { t: 50, s: [0] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [30, 30] }, { t: 45, s: [120, 120] }] }
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [80, 80] },
        },
        {
          ty: "st",
          c: { a: 0, k: [0.02, 0.71, 0.83, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 4 },
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ]
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Projek Website Baru',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Iridescent Confetti Celebration Blast
      confetti({
        particleCount: 85,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#10b981', '#8b5cf6', '#38bdf8', '#ffffff'],
      })
    }, 1200)
  }

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-sans uppercase tracking-widest font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Hubungi Rayhan
        </div>
        <h2 className="font-serif font-bold text-fluid-h2 text-white">
          Mari Memulai <span className="font-serif italic font-normal text-iridescent">Kolaborasi</span>
        </h2>
        <p className="font-sans text-slate-300 text-sm sm:text-base mt-4 font-light">
          Punya ide projek menarik, butuh pembuatan website profesional, atau sekadar ingin berdiskusi seputar web development? Silakan hubungi saya!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards (Spans 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <GlassCard irregularShape="organic" glowColor="cyan" className="p-8">
            <h3 className="font-serif font-bold text-2xl text-white mb-2">
              Saluran Kontak
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 font-light mb-6">
              Pesan biasanya dibalas dalam kurun waktu kurang dari 24 jam. Anda juga bisa langsung mengirimkan email atau menyapa via Instagram & GitHub.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${RAYHAN_PROFILE.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 hover:bg-white/10 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-slate-400 block">
                    Alamat Email Langsung
                  </span>
                  <span className="font-sans text-sm font-medium text-white group-hover:text-cyan-200 transition-colors">
                    {RAYHAN_PROFILE.email}
                  </span>
                </div>
              </a>

              <a
                href={RAYHAN_PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-rose-400/30 hover:bg-white/10 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-300 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-slate-400 block">
                    Instagram Pribadi
                  </span>
                  <span className="font-sans text-sm font-medium text-white group-hover:text-rose-200 transition-colors">
                    @{RAYHAN_PROFILE.instagramHandle}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-slate-400 block">
                    Status Ketersediaan
                  </span>
                  <span className="font-sans text-sm font-medium text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Terbuka untuk PRAKERIN & Kolaborasi
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-slate-400 block">
                    Lokasi
                  </span>
                  <span className="font-sans text-sm font-medium text-white">
                    {RAYHAN_PROFILE.location}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Large, Easy-to-Click GitHub Repository Action Card */}
          <a
            href={RAYHAN_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="group block relative overflow-hidden rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-slate-900/90 via-slate-850 to-slate-900/90 backdrop-blur-2xl border-2 border-emerald-500/30 hover:border-emerald-400 shadow-[0_10px_35px_rgba(16,185,129,0.15)] hover:shadow-[0_15px_45px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 text-emerald-300 group-hover:scale-110 group-hover:text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <Github className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold block mb-0.5">
                    KUNJUNGI REPOSITORI
                  </span>
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-emerald-300 transition-colors">
                    GitHub @{RAYHAN_PROFILE.githubUsername}
                  </h4>
                  <span className="text-xs font-sans text-slate-400">
                    Klik di sini untuk melihat source code & repositori lengkap
                  </span>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>

        {/* Right Column: Minimalist Glass Form with Floating Labels (Spans 7 cols) */}
        <div className="lg:col-span-7">
          <GlassCard irregularShape="cut-corner" glowColor="cyan" className="p-8 sm:p-10 relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-14 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                    <Lottie animationData={successLottieData} loop={false} className="w-24 h-24" />
                    <CheckCircle2 className="w-12 h-12 text-cyan-400 absolute" />
                  </div>
                  <h3 className="font-serif font-bold text-3xl text-white mb-2">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <p className="font-sans text-slate-300 text-sm max-w-md font-light leading-relaxed mb-6">
                    Terima kasih telah menghubungi. Pesan Anda telah tersimpan dan saya akan segera membalasnya melalui email Anda.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', email: '', subject: 'Projek Website Baru', message: '' })
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-sans text-white uppercase tracking-wider transition-colors"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <h3 className="font-serif font-bold text-2xl text-white">
                      Formulir Kontak
                    </h3>
                    <span className="text-xs font-mono text-cyan-300">RESPONS CEPAT</span>
                  </div>

                  {/* Floating Input 1: Name */}
                  <div className="floating-input-group">
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="floating-input"
                    />
                    <label htmlFor="name" className="floating-label">
                      Nama Lengkap Anda
                    </label>
                  </div>

                  {/* Floating Input 2: Email */}
                  <div className="floating-input-group">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="floating-input"
                    />
                    <label htmlFor="email" className="floating-label">
                      Alamat Email Aktif
                    </label>
                  </div>

                  {/* Topik Pilihan */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-slate-400 mb-2 font-medium">
                      Kategori Kebutuhan
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Website Baru', 'Front-End UI/UX', 'Konsultasi Web', 'Lainnya'].map((topic) => (
                        <button
                          type="button"
                          key={topic}
                          onClick={() => setFormData({ ...formData, subject: topic })}
                          className={`py-2 px-3 rounded-lg text-xs font-sans transition-all ${
                            formData.subject === topic
                              ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                              : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Floating Input 3: Message */}
                  <div className="floating-input-group">
                    <textarea
                      id="message"
                      rows={4}
                      placeholder=" "
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="floating-input resize-none"
                    />
                    <label htmlFor="message" className="floating-label">
                      Deskripsi Projek / Pesan yang Ingin Disampaikan
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="pointer"
                    className="w-full relative group overflow-hidden py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 text-slate-950 font-sans font-semibold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Mengirimkan Pesan...
                      </span>
                    ) : (
                      <>
                        <span>Kirim Pesan Sekarang</span>
                        <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
