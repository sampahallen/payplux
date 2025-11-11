import { features } from "../../constants";
import { useState } from "react";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt-[450px] min-h-full px-5">
      <div className="flex flex-col gap-14">
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

        <div className="relative lg:flex flex-row hidden gap-10 overflow-x-hidden">
          <div className="flex flex-col gap-10 py-40 ">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className= {`flex flex-row gap-8 items-center justify-center ml-30 cursor-pointer ${activeIndex === index ? 'bg-blue-500 py-5 px-4 rounded-sm' : ''}`}
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
          <div>
            <img src={features[activeIndex].main} alt="" className="absolute" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
