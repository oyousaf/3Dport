import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // three-globe deliberately excluded: it's only used by the
          // lazy-loaded About globe, so letting Rollup split it into its
          // own dynamic chunk keeps its D3-geo-helper weight off Hero's
          // above-the-fold critical path instead of bundling it with the
          // three/three-stdlib chunk every 3D section depends on.
          three: ["three", "three-stdlib"],
          "react-three": ["@react-three/fiber", "@react-three/drei"],
          gsap: ["gsap", "@gsap/react"],
        },
      },
    },
  },
});
