import { useEffect, useState } from "react";

const DEFAULT_FALLBACK_COLOR = "#aaf0d1";

/**
 * Samples the average colour of a (typically small, e.g. favicon-sized)
 * image so UI accents can match whatever icon is actually being shown,
 * instead of a hand-picked hex value per project.
 *
 * Many favicon hosts don't send CORS headers, which silently blocks
 * canvas-based sampling — `fallbackColor` (ideally precomputed for the
 * known set of images, see scripts/resolve-favicons) is what's shown
 * whenever live sampling isn't possible.
 */
export const useDominantColor = (src, fallbackColor = DEFAULT_FALLBACK_COLOR) => {
  const [color, setColor] = useState(fallbackColor);

  useEffect(() => {
    setColor(fallbackColor);
    if (!src) return;

    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      if (cancelled) return;
      try {
        const canvas = document.createElement("canvas");
        const size = 16;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);

        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;
        for (let i = 0; i < data.length; i += 4) {
          const alpha = data[i + 3];
          if (alpha < 32) continue;
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }

        if (count === 0) return;
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);

        const hex = `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
        if (!cancelled) setColor(hex);
      } catch {
        // Canvas was tainted (no CORS headers) or another sampling error —
        // keep the fallback colour.
      }
    };

    img.onerror = () => {
      if (!cancelled) setColor(fallbackColor);
    };

    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, fallbackColor]);

  return color;
};
