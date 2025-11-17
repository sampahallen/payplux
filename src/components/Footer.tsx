import { footerLinks } from "../constants";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="px-4 pt-40 pb-25 md:py-20 lg:pt-50 lg:pb-15 flex items-center justify-center ">
      <div className="flex  flex-col lg:flex-row lg:items-start lg:justify-between min-w-[340px] w-[460px] xs:min-w-[460px] md:min-w-[690px] lg:min-w-[900px] xl:min-w-[1200px]">
        <div className="flex flex-col gap-4 ">
          <img src={logo} alt="" className="w-[120px]" />
          <p className="text-[15px] text-gray-500 font-latin">&#169;2019 PayPlux</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10">
          {footerLinks.map((footerLink) => (
            <div>
              <p className="text-[20px] font-medium mb-4 mt-9 lg:mt-0 font-latin">
                {footerLink.name}
              </p>
              <ul className="flex flex-col gap-2">
                {footerLink.links.map((link) => (
                  <div>
                    <li key={link.id}>
                      <NavLink
                        to={link.id}
                        className={`text-[16px] text-gray-500 font-latin hover:underline`}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
