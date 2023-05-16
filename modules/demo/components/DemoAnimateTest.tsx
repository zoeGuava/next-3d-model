import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const DemoAnimateTest = () => {
  const { nodes, animations } = useLoader(GLTFLoader, 'glb/animateMove04.glb');

  return (
    <group>
      <primitive object={nodes.root} />
      <skinnedMesh
        geometry={nodes.mesh.geometry}
        material={nodes.mesh.material}
        skeleton={nodes.mesh.skeleton}
        morphTargetDictionary={nodes.mesh.morphTargetDictionary}
        morphTargetInfluences={nodes.mesh.morphTargetInfluences}
        castShadow
        receiveShadow
      />
      <group
        name="Animations"
        >
        {animations.map((clip) => (
          <animation
            key={clip.uuid}
            name={clip.name}
            clip={clip}
          />
        ))}
      </group>
    </group>
  );
};
export default DemoAnimateTest;
