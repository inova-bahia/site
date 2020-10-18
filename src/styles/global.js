import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --gray-1: #EEEEEE;
    --gray-2: #808080;
    --gray-3: #555555;
    --muted: #CED4D8;
    --black: #111111;
    --blue: #004477;
    --blue-dark: #002244;
    --red: #DD2222;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Muli', sans-serif;
    color: var(--black);
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
