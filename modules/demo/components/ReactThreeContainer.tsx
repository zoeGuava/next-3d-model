import { PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useEffect, useRef } from 'react';
import { Mesh } from 'three';

const Cube = () => {
  const meshRef = useRef<Mesh>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const speedRef = useRef(0);
  const [scrollRotation, setScrollRotation] = useState(1);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    // meshRef.current.rotation.x += 0.01;
    // meshRef.current.rotation.y += 0.01;
    // meshRef.current.rotation.x += (scrollRotation * 0.01);
    meshRef.current.rotation.x += (speedRef.current * 0.1);
    meshRef.current.rotation.y += 0.01;

    // 更新模型的旋轉狀態
    // const { x, y } = rotationRef.current;
    // meshRef.current.rotation.x += x * clock.getDelta() * speedRef.current;
    // meshRef.current.rotation.y += y * clock.getDelta() * speedRef.current;
  });

  // 監聽滾輪滾動事件，更新模型旋轉狀態
  const handleWheel = (event: WheelEvent) => {
    console.log('handleWheel');
    if (!meshRef.current) return;
    // if (event.deltaY < 10) {
    //   setScrollRotation(1);
    // } else {
    //   setScrollRotation(event.deltaY * 0.05);
    // }
    console.log(event.deltaY);

    // // 更新旋轉速度
    speedRef.current += event.deltaY * 0.01;

    // // 限制旋轉速度的範圍
    speedRef.current = Math.max(speedRef.current, 0);
    speedRef.current = Math.min(speedRef.current, 0.1);

    // // 更新旋轉方向
    // rotationRef.current.x = 0.01 * Math.random() - 0.005;
    // rotationRef.current.y = 0.01 * Math.random() - 0.005;
  };

  useEffect(() => {
    // 透過 useEffect 監聽滾輪滾動事件
    window.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export const ReactThreeContainer = () => {
  console.log('ReactThreeContainer');

  return (
    <Canvas>
      {/* 透過 drei 提供的 comer 可以設定相機的視角、位置 */}
      <PerspectiveCamera
        makeDefault
        fov={75}
        position={[0, 0, 2]}
      />
      {/* group 有自己的位置、視角 */}
      {/* <group>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </group> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
      {/* <mesh ref={meshRef}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh> */}
    </Canvas>
  );
};

export default ReactThreeContainer;
