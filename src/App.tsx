import HomePage from "./pages/HomePage"
import { Routes, Route } from "react-router"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default App