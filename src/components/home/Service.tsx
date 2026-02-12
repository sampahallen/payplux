import hanger from "../../assets/24-7.png";
import support from "../../assets/support.png";
import ux from "../../assets/ux.png";
import Table from "../Table";

const Service = () => {
  return (
    <section className=" bg-gray-50 flex items-center justify-center  lg:w-full mt-15 md:mt-0 overflow-hidden">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-latin font-medium tracking-wide text-[31px] text-slate-800 mt-15 lg:mt-25 mb-10">
            Always here for you!
          </h1>
          <div className="flex flex-col lg:flex-row gap-13 lg:gap-20 justify-center items-start">
            <div className="flex flex-row gap-4 justify-center items-center">
              <div className="bg-white p-4 rounded-full">
                <img src={ux} alt="" className="w-[25px] h-[25px] " />
              </div>

              <div className="flex flex-col">
                <h1 className="font-latin font-medium  text-[17px] text-slate-800">
                  Great user experience
                </h1>
                <p className="font-latin font-light text-[14px] text-slate-500">
                  Use PayPlux with ease
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <div className="bg-white p-4 rounded-full">
                <img src={support} alt="" className="w-[25px] h-[25px] " />
              </div>

              <div className="flex flex-col ">
                <h1 className="font-latin font-medium text-[17px] text-slate-800">
                  Heroic Support
                </h1>
                <p className="font-latin font-light text-[14px] text-slate-500">
                  Have a problem? Give us a call
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <div className="p-4 rounded-full bg-white ">
                <img src={hanger} alt="" className="w-[25px] h-[25px] " />
              </div>

              <div className="flex flex-col">
                <h1 className="font-latin font-medium text-[17px] text-slate-800">
                  24/7 Automated Service
                </h1>
                <p className="font-latin font-light text-[14px] text-slate-500">
                  Transact at any time
                </p>
              </div>
            </div>
          </div>
          <div className="h-full mt-12">
            <Table />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
