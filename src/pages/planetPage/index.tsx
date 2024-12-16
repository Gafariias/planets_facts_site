import { Navigate, useParams } from "react-router-dom"
import { planet } from "../../types/planets";
import allPlanets from '../../data/data.json'
import { Container, Content } from "./styles";

export default function PlanetPage() {
    const planets: string[] = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
    const {planetName} = useParams<string>()
    const planetaEncontrado: boolean = planets.some(x => x === planetName)
    const planeta: planet | null = planetName ?  allPlanets[planetName as keyof typeof allPlanets] : null
    
    function capitalizeFirstLetter(val: string | undefined) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    document.title = `Planets Facts | ${capitalizeFirstLetter(planetName)}`

    return(
        <>
            { planetaEncontrado ? (
                <Container>
                    <Content>

                        <div>
                            <h1>{planeta?.name}</h1>
                            <p>{planeta?.overview.content}</p>
                        </div>
                    </Content>
                </Container>
            ) : (
                <Navigate to="/earth" />
            )}
        </>
    )
}