import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --darkGrey: #1c1c1c;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        
        p {
            font-size: 1rem;
        }
        
    }

`;