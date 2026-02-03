import AboutPage from "./pages/AboutPage";
import BuyPage from "./pages/BuyPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import SellPage from "./pages/SellPage";
import SupportPage from "./pages/SupportPage";
import GettingStarted from "./pages/supports/GettingStarted";
import SignUp from "./pages/articles/gettingStarted/SignUp";
import Wallet from "./pages/supports/Wallet";
import Accounts from "./pages/supports/Accounts";
import DoubleFactor from "./pages/supports/DoubleFactor";
import ManualPayments from "./pages/supports/ManualPayments";
import MobileApp from "./pages/supports/MobileApp";
import Updates from "./pages/supports/Updates";
import BuyBitcoin from "./pages/articles/gettingStarted/BuyBitcoin";
import BuyPfctMny from "./pages/articles/gettingStarted/BuyPfctMny";
import SellBitcoin from "./pages/articles/gettingStarted/SellBitcoin";
import SellPfctMny from "./pages/articles/gettingStarted/SellPfctMny";
import TopUp from "./pages/articles/wallets/TopUp";
import Withdraw from "./pages/articles/wallets/Withdraw";
import Transfer from "./pages/articles/wallets/Transfer";
import Id from "./pages/articles/verification/Id";
import PhoneNumber from "./pages/articles/verification/PhoneNumber";
import MobileMoney from "./pages/articles/verification/MobileMoney";
import ChangePasswords from "./pages/articles/verification/ChangePassword";
import DoubleFA from "./pages/articles/DoubleFA";
import ManualPayment from "./pages/articles/ManualPayment";
import AutomatedPayments from "./pages/articles/AutomatedPayments";
import MobileAppPage from "./pages/articles/MobileAppPage";
import MomoLimit from "./pages/articles/MomoLimits";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="support" element={<SupportPage />} />

        <Route path="/support/getting-started" element={<GettingStarted />} />
        <Route path="/support/wallets" element={<Wallet />} />
        <Route path="/support/accounts" element={<Accounts />} />
        <Route path="/support/2-fa" element={<DoubleFactor />} />
        <Route path="/support/manual-payments" element={<ManualPayments />} />
        <Route path="/support/mobile-app" element={<MobileApp />} />
        <Route path="/support/updates" element={<Updates />} />

        {/* ARTICLES */}

        {/* Getting Started */}
        <Route path="/support/signup" element={<SignUp />} />
        <Route path="/support/buy-bitcoin" element={<BuyBitcoin />} />
        <Route path="/support/buy-perfect-money" element={<BuyPfctMny />} />
        <Route path="/support/sell-bitcoin" element={<SellBitcoin />} />
        <Route path="/support/sell-perfect-money" element={<SellPfctMny />} />

        {/* Wallets */}
        <Route path="/support/top-up" element={<TopUp />} />
        <Route path="/support/withdraw" element={<Withdraw />} />
        <Route path="/support/transfer" element={<Transfer />} />

        {/* Verification */}
        <Route path="/support/verify-id" element={<Id />} />
        <Route path="/support/verify-phone-number" element={<PhoneNumber />} />
        <Route path="/support/verify-momo" element={<MobileMoney />} />
        <Route path="/support/change-password" element={<ChangePasswords />} />

        {/* 2FA */}
        <Route path="/support/2-factor-auth" element={<DoubleFA />} />

        {/*Manual Payments  */}
        <Route path="/support/manual-payments/page" element={<ManualPayment />} />

        {/* Automated Payments */}
        <Route path="/support/automated-payments" element={<AutomatedPayments />} />

        {/* Mobile App */}
        <Route path="/support/mobile-app/page" element={<MobileAppPage />} />

        {/* Momo Limit */}
        <Route path="/support/updates/momo-limit" element={<MomoLimit />} />

        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
