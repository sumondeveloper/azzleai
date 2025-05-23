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
