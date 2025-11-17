import gift from "../../assets/img-royal@3x.jpg";
import { IoCheckmarkSharp } from "react-icons/io5";
import { benefits } from "../../constants";

const Customers = () => {
  return (
    <section className="bg-gray-50 flex flex-col font-latin  items-center justify-center px-5 xs:px-10 pt-4 md:pt-1 xl:pt-70 pb-20 md:pb-15 xl:pb-30 mt-6">
      <div className="flex flex-col md:flex-row  md:items-center   xs:min-w-[450px] xs:max-w-[500px] md:min-w-[700px] lg:min-w-[900px] xl:min-w-[1150px]">
        <div className="flex flex-col gap-10 md:w-[50%]">
          <h1 className="text-[27px] md:text-[32px] lg:text-[35px] leading-[35px] md:leading-[40px] lg:leading-[42px] font-medium">
            Loyal <span className="text-blue-500">Customers</span> <br />
            Deserve Great <br />
            Treatment
          </h1>
          <p className="text-[17.5px] md:text-[19px] md:max-w-[300px] lg:max-w-[360px] xl:max-w-[520px] lg:text-[18px] xl:text-[20px]  md:leading-[30px] lg:leading-[40px] text-slate-500">
            Over our decade of operating, we've had customers who have stuck
            with us all these years. Whether you just joined us or you've been
            with us since day one, there's something for you. Our rewards are in
            different categories:
          </p>
          <div className="flex flex-col gap-4 md:gap-3">
            {benefits.map((benefit) => (
              <div className="flex flex-row gap-5 items-center">
                <div className="items-center border-2 rounded-full p-1.5 border-blue-100">
                  <IoCheckmarkSharp className="text-blue-500 font-bld" />
                </div>
                <p className="text-[18px] text-slate-500">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 xl:mt-0 xl:mb-50 xl:pl-8 md:w-[50%]">
          <div className="md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[500px] xl:w-[550px] xl:h-[400px] contain">
            <img src={gift} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
