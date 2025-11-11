import ref from "../../assets/img-referral.jpg";
import first from "../../assets/img-first-order.jpg"
import { steps } from "../../constants";
import { NavLink } from "react-router";

const Ref = () => {
  return (
    <section className="bg-gray-50 mt-45 lg:mt-20 py-20">
      <div className="flex flex-col md:flex-row lg:flex-row-reverse items-center justify-center px-4 md:px-15 md:gap-5">
        <div className="flex flex-col gap-5 md:gap-9">
          <h1 className="text-[30px] md:text-[28px] text-slate-900 leading-[40px] font-semibold">
            Spread the good news <br />
            and <span className="text-blue-500">make money</span> doing <br />
            so!
          </h1>
          <p className="text-[17px] md:text-[20px] font-normal text-slate-500">
            Our Affiliate and Referral program here at PayPlux is created to
            reward you for being a great friend who shows your friends the great
            things you discover! Who doesn't want to be a good friend and get
            rewarded for it?
          </p>
          <p className="text-white bg-blue-500 text-center py-4.5 rounded-lg font-medium cursor-pointer">
            Coming soon
          </p>
        </div>
        <div>
          <img src={ref} alt="" className="mt-10 md:mt-0" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse lg:flex-row md:items-center px-4 mt-30 text-slate-950 md:px-15 md:gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-[28px] font-medium">
            Perform your first <br />
            transaction on <span className="text-blue-500">PayPlux</span> <br />
            easily
          </h1>
          <div className="mb-5">
            {steps.map((item) => (
              <div className="flex gap-4 text-slate-500 items-center mt-4 md:mt-5">
                <p className="text-[16px] border-2 border-blue-100 rounded-full w-7 h-7 text-center">
                  {item.id}
                </p>
                <p className="text-[17px]">{item.step}</p>
              </div>
            ))}
          </div>
          <NavLink
            to=""
            className={({ isActive }) =>
              `bg-blue-500 text-white text-[15px] font-semibold rounded-lg text-center py-5 w-[300px] md:w-[380px]  ${
                isActive ? "border-4 border-sky-200" : "border-0"
              }`
            }
          >
            Place First Order!
          </NavLink>
        </div>
        <div>
            <img src={first} alt="" className="mt-10 md:mt-0"/>
        </div>
      </div>
    </section>
  );
};

export default Ref;
