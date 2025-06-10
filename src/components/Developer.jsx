import { useEffect, useMemo, useRef, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

const animationPaths = {
  idle: "/models/animations/idle.fbx",
  salute: "/models/animations/salute.fbx",
  clapping: "/models/animations/clapping.fbx",
  victory: "/models/animations/victory.fbx",
};

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();
  const { scene: rawScene } = useGLTF("/models/animations/developer.glb");

  const clonedScene = useMemo(() => SkeletonUtils.clone(rawScene), [rawScene]);
  const { animations: idleAnim } = useFBX(animationPaths.idle);
  const { animations: saluteAnim } = useFBX(animationPaths.salute);
  const { animations: clappingAnim } = useFBX(animationPaths.clapping);
  const { animations: victoryAnim } = useFBX(animationPaths.victory);

  const allAnimations = useMemo(() => {
    const animations = [
      { name: "idle", clip: idleAnim[0] },
      { name: "salute", clip: saluteAnim[0] },
      { name: "clapping", clip: clappingAnim[0] },
      { name: "victory", clip: victoryAnim[0] },
    ];
    animations.forEach(({ name, clip }) => {
      if (clip) clip.name = name;
    });
    return animations.map((a) => a.clip).filter(Boolean);
  }, [idleAnim, saluteAnim, clappingAnim, victoryAnim]);

  const { actions } = useAnimations(allAnimations, group);

  useEffect(() => {
    if (!actions || !actions[animationName]) return;
    actions[animationName].reset().fadeIn(0.5).play();
    return () => actions[animationName]?.fadeOut(0.5);
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");
export default Developer;
