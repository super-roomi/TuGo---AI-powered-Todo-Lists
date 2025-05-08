import AiProcess from "./components/AiProcess"
import AudioCollector from "./components/AudioCollector"
import Navigation from "./components/Navigation"
import { BrowserRouter, Routes, Route } from "react-router"
import { Avatar } from "@mui/material"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"
import Login from "./pages/Login"
import AuthWrapper from "./components/AuthWrapper"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Register */}
          <Route
            path="/register"
            element={<Register />}
          />

          {/* Login */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Dashboard */}

          <Route path="/dashboard" element={
            <AuthWrapper>
              <Dashboard />
            </AuthWrapper>
          } />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
