import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { darkTheme } from '../themes/index';
import { PokemonProvider } from '../context/pokemon';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
      <NextUIProvider theme={ darkTheme }>
        <Component {...pageProps} />
      </NextUIProvider>
    </PokemonProvider>
  );
};
