import Planet from "./Planet"

export default function Moon() {
  return (
    <Planet
      size={1.6}
      textureMap="/textures/moon.jpg"
      glowColor={[0.8, 0.8, 0.8]} // White Glow
      rotationSpeed={0.001}
    />
  )
}