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
