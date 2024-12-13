import { Outlet } from "react-router-dom";
import { Header } from "./styles";
import { NavLink } from "react-router-dom";

export default function Layout() {
    return( 
        <>
            <Header>
                <h2>THE PLANETS</h2>

                <nav>
                    <ul>
                        <li><NavLink to="mercury">MERCURY</NavLink></li>
                        <li><NavLink to="venus">VENUS</NavLink></li>
                        <li><NavLink to="earth">EARTH</NavLink></li>
                        <li><NavLink to="mars">MARS</NavLink></li>
                        <li><NavLink to="jupiter">JUPITER</NavLink></li>
                        <li><NavLink to="saturn">SATURN</NavLink></li>
                        <li><NavLink to="uranus">URANUS</NavLink></li>
                        <li><NavLink to="neptune">NEPTUNE</NavLink></li>
                    </ul>
                </nav>
            </Header>

            <Outlet />
        </>
    )
}