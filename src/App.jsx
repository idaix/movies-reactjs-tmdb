import { Footer, Navbar } from "./components"
import './App.css'
import { Home, MovieDetail } from "./pages"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      <Navbar />

      <main className="container mx-auto px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App