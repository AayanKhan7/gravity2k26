import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import EarthModel from './EarthModel'
import StarField from './StarField'

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{
        antialias: false,
        powerPreference: 'high-performance',
        stencil: false,
      }}
      dpr={[1, 1.25]}
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
