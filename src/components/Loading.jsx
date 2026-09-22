import { Html } from "@react-three/drei";

// Deliberately doesn't use drei's useProgress(): that hook subscribes to a
// global store the shared THREE.LoadingManager updates synchronously from
// inside sibling components' render (e.g. useTexture/useGLTF calls), which
// React 19 flags as a cross-component render-phase update. Our asset loads
// are near-instant anyway, so a static indicator avoids the false-positive
// warning entirely rather than chasing it site-wide.
const CanvasLoader = () => (
  <Html
    as="div"
    center
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <span className="canvas-loader"></span>
    <p
      style={{
        fontSize: 14,
        color: "#F1F1F1",
        fontWeight: 800,
        marginTop: 40,
      }}
    >
      Loading...
    </p>
  </Html>
);

export default CanvasLoader;
