import { NavLink } from "react-router";
import Footer from "../components/support/Footer";
import Nav from "../components/support/inner/Nav";
import Navbar from "../components/support/Navbar";
import { gettingStarted } from "../constants/support";
import { FaChevronRight } from "react-icons/fa6";

const GettingStarted = () => {
  return (
    <div className="font-latin">
      <Navbar />
      <Nav title="Get Started" link="/support/getting-started" />
      <div className="flex flex-col items-center justify-center mt-10 ">
        <div className="bg-[#F2F3F5] w-full max-w-[530px] lg:max-w-[950px] xl:max-w-[1100px]">
          <p className="py-10 px-3 text-[#061f3c] tracking-tight font-medium text-2xl">
            Getting Started with bitcoin investment/trading
          </p>
          <div className="flex flex-col">
            {gettingStarted.map((card, idx) => (
              <div className="bg-white">
                <div className="flex flex-row items-center justify-between py-10">
                  <NavLink to={card.link} className="">
                    {card.text}
                  </NavLink>
                  <FaChevronRight className="text-slate-300" />
                </div>
                {idx !== gettingStarted.length - 1 && (
                  <hr className={`border-b- border-slate-300`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GettingStarted;
