import { useEffect, useRef } from "react";
import Globe from "three-globe";
import { useFrame, useThree } from "@react-three/fiber";

const GlobeWrapper = ({ labels = [] }) => {
  const globeRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const g = new Globe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .showAtmosphere(true)
      .atmosphereColor("#aaf0d1")
      .atmosphereAltitude(0.15)
      .showGraticules(true)
      .labelsData(labels)
      .labelColor(() => "white")
      .labelDotRadius(() => 0.3)
      .labelAltitude(() => 0.01)
      .labelText("text");

    globeRef.current = g;
    scene.add(g);

    return () => {
      scene.remove(g);
    };
  }, [scene, labels]);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return null;
};

export default GlobeWrapper;
