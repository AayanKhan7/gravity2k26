import { Stars as DreiStars } from '@react-three/drei'

export default function StarField() {
  return (
    <DreiStars 
      radius={80} 
      depth={35} 
      count={1400} 
      factor={3.5} 
      saturation={0} 
      fade 
      speed={0.6} 
    />
  )
}
