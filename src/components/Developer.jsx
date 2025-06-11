import { useEffect, useMemo, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

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

  const [idleClip, setIdleClip] = useState(null);
  const [extraClips, setExtraClips] = useState({});

  const allClips = useMemo(() => {
    const clips = [];
    if (idleClip) clips.push(idleClip);
    if (extraClips[animationName]) clips.push(extraClips[animationName]);
    return clips;
  }, [idleClip, extraClips, animationName]);

  const { actions } = useAnimations(allClips, group);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(animationPaths.idle, (anim) => {
      const clip = anim.animations[0];
      clip.name = "idle";
      setIdleClip(clip);
    });
  }, []);

  useEffect(() => {
    if (animationName === "idle" || extraClips[animationName]) return;

    const loader = new FBXLoader();
    loader.load(animationPaths[animationName], (anim) => {
      const clip = anim.animations[0];
      clip.name = animationName;

      setExtraClips((prev) => ({
        ...prev,
        [animationName]: clip,
      }));
    });
  }, [animationName, extraClips]);

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
