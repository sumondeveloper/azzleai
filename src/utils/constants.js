import SiteMarkLogo from "../assets/images/sitemark.webp";
import GreenishLogo from "../assets/images/greenish.webp";
import LuminousLogo from "../assets/images/luminous.webp";
import NetworkLogo from "../assets/images/network.webp";
import UmbrellaLogo from "../assets/images/umbrella.webp";

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
