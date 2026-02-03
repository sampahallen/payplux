// Getting Started

const signUp = [
  {
    id: 1,
    text: "Visit",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Enter details required to sign up",
  },
  {
    id: 3,
    text: "Check email for verification code/link and verify your email account",
  },
  {
    id: 4,
    text: "Enter phone number, check your phone for verification SMS and enter the code",
  },
  {
    id: 5,
    text: "Once your account is verified, you can start transacting!",
  },
];

const buyBtc = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Click Buy & Sell from the menu",
  },
  {
    id: 3,
    text: "Select Bitcoin from the options",
  },
  {
    id: 4,
    text: "Enter the amount of bitcoin to buy in USD or GHS",
  },
  {
    id: 5,
    text: "Enter bitcoin address and choose preferred “Miner’s fee”",
  },
  {
    id: 6,
    text: "Click on “Buy Bitcoin”",
  },
  {
    id: 7,
    text: "Choose a payment method and follow the instructions to complete payment",
  },
  {
    id: 8,
    text: "Once payment is completed, click “Submit” to complete your buy order",
  },
  {
    id: 9,
    text: "Your order will be confirmed and processed.",
  },
];

const buyPfctMny = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Click Buy & Sell from the menu",
  },
  {
    id: 3,
    text: "Select Perfect Money from the options",
  },
  {
    id: 4,
    text: "Enter the amount of perfect money to buy in USD or GHS",
  },
  {
    id: 5,
    text: "Enter your Perfect Money USD Address",
  },
  {
    id: 6,
    text: "Click on “Buy Perfect Money",
  },
  {
    id: 7,
    text: "Choose a payment method and follow the instructions to complete payment",
  },
  {
    id: 8,
    text: "Once payment is completed, click “Submit” to complete your buy order",
  },
  {
    id: 9,
    text: "Your order will be confirmed and processed.",
  },
];

const sellBtc = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Click on the ‘Buy & Sell’ tab",
  },
  {
    id: 3,
    text: "Click “Buy & Sell” from the menu",
  },
  {
    id: 4,
    text: "Select Bitcoin from the options",
  },
  {
    id: 5,
    text: "Enter the amount of bitcoin to sell in USD or GHS",
  },
  {
    id: 6,
    text: "Click on Sell Bitcoin",
  },
  {
    id: 7,
    text: "Choose preferred payment option and enter necessary details",
  },
  {
    id: 8,
    text: "Click Submit and send bitcoin to provided address",
  },
  {
    id: 9,
    text: "Your order will be confirmed and processed",
  },
];
const sellPfctMny = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Click “Buy & Sell” from the menu",
  },
  {
    id: 3,
    text: "Select Perfect Money from the options",
  },
  {
    id: 4,
    text: "Enter the amount of Perfect Money to sell in USD or GHS",
  },
  {
    id: 5,
    text: "Click on Sell Perfect Money",
  },
  {
    id: 6,
    text: "Choose preferred payment option and enter necessary details",
  },
  {
    id: 7,
    text: "Click Pay Now to send Perfect Money",
  },
  {
    id: 8,
    text: "Your order will be confirmed and processed",
  },
];

// Wallets
const topUp = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Navigate to “Wallets” from the menu",
  },
  {
    id: 3,
    text: "Click Add Funds and enter amount",
  },
  {
    id: 4,
    text: "Choose preferred payment method and provide necessary details",
  },
  {
    id: 5,
    text: "Your deposit will be confirmed and your prepaid wallet credited",
  },
];

const withdraw = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Navigate to “Wallets” from the menu",
  },
  {
    id: 3,
    text: "Click on the Cash-Out Wallet tab",
  },
  {
    id: 4,
    text: "Click Withdraw Funds and enter amount",
  },
  {
    id: 5,
    text: "Enter your mobile money details",
  },
  {
    id: 6,
    text: "Your withdrawal will be confirmed and your mobile money account credited",
  },
];

const transfer = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Navigate to “Wallets” from the menu",
  },
  {
    id: 3,
    text: "Click on the Cash-Out Wallet tab",
  },
  {
    id: 4,
    text: "Click on Transfer to Prepaid Wallet",
  },
  {
    id: 5,
    text: "Enter amount and click Transfer",
  },
  {
    id: 6,
    text: "Enter the SMS code sent to your phone",
  },
  {
    id: 7,
    text: "Click Verify and Proceed to complete the transaction",
  },
  {
    id: 8,
    text: "Your cash-out wallet will be debited and prepaid wallet credited",
  },
];

const verifyId = {
  steps: [
    {
      id: 1,
      text: " Take a clear picture of a valid ID (These are the ONLY accepted IDs - Ghana Card, Passport and Driver's License)",
    },
    {
      id: 2,
      text: " Get a sheet of paper and write the following details on it",
      substeps: [
        {
          id: 1,
          text: "PayPlux",
        },
        {
          id: 2,
          text: " Date (the date on which you are submitting these requirements)",
        },
        {
          id: 3,
          text: "Sign - your official signature",
        },
      ],
    },
    {
      id: 3,
      text: " Hold the sheet of paper together with your ID Card and let someone take a photo of you. Be sure it’s clear as possible. Do not be bare chested. Ensure it’s a well-lit area.",
    },
    {
      id: 4,
      text: " After completing the steps above, kindly contact us on the livechat.",
    },
  ],

  tips: [
    {
      text: "Read the instructions carefully and do accordingly.",
    },
    {
      text: "Half sent requirements won’t be processed.",
    },
    {
      text: "Do take note that verification can take up to 48 hours.",
    },
    {
      text: "Click on this link to see how it is done. ",
      link: {
        label: "http://prnt.sc/tzes4h",
        url: "http://prnt.sc/tzes4h",
      },
    },
  ],
};

const phoneNumber = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Navigate to Settings from the Menu",
  },
  {
    id: 3,
    text: "Navigate to My Profile and click on Verify Phone Number or Resend Verification SMS",
  },
  {
    id: 4,
    text: "Enter or Select the phone number you want to verify",
  },
  {
    id: 5,
    text: "Click Send Code to receive an SMS with the Verification Code",
  },
  {
    id: 6,
    text: "Enter the Verification Code and click Verify Phone Number",
  },
  {
    id: 7,
    text: "Your phone number is verified now",
  },
];

const momo = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Navigate to Settings from the Menu",
  },
  {
    id: 3,
    text: "Navigate to Mobile Money Numbers, and click on Verify Mobile Money Number",
  },
  {
    id: 4,
    text: "Enter or Select the mobile money number to verify",
  },
  {
    id: 5,
    text: "Click Send Code to receive the SMS with the Verification Code",
  },
  {
    id: 6,
    text: "Enter the Verification Code and click Verify Phone Number",
  },
  {
    id: 7,
    text: "Your phone number is verified now",
  },
];

const password = [
  {
    id: 1,
    text: "Login to your account on",
    link: {
      label: "app.payplux.com",
      url: "/",
    },
  },
  {
    id: 2,
    text: "Navigate to Settings from the Menu",
  },
  {
    id: 3,
    text: "Navigate to Security, then Change Password section",
  },
  {
    id: 4,
    text: "Enter your Old and New Passwords and Confirm Passwords",
  },
  {
    id: 5,
    text: "Click Change Password",
  },
  {
    id: 6,
    text: "Your password has been successfully changed",
  },
];

const doubleFA = [
  {
    title: {
      key: "what-is-2fa",
      label: "What is it?",
    },
    intro:
      "2FA, 2-factor authentication or 2-step verification is an extra layer of security to prove that anyone trying to gain access to an online account is who they say they are. It is an additional step beyond entering your username and password for any online account.",
  },

  {
    title: {
      key: "why-enable-2fa",
      label: "Why should I enable it?",
    },
    intro: "Enabling 2FA on your PayPlux account comes with these benefits:",
    steps: [
      {
        id: 1,
        text: "Prevent unauthorised access to your Prepaid and Cash-Out Wallets",
      },
      {
        id: 2,
        text: "Authenticate all transactions with your Prepaid Wallet",
      },
      {
        id: 3,
        text: "Authenticate all withdrawals from your Cash-Out Wallet",
      },
      {
        id: 4,
        text: "Authenticate transfers from your Cash-Out Wallet to your Prepaid Wallet",
      },
    ],
  },

  {
    title: {
      key: "how-to-activate-2fa",
      label: "How to activate it?",
    },
    intro:
      "The 2FA on PayPlux works in two ways: SMS authentication or Google Authenticator. Whichever one you choose will be what you use each time you log in to PayPlux henceforth. To set up your 2FA, visit this link:",
    link: {
      label: "app.payplux.com/dashboard/settings/security",
      url: "https://app.payplux.com/dashboard/settings/security",
    },
  },

  {
    title: {
      key: "activate-2fa-google",
      label: "Activate 2FA via Google Authenticator",
    },
    steps: [
      {
        id: 1,
        text: "Download Google Authenticator from the Play Store or App Store",
      },
      {
        id: 2,
        text: "Log in to your PayPlux account",
      },
      {
        id: 3,
        parts: [
          { type: "text", value: "Open this link: " },
          {
            type: "link",
            label: "app.payplux.com/dashboard/settings/security",
            url: "https://app.payplux.com/dashboard/settings/security",
          },
          {
            type: "text",
            value:
              "to open the Security Tab directly or visit the Settings Page and move to the Security Tab",
          },
        ],
      },
      {
        id: 4,
        text: "Select Google Authenticator from the options provided",
      },
      {
        id: 5,
        text: "Scan the QR code with the Google Authenticator app and input the 6-digit code",
      },
      {
        id: 6,
        text: "Your 2FA preference will be updated to Google Authenticator",
      },
    ],
  },

  {
    title: {
      key: "activate-2fa-sms",
      label: "Activate 2FA via SMS",
    },
    steps: [
      {
        id: 1,
        text: "Log in to your PayPlux account",
      },
      {
        id: 2,
        parts: [
          { type: "text", value: "Open this link: " },
          {
            type: "link",
            label: "app.payplux.com/dashboard/settings/security",
            url: "https://app.payplux.com/dashboard/settings/security",
          },
          {
            type: "text",
            value:
              "to open the Security Tab directly or visit the Settings Page and move to the Security Tab",
          },
        ],
      },
      {
        id: 3,
        text: "Select SMS from the options provided",
      },
      {
        id: 4,
        text: "You will receive a verification code on your default phone number",
      },
      {
        id: 5,
        text: "Enter the code in the pop-up box to activate SMS authentication",
      },
      {
        id: 6,
        text: "Your 2FA preference will be updated to SMS",
      },
    ],
  },
];

const manualPayments = [
  {
    title: {
      key: "",
      label: "MTN Mobile Money",
    },
    steps: [
      {
        id: 1,
        text: "Dial *170# on your MTN mobile money phone",
      },
      {
        id: 2,
        text: "Enter 1 to select Transfer Money and press Send",
      },
      {
        id: 3,
        text: "Enter 1 to select Mobile User and press Send",
      },
      {
        id: 4,
        text: "Enter 2 to select Merchant and press Send",
      },
      {
        id: 5,
        text: "Enter our Merchant mobile money number shown in your account and press send and repeat",
      },
      {
        id: 6,
        text: "Enter the Amount and press Send",
      },
      {
        id: 7,
        text: "Enter your Secret PIN after you have cross checked and press Send",
      },
      {
        id: 8,
        text: "Get the MTN Transaction ID from the SMS message you receive from MTN.",
      },
      {
        id: 9,
        text: "If you don’t receive the SMS message after 30 minutes, call MTN customer service to retrieve the Transaction ID",
      },
      {
        id: 10,
        text: "Login to your account on ",
        link: {
          label: "app.payplux.com",
          url: "/"
        }
      },
      {
        id: 11,
        text: "Visit the order you created and add the payment details",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "AirtelTigo Money",
    },
    steps: [
      {
        id: 1,
        text: "Dial *110# on your AirtelTigo Money phone",
      },
      {
        id: 2,
        text: "Enter 5 to select Withdraw Cash and press Send",
      },
      {
        id: 3,
        text: "Enter 1 to select from Agent and press Send",
      },
      {
        id: 4,
        text: "Enter our Agent Code shown in your account and press Send",
      },
      {
        id: 5,
        text: "Enter the Amount and press Send",
      },
      {
        id: 6,
        text: "Enter your Secret PIN after you have cross checked and press Send",
      },
      {
        id: 7,
        text: "Get the AirtelTigo Cash Transaction ID from the SMS message you receive from AirtelTigo",
      },
      {
        id: 8,
        text: "If you don’t receive the SMS message after 30 minutes, call AirtelTigo Cash customer service to retrieve the Transaction ID",
      },
      {
        id: 9,
        text: "Login to your account on ",
        link: {
          label: "app.payplux.com",
          url: "/"
        }
      },
      {
        id: 10,
        text: "Visit the order you created and add the payment details",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "AirtelTigo Money (New Procedure starting 16/03/2020)",
    },
    steps: [
      {
        id: 1,
        text: "Dial *110# on your AirtelTigo Money phone",
      },
      {
        id: 2,
        text: "Select option 4 “Pay Bills” and press send",
      },
      {
        id: 3,
        text: "Select option 1 “Pay to Number/Nickname” and press send",
      },
      {
        id: 4,
        text: "Enter Nickname “PAYPLUX” [case sensitive]. Please note nickname is case sensitive",
      },
      {
        id: 5,
        text: "Enter Amount and press send",
      },
      {
        id: 6,
        text: "Enter reference for transaction",
      },
      {
        id: 7,
        text: "Confirm payment with 4 digit PIN",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "Vodafone Money",
    },
    steps: [
      {
        id: 1,
        text: "Dial *110# on your Vodafone cash phone",
      },
      {
        id: 2,
        text: "Enter 2 to select Withdraw Cash and press Send",
      },
      {
        id: 3,
        text: "Enter 1 to select From Agent Cash and press Send",
      },
      {
        id: 4,
        text: "Enter our Till Number shown in your account and press Send",
      },
      {
        id: 5,
        text: "Enter the Amount and press Send",
      },
      {
        id: 6,
        text: "Enter 1 to Confirm and press Send",
      },
      {
        id: 7,
        text: "Enter your Secret PIN and press Send",
      },
      {
        id: 8,
        text: "Get the Vodafone Cash Transaction ID from the SMS message you receive from Vodafone.",
      },
      {
        id: 9,
        text: "If you don’t receive the SMS message after 30 minutes, call Vodafone Cash customer service to retrieve the Transaction ID",
      },
      {
        id: 10,
        text: "Login to your account on ",
        link: {
          label: "app.payplux.com",
          url: "/"
        }
      },
      {
        id: 11,
        text: "Visit the order you created and add the payment details",
      },
    ],
  },
];

const automatedPayments = [
    {
    title: {
      key: "",
      label: "Automated Mobile Money",
    },
    steps: [
      {
        id: 1,
        text: "Dial *170# on your MTN mobile money phone",
      },
      {
        id: 2,
        text: "Enter 1 to select Transfer Money and press Send",
      },
      {
        id: 3,
        text: "Enter 1 to select Mobile User and press Send",
      },
            {
        id: 4,
        text: "Login to your account on ",
        link: {
          label: "app.payplux.com",
          url: "/"
        }
      },
      {
        id: 5,
        text: "Navigate to “Wallets” from the menu",
      },
      {
        id: 6,
        text: "Click Add Funds and enter amount",
      },
      {
        id: 7,
        text: "Choose Automated Mobile Money Payment Method",
      },
      {
        id: 8,
        text: "Select Preferred Network and the Verified Number",
      },
      {
        id: 9,
        text: "Click Continue and wait for SMS prompt",
      },
      {
        id: 10,
        text: "Complete payments to complete order",
      },
    ],
  },
];

const mobileApp = [
  {
    title: {
      key: "",
      label: "How do I verify my phone number when using the mobile app?",
    },
    steps: [
      {
        id: 1,
        text: "Once logged in, locate the settings tab and click on ‘Settings’",
      },
      {
        id: 2,
        text: "Under the ‘My Profile’ menu, locate the default phone number section",
      },
      {
        id: 3,
        text: "Type in the preferred phone number to verify",
      },
      {
        id: 4,
        text: "Click ‘Resend verification SMS’",
      },
      {
        id: 5,
        text: "Enter the verification code received to complete the process.",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "How do I verify my email when using the mobile app?",
    },
    steps: [
      {
        id: 1,
        text: "Once logged in, locate the settings tab and click on ‘Settings’",
      },
      {
        id: 2,
        text: "Under the ‘My Profile’ menu, navigate to the mail section",
      },
      {
        id: 3,
        text: "Type in the preferred email to verify",
      },
      {
        id: 4,
        text: "Click ‘Resend verification email’",
      },
      {
        id: 5,
        text: "Check your inbox for the verification email",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "How do I change my password?",
    },
    steps: [
      {
        id: 1,
        text: "Once logged in, locate the ‘Settings’ tab and click on ‘Settings’",
      },
      {
        id: 2,
        text: "Click on the ’Security’ tab",
      },
      {
        id: 3,
        text: "Locate the Change password part",
      },
      {
        id: 4,
        text: "Fill in the necessary details and the new password as well",
      },
      {
        id: 5,
        text: "Click on the ‘Change Password’ button to successfully change your password",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "How do I enable second-factor authentication?",
    },
    steps: [
      {
        id: 1,
        text: "Once logged in, locate the ‘Settings’ tab and click on ‘Settings’",
      },
      {
        id: 2,
        text: "Click on the ’Security’ tab",
      },
      {
        id: 3,
        text: "Navigate to “2-Factor Authentication“",
      },
      {
        id: 4,
        text: "Enable the second-factor authentication by opting for SMS or Google Authenticator",
      },
      {
        id: 5,
        text: "If the option of SMS is selected, a verification code will be sent to the designated phone number",
      },
      {
        id: 6,
        text: "If the option of Google Authenticator is selected, a popup menu will appear with a procedure to follow.",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "How do I view my transaction history?",
    },
    steps: [
      {
        id: 1,
        text: "Once logged in, locate the ‘Wallets’ tab and click on ‘Wallets’",
      },
      {
        id: 2,
        text: "On the right side of the menu, you can view your income and expenditure with their corresponding timelines",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "How do I view my buy and sell orders?",
    },
    steps: [
      {
        id: 1,
        text: "Once logged in, locate ‘My Orders’ tab and click on ‘My Orders’",
      },
      {
        id: 2,
        text: "You can view your buy orders or click on ‘Sell Orders’ to view your sell orders too",
      },
    ],
  },
  {
    title: {
      key: "",
      label: "Why does the PayPlux mobile app request special permissions?",
    },
    intro: "To fully experience all the features the PayPlux mobile app has to offer, it is essential to grant the app permission on your Android device. Below is a list of what permissions are requested and their purposes.",
    steps: [
      {
        id: 1,
        text: "SMS - This is to facilitate the mobile number verification and 2-factor authentication.",
      },
      {
        id: 2,
        text: "Camera - The camera permission allows the QR scanner to operate with fluency",
      },
    ],
  },
];

export {
  signUp,
  buyBtc,
  buyPfctMny,
  sellBtc,
  sellPfctMny,
  topUp,
  withdraw,
  transfer,
  verifyId,
  phoneNumber,
  momo,
  password,
  doubleFA,
  manualPayments,
  automatedPayments,
  mobileApp,

};
