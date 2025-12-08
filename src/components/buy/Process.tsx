import { processes } from "../../constants";
import sc from "../../assets/buy@3x.png";
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
              {processes.map((process) => (
                <div className="flex flex-row gap-4">
                  <div className="">
                    <p className="font-latin font-normal border-2 border-blue-100 w-7 height-7 items-center rounded-full text-center text-blue-500">
                      {process.id}
                    </p>
                  </div>
                  <p className="font-latin text-slate-500 max-w-[420px] xl:max-w-[500px] lg:text-[17px]">
                    {process.item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative h-[400px] xs:h-[500px] lg:h-[600px] xl:h-[800px] md:w-[50%] overflow-hidden">
          <div className="flex items-center justify-center">
            <img
              src={sc}
              alt=""
              className="absolute top-15 md:top-30 xl:top-40 md:left-0 z-10 w-[280px]  xs:w-[400px] md:w-[300px] lg:w-[450px] xl:w-[500px]"
            />
          </div>
          <img
            src={bg}
            alt=""
            className="absolute max-w-[550px] h-[1000px] md:max-w-[800px] xl:max-w-[1000px] z-0 -top-60 xs:-top-30 -right-40 md:left-20 "
          />
        </div>

       </div>
       <div className="flex flex-col gap-6 pt-20 items-center bg-white">
          <h1 className="font-latin font-medium text-left text-[28px]">
            Place your buy order right away!
          </h1>
          <Table />
        </div>
    </section>
  );
};

export default Process;
