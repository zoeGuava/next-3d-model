import clsx from 'clsx';
import styles from './style.module.scss';
import { GsapDemo } from './components';

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
    </>
  );
};

export default Demo;
