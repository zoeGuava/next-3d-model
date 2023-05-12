import clsx from 'clsx';
import styles from './style.module.scss';
import {
  GsapDemo, DemoLottie, LottieTag, DemoGlbContainer, ReactThreeContainer,
} from './components';

const Demo = () => {
  const testText = 'test text';

  return (
    <>
      <h1>Demo</h1>
      <div className='test'>
        <p>owjfljhqlkjefhkl</p>
        <span className={clsx('text-blue-500', 'p-5')}>red text</span>
        <div className='test2'>blue text</div>
      </div>
      <p>{testText}</p>
      <div className={styles['test-module-class']}>
        <p>test text is here styled by modules css</p>
        <div>border by modules css</div>
      </div>
      <h2 className="text-base text-red-800">tailwind text</h2>
      <GsapDemo />
      <h2>demo lottie</h2>
      <h2>LottieTag</h2>
      <div className={styles['lottie-container']}>
        <div className={styles['lottie-item']}>
          <LottieTag />
        </div>
      </div>
      <div className='w-[400px]'>
        <DemoLottie />
      </div>
      <DemoLottie />
      <div className='h-[550px] bg-green-700' />
      <h2>demo glb</h2>
      <div className='mr-auto h-[800px] w-1/2'>
        <DemoGlbContainer modelPath={'glb/cube.glb'} />
      </div>
      <div className='mr-auto h-[500px] w-1/2'>
        <DemoGlbContainer modelPath={'glb/waterBottle.glb'} />
      </div>
      <hr />
      <h2>React Three is here</h2>
      <div className='h-[500px]'>
        <ReactThreeContainer />
      </div>
    </>
  );
};

export default Demo;
