import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline, Theme } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '../themes';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

interface Props extends AppProps {
  theme: string;
}


function App({ Component, pageProps, theme = 'dark' }: Props) {

  const [ currentTheme, setCurrentTheme ] = useState( lightTheme );

  
  useEffect(() => {

    const cookieTheme = Cookies.get('theme') || 'light';
    
    const selectedTheme: Theme = cookieTheme === 'light' 
      ? lightTheme 
      : cookieTheme === 'dark' 
        ? darkTheme 
        : customTheme;
  
    setCurrentTheme( selectedTheme );
  
  }, []);
  
  return (
    <ThemeProvider theme={ currentTheme } >
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  
  )
}


export default App;

