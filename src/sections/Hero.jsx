import { lazy, Suspense, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../components/Button.jsx";
import { calculateSizes } from "../constants/index.js";
import { useInViewport } from "../hooks/useInViewport.js";

const HeroScene = lazy(() => import("../components/HeroScene.jsx"));

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const [sectionRef, inView] = useInViewport();

  const sizes = useMemo(
    () => calculateSizes(isSmall, isMobile, isTablet),
    [isSmall, isMobile, isTablet],
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-emeraldDark text-gray200 scroll-mt-20"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene sizes={sizes} isMobile={isMobile} inView={inView} />
        </Suspense>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 pt-40 sm:pt-52 text-center">
        <div className="inline-block bg-emeraldDark/60 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-gray200/10">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-emerald-900/60 border border-lime/30 font-mono text-xs text-lime">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
            </span>
            Open for Freelance Deployment
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-generalsans text-white drop-shadow-lg">
            Hi, I am Omar{" "}
            <span className="waving-hand" aria-hidden="true">
              👋
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-mint mt-2">
            Building maintainable, responsive and scalable apps
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-10">
        <Button
          name="Let's innovate together"
          isBeam
          containerClass="w-full sm:min-w-80 mx-auto"
          onClick={() => {
            const section = document.getElementById("about");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          ariaLabel="Scroll to About Section"
        />
      </div>

      {/* Scroll cue */}
      <button
        type="button"
        onClick={() => {
          const section = document.getElementById("about");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray200/70 hover:text-mint transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint animate-bounce"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
