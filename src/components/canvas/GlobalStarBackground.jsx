import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import AnimatedStarField from './AnimatedStarField'

export default function GlobalStarBackground({ enabled = true }) {
  if (!enabled) return null

  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.15]}
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
