import { sellProcesses } from "../../constants";
import sc from "../../assets/sell@3x.png";
import bg from "../../assets/Big-oval.svg";
import Table from "../Table";
const Process = () => {
  return (
    <section className="bg-gray-50 overflow-x-hidden pt-20">
      <div className="flex flex-col gap-10 md:gap-10 md:flex-row ">
        <div className="flex items-center justify-center md:justify-end md:w-[50%]">
          <div className="flex flex-col gap-8 px-5 md:px-0">
            <h1 className="font-latin font-medium text-[30px] lg:text-[35px] lg:tracking-tight">The Process</h1>

            <div className="flex flex-col gap-5 md:max-w-[320px] lg:max-w-[440px] xl:max-w-[700px]">
              <p className="font-latin text-slate-500 text-[18px] lg:text-[19px]">
                Our process is very simple and easy to use.
              </p>
              {sellProcesses.map((process) => (
                <div className="flex flex-row gap-4">
                  <div className="">
                    <p className="flex items-center justify-center font-latin font-medium w-9 h-9 rounded-full bg-blue-500 text-white text-sm shadow-sm">
                      {process.id}
                    </p>
                  </div>
                  <p className="font-latin text-slate-500 max-w-[420px] xl:max-w-[500px] lg:text-[17px]">
                    {process.item}
                  </p>
                </div>
              ))}
              <p className="text-[18px] text-slate-500 font-latin ">Visit our <span className="text-blue-500">how to articles</span> for more detailed steps for each currency</p>
            </div>
          </div>
        </div>
        <div className="relative h-[450px] xs:h-[500px] lg:h-[600px] xl:h-[800px] md:w-[50%] overflow-hidden">
          <div className="flex items-center justify-center">
            <img
              src={sc}
              alt=""
              className="absolute top-20 xs:top-15 md:top-30 xl:top-40 md:left-0 z-10 w-[280px]  xs:w-[400px] md:w-[300px] lg:w-[450px] xl:w-[500px]"
            />
          </div>
          <img
            src={bg}
            alt=""
            className="absolute z-0 top-1/2 -translate-y-1/2 h-[1200px] md:h-[1400px] w-[1100px] md:w-[1300px] lg:w-[1500px] right-[-200px]"
          />
        </div>

       </div>
       <div className="flex px-4 flex-col gap-6 pt-20 items-center bg-white">
          <h1 className="font-latin font-medium text-left text-[28px]">
            Got some crypto to sell?
          </h1>
          <Table />
        </div>
    </section>
  );
};

export default Process;
