import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import GlobeWrapper from "./Globe";

const GlobeScene = ({ labels, inView }) => (
  <Canvas
    camera={{ position: [0, 0, 400], fov: 35 }}
    frameloop={inView ? "always" : "never"}
    dpr={[1, 2]}
    performance={{ min: 0.5 }}
  >
    <ambientLight intensity={1.5} />
    <directionalLight position={[0, 0, 400]} intensity={1} />
    <GlobeWrapper labels={labels} />
    <OrbitControls enableZoom={true} />
  </Canvas>
);

export default GlobeScene;
