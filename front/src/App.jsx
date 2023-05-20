import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./pageLayout"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Login />} path="/login"/>
          <Route element={<Register />} path="/register"/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
