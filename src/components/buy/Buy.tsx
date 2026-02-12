import { IoIosHelp } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { currencies } from "../../constants";
import coins from "../../assets/group-16.svg";

const Buy = () => {
  return (
    <section className="pb-10 bg-gray-50">
      <div className="bg-[#061f3c] flex flex-col gap-4 items-center justify-center py-10">
        <div className="border-2 border-white rounded-full p-0.5">
          <IoIosHelp className="text-white text-[50px] " />
        </div>
        <h1 className="text-white">Buy on Payplux</h1>
        <p className="font-latin text-slate-500 text-center xs:text-[15px] xs:max-w-[580px] xl:text-[16px]">
          To buy on PayPlux means simply exchange your GHS for a digital
          currency of choice, i.e. Bitcoin, Perfect Money, Ethereum, Litecoin.
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-center gap-20 md:gap-10 lg:gap-20">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-10 items-start pt-25 xl:pt-45 px-5 ">
            <h1 className="font-latin tracking-tight font-medium text-[30px]">
              What I can <span className="text-blue-500">Buy</span> on <br />
              Payplux
            </h1>
            <p className="font-latin text-[17px] text-slate-500 max-w-[480px] md:max-w-[320px] lg:max-w-[400px]">
              PayPlux is a digital currency service provider that allows you to
              buy digital currencies including both crypto and non crypto
              assets. We have in stock:
            </p>
            <div className="flex flex-col gap-3">
              {currencies.map((currency) => (
                <div className="flex flex-row gap-5 items-center">
                  <div className="items-center border-2 rounded-full p-1.5 border-blue-100">
                    <IoCheckmarkSharp className="text-blue-500 font-bld" />
                  </div>
                  <p className="text-[18px] text-slate-500">{currency}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center xl:pt-40">
          <img src={coins} alt="coin cluster" />
        </div>
      </div>
    </section>
  );
};

export default Buy;
