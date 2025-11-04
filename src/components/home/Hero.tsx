import shapes from "../../assets/shapes.png"
import gh from "../../assets/gh-flag.svg"
import { NavLink } from "react-router"

const Hero = () => {
  return (
    <section className="pt-[65px] bg-white">
        <div className="flex flex-row min-h-screen">
            <div className="flex flex-col max-sm:px-5 max-sm:w-full md:w-1/2 items-start pt-25 md:pt-48 md:pl-36 md:gap-10 gap-8">
                <h1 className="font-sans md:text-[43px] max-sm:text-[34px] md:font-medium font-semibold text-blue-950 max-sm:tracking-tight md:tracking-[0.003em] leading-[50px]">Buy and sell digital <br />currencies</h1>
                <div>
                  <p className="font-sans md:text-[20px] text-[17px] text-blue-950 font-light">Buy and Sell cryptocurrencies directly <span className="max-sm:hidden">in</span></p>
                   <div className="flex flex-row gap-2">
                    <p className="font-sans md:text-[20px] text-[17px] text-blue-950 font-normal md:font-light">in</p>
                    <p className="font-sans md:text-[20px] text-[17px] text-blue-950 font-normal md:font-light">GHS </p>
                   <img src={gh} alt="" className="max-sm:w-[33px]" />
                    <p className="font-sans md:text-[20px] text-[17px] text-blue-950 font-normal md:font-light">with ease</p>
                   </div>
                </div>
                <NavLink to="/signup" className={({isActive}) => isActive ? 'bg-blue-500 border-4 border-sky-200 md:py-7 md:px-30 w-full text-center py-3.5 rounded-lg text-white font-semibold' : 'bg-blue-500 border-0 md:py-7 md:px-30 w-full text-center py-3.5 rounded-lg text-white font-semibold'} >Get Started</NavLink>
            </div>

            <div className="max-md:hidden flex items-center justify-center md:w-1/2">
                <img src={shapes} alt="" className="w-full md:h-[520px] object-contain md:mr-30"/>
            </div>
        </div>
    </section>
  )
}

export default Hero