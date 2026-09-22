import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import Cube from "./Cube.jsx";
import Rings from "./Rings.jsx";
import ReactLogo from "./ReactLogo.jsx";
import Target from "./Target.jsx";
import CanvasLoader from "./Loading.jsx";
import HeroCamera from "./HeroCamera.jsx";
import { HackerRoom } from "./HackerRoom.jsx";

const HeroScene = ({ sizes, isMobile, inView }) => (
  <>
    <Leva hidden />
    <Canvas
      className="w-full h-full"
      frameloop={inView ? "always" : "never"}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        <HeroCamera isMobile={isMobile}>
          <HackerRoom
            position={sizes.deskPosition}
            rotation={[0, -Math.PI, 0]}
            scale={sizes.deskScale}
          />
        </HeroCamera>
        <Target position={sizes.targetPosition} active={inView} />
        <ReactLogo position={sizes.reactLogoPosition} />
        <Rings position={sizes.ringPosition} active={inView} />
        <Cube position={sizes.cubePosition} active={inView} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <Environment preset="city" environmentIntensity={0.4} />
        {inView && (
          <EffectComposer>
            <Bloom
              intensity={0.25}
              luminanceThreshold={0.85}
              luminanceSmoothing={0.15}
              mipmapBlur
            />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  </>
);

export default HeroScene;
