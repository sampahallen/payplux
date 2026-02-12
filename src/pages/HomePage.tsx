import Navbar from "../components/Navbar"
import Hero from "../components/home/Hero"
import Service from "../components/home/Service"
import Features from "../components/home/Features"
import Ref from "../components/home/Ref"
import Info from "../components/Info"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="">
        <Navbar />
        <Hero />
        <Service />
        <Features />
        <Ref />
        <Info />
        <Footer />
    </div>
  )
}

export default HomePage