import { Leva } from "leva";
import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import CanvasLoader from "../components/Loading.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import { HackerRoom } from "../components/HackerRoom.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = useMemo(
    () => calculateSizes(isSmall, isMobile, isTablet),
    [isSmall, isMobile, isTablet]
  );

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-emeraldDark text-gray200 scroll-mt-20"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Leva hidden />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <Rings position={sizes.ringPosition} />
            <Cube position={sizes.cubePosition} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 px-6 pt-40 sm:pt-52 text-center">
        <div className="inline-block bg-emeraldDark/60 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg">
          <h1 className="text-4xl sm:text-6xl font-bold font-generalsans text-white drop-shadow-lg">
            Hi, I am Omar <span className="waving-hand">👋</span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-mint mt-2">
            Building maintainable, responsive and scalable apps
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <button
          onClick={() => {
            const section = document.getElementById("about");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Scroll to About Section"
          className="w-full sm:min-w-80 mx-auto"
        >
          <Button name="Let's innovate together" isBeam />
        </button>
      </div>
    </section>
  );
};

export default Hero;
