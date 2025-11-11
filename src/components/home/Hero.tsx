import shapes from "../../assets/shapes.png";
import gh from "../../assets/gh-flag.svg";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <section className="pt-[65px] lg:pt-0  flex items-center justify-center bg-white  md:mb-20">
      <div>
        <div className="flex flex-row min-w-[300px] md:min-w-[750px] lg:min-[1200px]  justify-between items-center lg:min-h-screen">
          <div className="flex flex-col   px-4  pt-17 md:pt-18  gap-10 md:gap-7 lg:gap-10 items-start md:max-w-[480px] lg:min-w-[600px]">
            <h1 className="font-sans text-[34px] lg:text-[43px] font-semibold text-blue-950 leading-[50px] tracking-tight md:tracking-[0.003em]">
              Buy and sell digital <br className="hidden md:block" />
              currencies
            </h1>

            <p className="font-sans text-[17.5px] md:text-[18px] lg:text-[20px] font-light text-blue-950 leading-[30px] max-w-[400px]">
              Buy and Sell cryptocurrencies directly in{" "}
              <br className="hidden md:block lg:hidden" />
              GHS
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
                `bg-blue-500 text-white text-[15px] font-semibold rounded-lg w-full md:max-w-[340px] text-center py-4 md:px-30  lg:py-6 ${
                  isActive ? "border-4 border-sky-200" : "border-0"
                }`
              }
            >
              Get Started
            </NavLink>
          </div>

          <div className="flex-1 hidden md:pt-15 md:flex md:max-w-[300px] lg:max-w-[400px] xl:max-w-[550px]">
            <img
              src={shapes}
              alt=""
              className=" w-full h-full object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
