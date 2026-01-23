import { useState } from "react";
import { NavLink } from "react-router";
import { HiExternalLink } from "react-icons/hi";
import { motion } from "motion/react";
import logo from "../../assets/white-logo.svg";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggleMenu = () => setIsToggle((prev) => !prev);

  return (
    <div className="bg-[#061f3c] py-5 px-4 lg:py-8 flex justify-center w-full">
      <div className="flex items-center justify-between w-full max-w-[530px] lg:max-w-[950px] xl:max-w-[1100px]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Payplux Logo" />
          <div className="border-l border-slate-500 h-10" />
          <NavLink
            to="/support"
            className="text-slate-500 font-latin font-semibold text-[19px]"
          >
            Support
          </NavLink>
        </div>

        <div className="hidden lg:flex cursor-pointer items-center gap-1">
          <HiExternalLink className="text-white text-xl" />
          <NavLink
            to="/"
            className="font-latin  text-center text-white text-[14px]"
          >
            Go to Payplux.com
          </NavLink>
        </div>

        <nav className="lg:hidden">
          <div
            className={`${
              isToggle ? "hidden" : ""
            } flex flex-col gap-1 cursor-pointer items-end`}
            onClick={toggleMenu}
          >
            <span className="border-t-3 border-white w-4.5" />
            <span className="border border-white w-5" />
            <span className="border border-white w-3.5" />
          </div>
          <span
            className={`${
              isToggle ? "" : "hidden"
            } text-2xl font-bold text-white cursor-pointer`}
            role="button"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            ✕
          </span>

          {isToggle && (
            <motion.div
              className="flex flex-row items-center justify-center min-w-full absolute top-[80px] bg-[#061f3c] py-8 px-4  md:px-10 left-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-row gap-1 items-center justify-center">
                <HiExternalLink className="text-white" />
                <a
                  href="#"
                  className=" font-latin cursor-pointer text-center text-white text-[13px]"
                >
                  Go to Payplux.com
                </a>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
