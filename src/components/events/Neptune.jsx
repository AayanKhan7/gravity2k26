import Planet from "./Planet"

export default function Neptune() {
  return (
    <Planet
      size={1.7}
      textureMap="/textures/neptune.jpg"
      glowColor={[0.1, 0.3, 0.9]} // Deep Blue Glow
      rotationSpeed={0.003}
    />
  )
}