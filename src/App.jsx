import { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import { Analytics } from "@vercel/analytics/react";

const Projects = lazy(() => import("./sections/Projects"));
const WorkExperience = lazy(() => import("./sections/Experience.jsx"));

const SectionFallback = () => (
  <div className="h-96" aria-hidden="true" />
);

const App = () => {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="max-w-7xl mx-auto relative outline-none">
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Clients />
        <Suspense fallback={<SectionFallback />}>
          <WorkExperience />
        </Suspense>
        <Contact />
        <Footer />
      </main>
      <ScrollTop />
      <Analytics />
    </>
  );
};

export default App;
