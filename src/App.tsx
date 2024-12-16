import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

//Pages
import Layout from "./pages/layout"
import MercuryPage from "./pages/mercuryPage"
import VenusPage from "./pages/venusPage"
import EarthPage from "./pages/earthPage"
import MarsPage from "./pages/marsPage"
import JupiterPage from "./pages/jupiterPage"
import SaturnPage from "./pages/saturnPage"
import UranusPage from "./pages/uranusPage"
import NeptunePage from "./pages/neptunePage"
import PlanetPage from "./pages/planetPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":planetName" element={<PlanetPage />} />
          <Route index element={<Navigate replace to="/earth"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
