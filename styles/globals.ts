import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Regular.eot');
    src: url('../fonts/Roboto-Regular.eot?#iefix') format('embedded-opentype'), 
        url('../fonts/Roboto-Regular.woff') format('woff'),
        url('../fonts/Roboto-Regular.ttf')  format('truetype'),
        url('../fonts/Roboto-Regular.svg#svgFontName') format('svg'); 
  }

  :root{
    --primary-color-300: ${({theme}) => theme.primaryColor300};
    --primary-color-500: ${({theme}) => theme.primaryColor500};
    --primary-color-700: ${({theme}) => theme.primaryColor700};
    --primary-text-300:${({theme}) => theme.primaryText300};
}

  html,
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: Roboto;
    font-size:16px;
    transition:0.5s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }`

  export{GlobalStyles}