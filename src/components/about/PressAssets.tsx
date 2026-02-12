import { MdKeyboardArrowRight } from "react-icons/md";

const PressAssets = () => {
  return (
    <section className="flex items-center justify-center py-20 xl:pt-70 xl:pb-50 font-latin">
      <div className="flex flex-col gap-7 px-5 md:text-center md:w-[850px] lg:w-[900px]">
        <h1 className="text-[28px] md:text-[31px] font-medium">
          Press Assets
        </h1>
        <p className="text-[17px] md:text-[18px] lg:text-[20px] xl:text-[20px] leading-7 md:leading-[30px] lg:leading-[35px] text-slate-500">
          We want you to be able to appropriately represent us in that article
          or feature you want to write about us. For our partners and those who
          want us to sponsor any events, you'll find all the media kit in here.
          Contact us on any of our channels if you need something more.
        </p>
        <div className="flex md:items-center md:justify-center text-blue-500 text-[18px] lg:text-[19px] ">
          <div className="flex flex-row items-center w-fit md:justify-center hover:border-b-2 pb-0">
            <a
              href="https://drive.google.com/drive/folders/1SyepG5zj-5aDyUVT5UIIRmRC69uM5552"
              className=""
            >
              Get Press Kit
            </a>
            <div className="">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressAssets;
