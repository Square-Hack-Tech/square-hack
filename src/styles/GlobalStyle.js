import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.bodyText};
    font-family: 'Arial', sans-serif;
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyle
