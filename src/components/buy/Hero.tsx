import { NavLink } from "react-router";
import hero from "../../assets/hero-browser-shots-buy@3x.png";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 pt-35 h-full overflow-hidden">
      <div className="flex flex-col items-start gap-10 w-[375px] max-w-[420px] xs:w-[500px] xs:max-w-[700px] px-4 xs:px-6">
        <h1 className="font-latin text-left text-[35px] xs:tracking-tight font-medium leading-12 xs:leading-10">
          Buy Bitcoin and <br className="xs:hidden" />
          Perfect Money in <br className="xs:hidden" />
          Ghana easily
        </h1>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `font-latin bg-blue-500 text-white text-[15px] font-medium rounded-lg text-center py-4 lg:py-6 md:px-30 
             w-full max-[425px] xs:w-full xs:max-w-[600px] md:max-w-[340px] 
             ${isActive ? "border-4 border-sky-200" : "border-0"}`
          }
        >
          Buy Now
        </NavLink>
      </div>

      <div className="relative bg-blue-500 pl-20 xs:pl-8 py-5 w-[500px] h-[460px] xs:w-[640px] xs:h-[550px] min-w-[375px] overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <img src={hero} alt="Hero section illustration" className="absolute w-[600px] -right-22 xs:left-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
