import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = ({ active = true, ...props }) => {
  const targetRef = useRef();
  const tweenRef = useRef(null);
  const { scene } = useGLTF("/models/animations/developer.glb");

  useGSAP(() => {
    tweenRef.current = gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  useEffect(() => {
    if (active) tweenRef.current?.play();
    else tweenRef.current?.pause();
  }, [active]);

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
