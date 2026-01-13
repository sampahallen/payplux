import AboutPage from "./pages/AboutPage"
import BuyPage from "./pages/BuyPage"
import HomePage from "./pages/HomePage"
import { Routes, Route } from "react-router"
import SellPage from "./pages/SellPage"
import SupportPage from "./pages/SupportPage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default App