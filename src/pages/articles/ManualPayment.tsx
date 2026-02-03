import Navbar from "../../components/support/Navbar";
import Nav from "../../components/support/inner/Nav";
import { manualPayments } from "../../constants/articles";
import { manualPayment } from "../../constants/support";
import { NavLink } from "react-router";
import Footer from "../../components/support/Footer";

const ManualPayment = () => {
  return (
    <div>
      <Navbar />
      <Nav title="Manual Payments" link="/support/manual-payments" />
      <div className=" flex  items-center justify-center  ">
        <div className="pt-15 pb-20 px-3 lg:px-10 flex flex-col lg:flex-row w-full max-w-[530px] lg:max-w-[1000px] xl:max-w-[1200px] gap-25 lg:gap-10 xl:gap-20">
          <div className="font-latin px-5 flex flex-col gap-10 w-full max-w-[530px] lg:max-w-[660px]">
            <div className="flex flex-col">
              <div className="flex flex-col gap-15">
                {manualPayments.map((section) => (
                  <section
                    key={section.title.key}
                    id={section.title.key}
                    className="flex flex-col gap-5"
                  >
                    <h2 className="text-[20px] font-medium text-[#061F3C]">
                      {section.title.label}
                    </h2>

                    {section.steps?.map((step) => (
                      <div key={step.id} className="flex gap-7">
                        <p className="text-[17px] font-semibold text-[#061F3C]">
                          {step.id}
                        </p>

                        <p className="text-[#061F3C] font-normal text-[15px] xl:text-[16px] tracking-tight">
                          {step.text}
                          {step.link && (
                            <a
                              href={step.link.url}
                              className="inline-flex items-center text-blue-500 hover:underline mr-1.5"
                            >
                              {step.link.label}
                            </a>
                          )}
                        </p>
                      </div>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-[#F2F3F5] font-latin rounded-lg h-full w-full max-w-[530px] lg:w-[400px] xl:w-[500px] py-5 px-7">
            <h2 className="font-medium text-[#061F3C] text-[20px]">
              Manual Payments Articles
            </h2>
            <div className="flex flex-col gap-4">
              {manualPayment.map((article) => (
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

export default ManualPayment;
