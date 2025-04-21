import AiProcess from "./components/AiProcess"
import AudioCollector from "./components/AudioCollector"
import Navigation from "./components/Navigation"
import { BrowserRouter, Routes, Route } from "react-router"
import { Avatar } from "@mui/material"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route />

          {/* Register */}
          <Route />

          {/* Login */}
          <Route />

          {/* Dashboard */}
          <Route />

        </Routes>
      </BrowserRouter>

      <AudioCollector />
      <AiProcess />
    </>
  )
}

export default App
