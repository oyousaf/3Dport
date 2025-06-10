import { useEffect, useMemo, useRef, useState } from "react";
import { useAnimations, useGLTF, useFBX } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";

const animationFiles = {
  idle: "/models/animations/idle.fbx",
  salute: "/models/animations/salute.fbx",
  clapping: "/models/animations/clapping.fbx",
  victory: "/models/animations/victory.fbx",
};

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();
  const { scene } = useGLTF("/models/animations/developer.glb");

  const [SkeletonUtils, setSkeletonUtils] = useState(null);

  useEffect(() => {
    import("three/examples/jsm/utils/SkeletonUtils.js").then((mod) =>
      setSkeletonUtils(mod.SkeletonUtils)
    );
  }, []);

  const clone = useMemo(() => {
    if (!SkeletonUtils) return null;
    return SkeletonUtils.clone(scene);
  }, [SkeletonUtils, scene]);

  const { nodes, materials } = useMemo(() => {
    if (!clone) return { nodes: {}, materials: {} };
    return useGraph(clone);
  }, [clone]);

  const idle = useFBX(animationFiles.idle);
  const salute = useFBX(animationFiles.salute);
  const clapping = useFBX(animationFiles.clapping);
  const victory = useFBX(animationFiles.victory);

  const animations = useMemo(() => {
    if (!idle || !salute || !clapping || !victory) return [];
    idle.animations[0].name = "idle";
    salute.animations[0].name = "salute";
    clapping.animations[0].name = "clapping";
    victory.animations[0].name = "victory";
    return [
      idle.animations[0],
      salute.animations[0],
      clapping.animations[0],
      victory.animations[0],
    ];
  }, [idle, salute, clapping, victory]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions?.[animationName];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [animationName, actions]);

  if (!nodes?.Hips) return null;

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      {Object.entries(nodes)
        .filter(([name]) => name !== "Hips")
        .map(([name, node]) => (
          <skinnedMesh
            key={name}
            name={name}
            geometry={node.geometry}
            material={materials[node.material?.name]}
            skeleton={node.skeleton}
            morphTargetDictionary={node.morphTargetDictionary}
            morphTargetInfluences={node.morphTargetInfluences}
          />
        ))}
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");
export default Developer;
