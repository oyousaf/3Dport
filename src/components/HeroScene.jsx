import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import ReactLogo from "./ReactLogo.jsx";
import TechLogo from "./TechLogo.jsx";
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
        <ReactLogo
          position={sizes.reactLogoPosition}
          scale={sizes.reactLogoScale}
        />
        {sizes.techLogos.map((logo) => (
          <TechLogo
            key={logo.texture}
            texture={logo.texture}
            position={logo.position}
            scale={logo.scale}
          />
        ))}
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
