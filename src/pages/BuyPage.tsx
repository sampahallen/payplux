import Buy from '../components/buy/Buy'
import Hero from '../components/buy/Hero'
import Process from '../components/buy/Process'
import Footer from '../components/Footer'
import Contact from '../components/info/Contact'
import Download from '../components/info/Download'
import Try from '../components/info/Try'
import Navbar from '../components/Navbar'

const BuyPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Buy />
        <Process />
        <Contact />
        <Download />
        <Try />
        <Footer />
    </div>
  )
}

export default BuyPage