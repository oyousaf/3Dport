import { lazy, Suspense } from "react";

import Button from "../components/Button.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useInViewport } from "../hooks/useInViewport.js";

const GlobeScene = lazy(() => import("../components/GlobeScene.jsx"));

const About = () => {
  const sectionRef = useRevealOnScroll();
  const [globeRef, globeInView] = useInViewport();

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
                With over a decade&rsquo;s experience, I have honed my expertise
                predominantly in frontend development, whilst more recently
                broadening into full-stack disciplines to deepen my
                comprehension of backend integration. I am dedicated to
                crafting dynamic, responsive websites underpinned by
                impeccable user experience.
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
        <div className="col-span-1 xl:row-span-6">
          <div className="grid-container card-tilt">
            <div
              ref={globeRef}
              className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
              aria-hidden="true"
            >
              <Suspense fallback={null}>
                <GlobeScene
                  inView={globeInView}
                  labels={[
                    {
                      lat: 53.68,
                      lng: -1.5,
                      text: "I'm here!",
                    },
                  ]}
                />
              </Suspense>
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
                I am endlessly invigorated by the challenge of unravelling
                intricate problems and architecting meaningful solutions
                through code. Programming transcends mere profession
                &mdash; it is an abiding vocation. I remain perpetually
                curious, exploring emergent technologies and refining my
                craft with unwavering dedication, most recently embracing
                agentic coding workflows through tools such as Claude Code
                and Codex to augment my practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
