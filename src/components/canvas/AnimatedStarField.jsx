import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function AnimatedStarField() {
  const starsRef = useRef()
  const groupRef = useRef()
  
  // 🚀 OPTIMIZATION: Reduce star count based on screen size
  const [starCount, setStarCount] = useState(1500)

  useEffect(() => {
    // 3000 for Desktop, 1500 for Mobile to fix lag
    setStarCount(window.innerWidth > 768 ? 3000 : 1500)
  }, [])
  
  const { positions, originalPositions, sizes } = useMemo(() => {
    const pos = new Float32Array(starCount * 3)
    const origPos = new Float32Array(starCount * 3)
    const starSizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      const radius = 300 + Math.random() * 400
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      pos[i3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i3 + 2] = radius * Math.cos(phi)
      
      origPos[i3] = pos[i3]
      origPos[i3 + 1] = pos[i3 + 1]
      origPos[i3 + 2] = pos[i3 + 2]
      
      starSizes[i] = 0.5 + Math.random() * 1.5
    }

    return { positions: pos, originalPositions: origPos, sizes: starSizes }
  }, [starCount]) // Re-run if count changes

  useFrame(({ clock }) => {
    if (!starsRef.current || !groupRef.current) return

    const elapsedTime = clock.getElapsedTime()
    const positionAttr = starsRef.current.geometry.attributes.position

    // 🚀 OPTIMIZATION: Simplified rotation math
    groupRef.current.rotation.y = elapsedTime * 0.05 

    // Move stars
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      // Simple drift
      positionAttr.array[i3] = originalPositions[i3] + Math.sin(elapsedTime * 0.1 + i) * 2
    }
    positionAttr.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={starCount}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={1.5}
          sizeAttenuation={true}
          color="#ffffff"
          transparent
          opacity={0.8}
          depthWrite={false} // 🚀 Fixes rendering glitches
        />
      </points>
    </group>
  )
}