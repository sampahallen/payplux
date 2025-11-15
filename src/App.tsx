import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import { Routes, Route } from "react-router"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default App