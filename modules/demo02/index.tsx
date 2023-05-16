import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AnimateMoveGLTF01 } from './components/AnimateMoveGLTF01';

const Demo02 = () => (
  <>
    <h1>Demo02</h1>
    <div className='h-[500px] border border-red-600'>
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ScrollControls pages={1} damping={0.5}>
          <group position={[0, -1, 0]}>
            <AnimateMoveGLTF01 />
          </group>
        </ScrollControls>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  </>
);

export default Demo02;
