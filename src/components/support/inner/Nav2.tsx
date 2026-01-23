import { NavLink } from "react-router";
import { FaChevronRight } from "react-icons/fa6";

type Props = {
  title?: string;
  subtitle?: string;
};

const Nav = (props: Props) => {
  return (
    <div className="bg-[#F2F3F5] flex justify-center items-center font-latin">
      <div className="w-full flex flex-row items-center text-[14px] gap-3">
        <NavLink to="/support">Home</NavLink>
        <FaChevronRight className="text-slate-400" />
        <NavLink to={""} className="text-slate-400">
          {props.title}
        </NavLink>
        <FaChevronRight className="text-slate-400" />
        <NavLink to="">{props.subtitle}</NavLink>
      </div>
    </div>
  );
};

export default Nav;
