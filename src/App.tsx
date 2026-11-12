import { useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { CustomCursor } from './components/common/CustomCursor'
import { GlassShardScene } from './components/3d/GlassShardScene'
import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { AboutMe } from './components/sections/AboutMe'
import { WorkGallery } from './components/sections/WorkGallery'
import { TechStackBento } from './components/sections/TechStackBento'
import { GithubStatsSection } from './components/sections/GithubStatsSection'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { ResumeModal } from './components/common/ResumeModal'
import { RAYHAN_GITHUB_FALLBACK } from './data/mockCms'

export default function App() {
  const { scrollTo } = useLenis()
  const [totalStars] = useState(RAYHAN_GITHUB_FALLBACK.totalStars)
  const [isCvOpen, setIsCvOpen] = useState(false)

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
      <Navbar
        onNavigate={handleNavigate}
        totalStars={totalStars}
        onOpenCvModal={() => setIsCvOpen(true)}
      />

      {/* Main Architectural Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section with Shattering Title */}
        <Hero
          onExploreWork={() => handleNavigate('#work')}
          onOpenContact={() => handleNavigate('#contact')}
          onOpenCvModal={() => setIsCvOpen(true)}
        />

        {/* About Me & Experience Section */}
        <AboutMe />

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

      {/* Resume / CV Modal */}
      <ResumeModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  )
}
