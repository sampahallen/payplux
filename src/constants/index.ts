import mobile from "../assets/mobile-apps.svg";
import mainMobile from "../assets/mobile-apps.jpg";
import buyPay from "../assets/buy-pay.svg";
import mainBuyPay from "../assets/buy-pay.jpg";
import prepaid from "../assets/prepaid-wallet.svg";
import mainPrepaid from "../assets/prepaid-wallet.jpg";
import bulk from "../assets/bulk-buy.svg";
import mainBulk from "../assets/bulk-buy.jpg";

const navLinks = [
  {
    id: "/",
    name: "Home",
  },
  {
    id: "/about",
    name: "About",
  },
  {
    id: "/buy",
    name: "Buy",
  },
  {
    id: "/sell",
    name: "Sell",
  },
  {
    id: "/support",
    name: "Support",
  },
];

const navReg = [
  {
    id: "/login",
    name: "Login",
  },
  {
    id: "/signup",
    name: "Get Started",
  },
];

const features = [
  {
    image: mobile,
    header: "Mobile Apps",
    text: "Perform your buy and sell transactions on the go with our Android and ios apps!",
    main: mainMobile,
  },
  {
    image: buyPay,
    header: "Buy & Pay",
    text: "Buy your crypto directly just by entering payment details. It's fast and convenient.",
    main: mainBuyPay,
  },
  {
    image: prepaid,
    header: "Prepaid Wallet",
    text: "Load your wallet ahead of time and get to place your buy order at any time, any day!",
    main: mainPrepaid,
  },
  {
    image: bulk,
    header: "Bulk Buy",
    text: "Buy in bulk at rates made just for you. Continue to serve your customers with ease.",
    main: mainBulk,
  },
];

const steps = [
  {
    id: 1,
    step: "Sign up",
  },
  {
    id: 2,
    step: "Login",
  },
  {
    id: 3,
    step: "Place order",
  },
  {
    id: 4,
    step: "Recieve order",
  },
];

const footerLinks = [
  {
    name: "Company",
    links: [
      {
        id: "",
        name: "About",
      },
      {
        id: "",
        name: "Support",
      },
      {
        id: "",
        name: "Buy",
      },
      {
        id: "",
        name: "Sell",
      },
    ],
  },
  {
    name: "Legal",
    links: [
            {
        id: "",
        name: "Privacy Policy"
      },
            {
        id: "",
        name: "Terms and Conditions"
      }
    ],
  },
  {
    name: "Support",
    links: [
            {
        id: "",
        name: "Create an Account"
      },
            {
        id: "",
        name: "Fund your Prepaid Wallet"
      },
            {
        id: "",
        name: "How to Buy Digital Currency"
      },
            {
        id: "",
        name: "How to Sell Digital Currency"
      }
    ],
  },
  {
    name: "Social",
    links: [
            {
        id: "",
        name: "Facebook"
      },
            {
        id: "",
        name: "Twitter"
      },
            {
        id: "",
        name: "Instagram"
      }
    ],
  },
];

export { navLinks, navReg, features, steps, footerLinks };
