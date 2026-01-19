import { Canvas } from "@react-three/fiber"
import { memo, Suspense } from "react"
import { OrbitControls, Html } from "@react-three/drei" // Added Html for loading text

import Mercury from "./Mercury"
import Moon from "./Moon"
import Neptune from "./Neptune"
import Uranus from "./Uranus"

// ⚡ LIGHTWEIGHT PLACEHOLDER (Shows instantly while texture downloads)
function PlanetLoader() {
  return (
    <mesh>
      {/* Low poly sphere */}
      <sphereGeometry args={[1.6, 32, 32]} /> 
      {/* Dark wireframe look */}
      <meshStandardMaterial color="#444" wireframe />
      <Html center>
        <div className="text-xs text-cyan-500 font-mono tracking-widest animate-pulse">
          LOADING
        </div>
      </Html>
    </mesh>
  )
}

function EventsPlanetScene({ planetType }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="bg-transparent"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 2, 5]} intensity={2} />
      <pointLight position={[-5, 0, -5]} intensity={1} color="#4a5568" />

      {/* ✅ FIX: Replaced 'null' with 'PlanetLoader' */}
      <Suspense fallback={<PlanetLoader />}>
        {planetType === "mercury" && <Mercury />}
        {planetType === "moon" && <Moon />}
        {planetType === "neptune" && <Neptune />}
        {planetType === "uranus" && <Uranus />}
      </Suspense>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  )
}

export default memo(EventsPlanetScene)