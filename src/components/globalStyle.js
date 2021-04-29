import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@100;300;400&display=swap');

    :root {
        --base-dark-red: #CA0305;
        --base-dark-blue: #00249F;
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
    }
`

export default GlobalStyle