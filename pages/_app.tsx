import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/modules/core/types';

type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>
    {getLayout(<Component {...pageProps} />)}
  </>;
}
