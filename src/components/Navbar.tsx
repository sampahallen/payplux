import logo from "../assets/logo.svg";
import { NavLink } from "react-router";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [istoggle, setIstoggle] = useState(false)
  const toggleMenu = () => setIstoggle(!istoggle);
  return (
    <section className="fixed top-0 left-0 w-full z-1000 bg-white">
      <div className="flex flex-row justify-between items-center lg:px-36 md: px-4 py-6 pr-40">
        <div className="flex flex-row justify-center items-center gap-11">
          <img src={logo} alt="" className=" lg:w-[145px] md: w-[135px] " />
          <nav className="md:flex hidden">
            <ul className="flex flex-row gap-9  hover:text-blue-500">
              {navLinks.map((link) => (
                <li key={link.id} className="font-sans cursor-pointer ">
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
        <div className="flex flex-row justify-center items-center gap-7 md:flex hidden">
          <p className="font-sans font-semibold text-blue-500 text-[16px] cursor-pointer">
            Login
          </p>
          <NavLink to="/signup" className={({isActive}) => isActive ? 'bg-blue-500 py-3 border-4 border-sky-200 px-11 rounded-lg text-white text-[16px] cursor-pointer' : 'bg-blue-500 py-3 px-11 border-0 rounded-lg text-white text-[16px] cursor-pointer'}>
            Get Started
          </NavLink>
        </div>
        <div className="lg:hidden ">
            <nav>
              <div className={`flex flex-col gap-1  items-end`} onClick={toggleMenu}>
                <span className="border-t-3 border-black w-4.5"/>
                <span className="border border-black w-5"/>
                <span className="border border-black w-3.5"/>
              </div>
            </nav>
        </div>
      </div>
      <hr className="border-gray-100"/>
    </section>
  );
};

export default Navbar;
