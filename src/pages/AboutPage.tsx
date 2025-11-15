import Customers from '../components/about/Customers'
import PressAssets from '../components/about/PressAssets'
import SocialMedia from '../components/about/SocialMedia'
import Story from '../components/about/Story'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Navbar from '../components/Navbar'

const AboutPage = () => {
  return (
    <div>
      <Navbar />  
      <Story />
      <Customers />
      <PressAssets />
      <SocialMedia />
      <Info />
      <Footer />
    </div>
  )
}

export default AboutPage