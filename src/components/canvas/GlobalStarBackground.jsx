import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import AnimatedStarField from './AnimatedStarField'

export default function GlobalStarBackground({ enabled = true }) {
  // Handle WebGL context loss gracefully
  useEffect(() => {
    if (!enabled) return

    const handleContextLost = (event) => {
      event.preventDefault()
      console.warn('WebGL context lost on background canvas. Will attempt to restore...')
    }

    const handleContextRestored = () => {
      console.log('WebGL background context restored.')
    }

    window.addEventListener('webglcontextlost', handleContextLost, false)
    window.addEventListener('webglcontextrestored', handleContextRestored, false)

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost)
      window.removeEventListener('webglcontextrestored', handleContextRestored)
    }
  }, [enabled])

  if (!enabled) return null

  // Mobile-optimized DPR
  const dpr = typeof window !== 'undefined' && window.innerWidth < 768 ? [1, 1] : [1, 1.25]

  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ 
          antialias: false, 
          alpha: true, 
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={dpr}
        frameloop="demand"
        performance={{ min: 0.5 }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <AnimatedStarField />
        </Suspense>
      </Canvas>
    </div>
  )
}
