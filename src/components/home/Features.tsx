import { features } from "../../constants";

const Features = () => {
  return (
    <section className="mt-[450px] px-5">
      <div className="flex flex-col gap-14">
        <h1 className="font-sans  font-semibold text-[30px] text-blue-950 text-center">
          The <span className="text-blue-500">best</span> experience always. You
          mean the most to us!
        </h1>
        <p className="font-sans text-[19px] text-slate-500 text-center">
          PayPlux has all these features for your comfort
        </p>

        {features.map((feauture) => (
          <div className="flex flex-col items-center justify-center gap-6">
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
            <img src={feauture.main} alt="" className=""/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
