import { NavLink } from "react-router";
import hero from "../../assets/hero-browser-shots-buy@3x.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-20 md:gap-0 pt-35 md:pt-20 h-full overflow-hidden md:ml-10">
      <div className="flex flex-col items-start gap-10 w-[375px] max-w-[420px] xs:w-[500px] xs:max-w-[700px] md:w-[50%] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[520px] px-4 xs:px-6 ">
        <h1 className="font-latin text-left text-[35px] lg:text-[42px] xs:tracking-tight font-medium leading-12 xs:leading-10 lg:leading-13">
          Buy Bitcoin and <br className="xs:hidden md:flex xl:hidden" />
          Perfect <br className="hidden xl:flex"/>Money in <br className="xs:hidden md:flex xl:hidden" />
          Ghana easily
        </h1>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `font-latin bg-blue-500 text-white text-[15px] font-medium rounded-lg text-center  py-4 lg:py-6 md:px-28 
             w-full max-[425px] xs:w-full xs:max-w-[600px] md:max-w-[320px] lg:max-w-[300px]
             ${isActive ? "border-4 border-sky-200" : "border-0"}`
          }
        >
          Buy Now!
        </NavLink>
      </div>

      <div className="relative bg-blue-500 py-5 w-full  h-[500px] xs:max-w-[600px] xs:h-[520px] md:w-[50%] lg:h-[700px]  xl:max-w-full overflow-hidden">
        <div className="flex items-center justify-start h-full ">
          <img src={hero} alt="Hero section illustration" className="absolute md:relative min-w-[580px] max-w-[580px] md:min-w-[600px] lg:min-w-[750px]   w-full  left-5 " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
