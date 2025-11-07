import Navbar from "../components/Navbar"
import Hero from "../components/home/Hero"
import Service from "../components/home/Service"
import Features from "../components/home/Features"
import Info from "../components/home/Info"

const HomePage = () => {
  return (
    <div className="">
        <Navbar />
        <Hero />
        <Service />
        <Features />
        <Info />
    </div>
  )
}

export default HomePage