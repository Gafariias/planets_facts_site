import { Outlet, NavLink } from "react-router-dom";
import { Header, Nav, PlanetIcon } from "./styles";
import { Chevron, Hamburger } from "../../assets/icons";
import { useState } from "react";

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpenMenu = () => {
        setIsOpen(isOpen ? false : true)
    }

    return( 
        <>
            <Header>
                <h2>THE PLANETS</h2>

                <button onClick={toggleOpenMenu}><Hamburger fill={isOpen ? "#38384F" : "#FFF"}/></button>

                <Nav isOpen={isOpen}>
                    <ul>
                        <li>
                            <PlanetIcon fill="#DEF4FC"/>
                            <NavLink onClick={toggleOpenMenu} to="mercury">MERCURY</NavLink>
                            <Chevron fill=""/>
                        </li>
                        <li>
                            <PlanetIcon fill="#F7CC7F"/>
                            <NavLink onClick={toggleOpenMenu} to="venus">VENUS</NavLink>
                            <Chevron fill=""/>
                        </li>
                        <li>
                            <PlanetIcon fill="#545BFE"/>
                            <NavLink onClick={toggleOpenMenu} to="earth">EARTH</NavLink>
                            <Chevron fill=""/>
                        </li>
                        <li>
                            <PlanetIcon fill="#FF6A45"/>
                            <NavLink onClick={toggleOpenMenu} to="mars">MARS</NavLink>
                            <Chevron fill=""/>
                        </li>
                        <li>
                            <PlanetIcon fill="#ECAD7A"/>
                            <NavLink onClick={toggleOpenMenu} to="jupiter">JUPITER</NavLink>
                            <Chevron fill=""/>
                        </li>
                        <li>
                            <PlanetIcon fill="#FCCB6B"/>
                            <NavLink onClick={toggleOpenMenu} to="saturn">SATURN</NavLink>
                            <Chevron fill=""/>
                        </li>
                        <li>
                            <PlanetIcon fill="#65F0D5"/>
                            <NavLink onClick={toggleOpenMenu} to="uranus">URANUS</NavLink>
                            <Chevron fill=""/>
                        </li>
                        <li>
                            <PlanetIcon fill="#497EFA"/>
                            <NavLink onClick={toggleOpenMenu} to="neptune">NEPTUNE</NavLink>
                            <Chevron fill=""/>
                        </li>
                    </ul>
                </Nav>
            </Header>

            <Outlet />
        </>
    )
}