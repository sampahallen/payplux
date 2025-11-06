import shapes from "../../assets/shapes.png";
import gh from "../../assets/gh-flag.svg";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <section className="pt-[65px] bg-white">
      <div className="flex flex-row lg:min-h-screen">
        <div className="flex flex-col w-full md:w-1/2 px-4 md:pl-20 lg:pl-36 pt-17 md:pt-18 lg:pt-50 gap-10 md:gap-7 lg:gap-10 items-start md:max-w-[480px] lg:min-w-[600px]">
          <h1 className="font-sans text-[34px] lg:text-[43px] font-semibold text-blue-950 leading-[50px] tracking-tight md:tracking-[0.003em]">
            Buy and sell digital <br className="hidden md:block" />
            currencies
          </h1>

          <p className="font-sans text-[17.5px] md:text-[18px] lg:text-[20px] font-light text-blue-950 leading-[30px] max-w-[380px]">
            Buy and Sell cryptocurrencies directly <br className="hidden md:block lg:hidden" />
            in GHS
            <img
              src={gh}
              alt="GHS icon"
              className="inline-block align-middle mr-2 md:mx-[7px]"
            />
            with ease
          </p>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `bg-blue-500 text-white text-[15px] font-semibold rounded-lg max-lg:w-full text-center py-3.5 md:py-4 md:px-30  lg:py-6 ${
                isActive ? "border-4 border-sky-200" : "border-0"
              }`
            }
          >
            Get Started
          </NavLink>
        </div>

        <div className="hidden md:flex md:w-1/2 lg:w-full  items-center justify-center">
          <img
            src={shapes}
            alt=""
            className="lg:w-full md:w-[300px] md:h-[440px] lg:h-[500px] object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;