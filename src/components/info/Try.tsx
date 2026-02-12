import { NavLink } from "react-router";

const Try = () => {
  return (
    <section className="flex items-center justify-center pt-40 md:pt-20 md:pb-20 lg:pb-15 xl:pt-30">
      <div className="flex flex-col  lg:items-end lg:justify-between lg:flex-row gap-15 px-3 md:min-w-[700px] lg:min-w-[980px] xl:min-w-[1200px]">
        <div className="flex flex-col text-slate-900 gap-4">
          <p className="text-[20px] md:text-[21px] font-latin font-normal">Try PayPlux now</p>
          <h1 className="text-[39px] md:text-[42px] leading-11 font-latin font-medium tracking-tight">
            Perform your first <br />
            transaction on <span className="text-blue-500">PayPlux</span> now
          </h1>
        </div>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `bg-blue-500 text-white text-[15px] md:text-[16px]  font-semibold rounded-lg w-full lg:w-1/4 text-center py-5 md:py-6 lg:py-6 ${
              isActive ? "border-4 border-sky-200" : "border-0"
            }`
          }
        >
          Get Started
        </NavLink>
      </div>
    </section>
  );
};

export default Try;
