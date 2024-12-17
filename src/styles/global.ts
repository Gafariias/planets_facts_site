import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root {
        --font: #FFFFFF;
        --font_highlight: #838391;
        --border: #38384F;
        --background: #070724;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
       
        background-image: url(/background-stars.svg);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2, h3, h4, p, a {
        color: #FFFFFF;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        text-shadow: rgba(255, 255, 255, 0.01) 0 0 1px;
    }

    h1, h2 {
        font-family: "Antonio", serif;
        font-weight: 400;
    }

    h1 {
        font-size: 5rem;
        line-height: 4.5rem;
    }

    h2 {
        font-size: 1.8;
        letter-spacing: -1.5px;
    }

    h3, h4{
        font-family: "League Spartan", serif;
        font-weight: 700;
        line-height: 1.6rem;
        text-decoration: none;
    }

    h3 {
        font-size: .75rem;
        letter-spacing: .75px;
    }

    h4 {
        font-size: .69rem;
        letter-spacing: .2px;
        color: var(--font_highlight);
    }

    p, span {
        font-family: "League Spartan", sans-serif;
        line-height: 1.6rem;
        font-weight: 300;
    }

    @media only screen and (max-width: 425px) {
        h1 {
            font-size: 12.5vw;
        }
        
        p {
            font-size: 3.5vw;
        }
    }

    img {
        margin: 2rem 0;
        @media only screen and (max-width: 425px) {
        
            &.mercury {
                width: 25vw;
            }

            &.venus {
                width: 35vw;
            }
            
            &.earth {
                width: 45vw;
            }

            &.mars {
                width: 30vw;
            }

            &.jupiter {
                width: 55vw;
            }

            &.saturn {
                width: 60vw;
            }

            &.uranus {
                width: 50vw;
            }

            &.neptune {
                width: 50vw;
            }
        }
    }   
`