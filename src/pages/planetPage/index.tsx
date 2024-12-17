import { Navigate, useParams } from "react-router-dom"
import { planet } from "../../types/planets";
import allPlanets from '../../data/data.json'
import { Container, Content, ButtonsContainer, Card, CardsContainer, ImageContainer } from "./styles";
import assets from "../../assets";
import { Source } from "../../assets/icons";
import { useEffect, useState } from "react";

export default function PlanetPage() {
    const planets: string[] = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
    const {planetName} = useParams<string>()
    const planetaEncontrado: boolean = planets.some(x => x === planetName)
    const planeta: planet | null = planetName ?  allPlanets[planetName as keyof typeof allPlanets] : null

    const [displayMode, setDisplayMode] = useState<string>("overview")
    
    useEffect(() => {
        setDisplayMode('overview')
    }, [planeta])

    function capitalizeFirstLetter(val: string | undefined) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    document.title = `Planets Facts | ${capitalizeFirstLetter(planetName)}`

    return(
        <>
            { planetaEncontrado ? (
                <Container>
                    <Content>
                        <ImageContainer>
                            <img src={assets.planets[planetName as keyof typeof allPlanets]} className={`${planeta?.name.toLowerCase()} ${displayMode == "structure" ? "hidden" : ""}`} alt="" />
                            <img src={assets.planets.internal[planetName as keyof typeof allPlanets]} className={`${planeta?.name.toLowerCase()} ${displayMode != "structure" ? "hidden" : ""}`} alt="" />
                            <img src={assets.geology[planetName as keyof typeof allPlanets]} className={`${planeta?.name.toLowerCase()}-surface surface ${displayMode != "surface" ? "hidden" : ""}`} alt="" />
                        </ImageContainer>

                        <div>
                            <h1>{planeta?.name.toUpperCase()}</h1>
                            <p>{planeta?.overview.content}</p>
                            <span>Source: <a target="_blank" href={planeta?.overview.source}>Wikipedia</a> <Source /></span>

                            <ButtonsContainer color={planeta?.color}>
                                <button onClick={() => setDisplayMode('overview')} className={displayMode == 'overview' ? "buttonActive" : ""}>OVERVIEW</button>
                                <button onClick={() => setDisplayMode('structure')} className={displayMode == 'structure' ? "buttonActive" : ""}>STRUCTURE</button>
                                <button onClick={() => setDisplayMode('surface')} className={displayMode == 'surface' ? "buttonActive" : ""}>SURFACE</button>
                            </ButtonsContainer>

                        </div>

                        <CardsContainer>
                            <Card>
                                <h4>ROTATION TIME:</h4>
                                <h3>{planeta?.rotation}</h3>
                            </Card>
                            <Card>
                                <h4>REVOLUTION TIME:</h4>
                                <h3>{planeta?.revolution}</h3>
                            </Card>
                            <Card>
                                <h4>RADIUS:</h4>
                                <h3>{planeta?.radius}</h3>
                            </Card>
                            <Card>
                                <h4>AVERAGE TEMP.</h4>
                                <h3>{planeta?.radius}</h3>
                            </Card>
                        </CardsContainer>
                    </Content>
                </Container>
            ) : (
                <Navigate to="/earth" />
            )}
        </>
    )
}