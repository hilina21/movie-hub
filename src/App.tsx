import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"
import Home from './pages/home';
import MovieDetail from './pages/MovieDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
