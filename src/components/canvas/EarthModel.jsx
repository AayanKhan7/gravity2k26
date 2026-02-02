import { useEffect, useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const vertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
  }
`

export default function EarthModel() {
  const earthRef = useRef()

  const colorMap = useTexture(
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
  )

  // ✅ MEMOIZED GEOMETRY (CRITICAL FIX)
  const sphereGeometry = useMemo(
    () => new THREE.SphereGeometry(3.5, 48, 48),
    []
  )

  useEffect(() => {
    if (!colorMap) return
    colorMap.anisotropy = 2
    colorMap.minFilter = THREE.LinearFilter
    colorMap.generateMipmaps = false
  }, [colorMap])

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <group position={[0, -3.5, 0]} rotation={[0.4, 0, 0]}>
      {/* Earth */}
      <mesh ref={earthRef} geometry={sphereGeometry}>
        <meshStandardMaterial
          map={colorMap}
          roughness={0.8}
          metalness={0.05}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh geometry={sphereGeometry} scale={1.1}>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>
    </group>
  )
}
