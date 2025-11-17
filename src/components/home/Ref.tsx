import ref from "../../assets/img-referral.jpg";
import first from "../../assets/img-first-order.jpg";
import { steps } from "../../constants";
import { NavLink } from "react-router";

const Ref = () => {
  return (
    <section className="bg-gray-50 flex flex-col gap-30 lg:gap-40 items-center justify-center mt-45 lg:mt-20 py-20 lg:mb-30 xl:mb-10 overflow-x-hidden">
      <div className="flex flex-col md:flex-row lg:flex-row-reverse md:items-center md:justify-center px-4 md:px-15 md:gap-5 lg:gap-0 xs:min-w-[480px] md:min-w-[800px] lg:min-w-[800px] xl:min-w-[1100px]">
        <div className="flex flex-col md:w-[50%] gap-5 md:gap-9  xl:pl-15">
          <h1 className="text-[30px] md:text-[28px] lg:text-[35px] text-slate-900 leading-[40px] font-latin font-medium lg:font-medium">
            Spread the good news <br />
            and <span className="text-blue-500">make money</span> <br className="flex xs:hidden md:flex lg:hidden"/>doing <br className="hidden xs:flex md:hidden lg:flex"/>
            so!
          </h1>
          <p className="text-[17px] md:text-[20px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[550px] font-latin font-normal text-slate-500">
            Our Affiliate and Referral program here at PayPlux is created to
            reward you for being a great friend who shows your friends the great
            things you discover! Who doesn't want to be a good friend and get
            rewarded for it?
          </p>
          <p className="text-white bg-blue-500 lg:w-[250px] text-center py-4.5 rounded-lg font-medium cursor-pointer">
            Coming soon
          </p>
        </div>
        <div className="md:w-[50%]">
          <div className="md:w-[350px] lg:w-[400px] lg:h-[500px] xl:w-[550px] xl:h-[650px]">
            <img src={ref} alt="" className="mt-10 md:mt-0 w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse lg:flex-row md:items-center lg:justify-center px-4 lg:mt-30 text-slate-950 md:px-15 md:gap-5 lg:gap-0 xl:gap-7   xs:min-w-[360px] md:min-w-[800px] lg:min-w-[1000px] xl:min-w-[1300px]">
        <div className="flex flex-col gap-4 md:w-[50%]">
          <h1 className="text-[30px] lg:text-[34px] font-latin font-medium ">
            Perform your first <br />
            transaction on <span className="text-blue-500">PayPlux</span> <br />
            easily
          </h1>
          <div className="mb-5 lg:mb-0">
            {steps.map((item) => (
              <div className="flex gap-4 text-slate-500 items-center mt-4 md:mt-5">
                <p className="text-[16px] font-latin font-medium border-2 border-blue-100 rounded-full w-7 h-7 text-center">
                  {item.id}
                </p>
                <p className="text-[17px] font-latin">{item.step}</p>
              </div>
            ))}
          </div>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `bg-blue-500 text-white text-[15px] font-semibold rounded-lg text-center py-5 xs:w-[380px] md:w-[360px] lg:w-[250px] ${
                isActive ? "border-4 border-sky-200" : "border-0"
              }`
            }
          >
            Place First Order!
          </NavLink>
        </div>
        <div className="md:w-[50%]">
          <div className="md:w-[300px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[650px]">
            <img src={first} alt="" className="mt-10 md:mt-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ref;
