import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import GlobeWrapper from "../components/Globe";
import Button from "../components/Button.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const About = () => {
  const sectionRef = useRevealOnScroll();
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("o_yousaf@live.co.uk");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section
      className="c-space my-24 mt-32 scroll-mt-24"
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
    >
      <h2
        id="about-heading"
        className="text-3xl sm:text-4xl font-bold text-mint text-center mb-12"
      >
        About Me
      </h2>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Intro */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container card-tilt">
            <img
              src="assets/grid1.webp"
              alt="Omar portrait"
              loading="lazy"
              width="276"
              height="276"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <h3 className="grid-headtext">Hi, I’m Omar</h3>
              <p className="grid-subtext">
                With five years of experience, I’ve primarily honed my skills in
                frontend development, while recently expanding into full-stack
                development to better understand backend integration. I focus on
                crafting dynamic, responsive websites with seamless UX.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container card-tilt">
            <img
              src="assets/grid2.webp"
              alt="Tech stack preview"
              loading="lazy"
              width="276"
              height="276"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <h3 className="grid-headtext">Tech Stack</h3>
              <p className="grid-subtext">
                I specialise in a range of languages, frameworks, and tools,
                enabling me to build robust, scalable apps with efficiency and
                precision.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Globe + Button */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container card-tilt">
            <div
              className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
              aria-hidden="true"
            >
              <Canvas camera={{ position: [0, 0, 400], fov: 35 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[0, 0, 400]} intensity={1} />
                <GlobeWrapper
                  labels={[
                    {
                      lat: 53.68,
                      lng: -1.5,
                      text: "I'm here!",
                    },
                  ]}
                />
                <OrbitControls enableZoom={true} />
              </Canvas>
            </div>
            <div>
              <h3 className="grid-headtext">
                Flexible with time zones and open to relocation
              </h3>
              <p className="grid-subtext">
                Currently based in Wakefield, UK — available for remote work
                globally.
              </p>
              <Button
                name="Get in Touch"
                isBeam
                as="a"
                href="mailto:o_yousaf@live.co.uk"
                ariaLabel="Email Omar"
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        {/* Passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container card-tilt">
            <img
              src="assets/grid3.webp"
              alt="Code passion image"
              loading="lazy"
              width="266"
              height="266"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <h3 className="grid-headtext">My Passion for Coding</h3>
              <p className="grid-subtext">
                I thrive on solving problems and building meaningful solutions
                through code. Programming isn&rsquo;t just a profession &mdash;
                it&rsquo;s a true calling. I continuously explore new
                technologies and sharpen my skillset.
              </p>
            </div>
          </div>
        </div>

        {/* Copy to clipboard */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container card-tilt">
            <img
              src="assets/grid4.webp"
              alt="Contact info background"
              loading="lazy"
              width="276"
              height="276"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <button
                type="button"
                className="copy-container w-full rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt=""
                  aria-hidden="true"
                />
                <p className="lg:text-xl md:text-lg font-mono text-white text-center">
                  o_yousaf@live.co.uk
                </p>
              </button>
              <p className="sr-only" role="status" aria-live="polite">
                {hasCopied ? "Email address copied to clipboard" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
