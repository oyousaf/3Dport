import { useState } from "react";
import { navLinks } from "../constants/index";

const NavItems = ({ onClick }) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick();
    }
  };

  return (
    <ul className="flex flex-col sm:flex-row gap-6 items-center sm:gap-8">
      {navLinks.map(({ id, name, href }) => (
        <li key={id}>
          <button
            onClick={() => handleScroll(href.substring(1))}
            className="text-gray200 hover:text-mint font-medium tracking-wide transition-colors duration-200"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-emeraldDark/80 border-b border-gray200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-mint text-xl sm:text-2xl font-bold tracking-wide cursor-pointer hover:text-white transition"
        >
          Omar 🍉
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
            alt="toggle"
            className="w-7 h-7"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-[min-h-screen] duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="px-6 pb-4 pt-2 bg-emeraldDark/95 border-t border-gray200/10">
          <NavItems onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
