import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import { myProjects } from "../constants/index.js";
import CanvasLoader from "../components/Loading.jsx";
import DemoComputer from "../components/DemoComputer.jsx";
import { useRevealChildrenOnScroll } from "../hooks/useRevealChildrenOnScroll";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const projectCardRef = useRevealChildrenOnScroll();
  const textRef = useRef([]);

  // Check screen size once on mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) =>
      direction === "previous"
        ? (prevIndex - 1 + myProjects.length) % myProjects.length
        : (prevIndex + 1) % myProjects.length
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
        }
      );
    }
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section id="projects" className="c-space my-24 mt-32 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-mint text-center mb-12">
        My Projects
      </h2>

      <div
        ref={projectCardRef}
        className="grid lg:grid-cols-2 grid-cols-1 gap-10"
      >
        {/* Text + Info Panel */}
        <div className="flex flex-col gap-6 bg-emerald-900 p-6 sm:p-10 rounded-xl shadow-md border border-gray200/20 text-gray200">
          <div className="relative h-56 w-full rounded-xl overflow-hidden shadow">
            <div
              className="w-full h-full animate-pulseGlow"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${currentProject.logoStyle.backgroundColor}88 0%, transparent 70%)`,
                border: currentProject.logoStyle.border,
                boxShadow: currentProject.logoStyle.boxShadow,
              }}
            />
            <div
              className="absolute bottom-4 left-4 bg-white/10 backdrop-blur px-2 py-1 rounded shadow"
              style={currentProject.logoStyle}
            >
              <img
                src={currentProject.logo}
                alt="logo"
                className="w-8 h-8 object-contain"
              />
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
              className="text-mint hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              <span className="underline">Live Site</span>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between mt-6">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="prev" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img src="/assets/right-arrow.png" alt="next" />
            </button>
          </div>
        </div>

        {/* 3D Canvas Panel */}
        <div className="border border-gray200/20 rounded-lg bg-emerald-900 h-[55vh] md:h-full overflow-hidden shadow-md max-w-full">
          <Canvas>
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
