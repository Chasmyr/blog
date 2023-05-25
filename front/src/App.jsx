import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./pageLayout"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import CreatePost from "./pages/createPost"
import PostPage from "./pages/postPage"
import EditPost from "./pages/editPost"
import Error from "./pages/error"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Login />} path="/login"/>
          <Route element={<Register />} path="/register"/>
          <Route element={<CreatePost />} path="/create" />
          <Route element={<PostPage />} path="/post/:id" />
          <Route element={<EditPost />} path="/edit/:id" />
          <Route element={<Error />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
