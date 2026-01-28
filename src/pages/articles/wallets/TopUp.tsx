import Navbar from "../../../components/support/Navbar";
import Nav2 from "../../../components/support/inner/Nav2";
import { HiExternalLink } from "react-icons/hi";
import { topUp } from "../../../constants/articles";
import { wallets } from "../../../constants/support";
import { NavLink } from "react-router";
import Footer from "../../../components/support/Footer";

const TopUp = () => {
  return (
    <div>
      <Navbar />
      <Nav2
        title="Wallets"
        subtitle="How to Top Up Prepaid Wallet"
        link1="/support/Wallets"
        link2="/support/top-up"
      />
      <div className=" flex  items-center justify-center  ">
        <div className="pt-15 pb-20 px-3 lg:px-10 flex flex-col lg:flex-row w-full max-w-[530px] lg:max-w-[1000px] xl:max-w-[1200px] gap-25 lg:gap-10 xl:gap-20">
          <div className="font-latin px-5 flex flex-col gap-8 w-full max-w-[530px] xl:w-full">
            <h1 className="text-[#061F3C] font-medium text-[32px]">How to Top Up Prepaid Wallet</h1>
            <div className="flex flex-col">
              <div className="flex flex-col gap-5">
                {topUp.map((step) => (
                  <div className="flex flex-row gap-7">
                    <p className="text-[17px] font-semibold text-[#061F3C]">
                      {step.id}
                    </p>
                    <p className="text-[#061F3C] font-normal text-[15px] tracking-tight">
                      {step.text}

                      {step.link && (
                        <>
                          <a
                            href={step.link.url}
                            className="inline-flex items-center ml-1.5 text-blue-500 hover:underline"
                          >
                            {step.link.label}
                            <HiExternalLink />
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        
          <div className="flex flex-col gap-4 bg-[#F2F3F5] font-latin rounded-lg h-full w-full max-w-[530px] lg:w-[400px] xl:w-[500px] py-5 px-7">
            <h2 className="font-medium text-[#061F3C] text-[20px]">
              Wallet Articles
            </h2>
            <div className="flex flex-col gap-4">
              {wallets.map((article) => (
                <div className="flex flex-col gap-4">
                  <NavLink
                    to={article.link}
                    className="text-[15px] text-slate-500 hover:underline"
                  >
                    {article.text}
                  </NavLink>
                </div>
              ))}
            </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopUp;
