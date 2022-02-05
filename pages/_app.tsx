// import 'semantic-ui-css/semantic.min.css'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'

import React, {useState, useEffect} from "react";
import {useTheme} from 'next-themes'
function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />

  // const {theme, setTheme} = useTheme()
  // const [isDarkMode, setDarkMode] = useState(theme === 'dark');

  // useEffect(() => {
  //   setDarkMode(theme === 'dark')
  // }, [theme])

  // const onDarkModeToggle = () => {
  //   console.log(isDarkMode, theme)
  //   setTheme(theme === 'light' ? 'dark' : 'light')
  // }


  return (
    <ThemeProvider attribute="class">
          {/* <DarkModeSwitch className='p-2 m-2'
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={onDarkModeToggle}
      size={40}
    /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
