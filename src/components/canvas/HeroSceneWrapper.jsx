import { useEffect, useRef } from 'react'
import HeroScene from './HeroScene'

export default function HeroSceneWrapper() {
  const wrapperRef = useRef(null)
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    // ✅ FORCE START STATE ON REFRESH
    if (wrapperRef.current) {
      wrapperRef.current.style.opacity = '1'
    }

    // ✅ FORCE SCROLL TO TOP ON REFRESH
    window.scrollTo(0, 0)

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const heroSection = document.getElementById('hero')
        if (!heroSection || !wrapperRef.current) return

        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight

        wrapperRef.current.style.opacity =
          scrollPosition > heroBottom + 100 ? '0' : '1'
      }, 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      id="three-canvas-root"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ transition: 'opacity 0.8s ease-out' }}
    >
      <HeroScene />
    </div>
  )
}
