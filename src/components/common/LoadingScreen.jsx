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
    gradient.addColorStop(0.4, 'rgba(100, 200, 255, 0.2)') // Slight blue tint
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 32, 32)
    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }, [])

  // Refined Galaxy Colors (More realistic/cinematic)
  const galaxyParams = useMemo(() => ({
    count: 20000,
    radius: 15,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: new THREE.Color('#ffaa33'), // Warm core
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
      const randomY = Math.pow(Math.random(), galaxyParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * galaxyParams.randomness * radius * 0.5 
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
      pointsRef.current.rotation.y += delta * 0.03 // Slower, majestic rotation
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
          size={0.08} // Slightly larger stars
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors={true}
          map={starTexture}
          transparent
          opacity={0.9}
        />
      </points>
    </group>
  )
}

function CameraRig() {
  const { camera, size } = useThree()
  
  useEffect(() => {
    // Dynamic FOV based on screen width
    if (size.width < 768) {
      camera.position.set(0, 10, 18) // Further back on mobile
      camera.fov = 65
    } else {
      camera.position.set(0, 5, 14)
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
          }, 800)
          return 100
        }
        // Non-linear progress for realism
        const increment = Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 2 : 1; 
        return Math.min(prev + increment, 100)
      })
    }, 50)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden font-sans"
        >
          {/* 3D BACKGROUND */}
          <div className="absolute inset-0 z-0">
            <Canvas gl={{ antialias: false, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}>
              <CameraRig />
              <color attach="background" args={['#000000']} />
              <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
              
              <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                <MilkyWayGalaxy />
              </Float>
              
              <ambientLight intensity={0.1} />
            </Canvas>
          </div>

          {/* OVERLAYS */}
          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.8)_100%)]" />
          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none z-[2] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />

          {/* UI CONTENT */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between py-10 px-6 md:py-20 md:px-16 pointer-events-none">
            
            {/* Top Bar - Decorative */}
            <div className="flex justify-between w-full opacity-60">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 }}
                 className="text-[10px] md:text-xs font-mono text-cyan-500 tracking-widest"
               >
                 SYS.BOOT.V2.6
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 }}
                 className="text-[10px] md:text-xs font-mono text-cyan-500 tracking-widest"
               >
                 SECURE_CONNECTION
               </motion.div>
            </div>

            {/* CENTER: Main Title */}
            <div className="flex flex-col items-center justify-center space-y-2 md:space-y-6">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-white font-black text-6xl sm:text-7xl md:text-9xl tracking-[0.15em] uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] text-center leading-none"
              >
                GRAVITY
              </motion.h1>
              
              <div className="flex items-center gap-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-[1px] bg-gradient-to-r from-transparent to-cyan-400 hidden md:block"
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-cyan-200/90 font-mono text-xs md:text-sm tracking-[0.6em] uppercase"
                >
                  2K26 // TECHFEST
                </motion.p>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-[1px] bg-gradient-to-l from-transparent to-cyan-400 hidden md:block"
                />
              </div>
            </div>

            {/* BOTTOM: Progress Bar */}
            <div className="w-full max-w-md md:max-w-3xl mx-auto space-y-3">
              <div className="flex justify-between items-end px-1">
                <span className="text-cyan-400 font-mono text-[10px] md:text-xs uppercase tracking-wider">
                  {progress < 30 ? "Initializing..." : progress < 70 ? "Loading Assets..." : "Finalizing..."}
                </span>
                <span className="text-white font-mono text-lg md:text-xl font-bold">
                  {progress}<span className="text-sm text-white/50">%</span>
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-white"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                >
                  {/* Shimmer effect on bar */}
                  <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-12 translate-x-full animate-shimmer" />
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


