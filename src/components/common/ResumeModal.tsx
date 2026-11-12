import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Printer, Mail, Github, Globe, CheckCircle2, Sparkles, MapPin } from 'lucide-react'
import { RAYHAN_PROFILE, RAYHAN_EXPERIENCE, RAYHAN_TECH_ITEMS } from '../../data/mockCms'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl my-8 bg-slate-900/95 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-glass-lg z-10 text-slate-100 max-h-[90vh] overflow-y-auto"
        >
          {/* Header Actions */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2 text-cyan-400 font-sans text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" />
              Curriculum Vitae // Rayhan Adrian
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-sans transition-colors"
                title="Cetak atau Simpan PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-8">
            {/* Header Profile */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <h2 className="font-serif font-black text-3xl sm:text-4xl text-white">
                  {RAYHAN_PROFILE.name}
                </h2>
                <p className="font-sans text-cyan-300 text-sm font-medium mt-1">
                  {RAYHAN_PROFILE.role}
                </p>
                <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{RAYHAN_PROFILE.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1 text-xs font-sans text-slate-300">
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {RAYHAN_PROFILE.email}
                </span>
                <span className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  github.com/{RAYHAN_PROFILE.githubUsername}
                </span>
              </div>
            </div>

            {/* Ringkasan Profil */}
            <div>
              <h3 className="font-serif font-bold text-lg text-white mb-2 pb-1 border-b border-white/10">
                Ringkasan Profesional
              </h3>
              <p className="font-sans text-sm text-slate-300 leading-relaxed font-light">
                {RAYHAN_PROFILE.bioLong}
              </p>
            </div>

            {/* Riwayat Pengalaman */}
            <div>
              <h3 className="font-serif font-bold text-lg text-white mb-4 pb-1 border-b border-white/10">
                Pengalaman & Projek
              </h3>
              <div className="space-y-4">
                {RAYHAN_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-serif font-bold text-base text-white">{exp.role}</span>
                      <span className="text-xs font-mono text-cyan-300">{exp.period}</span>
                    </div>
                    <span className="text-xs text-emerald-300 block mb-1 font-medium">{exp.place}</span>
                    <p className="text-xs text-slate-300 font-light">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kemampuan Teknis */}
            <div>
              <h3 className="font-serif font-bold text-lg text-white mb-3 pb-1 border-b border-white/10">
                Keahlian & Teknologi
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {RAYHAN_TECH_ITEMS.map((t) => (
                  <div key={t.name} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-white/[0.02]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
