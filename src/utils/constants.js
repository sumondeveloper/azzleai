import SiteMarkLogo from "../assets/images/sitemark.webp";
import GreenishLogo from "../assets/images/greenish.webp";
import LuminousLogo from "../assets/images/luminous.webp";
import NetworkLogo from "../assets/images/network.webp";
import UmbrellaLogo from "../assets/images/umbrella.webp";
import FeatureOne from "../assets/icons/featureone.svg";
import FeatureTwo from "../assets/icons/featuretwo.svg";
import FeatureThree from "../assets/icons/featurethree.svg";
import FeatureFour from "../assets/icons/featurefour.svg";
import FeatureOrangeOne from "../assets/icons/featureorangeone.svg";
import FeatureOrangeTwo from "../assets/icons/featureorangetwo.svg";
import FeatureOrangeThree from "../assets/icons/featureorange3.svg";
import FeatureOrangeFour from "../assets/icons/featureiconorange4.svg";
import FeatureBlackFive from "../assets/icons/service-icon-black-5.svg";
import FeatureOrangeFive from "../assets/icons/service-icon-orange-5.svg";
import FeatureBlackSix from "../assets/icons/service-icon-black-6.svg";
import FeatureOrangeSix from "../assets/icons/service-icon-orange-6.svg";
import ManOne from "../assets/images/manone.webp";
import ManTwo from "../assets/images/man2.jpg";
import ManThree from "../assets/images/man3.webp";
import ManFour from "../assets/images/man4.webp";
import ManFive from "../assets/images/man5.webp";
import ManSix from "../assets/images/man6.webp";
import CoreValueIcon1 from "../assets/icons/core-value-icon-1.svg";
import CoreValueIcon2 from "../assets/icons/core-value-icon-2.svg";
import CoreValueIcon3 from "../assets/icons/core-value-icon-3.svg";
import CoreValueIcon4 from "../assets/icons/core-value-icon-4.svg";
import Member1 from "../assets/images/team-member-img-1.jpg";
import Member2 from "../assets/images/team-member-img-2.jpg";
import Member3 from "../assets/images/team-member-img-3.jpg";
import Member4 from "../assets/images/team-member-img-4.jpg";
import Member5 from "../assets/images/team-member-img-5.jpg";
import Member6 from "../assets/images/team-member-img-6.jpg";
import FacebookIconWhite from "../assets/icons/facebook-icon-white.svg";
import FacebookIconBlack from "../assets/icons/facebook-icon-black.svg";
import InstagramIconWhite from "../assets/icons/instagram-icon-white.svg";
import InstagramIconBlack from "../assets/icons/instagram-icon-black.svg";
import TwitterIconWhite from "../assets/icons/twitter-icon-white.svg";
import TwitterIconBlack from "../assets/icons/twitter-icon-black.svg";
import LinkdienIconWhite from "../assets/icons/linkedin-icon-white.svg";
import LinkdienIconBlack from "../assets/icons/linkedin-icon-black.svg";

export const Menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    subMenu: [
      {
        name: "Services",
        path: "/services",
      },
      {
        name: "Service Details",
        path: "/servicedetails",
      },
    ],
    gridCols: 1,
  },
  {
    name: "Pages",
    subMenu: [
      {
        name: "Blogs",
        path: "/blogs",
      },
      {
        name: "Team",
        path: "/team",
      },
      {
        name: "Faq",
        path: "/faq",
      },
      {
        name: "Portfolio",
        path: "/portfolio",
      },
      {
        name: "Pricing",
        path: "/pricing",
      },
      {
        name: "Utilities",
        path: "/utilities",
      },
    ],
    gridCols: 2,
  },

  {
    name: "Contact",
    path: "/contact",
  },
];
export const LogoTickerItems = [
  SiteMarkLogo,
  GreenishLogo,
  LuminousLogo,
  NetworkLogo,
  UmbrellaLogo,
];
export const FeaturesItems = [
  {
    title: "Resource Flexibility",
    desc: "This is an excellent option for people &amp; small businesses who are starting out.",
    icon: FeatureOne,
    orangeicon: FeatureOrangeOne,
  },
  {
    title: "Managed Services",
    desc: "This is an excellent option for people &amp; small businesses who are starting out.",
    icon: FeatureTwo,
    orangeicon: FeatureOrangeTwo,
  },
  {
    title: "Web-Based Access",
    desc: "This is an excellent option for people &amp; small businesses who are starting out.",
    icon: FeatureThree,
    orangeicon: FeatureOrangeThree,
  },
  {
    title: "Resource Flexibility",
    desc: "This is an excellent option for people &amp; small businesses who are starting out.",
    icon: FeatureFour,
    orangeicon: FeatureOrangeFour,
  },
];
export const monthlyPlans = [
  {
    title: "Beginner",
    members: "Up to 10 members",
    price: 25,
    period: "month",
    description:
      "This is an excellent option for people & small businesses who are starting out.",
  },
  {
    title: "Starter",
    members: "Up to 50 members",
    price: 89,
    period: "month",
    description:
      "This plan is suitable for e-commerce stores as well as professional blogs.",
  },
  {
    title: "Pro",
    members: "Up to 100 members",
    price: 199,
    period: "month",
    description:
      "Ideal for handling complicated projects, enterprise-level projects, and websites.",
  },
];

export const annuallyPlans = [
  {
    title: "Beginner",
    members: "Up to 10 members",
    price: 240,
    period: "year",
    description:
      "This is an excellent option for people & small businesses who are starting out.",
  },
  {
    title: "Starter",
    members: "Up to 50 members",
    price: 960,
    period: "year",
    description:
      "This plan is suitable for e-commerce stores as well as professional blogs.",
  },
  {
    title: "Pro",
    members: "Up to 100 members",
    price: 1800,
    period: "year",
    description:
      "Ideal for handling complicated projects enterprise-level projects, and websites.",
  },
];
export const testimonials = [
  {
    image: ManOne,
    name: "Max Weber",
    desc: "“This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.”",
    speaclist: "HR Manager",
  },

  {
    image: ManTwo,
    name: "Douglas Smith",
    desc: "“It answers immediately, and we've seen a significant reduction in response time. Our customers love it and so do we!”",
    speaclist: "Businessman",
  },
  {
    image: ManThree,
    name: "Abraham Maslo",
    desc: "“It is accurate, fast and supports multiple languages support. It is a must for any international business success.”",
    speaclist: "Founder @ Marketing Company",
  },
  {
    image: ManFour,
    name: "Jack Fayol",
    desc: "“Security is a top concern for us, and AI SaaS takes it seriously. It's a reassuring layer of protection for our organization.”",
    speaclist: "HR Manager",
  },
  {
    image: ManFive,
    name: "Max Weber",
    desc: "“We were concerned about integrating their APIs were well documented, and their support team was super cool.”",
    speaclist: "Software Engineer",
  },
  {
    image: ManSix,
    name: "Henry Ochi",
    desc: "“The return on investment has exceeded our expectations. it's an investment in the future of our business.”",
    speaclist: "Bank Manager",
  },
];
export const footerPrimaryPages = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "About Us",
    path: "/about",
  },
  {
    page: "Services",
    path: "/services",
  },
  {
    page: "Pricing",
    path: "/pricing",
  },
  {
    page: "Contact",
    path: "/contact",
  },
];
export const footerUtilitiesPages = [
  {
    page: "Signup",
    path: "/signup",
  },
  {
    page: "Login",
    path: "/login",
  },
  {
    page: "404 Not found",
    path: "/notfound",
  },
  {
    page: "Password Reset",
    path: "/reset",
  },
];
export const coreValues = [
  {
    icon: CoreValueIcon1,
    title: "Innovation",
    description: "We’re committed to exploring new technologies, and finding",
  },
  {
    icon: CoreValueIcon2,
    title: "Excellence",
    description: "We set high standards for our work & we are dedicated team",
  },
  {
    icon: CoreValueIcon3,
    title: "Collaboration",
    description: "We believe in the power of collaboration, working closely",
  },
  {
    icon: CoreValueIcon4,
    title: "Integrity",
    description:
      "We uphold the highest ethical honesty in all our interactions",
  },
];
export const teamMembers = [
  {
    name: "Mr. Abraham Maslo",
    designation: "Chief AI Officer",
    image: Member1,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Willium Robert",
    designation: "Data Engineer",
    image: Member2,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Mr. Max D. Nikolas",
    designation: "CEO, Co-founder",
    image: Member3,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Henry Fayol",
    designation: "AI Researchers",
    image: Member4,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Jack Fox",
    designation: "NLP Expert",
    image: Member5,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Adam Smith",
    designation: "Project Manager",
    image: Member6,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
];
export const services = [
  {
    title: "Resource Flexibility",
    desc: "This is an excellent option for people & small businesses who are starting out.",
    icon: FeatureOne,
    orangeicon: FeatureOrangeOne,
  },
  {
    title: "Managed Services",
    desc: "This is an excellent option for people & small businesses who are starting out.",
    icon: FeatureTwo,
    orangeicon: FeatureOrangeTwo,
  },
  {
    title: "Web-Based Access",
    desc: "This is an excellent option for people &amp; small businesses who are starting out.",
    icon: FeatureThree,
    orangeicon: FeatureOrangeThree,
  },
  {
    title: "Resource Flexibility",
    desc: "This is an excellent option for people &amp; small businesses who are starting out.",
    icon: FeatureFour,
    orangeicon: FeatureOrangeFour,
  },
  {
    title: "Anomaly Detection",
    desc: "AI SaaS can analyze IoT sensor data to detect predict equipment failures.",
    icon: FeatureBlackFive,
    orangeicon: FeatureOrangeFive,
  },
  {
    title: "Predictive Analytics",
    desc: "Solutions that use AI to predict future trends and outcomes, such as demand forecastin.",
    icon: FeatureBlackSix,
    orangeicon: FeatureOrangeSix,
  },
  {
    title: "Speech Recognition",
    desc: "Speech recognition services convert spoken language into text and accessibility.",
    icon: FeatureBlackSix,
    orangeicon: FeatureOrangeSix,
  },
  {
    title: "Computer Vision",
    desc: "Computer vision services use AI to interpret and process visual information.",
    icon: FeatureBlackSix,
    orangeicon: FeatureOrangeSix,
  },
];
export const servicesFaqs = [
  {
    question: "How do I start AI SaaS?",
    answer:
      "Go to our official website and create an account. You'll need to provide some basic information and agree to our terms and conditions.",
  },
  {
    question: "Can I customize AI SaaS solutions?",
    answer:
      "Yes, customization is possible through our dashboard. You can integrate APIs and tweak the settings as per your business needs.",
  },
  {
    question: "How can AI benefit my business?",
    answer:
      "AI helps automate tasks, reduce human error, enhance customer experience, and increase operational efficiency.",
  },
];
