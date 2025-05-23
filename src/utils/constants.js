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
import ManOne from "../assets/images/manone.webp";
import ManTwo from "../assets/images/man2.jpg";
import ManThree from "../assets/images/man3.webp";
import ManFour from "../assets/images/man4.webp";
import ManFive from "../assets/images/man5.webp";
import ManSix from "../assets/images/man6.webp";

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
