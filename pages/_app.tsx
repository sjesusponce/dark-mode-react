import { useState } from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, blueTheme, purpleTheme, greenTheme} from '../styles/themes'
import { GlobalStyles } from '../styles/globals'

import Header from '../components/UI/Header/Header'

const MyApp = ({ Component, pageProps }: AppProps)=>{
  const [theme, setTheme] = useState('lightTheme')
  const [coloring, setColoring] = useState('blueTheme')

  const themeHandler = ()=>{
    if(theme === 'lightTheme'){
      setTheme('darkTheme')
    }else{
      setTheme('lightTheme')
    }
  }

  const coloringHandler = (color)=>{
    switch(color){
      case 'blue': setColoring('blueTheme'); break;
      case 'purple': setColoring('purpleTheme'); break;
      case 'green': setColoring('greenTheme'); break;
      default: setColoring('blueTheme'); break;
    }
  }

  const lightdarkTheme = theme === 'lightTheme' ? lightTheme : darkTheme

  const colorTheme = coloring === 'blueTheme' ? blueTheme : coloring === 'purpleTheme' ? purpleTheme : coloring === 'greenTheme' ? greenTheme : blueTheme

  const themeToApply = theme === 'lightTheme' ?
  { ...lightdarkTheme, ...colorTheme.light} :
  { ...lightdarkTheme, ...colorTheme.dark} 

  return(
    <ThemeProvider theme ={themeToApply}>
      <>
      <GlobalStyles />
      <Header onToggle={themeHandler} toggle={theme} onColor={coloringHandler} />
      <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
