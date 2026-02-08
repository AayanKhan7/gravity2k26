import { Stars as DreiStars } from '@react-three/drei'
import { useMemo } from 'react'

export default function StarField() {
  // Reduce star count on mobile for better performance
  const isMobile = useMemo(() => window.innerWidth < 768, [])
  const starCount = useMemo(() => isMobile ? 800 : 1400, [isMobile])
  
  return (
    <DreiStars 
      radius={80} 
      depth={35} 
      count={starCount} 
      factor={3.5} 
      saturation={0} 
      fade 
      speed={0.6} 
    />
  )
}
