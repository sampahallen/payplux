import Navbar from "../../components/support/Navbar";
import Nav2 from "../../components/support/inner/Nav2";
import { updates } from "../../constants/support";
import { NavLink } from "react-router";
import Footer from "../../components/support/Footer";

const MomoLimit = () => {
  return (
    <div>
      <Navbar />
      <Nav2
        title="Updates"
        link1="/support/updates"
        subtitle="BOG & Networks Increase Mobile Money Limits"
        link2="/support/updates/momo-limit"
      />
      <div className=" flex  items-center justify-center  ">
        <div className="pt-15 pb-20 px-3 lg:px-10 flex flex-col lg:flex-row w-full max-w-[530px] lg:max-w-[1000px] xl:max-w-[1200px] gap-25 lg:gap-10 xl:gap-20">
          <div className="font-latin px-5 flex flex-col gap-10 w-full max-w-[660px]">
            <section className="flex flex-col gap-6">
              <h1 className="text-[30px] font-medium text-[#061F3C] lg:mb-6">
                BOG & Networks Increase Mobile Money Limits
              </h1>

              <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight">
                The Bank of Ghana has increased the mobile wallets limit and the
                daily transaction limits for mobile money users in the country.
                This was announced in a press statement released on 18th March,
                2020 to promote digital payments during the COVID-19 period.
              </p>

              <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight">
                For the same reasons, the bank also waived all charges for
                mobile money transactions of up to GHS 100.
              </p>

              <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight lg:mt-4">
                The daily transaction limits for mobile money are increased as
                follows:
              </p>

              {/* Table */}
              <div className="rounded-lg w-full py-5 shadow-[0px_0px_6px_2px_rgba(0,0,0,0.1)]">
                <h3 className="font-semibold text-[#061F3C] text-[16px] px-7 mb-4 ">
                  Daily Transaction Limits
                </h3>

                <div className="grid grid-cols-3 bg-[#FAFBFC] px-7 py-2 text-slate-400 font-semibold text-[13px]">
                  <p>KYC Account Type</p>
                  <p className="text-center">Current Limit</p>
                  <p className="text-right">New Limit</p>
                </div>

                <div className="divide-y divide-slate-200">
                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Minimum KYC Account</p>
                    <p className="text-center">GHS 300.00</p>
                    <p className="text-right">GHS 1,000.00</p>
                  </div>

                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Standard KYC Account</p>
                    <p className="text-center">GHS 500.00</p>
                    <p className="text-right">GHS 2,000.00</p>
                  </div>

                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Enhanced KYC Account</p>
                    <p className="text-center">GHS 1,000.00</p>
                    <p className="text-right">GHS 5,000.00</p>
                  </div>
                </div>
              </div>

              <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight lg:mt-4">
                The mobile money wallet limits are also increased as follows:
              </p>

              <div className="rounded-lg w-full py-5 shadow-[0px_0px_6px_2px_rgba(0,0,0,0.1)]">
                <h3 className="font-semibold text-[#061F3C] text-[16px] px-7 mb-4">
                  Mobile Money Wallet Limits
                </h3>

                <div className="grid grid-cols-3 bg-[#FAFBFC] px-7 py-2 text-slate-400 font-semibold text-[13px]">
                  <p>KYC Account Type</p>
                  <p className="text-center">Current Limit</p>
                  <p className="text-right">New Limit</p>
                </div>

                <div className="divide-y divide-slate-200">
                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Minimum KYC Account</p>
                    <p className="text-center">GHS 1,000.00</p>
                    <p className="text-right">GHS 2,000.00</p>
                  </div>

                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Standard KYC Account</p>
                    <p className="text-center">GHS 10,000.00</p>
                    <p className="text-right">GHS 15,000.00</p>
                  </div>

                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Enhanced KYC Account</p>
                    <p className="text-center">GHS 20,000.00</p>
                    <p className="text-right">GHS 30,000.00</p>
                  </div>
                </div>
              </div>
              <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight lg:mt-4">
                The revised aggregate monthly transaction limits are as follows;
              </p>

              <div className="rounded-lg w-full py-5 shadow-[0px_0px_6px_2px_rgba(0,0,0,0.1)]">
                <h3 className="font-semibold text-[#061F3C] text-[16px] px-7 mb-4">
                  Monthly Transaction Limits
                </h3>

                <div className="grid grid-cols-3 bg-[#FAFBFC] px-7 py-2 text-slate-400 font-semibold text-[13px]">
                  <p>KYC Account Type</p>
                  <p className="text-center">Current Limit</p>
                  <p className="text-right">New Limit</p>
                </div>

                <div className="divide-y divide-slate-200">
                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Minimum KYC Account</p>
                    <p className="text-center">GHS 3,000.00</p>
                    <p className="text-right">GHS 6,000.00</p>
                  </div>

                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Standard KYC Account</p>
                    <p className="text-center">GHS 20,000.00</p>
                    <p className="text-right">No Limit</p>
                  </div>

                  <div className="grid grid-cols-3 px-7 py-3 text-[#061F3C] text-[14px]">
                    <p>Enhanced KYC Account</p>
                    <p className="text-center">GHS 50,000.00</p>
                    <p className="text-right">No Limit</p>
                  </div>
                </div>
              </div>

                <h2 className="text-[25px] font-medium text-[#061F3C] lg:mt-6">How This Affects PayPlux Services</h2>
                <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight">Following the new directives by the Bank of Ghana, we at PayPlux have also made changes in our customers’ interests as follows;</p>
                <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight">We have now allowed customers to use their mobile money subscriber wallets to buy digital assets like Bitcoin, PerfectMoney, etc up to what their daily transaction limits allow (GHS 10,000 based on KYC level).</p>
                <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight">Customers who previously could not receive more than a certain amount in their mobile money subscriber wallets can now sell more Bitcoin, PerfectMoney, etc and receive up to what their wallets limits allow (unlimited based on KYC level).</p>
                <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight">Additionally, customers who wish to buy Bitcoin, PerfectMoney, etc in bulk (above GHS 10,000) can contact our support team to use the PayPlux bulk service feature to purchase bulk amounts.</p>
                <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight">Our new transaction limits are effective for all our customers regardless of the mobile network used. This means more convenience and efficiency in payments for you when using our mobile money payment method.</p>
                <p className="text-[#061F3C] text-[15px] lg:text-[16px] tracking-tight">Visit 
                    <NavLink to="/" className="text-blue-500 ml-1.5 mr-1.5">payplux.com</NavLink>
                     to transact now or contact our customer support team at 
                     <NavLink to="/support" className="text-blue-500 ml-1.5 mr-1.5">support.payplux.com</NavLink>
                     for more information
                </p>

            </section>
          </div>

          <div className="flex flex-col gap-4 bg-[#F2F3F5] font-latin rounded-lg h-full w-full max-w-[530px] lg:w-[400px] xl:w-[500px] py-5 px-7">
            <h2 className="font-medium text-[#061F3C] text-[20px]">
              Updates Articles
            </h2>
            <div className="flex flex-col gap-4">
              {updates.map((article) => (
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

export default MomoLimit;
