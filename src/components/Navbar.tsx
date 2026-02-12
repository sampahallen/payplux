import logo from "../assets/logo.svg";
import { NavLink } from "react-router";
import { navLinks } from "../constants";
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [istoggle, setIstoggle] = useState(false);
  const toggleMenu = () => setIstoggle(!istoggle);
  return (
    <section className="fixed flex flex-col items-center justify-center top-0 left-0 w-full z-1000 bg-white">
 
        <div className="flex flex-row justify-between items-center w-full max-w-[500px] xs:min-w-[500px]  md:min-w-[900px] lg:min-w-[1100px] xl:min-w-[1450px]  max-sm:px-5 md:px-25 lg:px-[11%] px-4 py-6 ">
          <div className="flex flex-row justify-center items-center gap-[9%]">
            <img src={logo} alt="" className=" lg:w-[145px] md: w-[135px] " />
            <nav className="lg:flex hidden">
              <ul className="flex flex-row gap-[15%]  hover:text-blue-500">
                {navLinks.map((link) => (
                  <li key={link.id} className="font-latin cursor-pointer ">
                    <NavLink
                      to={link.id}
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-500 font-medium border-0 bg-sky-50 py-1.5 px-4 text-[15.5px]"
                          : "text-black  text-[15.5px] font-medium hover:text-blue-500"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="sm:flex  md:items-center md:justify-center md:gap-8">
            <div className="flex flex-row justify-center items-center gap-7 md:flex hidden">
              <NavLink
                to=""
                className="font-latin font-semibold text-blue-500 text-[16px] cursor-pointer"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 md:py-1. lg:py-3 border-4 border-sky-200 md:px-5 lg:px-11 rounded-lg text-white lg:text-[16px] font-semibold md:text-[15px] cursor-pointer"
                    : "bg-blue-500 md:py-1 lg:py-3 md:px-5 lg:px-11 border-0 rounded-lg lg:text-[16px] font-semibold text-white md:text-[15px] cursor-pointer"
                }
              >
                Get Started
              </NavLink>
            </div>
            <nav className="lg:hidden">
              <div
                className={`${
                  istoggle ? "hidden" : ""
                } flex flex-col gap-1 cursor-pointer items-end`}
                onClick={toggleMenu}
              >
                <span className="border-t-3 border-black w-4.5" />
                <span className="border border-black w-5" />
                <span className="border border-black w-3.5" />
              </div>
              <span
                className={`${
                  istoggle ? "" : "hidden"
                } text-2xl font-bold text-gray-800 cursor-pointer`}
                role="button"
                aria-label="Close menu"
                onClick={toggleMenu}
              >
                ✕
              </span>

              {istoggle && (
                <motion.div
                  className="flex flex-row items-end justify-between min-w-full absolute top-[81px] bg-white pt-8 pb-20 px-4  md:px-10 left-0"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="flex flex-col gap-7 items-start  ">
                    {navLinks.map((link) => (
                      <li key={link.id} className="font-latin cursor-pointer ">
                        <NavLink
                          to={link.id}
                          className={({ isActive }) =>
                            isActive
                              ? "text-blue-500 font-medium text-[15.5px]"
                              : "text-black  text-[15.5px] font-medium hover:text-blue-500"
                          }
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col justify-center items-center gap-4 ">
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        isActive
                          ? "font-latin bg-white py-3 md:py-3 lg:py-3 border-4 border-sky-200 px-[33px]  lg:px-11 rounded-lg  text-[15px] lg:text-[16px] font-medium text-blue-500 md:text-[15px] cursor-pointer"
                          : "font-latin bg-white py-3 md:py-3 lg:py-3 px-[32px]  lg:px-11 border-1 border-blue-500 rounded-lg text-15px lg:text-[16px] font-medium text-blue-500 md:text-[15px] cursor-pointer"
                      }
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        isActive
                          ? "font-latin bg-blue-500 py-3 md:py-3 lg:py-3 border-4 border-sky-200 px-[14px] md:px-3 lg:px-11 rounded-lg text-[15px] text-white lg:text-[16px] font-medium text-white md:text-[15px] cursor-pointer"
                          : "font-latin bg-blue-500 py-3 md:py-3 lg:py-3 px-[14px] md:px-3 lg:px-11 border-0 rounded-lg text-white text-[15px] lg:text-[16px] font-medium text-white md:text-[15px] cursor-pointer"
                      }
                    >
                      Get Started
                    </NavLink>
                  </div>
                </motion.div>
              )}
            </nav>
          </div>
        </div>
       

      <hr className="w-full border-gray-100" /> 
    </section>
  );
};

export default Navbar;
