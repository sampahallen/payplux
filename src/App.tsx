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
import BuyBitcoin from "./pages/articles/gettingStarted/BuyBitcoin";

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

        {/* Articles */}
        <Route path="/support/signup" element={<SignUp />} />
        <Route path="/support/buy-bitcoin" element={<BuyBitcoin />} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
