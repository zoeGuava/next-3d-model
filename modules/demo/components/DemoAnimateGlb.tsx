import { useRef, useState, Suspense } from 'react';
import { useLoader, useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const DemoGlbItem = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.y += 0.003));

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={scale}
        // scale={hovered ? scale * 1.2 : scale}
        // onPointerOver={(event) => hover(true)}
        // onPointerOut={(event) => hover(false)}
      />
    </>
  );
};

export const DemoGlbContainer = ({ modelPath, scale = 40, position = [0, 0, -3] }) => (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <DemoGlbItem modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
);

export default DemoGlbContainer;
