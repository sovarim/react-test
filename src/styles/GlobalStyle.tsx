import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
