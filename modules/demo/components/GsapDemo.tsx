import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const GsapDemo = () => {
  const boxRef = useRef(null);
  const active = {
    rotation: '+=360',
  };

  useEffect(() => {
    gsap.to(boxRef.current, active);
  });

  return (
    <div ref={boxRef} className="h-24 w-24 bg-red-500">
      <span>box ref</span>
    </div>
  );
};

export default GsapDemo;
