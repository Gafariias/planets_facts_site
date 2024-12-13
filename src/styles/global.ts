import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root {
        --font: #FFFFFF;
        --background: #070724
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
    }

    body {
        background-color: var(--background);
    }

    h1, h2, h3, h4, p {
        color: #FFFFFF;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        text-shadow: rgba(255, 255, 255, 0.01) 0 0 1px;
    }

    h1, h2 {
        font-family: "Antonio", serif;
        font-weight: medium;
    }

    h1 {
        font-size: 5rem;
        line-height: 6.44rem;
    }

    h2 {
        font-size: 2.5rem;
        letter-spacing: -1.5px;
        line-height: 6.25rem;
    }

    h3, h4 {
        font-family: "League Spartan", serif;
        font-weight: 700;
        line-height: 1.6rem;
    }

    h3 {
        font-size: .75rem;
        letter-spacing: .75px;
    }

    h4 {
        font-size: .69rem;
        letter-spacing: .2px;
    }

    p {
        font-family: "League Spartan", sans-serif;
        font-size: .75rem;
        line-height: 1.6rem;
    }
`