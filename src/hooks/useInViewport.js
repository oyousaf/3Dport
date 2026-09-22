import { useEffect, useRef, useState } from "react";

// Tracks whether an element is on/near screen, so callers can pause
// off-screen 3D rendering and animations instead of running them forever.
export const useInViewport = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px", threshold: 0, ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- options is read once on mount
  }, []);

  return [ref, inView];
};
