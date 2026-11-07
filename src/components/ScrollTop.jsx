import { useSyncExternalStore } from "react";

const subscribe = (listener) => {
  window.addEventListener("scroll", listener, { passive: true });
  return () => window.removeEventListener("scroll", listener);
};

const isScrolled = () => window.scrollY > 600;

const scrollToTop = () => {
  // The button is about to disappear, so keyboard focus moves to the top of the content.
  document.getElementById("main")?.focus({ preventScroll: true });
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
};

const ScrollTop = () => {
  const show = useSyncExternalStore(subscribe, isScrolled);

  return (
    <button
      type="button"
      data-scroll-top
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={show ? 0 : -1}
      className={`group fixed bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-emeraldDark shadow-lg ring-2 ring-emeraldDark duration-300 ease-out [transition-property:opacity,transform,visibility,background-color] hover:bg-white focus-visible:outline-none focus-visible:ring-white motion-reduce:transition-none print:hidden sm:bottom-5 sm:right-5 ${
        show ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      >
        <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
      </svg>
    </button>
  );
};

export default ScrollTop;
