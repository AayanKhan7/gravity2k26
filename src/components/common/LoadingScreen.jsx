import React, { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

/* ---------------- GALAXY LOGIC ---------------- */
function MilkyWayGalaxy() {
  const pointsRef = useRef()
  
  // Create a soft glow texture for stars
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 32, 32)
    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }, [])

  // Refined Galaxy Colors (More realistic/cinematic)
  const galaxyParams = useMemo(() => ({
    count: 15000,
    radius: 12,
    branches: 3,
    spin: 1.2,
    randomness: 0.3,
    randomnessPower: 3,
    insideColor: new THREE.Color('#ffddaa'), // Warm white/yellow core
    outsideColor: new THREE.Color('#1b3984') // Deep cosmic blue arms
  }), [])

  const particles = useMemo(() => {
    const positions = new Float32Array(galaxyParams.count * 3)
    const colors = new Float32Array(galaxyParams.count * 3)

    for (let i = 0; i < galaxyParams.count; i++) {
      const i3 = i * 3
      const radius = Math.random() * galaxyParams.radius
      const spinAngle = radius * galaxyParams.spin
      const branchAngle = (i % galaxyParams.branches) / galaxyParams.branches * Math.PI * 2

      const randomX = Math.pow(Math.random(), galaxyParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * galaxyParams.randomness * radius
      const randomY = Math.pow(Math.random(), galaxyParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * galaxyParams.randomness * radius * 0.5 // Flatter
      const randomZ = Math.pow(Math.random(), galaxyParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * galaxyParams.randomness * radius

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      // Color mixing
      const mixedColor = galaxyParams.insideColor.clone()
      mixedColor.lerp(galaxyParams.outsideColor, radius / galaxyParams.radius)

      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    return { positions, colors }
  }, [galaxyParams])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group rotation={[0.4, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors={true}
          map={starTexture}
          transparent
          opacity={0.8}
        />
      </points>
      
      {/* Central Core Glow */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#ffddaa" transparent opacity={0.05} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

function CameraRig() {
  const { camera, size } = useThree()
  
  useEffect(() => {
    if (size.width < 768) {
      camera.position.set(0, 8, 14)
      camera.fov = 60
    } else {
      camera.position.set(0, 5, 12)
      camera.fov = 50
    }
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  }, [size, camera])
  return null
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            if(onComplete) onComplete()
          }, 1000)
          return 100
        }
        return prev + Math.floor(Math.random() * 3) + 1
      })
    }, 40)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#000000' }}
        >
          {/* 3D CANVAS */}
          <div className="absolute inset-0 z-0">
            <Canvas>
              <CameraRig />
              <color attach="background" args={['#000000']} />
              <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
              
              <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                <MilkyWayGalaxy />
              </Float>
              
              <ambientLight intensity={0.2} />
              <fog attach="fog" args={['#000000', 10, 30]} />
            </Canvas>
          </div>

          {/* VIGNETTE & GRAIN OVERLAY (Cinematic Feel) */}
          <div className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)] opacity-90" />

          {/* CLEAN UI LAYOUT */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between py-12 px-6 md:py-16 md:px-12 pointer-events-none">
            
            {/* TOP: Empty for now, lets the galaxy breathe */}
            <div />

            {/* CENTER: Hero Title */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="text-white font-black text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] uppercase drop-shadow-2xl">
                  GRAVITY
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "120px" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-[2px] bg-cyan-500/50"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-cyan-400/80 font-mono text-sm tracking-[0.4em]"
              >
                2K26 // TECHFEST
              </motion.p>
            </div>

            {/* BOTTOM: Technical Loader */}
            <div className="w-full max-w-2xl mx-auto space-y-2">
              <div className="flex justify-between items-end px-1">
                <motion.span 
                  className="text-cyan-400 font-mono text-xs uppercase tracking-wider"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Initializing Neural Link...
                </motion.span>
                <span className="text-white font-mono text-xl md:text-2xl font-bold tabular-nums">
                  {Math.min(100, progress)}%
                </span>
              </div>

              {/* Minimal Progress Bar */}
              <div className="w-full h-[2px] bg-white/10 overflow-hidden">
                <motion.div 
                  className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 50 }}
                />
              </div>

              {/* Status Indicators */}
              <div className="flex gap-4 pt-2">
                {['SYSTEM', 'ORBIT', 'NETWORK'].map((item, i) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${progress > (i + 1) * 25 ? 'bg-cyan-400' : 'bg-white/20'}`} />
                    <span className={`text-[10px] font-mono tracking-widest ${progress > (i + 1) * 25 ? 'text-white/80' : 'text-white/20'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}