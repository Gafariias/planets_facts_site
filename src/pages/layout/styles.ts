import { styled } from "styled-components";

export const Header = styled.header`
    display: flex;
    padding: 0 1.5rem;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    border-bottom: 1px solid #38384F;

    nav {
        ul {
            list-style: none;
            width: 35rem;
            
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
                a {
                    font-size: .85rem;
                    font-family: "League Spartan", serif;
                    font-weight: 500;
                    text-decoration: none;

                    &:hover {
                        transition: color 100ms ease;
                        color: var(--font_highlight);
                    }
                }
            }
        }
    }
`