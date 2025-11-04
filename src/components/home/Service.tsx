import hanger from "../../assets/24-7.png";
import support from "../../assets/support.png";
import ux from "../../assets/ux.png";

const Service = () => {
  return (
    <section className="bg-gray-50 max-h-[650px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold tracking-wide text-[31px] text-slate-800 mt-25 mb-10">
          Always here for you!
        </h1>
        <div className="flex flex-row gap-20 justify-center items-center">
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="bg-white p-4 rounded-full">
              <img src={ux} alt="" className="w-[25px] h-[25px] " />
            </div>

            <div className="flex flex-col">
              <h1 className="font-sans font-semibold  text-[17px] text-slate-800">
                Great user experience
              </h1>
              <p className="font-sans font-light text-[14px] text-slate-500">
                Use PayPlux with ease
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="bg-white p-4 rounded-full">
              <img src={support} alt="" className="w-[25px] h-[25px] " />
            </div>

            <div className="flex flex-col ">
              <h1 className="font-sans font-semibold text-[17px] text-slate-800">
                Heroic Support
              </h1>
              <p className="font-sans font-light text-[14px] text-slate-500">
                Have a problem? Give us a call
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="p-4 rounded-full bg-white ">
              <img src={hanger} alt="" className="w-[25px] h-[25px] " />
            </div>

            <div className="flex flex-col">
              <h1 className="font-sans font-semibold text-[17px] text-slate-800">
                24/7 Automated Service
              </h1>
              <p className="font-sans font-light text-[14px] text-slate-500">
                Transact at any time
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-[1100px] min-h-[450px] px-4 py-5 mt-12 shadow-[0px_0px_6px_2px_rgba(100,_100,_111,_0.2)] rounded-md">
          <div className="flex flex-row justify-between">
            <p className="text-[12px] text-gray-300 font-semibold font-sans mr-40">
              PRODUCT
            </p>
            <div className="flex flex-row gap-10">
              <p className="text-[12px] text-gray-300 font-semibold font-sans">
                PRICE
              </p>
              <p className="text-[12px] text-gray-300 font-semibold font-sans">
                CHANGE
              </p>
            </div>
            <p className="text-[12px] text-gray-300 font-semibold font-sans">
              CHART
            </p>
            <p className="text-[12px] text-gray-300 font-semibold font-sans mr-40">
              ACTIONS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
