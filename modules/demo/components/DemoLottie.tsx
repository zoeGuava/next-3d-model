import { useLottie, useLottieInteractivity } from 'lottie-react';
import demo01 from '@/assets/lottie/demo01.json';

const style = {
  height: 300,
  border: 3,
  borderStyle: 'solid',
  borderRadius: 7,
};

const options = {
  animationData: demo01,
};

export const DemoLottie = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0.4, 0.9],
        type: 'seek',
        frames: [0, 38],
      },
    ],
  });

  return Animation;
};

export default DemoLottie;
