import logo from "../../assets/grey-logo.svg";
import fb from "../../assets/facebook.svg";
import tw from "../../assets/twitter.svg";
import ig from "../../assets/instagram.svg";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between bg-white py-5 lg:py-15 lg:px-10 xl:px-40 font-latin">
      <div className="lg:flex lg:flex-col gap-3">
        <img src={logo} alt="" className="lg:w-25" />
        <p className="hidden lg:flex text-[14px] text-slate-500 lg:text-[13px]">
          ©2019 PayPlux. All Rights Reserved.
        </p>
      </div>
      <div className="lg:flex lg:flex-col items-end gap-3">
        <div className="flex flex-row gap-8">
          <a href="">
            <img src={fb} alt="" className="w-[20px] lg:w-[25px]" />
          </a>
          <a href="">
            <img src={tw} alt="" className="w-[20px] lg:w-[25px]" />
          </a>
          <a href="">
            <img src={ig} alt="" className="w-[20px] lg:w-[25px]" />
          </a>
        </div>
        <div className="flex flex-row gap-20 lg:gap-10">
          <NavLink to="" className="text-[14px] text-slate-500">
            Home
          </NavLink>
          <NavLink to="" className="text-[14px] text-slate-500">
            Privacy Policy
          </NavLink>
        </div>
        <p className=" lg:hidden">©2019 PayPlux. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
