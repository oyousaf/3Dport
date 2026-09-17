import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Developer from "../components/Developer.jsx";
import { workExperiences } from "../constants/index.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const FallbackLoader = () => (
  <Html center>
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm font-semibold text-white">Loading...</p>
    </div>
  </Html>
);

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="work"
      className="c-space my-24 mt-32 scroll-mt-36"
      aria-labelledby="experience-heading"
      ref={sectionRef}
    >
      <h2
        id="experience-heading"
        className="text-3xl sm:text-4xl font-bold text-mint text-center mb-12"
      >
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 3D Canvas */}
        <div
          className="bg-emerald-900 border border-gray200/10 rounded-xl shadow-inner h-96"
          aria-hidden="true"
        >
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

            <Suspense fallback={<FallbackLoader />}>
              <Developer
                position-y={-3}
                scale={3}
                animationName={animationName}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {workExperiences.map((item, index) => (
            <button
              key={index}
              type="button"
              onMouseEnter={() =>
                setAnimationName(item.animation.toLowerCase())
              }
              onMouseLeave={() => setAnimationName("idle")}
              onFocus={() => setAnimationName(item.animation.toLowerCase())}
              onBlur={() => setAnimationName("idle")}
              onClick={() => setAnimationName(item.animation.toLowerCase())}
              className="w-full text-left bg-emerald-900 border border-gray200/10 rounded-xl p-5 transition hover:shadow-lg group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-md object-contain"
                />
                <div>
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-gray200 text-sm">
                    {item.pos} — <span>{item.duration}</span>
                  </p>
                </div>
              </div>
              <p className="text-gray200 group-hover:text-white transition-all text-sm leading-relaxed">
                {item.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
