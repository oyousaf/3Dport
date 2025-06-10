import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";
import { workExperiences } from "../constants/index.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useRevealChildrenOnScroll } from "../hooks/useRevealChildrenOnScroll";

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const sectionRef = useRevealOnScroll();
  const timelineRef = useRevealChildrenOnScroll();

  return (
    <section id="work" ref={sectionRef} className="c-space my-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-mint text-center mb-12">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 3D Canvas */}
        <div className="bg-emerald-900 border border-gray200/20 rounded-xl shadow-inner h-96 overflow-hidden">
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={<CanvasLoader />}>
              <Developer
                position-y={-3}
                scale={3}
                animationName={animationName}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Experience Timeline */}
        <div ref={timelineRef} className="space-y-6">
          {workExperiences.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() =>
                setAnimationName(item.animation.toLowerCase())
              }
              onMouseLeave={() => setAnimationName("idle")}
              onClick={() => setAnimationName(item.animation.toLowerCase())}
              className="bg-emerald-900 border border-gray200/20 rounded-xl p-5 transition hover:shadow-lg group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.icon}
                  alt={`${item.name} logo`}
                  className="w-10 h-10 rounded-md object-contain"
                />
                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-gray200 text-sm">
                    {item.pos} — <span>{item.duration}</span>
                  </p>
                </div>
              </div>
              <p className="text-gray200 group-hover:text-white transition-all text-sm leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
