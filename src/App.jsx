import { Navbar } from "./components"
import './App.css'
import { Home } from "./pages"
const App = () => {
  return (
    <div>
      <Navbar />

      <main className="container mx-auto px-3">
        <Home />
      </main>
    </div>
  )
}

export default App