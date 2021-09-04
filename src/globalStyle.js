import { createGlobalStyle } from 'styled-components';
import EsperaB from './assets/EsperaBold.ttf';
import EsperaR from './assets/EsperaRegular.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'EsperaB';
    src: url(${EsperaB});
    font-display: swap;
};

@font-face {
    font-family: 'EsperaR';
    src: url(${EsperaR});
    font-display: swap;
};

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    background: #333;
    box-sizing: border-box;
    font-family: 'EsperaB';
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;