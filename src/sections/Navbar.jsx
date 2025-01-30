import { useState } from "react";

import { navLinks } from "../constants/index";

const NavItems = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <button
            onClick={() => handleScroll(href.substring(1))}
            className="nav-li_a"
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

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#b2beb5]/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#556962] cursor-pointer font-bold text-xl hover:text-white transition-colors"
          >
            Omar ♔
          </a>

          <button
            onClick={toggleMenu}
            className="text-[#556962] hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-10 h-10"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5" onClick={toggleMenu}>
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
