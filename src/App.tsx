import Home from "./components/home/Home"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
