import { NavLink } from "react-router";
import { FaChevronRight } from "react-icons/fa6";

type Props = {
  title?: string;
  subtitle?: string;
  link1?: string;
  link2?: string;
};

const Nav2 = (props: Props) => {
  return (
    <div className="bg-[#F2F3F5] flex justify-center items-center font-latin">
      <div className="w-full max-w-[380px] lg:max-w-[950px] xl:max-w-[1100px] flex flex-row items-center text-[13px] gap-3 py-3 ">
        <NavLink to="/support" className=''>Home</NavLink>
        <FaChevronRight className="text-slate-400" />
        <NavLink to={props.link1} className="">
          {props.title}
        </NavLink>
        <FaChevronRight className="text-slate-400" />
        <NavLink to={props.link2} className="text-slate-400">{props.subtitle}</NavLink>
      </div>
    </div>
  );
};

export default Nav2;
