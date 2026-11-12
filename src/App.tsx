import { useState, useEffect } from 'react'
import { useLenis } from './hooks/useLenis'
import { CustomCursor } from './components/common/CustomCursor'
import { GlassShardScene } from './components/3d/GlassShardScene'
import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { WorkGallery } from './components/sections/WorkGallery'
import { TechStackBento } from './components/sections/TechStackBento'
import { GithubStatsSection } from './components/sections/GithubStatsSection'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { FALLBACK_GITHUB_STATS } from './data/mockCms'

export default function App() {
  const { scrollTo } = useLenis()
  const [totalStars, setTotalStars] = useState(FALLBACK_GITHUB_STATS.totalStars)

  const handleNavigate = (target: string) => {
    scrollTo(target, { offset: -20, duration: 1.4 })
  }

  const handleBackToTop = () => {
    scrollTo(0, { duration: 1.6 })
  }

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Custom Hardware-accelerated Cursor */}
      <CustomCursor />

      {/* Interactive Three.js R3F 3D Background */}
      <GlassShardScene />

      {/* Floating Glass Navigation */}
      <Navbar onNavigate={handleNavigate} totalStars={totalStars} />

      {/* Main Architectural Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section with Shattering Title */}
        <Hero
          onExploreWork={() => handleNavigate('#work')}
          onOpenContact={() => handleNavigate('#contact')}
        />

        {/* Friction-based Horizontal Scroll Work Gallery */}
        <WorkGallery />

        {/* Bento Box Tech Stack Matrix */}
        <TechStackBento />

        {/* GitHub Real-time GraphQL Telemetry */}
        <GithubStatsSection />

        {/* Minimalist Contact with Floating Labels */}
        <Contact />
      </main>

      {/* Liquid Fluid Footer */}
      <Footer onBackToTop={handleBackToTop} />
    </div>
  )
}
