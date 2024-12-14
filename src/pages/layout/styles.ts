import { styled } from "styled-components";

export const Header = styled.header`
    width: 100vw;
    display: flex;
    border-bottom: 1px solid #38384F;
    position: relative;

    button {
        display: none;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 425px) {
        padding: 0 1rem;
        height: 4rem;
        justify-content: space-between;
        align-items: center;    

        button {
            display: flex;
        }
    }
`

export const Nav = styled.nav<{isOpen: boolean}>`
    svg {
        display: none;
    }

    @media only screen and (max-width: 425px) {
        position: absolute;
        display: flex;
        align-items: center;
        transform: translate(-50% -50%);
        top: 101%;
        left: 0;
        height: ${p => p.isOpen ? 'calc(100vh - .5rem)' : "0"} ;
        width: 100vw;
        overflow: hidden;
        transition: height .3s ease;
        background-color: var(--background);

        ul {
            width: 100%;

            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem;

                height: 3.5rem;
                border-bottom: 1px solid #38384F;

                a {
                    display: flex;
                    align-items: center;

                    font-family: "League Spartan", serif;
                    font-weight: 600;
                    text-decoration: none;
                    width: 80%;
                }

                svg {
                    display: block;
                }
            }
        }

    }
`

export const PlanetIcon = styled.div<{fill: string}>`
    width: 1rem;
    height: 1rem;
    background-color: ${p => p.fill};
    border-radius: 100%;
    display: none;

    @media only screen and (max-width: 425px) {
        display: block;
    }
`