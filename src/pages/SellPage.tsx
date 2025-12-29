import Footer from "../components/Footer"
import Contact from "../components/info/Contact"
import Download from "../components/info/Download"
import Try from "../components/info/Try"
import Navbar from "../components/Navbar"
import Hero from "../components/sell/Hero"
import Process from "../components/sell/Process"
import Sell from "../components/sell/Sell"

const SellPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Sell />
        <Process />
        <Contact />
        <Download />
        <Try />
        <Footer />
    </div>
  )
}

export default SellPage