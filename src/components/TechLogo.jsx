import { Float, useTexture } from "@react-three/drei";

const TechLogo = ({
  texture,
  position,
  scale = 1.6,
  floatSpeed = 1.4,
  floatIntensity = 1.4,
  rotationIntensity = 0.6,
}) => {
  const map = useTexture(texture);

  return (
    <Float
      speed={floatSpeed}
      floatIntensity={floatIntensity}
      rotationIntensity={rotationIntensity}
    >
      <mesh position={position} scale={scale}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          map={map}
          transparent
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
};

export default TechLogo;
