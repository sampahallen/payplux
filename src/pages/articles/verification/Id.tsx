import Navbar from "../../../components/support/Navbar";
import Nav2 from "../../../components/support/inner/Nav2";
import { verifyId } from "../../../constants/articles";
import { accounts } from "../../../constants/support";
import { NavLink } from "react-router";
import Footer from "../../../components/support/Footer";

const Id = () => {
  return (
    <div>
      <Navbar />
      <Nav2
        title="Accounts, Verification & Security"
        subtitle="How to Top Up Prepaid Wallet"
        link1="/support/accounts"
        link2="/support/verify-id"
      />
      <div className=" flex  items-center justify-center  ">
        <div className="pt-15 pb-20 px-3 lg:px-10 flex flex-col lg:flex-row w-full max-w-[530px] lg:max-w-[1000px] xl:max-w-[1200px] gap-25 lg:gap-10 xl:gap-20">
          <div className="font-latin px-5 flex flex-col gap-8 max-w-[530px] lg:max-w-[620px]">
            <h1 className="text-[#061F3C] font-medium text-[32px]">
              How to verify your ID
            </h1>
            <div className="flex flex-col">
              <div className="flex flex-col gap-5">
                <p className="text-[#061F3C] xl:text-[16px] font-normal tracking-tight">
                  To have your Buy and Deposit options enabled, you will need to
                  verify your ID. Kindly follow the steps below.
                </p>
                {verifyId.steps.map((step) => (
                  <div className="flex flex-row gap-7">
                    <p className="text-[17px] font-semibold text-[#061F3C]">
                      {step.id}
                    </p>
                    <p className="text-[#061F3C] font-normal text-[15px] xl:text-[16px] tracking-tight">
                      {step.text}

                      {step.substeps && (
                        <div className="flex flex-col gap-5 mt-3">
                          {step.substeps.map((sub) => (
                            <div className="flex flex-row gap-6">
                              <span className="font-semibold">{sub.id}</span>
                              <p>{sub.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </p>
                  </div>
                ))}
                <h2 className="text-[#061F3C] font-medium text-[24px] mt-10 mb-3">
                  Tips
                </h2>
                <ul className="list-disc pl-6 flex flex-col gap-5">
                  {verifyId.tips.map((tip) => (
                    <li className="text-[#061F3C] text-[15px] xl:text-[16px] tracking-tight">
                        {tip.text}
                        {tip.link && (
                            <>
                            <a href={tip.link.url} className="hover:underline text-blue-500">{tip.link.label}</a>
                            </>
                        )}
                    </li>
                  ))}
                </ul>
                <NavLink to={""} className="text-blue-500 hover:underline">
                    Terms and Conditions Apply
                </NavLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-[#F2F3F5] font-latin rounded-lg h-full w-full max-w-[530px] lg:w-[400px] xl:w-[500px] py-5 px-7">
            <h2 className="font-medium text-[#061F3C] text-[20px]">
              Accounts, Verification & Security Articles
            </h2>
            <div className="flex flex-col gap-4">
              {accounts.map((article) => (
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

export default Id;
