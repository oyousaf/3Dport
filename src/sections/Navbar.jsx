import { useEffect, useRef, useState } from "react";
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
            className={`text-gray200 hover:text-mint text-lg font-medium tracking-wide transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-emeraldDark ${
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
  const menuId = "mobile-nav-menu";
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const preventTouch = (e) => e.preventDefault();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.addEventListener("touchmove", preventTouch, {
        passive: false,
      });

      const firstFocusable = menuRef.current?.querySelector("button, a[href]");
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.removeEventListener("touchmove", preventTouch);
    }

    return () => {
      document.body.removeEventListener("touchmove", preventTouch);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll("button, a[href]");
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-emeraldDark/80 border-b border-gray200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center overflow-x-hidden">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-mint text-xl sm:text-2xl font-bold tracking-wide cursor-pointer hover:text-white transition rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-emeraldDark"
        >
          Omar 🍉
        </button>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <button
          ref={toggleButtonRef}
          onClick={toggleMenu}
          className="sm:hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint z-50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
        >
          <img
            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
            alt=""
            aria-hidden="true"
            className="w-10 h-10"
          />
        </button>
      </div>

      <div
        id={menuId}
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        {...(!isOpen ? { inert: "" } : {})}
        className={`sm:hidden fixed top-0 left-0 w-full h-svh z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } bg-emeraldDark/95 backdrop-blur-md flex flex-col items-center justify-center space-y-10 overflow-hidden touch-action-none`}
      >
        <NavItems onClick={() => setIsOpen(false)} isMobile />
        <div className="absolute bottom-8 w-full flex justify-center gap-6 overflow-hidden">
          <a
            href="https://github.com/oyousaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray200 hover:text-mint transition-transform duration-300 ease-in-out transform hover:scale-105 will-change-transform rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
          >
            <FaGithub className="w-10 h-10" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/oyousaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray200 hover:text-mint transition-transform duration-300 ease-in-out transform hover:scale-105 will-change-transform rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
          >
            <FaLinkedin className="w-10 h-10" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
