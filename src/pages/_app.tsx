import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ParallaxProvider scrollAxis="vertical">
    <Component {...pageProps} />
  </ParallaxProvider>
);

export default MyApp;
