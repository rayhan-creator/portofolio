import React, { useRef, useState } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../utils/cn'

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode
  className?: string
  glowColor?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose'
  enableTilt?: boolean
  irregularShape?: 'standard' | 'pill-skew' | 'cut-corner' | 'organic'
}

export function GlassCard({
  children,
  className,
  glowColor = 'cyan',
  enableTilt = true,
  irregularShape = 'standard',
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false })
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePos({ x, y, isHovered: true })

    if (enableTilt) {
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -7
      const rotateY = ((x - centerX) / centerX) * 7
      setTilt({ rotateX, rotateY })
    }
  }

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }))
    if (enableTilt) {
      setTilt({ rotateX: 0, rotateY: 0 })
    }
  }

  const getGlowGradient = () => {
    switch (glowColor) {
      case 'violet':
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.22), transparent 80%)'
      case 'emerald':
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.22), transparent 80%)'
      case 'amber':
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.22), transparent 80%)'
      case 'rose':
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(244, 63, 94, 0.22), transparent 80%)'
      case 'cyan':
      default:
        return 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.22), transparent 80%)'
    }
  }

  const getShapeClasses = () => {
    switch (irregularShape) {
      case 'cut-corner':
        return 'rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg'
      case 'pill-skew':
        return 'rounded-[2.5rem] rounded-tr-md'
      case 'organic':
        return 'rounded-[2rem] rounded-bl-[3rem]'
      case 'standard':
      default:
        return 'rounded-2xl'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={enableTilt ? { rotateX: tilt.rotateX, rotateY: tilt.rotateY } : undefined}
      transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      style={{
        transformStyle: 'preserve-3d',
        // Pass mouse position via CSS custom properties for performant specular glare
        ['--mouse-x' as string]: `${mousePos.x}px`,
        ['--mouse-y' as string]: `${mousePos.y}px`,
      }}
      className={cn(
        'group relative isolate overflow-hidden',
        'bg-slate-900/40 backdrop-blur-xl',
        'border border-white/10 hover:border-white/20',
        'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
        'transition-all duration-300',
        getShapeClasses(),
        className
      )}
      {...props}
    >
      {/* Dynamic Specular / Cursor-following Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          background: getGlowGradient(),
        }}
      />

      {/* Iridescent Top Edge Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />

      {/* Subtle Inner Glass Ambient Light */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  )
}
