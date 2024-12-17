import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

//Pages
import Layout from "./pages/layout"
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
