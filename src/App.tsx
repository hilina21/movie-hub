import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login"
import Signup from "./signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import Home from './pages/home';

function App() {
  return <Home />;
}

export default App;
