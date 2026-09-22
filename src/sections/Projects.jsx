import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

import { getFaviconUrl, myProjects } from "../constants/index.js";
import CanvasLoader from "../components/Loading.jsx";
import DemoComputer from "../components/DemoComputer.jsx";
import { useRevealChildrenOnScroll } from "../hooks/useRevealChildrenOnScroll";
import { useDominantColor } from "../hooks/useDominantColor";
import { useInViewport } from "../hooks/useInViewport.js";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const projectCardRef = useRevealChildrenOnScroll();
  const [canvasRef, canvasInView] = useInViewport();
  const textRef = useRef([]);
  const currentProject = myProjects[selectedProjectIndex];
  // New project added but missing favicon/accent in constants/index.js?
  // Run `npm run resolve-favicons` and paste its output into that entry.
  const favicon = currentProject.favicon ?? getFaviconUrl(currentProject.href);
  const accentColor = useDominantColor(favicon, currentProject.accent);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) =>
      direction === "previous"
        ? (prevIndex - 1 + myProjects.length) % myProjects.length
        : (prevIndex + 1) % myProjects.length,
    );
  };

  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        },
      );
    }
  }, [selectedProjectIndex]);

  return (
    <section
      id="projects"
      className="c-space my-24 mt-32 scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-3xl sm:text-4xl font-bold text-mint text-center mb-12"
      >
        My Projects
      </h2>
      <p className="sr-only" role="status" aria-live="polite">
        Now showing: {currentProject.title}
      </p>

      <div
        ref={projectCardRef}
        className="grid lg:grid-cols-2 grid-cols-1 gap-10"
      >
        {/* Text + Info Panel */}
        <div className="flex flex-col gap-6 bg-emerald-900 p-6 sm:p-10 rounded-2xl shadow-md border border-gray200/20 text-gray200">
          <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow">
            <div
              className="w-full h-full animate-pulseGlow"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${accentColor}88 0%, transparent 70%)`,
                border: `0.2px solid ${accentColor}`,
                boxShadow: `0px 0px 60px 0px ${accentColor}4D`,
              }}
            />
            <div
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-2 py-2 rounded-lg shadow flex items-center justify-center"
              style={{
                border: `0.2px solid ${accentColor}`,
                boxShadow: `0px 0px 60px 0px ${accentColor}4D`,
              }}
            >
              {favicon && (
                <img
                  src={favicon}
                  alt={`${currentProject.title} favicon`}
                  className="w-8 h-8 object-contain"
                />
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3
              className="text-2xl font-semibold text-white"
              ref={(el) => (textRef.current[0] = el)}
            >
              {currentProject.title}
            </h3>
            <p ref={(el) => (textRef.current[1] = el)}>{currentProject.desc}</p>
            <p ref={(el) => (textRef.current[2] = el)}>
              {currentProject.subdesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3 flex-wrap max-w-full">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo w-8 h-8">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="text-mint hover:text-coral transition-colors text-sm font-mono flex items-center gap-2 group"
            >
              <span className="underline underline-offset-2">Live Site</span>
              <img
                src="/assets/arrow-up.png"
                alt=""
                aria-hidden="true"
                className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="flex justify-between mt-6">
            <button
              className="arrow-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
              aria-label="Previous project"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="" aria-hidden="true" />
            </button>
            <button
              className="arrow-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
              aria-label="Next project"
              onClick={() => handleNavigation("next")}
            >
              <img src="/assets/right-arrow.png" alt="" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* 3D Canvas Panel */}
        <div
          ref={canvasRef}
          className="border border-gray200/20 rounded-2xl bg-emerald-900 h-[55vh] md:h-full overflow-hidden shadow-md max-w-full"
          aria-hidden="true"
        >
          <Canvas
            frameloop={canvasInView ? "always" : "never"}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={isMobile ? 1.25 : 2}
                  position={[0, isMobile ? -1.8 : -3, 0]}
                >
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
