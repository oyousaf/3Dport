import { useEffect, useState } from "react";
import { navLinks } from "../constants/index";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavItems = ({ onClick, isMobile = false }) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick();
    }
  };

  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col gap-6" : "flex-row gap-8"
      } items-center`}
    >
      {navLinks.map(({ id, name, href }) => (
        <li key={id}>
          <button
            onClick={() => handleScroll(href.substring(1))}
            className={`text-gray200 hover:text-mint text-lg font-medium tracking-wide transition-colors duration-200 ${
              isMobile ? "mobile-nav-link" : ""
            }`}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-emeraldDark/80 border-b border-gray200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center overflow-x-hidden">
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-mint text-xl sm:text-2xl font-bold tracking-wide cursor-pointer hover:text-white transition"
        >
          Omar 🍉
        </a>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
            alt={isOpen ? "Close menu" : "Open menu"}
            className="w-10 h-10"
          />
        </button>
      </div>

      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-[100svh] z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } bg-emeraldDark/95 backdrop-blur-md flex flex-col items-center justify-center space-y-10 overflow-hidden touch-action-none`}
      >
        <NavItems onClick={() => setIsOpen(false)} isMobile />
        <div className="absolute bottom-8 w-full flex justify-center gap-6 overflow-hidden">
          <a
            href="https://github.com/oyousaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray200 hover:text-mint transition-transform duration-300 ease-in-out transform hover:scale-105 will-change-transform"
          >
            <FaGithub className="w-10 h-10" />
          </a>
          <a
            href="https://linkedin.com/in/oyousaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray200 hover:text-mint transition-transform duration-300 ease-in-out transform hover:scale-105 will-change-transform"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
