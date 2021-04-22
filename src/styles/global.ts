import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media(max-width:1080px){
  html {
  font-size:93.75% ; //15px
 }
}
@media(max-width:720px){
  html {
  font-size:87.5%; //14px
 }
}
html {
  font-size:62.5%;//10px
}

html,body,#__next {
  height: 100%;
}

body {
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

:root {
  --white: #FFF;

  --gray-50: #F7F8FA;
  --gray-100: #E6E8EB;
  --gray-200: #AFB2B1;
  --gray-500: #808080;
  --gray-800: #494D4B;
  --green-500: #04D361;
  --purple-300: #9F75FF;
  --purple-400: #9164FA;
  --purple-500: #8257E5;
  --purple-800: #6F48C9;
}
body {
  background:var(--gray-50);
}
body input textarea button {
font: 500 1rem --apple-system, 'Inter' ,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: var(---gray-500);
}
h1,h2,h3,h4,h5,h6{
font-weight:600;
font-family:Lexend,sans-serif;
color:var(---gray-800);
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size:1.5rem;
}
button {
  cursor:pointer;
}
`;
export default GlobalStyles;
