import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Login from "./pages/Login"
import Profile from "./pages/Profile"


function App() {

  return (
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Body />} >
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    </Route>
  </Routes>
  </>
  )
}

export default App
