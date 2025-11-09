import gplay from "../../assets/google-play-badge.png";
import apple from "../../assets/app-store-badge.svg";
import left from "../../assets/left-mobile@3x.png";
import right from "../../assets/right-mobile@3x.png";

const Download = () => {
  return (
    <section className="flex items-center justify-center md:py-20">
      <div className="relative bg-[#061f3c] flex flex-col min-w-[486px] md:min-w-[680px] lg:min-w-[900px] xl:min-w-[1200px] md:rounded-t-2xl items-center py-15 gap-8 md:gap-10 shadow-[0px_4px_6px_5px_rgba(0,_0,_0,_0.1)] overflow-hidden">
        <img
          src={left}
          alt=""
          className="absolute left-[-105px] lg:left-[-10px]  bottom-0 hidden md:flex md:w-[270px] lg:w-[280px] z-0"
        />
        <img
          src={right}
          alt=""
          className="absolute right-[-120px] lg:right-[-10px] hidden md:flex bottom-0 md:w-[280px] lg:w-[290px] z-0"
        />
        <h1 className="text-white text-[30px] lg:text-[35px] text-center leading-[40px] font-medium">
          Download the <br />
          <span className="text-blue-500">PayPlux</span> mobile app
        </h1>
        <div className="flex flex-row gap-5 z-10">
          <img src={gplay} alt="Google Play badge" className="w-[130px] cursor-pointer" />
          <img src={apple} alt="App Store badge" className="w-[120px] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Download;