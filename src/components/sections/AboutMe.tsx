import { motion } from 'framer-motion'
import { User, Sparkles, Compass, Heart, Code2, BookOpen, Coffee, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react'
import { RAYHAN_PROFILE, RAYHAN_EXPERIENCE } from '../../data/mockCms'
import { GlassCard } from '../common/GlassCard'

export function AboutMe() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-sans uppercase tracking-widest font-medium mb-3">
          <User className="w-3.5 h-3.5" />
          Mengenal Lebih Dekat
        </div>
        <h2 className="font-serif font-bold text-fluid-h2 text-white">
          Tentang <span className="font-serif italic font-normal text-iridescent">Rayhan Adrian</span>
        </h2>
        <p className="font-sans text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
          Menggabungkan logika pemrograman front-end dengan sentuhan seni visual untuk melahirkan website yang memikat dan bermakna.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Real Photo & Personal Philosophy (Spans 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <GlassCard irregularShape="organic" glowColor="emerald" className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/50 p-0.5 bg-gradient-to-tr from-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <img
                  src={RAYHAN_PROFILE.photoUrl}
                  alt={RAYHAN_PROFILE.fullName}
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  {RAYHAN_PROFILE.fullName}
                </h3>
                <span className="text-xs font-sans text-cyan-300 block">
                  {RAYHAN_PROFILE.school}
                </span>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  📍 {RAYHAN_PROFILE.location}
                </div>
              </div>
            </div>

            <p className="font-sans text-sm text-slate-300 leading-relaxed font-light mb-6">
              {RAYHAN_PROFILE.bioLong}
            </p>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 mb-6">
              <div className="flex items-center gap-2 text-xs font-sans font-medium text-emerald-300 mb-1">
                <Heart className="w-3.5 h-3.5 text-emerald-400" />
                Filosofi Desain & Kode
              </div>
              <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
                "{RAYHAN_PROFILE.philosophy}"
              </p>
            </div>

            {/* Direct Link to CV PDF */}
            <a
              href={RAYHAN_PROFILE.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-sans font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Buka Dokumen CV Lengkap (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </GlassCard>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4">
            <GlassCard irregularShape="standard" glowColor="cyan" className="p-5 text-center">
              <span className="font-serif font-bold text-3xl text-cyan-300 block">
                24 Juz
              </span>
              <span className="text-xs font-sans text-slate-400">
                Hafalan Al-Qur'an
              </span>
            </GlassCard>

            <GlassCard irregularShape="standard" glowColor="violet" className="p-5 text-center">
              <span className="font-serif font-bold text-3xl text-violet-300 block">
                Rank 1
              </span>
              <span className="text-xs font-sans text-slate-400">
                Bintang Prestasi (3 Smt)
              </span>
            </GlassCard>
          </div>
        </div>

        {/* Right Column: Experience & Journey Timeline (Spans 7 cols) */}
        <div className="lg:col-span-7">
          <GlassCard irregularShape="cut-corner" glowColor="cyan" className="p-8 sm:p-10">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-white">
                    Pendidikan, Organisasi & Prestasi
                  </h3>
                  <span className="text-xs font-sans text-slate-400">
                    Rekam jejak dedikasi akademik, teknologi, dan karakter
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline List */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-emerald-400 before:to-transparent">
              {RAYHAN_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-10">
                  {/* Dot */}
                  <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-serif font-bold text-lg text-white">
                        {exp.role}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <span className="text-xs font-sans text-emerald-300 font-medium block mb-2">
                      {exp.place}
                    </span>

                    <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Values Checklist */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UI/UX Design & User Flow (Figma)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Front-End Web (React, Tailwind, Three.js)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mobile Development (Flutter & Dart)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kerja Tim & Kepemimpinan (OSIS & SAPALA)</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
