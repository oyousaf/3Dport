import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import WorkExperience from './sections/Experience.jsx';
import Clients from './sections/Clients.jsx';
import Contact from './sections/Contact.jsx';
import Footer from "./sections/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
};

export default App;
