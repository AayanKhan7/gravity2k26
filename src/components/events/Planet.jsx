import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export default function Planet({ size = 1.6, textureMap, rotationSpeed = 0.002, glowColor }) {
  const meshRef = useRef()
  
  const texture = useTexture(textureMap)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        {/* ✅ FIX: Reduced segments from 64,64 to 32,32 for faster rendering */}
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          map={texture} 
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>
      
      {glowColor && (
        <mesh scale={[1.15, 1.15, 1.15]}>
          {/* ✅ FIX: Reduced segments here too */}
          <sphereGeometry args={[size, 32, 32]} />
          <meshBasicMaterial 
            color={new THREE.Color(glowColor[0], glowColor[1], glowColor[2])}
            transparent
            opacity={0.15}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}
    </group>
  )
}