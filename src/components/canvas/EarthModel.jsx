import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Shader for the blue atmosphere glow
const vertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
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
  
  const colorMap = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg')

  useEffect(() => {
    if (!colorMap) return
    colorMap.anisotropy = 2
    colorMap.minFilter = THREE.LinearFilter
    colorMap.generateMipmaps = false
  }, [colorMap])

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group position={[0, -3.5, 0]} rotation={[0.4, 0, 0]}>
      {/* 1. Earth Surface */}
      <mesh ref={earthRef} receiveShadow>
        <sphereGeometry args={[3.5, 48, 48]} />
        <meshStandardMaterial 
          map={colorMap}
          roughness={0.8}
          metalness={0.05}
        />
      </mesh>

      {/* 2. Atmosphere Glow */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[3.5, 48, 48]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent={true}
        />
      </mesh>
    </group>
  )
}
