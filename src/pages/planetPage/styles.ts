import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
`

export const Content = styled.main`
    margin: auto;
    display: flex;
    
    span {
        color: var(--font_highlight);
        font-weight: 300;
    }

    @media only screen and (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 85vw;
        padding: 2.5rem 0;

        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;

            p {
                margin: 1rem 0;
            }

            span {
                font-size: 4vw;
            }
        }
    }
`

export const ButtonsContainer = styled.section<{color: string | undefined}>`
    @media only screen and (max-width: 425px) {
        position: absolute;
        transform: translate(-50% -50%);
        top: 0;

        display: flex;
        justify-content: space-around;

        width: 100vw;
        height: 2.5rem;
        border-bottom: 1px solid var(--border);

        button {
            background: none;
            border: none;
            outline: none;
            font-family: "League Spartan", serif;
            color: var(--font_highlight);
            font-size: 3vw;
            letter-spacing: .1rem;

            &.buttonActive {
                color: var(--font);
                border-bottom: 3px solid ${p => p.color};
                transition: all 200ms ease;
            }
        }
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Card = styled.div`
    display: flex;
    justify-content: space-between !important;
    align-items: center;

    margin: .5rem 0;
    padding: .5rem 1.5rem;
    border: 1px solid var(--border);

    width: 100%;
`
export const ImageContainer = styled.section`
    position: relative;


    .hidden {
        display: none;
    }

    .surface {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 5rem;
    }
`