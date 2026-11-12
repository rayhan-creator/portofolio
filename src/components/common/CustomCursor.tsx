import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'magnetic' | 'text'>('default')

  const mouseX = useSpring(0, { damping: 25, stiffness: 250 })
  const mouseY = useSpring(0, { damping: 25, stiffness: 250 })

  const trailX = useSpring(0, { damping: 35, stiffness: 180 })
  const trailY = useSpring(0, { damping: 35, stiffness: 180 })

  useEffect(() => {
    // Only enable custom cursor if fine pointer is detected (mouse / trackpad)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      trailX.set(e.clientX)
      trailY.set(e.clientY)

      if (!isVisible) setIsVisible(true)

      // Check target element
      const target = e.target as HTMLElement | null
      if (!target) return

      const interactive = target.closest('button, a, input, textarea, [data-cursor]') as HTMLElement | null
      if (interactive) {
        const customText = interactive.getAttribute('data-cursor-text')
        if (customText) {
          setCursorText(customText)
          setCursorVariant('text')
        } else {
          setCursorVariant('hover')
          setCursorText('')
        }
      } else {
        setCursorVariant('default')
        setCursorText('')
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY, trailX, trailY, isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Outer Ring / Glass Aura */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none flex items-center justify-center border border-cyan-400/50 backdrop-blur-[2px] transition-all duration-200"
        style={{
          x: trailX,
          y: trailY,
          width: cursorVariant === 'hover' ? 56 : cursorVariant === 'text' ? 84 : 34,
          height: cursorVariant === 'hover' ? 56 : cursorVariant === 'text' ? 84 : 34,
          background: cursorVariant === 'text'
            ? 'rgba(6, 182, 212, 0.15)'
            : cursorVariant === 'hover'
            ? 'rgba(139, 92, 246, 0.12)'
            : 'rgba(255, 255, 255, 0.04)',
          boxShadow: cursorVariant !== 'default' ? '0 0 25px rgba(6, 182, 212, 0.35)' : 'none',
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200 font-sans">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 pointer-events-none shadow-[0_0_8px_#38bdf8]"
        style={{
          x: mouseX,
          y: mouseY,
          width: cursorVariant === 'hover' ? 6 : 4,
          height: cursorVariant === 'hover' ? 6 : 4,
        }}
      />
    </div>
  )
}
