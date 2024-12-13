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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="mercury" element={<MercuryPage />} />
          <Route path="venus" element={<VenusPage />} />
          <Route path="earth" element={<EarthPage />} />
          <Route path="mars" element={<MarsPage/>} />
          <Route path="jupiter" element={<JupiterPage/>} />
          <Route path="saturn" element={<SaturnPage/>} />
          <Route path="uranus" element={<UranusPage/>} />
          <Route path="neptune" element={<NeptunePage/>} />
          <Route path="*" element={<Navigate replace to="/earth"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
