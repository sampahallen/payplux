import { NavLink } from "react-router";
import Footer from "../../components/support/Footer";
import Nav from "../../components/support/inner/Nav";
import Navbar from "../../components/support/Navbar";
import { gettingStarted } from "../../constants/support";
import { FaChevronRight } from "react-icons/fa6";

const GettingStarted = () => {
  return (
    <div className="font-latin">
      <Navbar />
      <Nav title="Get Started" link="/support/getting-started" />
      <div className="bg-[#FAFBFC] flex flex-col items-center justify-center pt-10 ">
        <div className="bg-[#F2F3F5] rounded-lg h-[700px] lg:h-[680px] w-full max-w-[530px] lg:max-w-[850px]  mb-10">
          <p className="pt-10 pb-5 px-3 lg:px-10 text-[#061f3c] tracking-tight font-medium text-[24.5px]">
            Getting Started with bitcoin investment/trading
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col bg-[#FAFBFC] rounded-lg w-full lg:max-w-[780px] shadow-[0px_12px_6px_2px_rgba(0,0,0,0.1)]">
              {gettingStarted.map((card, idx) => (
                <div className="">
                  <div className="flex flex-row items-center justify-between py-10 px-3">
                    <NavLink to={card.link} className="text-[#061f3c]">
                      {card.text}
                    </NavLink>
                    <FaChevronRight className="text-slate-300" />
                  </div>
                  {idx !== gettingStarted.length - 1 && (
                    <div className={`border-b border-slate-300`}> </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GettingStarted;
