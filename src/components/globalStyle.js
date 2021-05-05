import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        --base-dark-red: #CA0305;
        --base-dark-blue: #042069;
        --black: #1A1A1A;
        --white: #F5F5F5;
    }
    * {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        font-family: 'Lato', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }
    svg { width: 1.4em; height: auto; }
`

export default GlobalStyle
