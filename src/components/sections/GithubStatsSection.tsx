import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, BookOpen, RefreshCw, Users, Flame, ExternalLink, Code } from 'lucide-react'
import { GithubProfileStats } from '../../types'
import { fetchGithubStats } from '../../services/githubApi'
import { GlassCard } from '../common/GlassCard'

export function GithubStatsSection() {
  const [stats, setStats] = useState<GithubProfileStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const loadStats = async () => {
    setLoading(true)
    const data = await fetchGithubStats('aurelius-craft')
    setStats(data)
    setLoading(false)
  }

  useEffect(() => {
    loadStats()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    const data = await fetchGithubStats('aurelius-craft')
    setStats(data)
    setTimeout(() => setRefreshing(false), 600)
  }

  if (loading || !stats) {
    return (
      <section id="github-stats" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-sans text-sm animate-pulse">
          <RefreshCw className="w-4 h-4 animate-spin" />
          Querying GitHub GraphQL Telemetry...
        </div>
      </section>
    )
  }

  return (
    <section id="github-stats" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-sans uppercase tracking-widest font-medium mb-3">
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            GitHub GraphQL Telemetry
          </div>
          <h2 className="font-serif font-bold text-fluid-h2 text-white">
            Open Source <span className="font-serif italic font-normal text-iridescent">Ecosystem</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            data-cursor="pointer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-300 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-cyan-400' : ''}`} />
            Sync GraphQL
          </button>
          <a
            href={`https://github.com/${stats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-sans font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
          >
            <span>@{stats.username}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Aggregate Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Stars Earned', value: stats.totalStars.toLocaleString(), icon: Star, color: 'text-amber-400' },
          { label: 'Annual Contributions', value: stats.contributionsThisYear.toLocaleString(), icon: Flame, color: 'text-rose-400' },
          { label: 'Public Repositories', value: stats.totalRepos.toString(), icon: BookOpen, color: 'text-cyan-400' },
          { label: 'Ecosystem Followers', value: stats.totalFollowers.toLocaleString(), icon: Users, color: 'text-violet-400' },
        ].map((item, idx) => {
          const Icon = item.icon
          return (
            <GlassCard
              key={idx}
              irregularShape="standard"
              glowColor="cyan"
              className="p-5 flex items-center gap-4"
            >
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white block">
                  {item.value}
                </span>
                <span className="text-[11px] font-sans text-slate-400 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            </GlassCard>
          )
        })}
      </div>

      {/* Pinned Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {stats.pinnedRepos.map((repo, idx) => (
          <GlassCard
            key={idx}
            irregularShape={idx % 2 === 0 ? 'cut-corner' : 'standard'}
            glowColor={idx === 0 ? 'cyan' : idx === 1 ? 'violet' : idx === 2 ? 'emerald' : 'amber'}
            className="p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif font-bold text-xl text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Code className="w-4 h-4 text-cyan-400" />
                  {repo.name}
                </a>
                <span className="text-[11px] font-sans text-slate-400">{repo.updatedAt}</span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                {repo.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-sans text-slate-400">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: repo.primaryLanguage.color }}
                />
                <span className="text-slate-300">{repo.primaryLanguage.name}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-slate-300">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <GitFork className="w-3.5 h-3.5 text-slate-400" />
                  {repo.forks}
                </span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Language Stack Breakdown Bar */}
      <GlassCard irregularShape="standard" className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-sans uppercase tracking-widest text-slate-300 font-medium">
            Core Language Distribution
          </span>
          <span className="text-xs font-mono text-cyan-300">GraphQL Synthesized</span>
        </div>

        {/* Multi-segment Progress Bar */}
        <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-slate-800">
          {stats.topLanguages.map((lang, idx) => (
            <div
              key={idx}
              style={{
                width: `${lang.percentage}%`,
                backgroundColor: lang.color,
              }}
              title={`${lang.name}: ${lang.percentage}%`}
              className="h-full transition-all duration-500"
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4">
          {stats.topLanguages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-sans text-slate-300">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
              <span>{lang.name}</span>
              <span className="text-slate-400 font-mono text-[11px]">{lang.percentage}%</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  )
}
