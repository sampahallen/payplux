import { features } from "../../constants";
import { useState } from "react";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className=" flex items-center justify-center mt-[300px] h-[100%] px-5 overflow-hidden ">
      <div>
        <div className="flex flex-col gap-14 lg:gap-8">
        <h1 className="font-sans  font-semibold text-[30px] text-blue-950 text-center">
          The <span className="text-blue-500">best</span> experience always. You
          mean the most to us!
        </h1>
        <p className="font-sans text-[19px] text-slate-500 text-center">
          PayPlux has all these features for your comfort
        </p>

        {features.map((feauture) => (
          <div className="flex flex-col lg:hidden items-center justify-center gap-6">
            <img
              src={feauture.image}
              alt=""
              className="p-3 rounded-full shadow-[0px_2px_6px_2px_rgba(100,_100,_111,_0.2)]"
            />
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="font-sans text-[18px] font-medium">
                {feauture.header}
              </h1>
              <p className="font-sans text-[17px] max-w-[380px] text-slate-500 text-center">
                {feauture.text}
              </p>
            </div>
            <img
              src={feauture.main}
              alt=""
              className="md:px-[clamp(1rem,5vw,2rem)]"
            />
          </div>
        ))}

        <div className="relative lg:flex items-center justify-start flex-row hidden py-50 gap-10 lg:min-w-[900px] xl:min-w-[1150px] ">
          <div className="flex flex-col gap-7">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className= {`flex flex-row gap-8 items-center justify-center cursor-pointer ${activeIndex === index ? 'bg-blue-500 py-4 pl-4 pr-8 rounded-sm' : ''}`}
              >
                <img
                  src={feature.image}
                  alt=""
                  className="p-3 bg-white rounded-full shadow-[0px_2px_6px_2px_rgba(100,_100,_111,_0.2)]"
                />
                <div className="flex flex-col">
                  <h1 className={`font-sans text-[16px] font-medium ${activeIndex === index ? 'text-white' : ''}`}>
                    {feature.header}
                  </h1>
                  <p className={`max-w-[300px] font-sans text-[16px]  ${activeIndex === index ? 'text-gray-200' : 'text-slate-500'}`}>
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <img src={features[activeIndex].main} alt="" className="absolute w-[1100px] h-[900px]" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
