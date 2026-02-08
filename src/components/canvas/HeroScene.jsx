import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import EarthModel from './EarthModel'
import StarField from './StarField'

export default function HeroScene() {
  // Handle WebGL context loss gracefully
  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault()
      console.warn('WebGL context lost. Will attempt to restore...')
    }

    const handleContextRestored = () => {
      console.log('WebGL context restored.')
    }

    window.addEventListener('webglcontextlost', handleContextLost, false)
    window.addEventListener('webglcontextrestored', handleContextRestored, false)

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost)
      window.removeEventListener('webglcontextrestored', handleContextRestored)
    }
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{
        antialias: false, // Disable antialiasing for better performance
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
        alpha: false, // No transparency needed
        failIfMajorPerformanceCaveat: false, // Don't fail on low-end devices
      }}
      dpr={[1, 1.5]} // Limit pixel ratio for better performance
      frameloop="demand" // Only render when needed
      performance={{ min: 0.5 }} // Allow degradation for performance
      style={{
        position: 'absolute',
        inset: 0,
        background: 'transparent',
      }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 2, 5]} intensity={2.4} color="#ffecd1" />
      <directionalLight position={[-4, -1, -2]} intensity={0.9} color="#6cb8ff" />

      <Suspense fallback={null}>
        <StarField />
        <EarthModel />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Suspense>
    </Canvas>
  )
}
