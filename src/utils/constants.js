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
import Blog1 from "../assets/images/blog1.jpg";
import Blog2 from "../assets/images/blog2.jpg";
import Blog3 from "../assets/images/blog3.jpg";
import Blog4 from "../assets/images/blog4.webp";
import Blog5 from "../assets/images/blog5.webp";
import Blog6 from "../assets/images/blog6.webp";
import RecentBlogOne from "../assets/images/blog-recent1.jpg";
import RecentBlogTwo from "../assets/images/blog-recent-img2.jpg";

import RecentBlogThree from "../assets/images/blog-recent-img3.jpg";

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
        subMenu: [
          {
            name: "Blog",
            path: "/blogs",
          },
          {
            name: "Blog Details",
            path: "/blogdetails",
          },
        ],
      },
      {
        name: "Team",
        path: "/team",
        subMenu: [
          {
            name: "Team",
            path: "/team",
          },
          {
            name: "Team Details",
            path: "/teamdetails",
          },
        ],
      },
      {
        name: "FAQ",
        path: "/faq",
        subMenu: [
          {
            name: "FAQ-1",
            path: "/faq-1",
          },
          {
            name: "FAQ-2",
            path: "/faq-2",
          },
        ],
      },
      {
        name: "Portfolio",
        path: "/portfolio",
        subMenu: [
          {
            name: "Portfolio",
            path: "/portfolio",
          },
          {
            name: "Portfolio Details",
            path: "/portfoliodetails",
          },
        ],
      },
      {
        name: "Pricing",
        path: "/pricing",
      },
      {
        name: "Utilities",
        path: "/utilities",
        subMenu: [
          {
            name: "Error 404",
            path: "/error",
          },
          {
            name: "Login",
            path: "/login",
          },
          {
            name: "Signup",
            path: "/signup",
          },
          {
            name: "Login",
            path: "/login",
          },
        ],
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
export const contactLinks = [
  {
    icon: FacebookIconWhite,
    path: "www.facebook.com",
  },
  {
    icon: TwitterIconWhite,
    path: "www.x.com",
  },
  {
    icon: LinkdienIconWhite,
    path: "www.linkdien.com",
  },
  {
    icon: InstagramIconWhite,
    path: "www.instagram.com",
  },
];
export const locations = [
  {
    name: "Toronto, Canada",
    position: "sm:top-[10%] sm:left-[13%]",
  },
  {
    name: "Sao Paulo, Brazil",
    position: "sm:top-[65%] sm:left-[18%]",
  },
  {
    name: "Bamako, Mali",
    position: "sm:top-[38%] sm:left-[38%]",
  },
  {
    name: "Noril'sk, Russia",
    position: "sm:top-[5%] sm:left-[61%]",
  },
  {
    name: "Lake Eyre, Australia",
    position: "sm:top-[72%] sm:left-[88%]",
  },
];
export const blogs = [
  {
    id: 1,
    image: Blog1,
    category: "Business",
    date: "June 12, 2024",
    title: "10 ways to supercharge startup with AI integration",
    excerpt:
      "The rapid advancements in AI have paved the way for startups to revolutionize operations...",
    link: "/blog-details",
  },
  {
    id: 2,
    image: Blog2,
    category: "Startup",
    date: "May 30, 2024",
    title: "5 essential tools for early-stage founders",
    excerpt:
      "Running a startup? These five tools will save your time, energy, and money...",
    link: "/blog-details",
  },
  {
    id: 3,
    image: Blog3,
    category: "Technology",
    date: "May 20, 2024",
    title: "The rise of AI: Opportunities and Challenges",
    excerpt:
      "Artificial Intelligence is no longer a buzzword—it's redefining how businesses operate in 2024 and beyond...",
    link: "/blog-details",
  },
  {
    id: 4,
    image: Blog4,
    category: "Marketing",
    date: "May 15, 2024",
    title: "How to create viral marketing campaigns using data",
    excerpt:
      "Want your campaigns to go viral? Learn how data-driven marketing increases your chances...",
    link: "/blog-details",
  },
  {
    id: 5,
    image: Blog5,
    category: "Design",
    date: "April 29, 2024",
    title: "Designing for humans: The psychology of UI/UX",
    excerpt:
      "Great design is more than aesthetics—understand the psychology behind user-friendly interfaces...",
    link: "/blog-details",
  },
  {
    id: 6,
    image: Blog6,
    category: "Growth",
    date: "April 15, 2024",
    title: "Scaling your product without breaking things",
    excerpt:
      "Growth is exciting but also risky. Here’s how to scale smoothly without breaking your product...",
    link: "/blog-details",
  },
];
export const categories = [
  { name: "Business & Marketing", count: 18, href: "/blog-details" },
  { name: "Technology", count: 5, href: "/blog-details" },
  { name: "Art & Beauty", count: 23, href: "/blog-details" },
  { name: "Digital Agency", count: 10, href: "/blog-details" },
];

export const recentPosts = [
  {
    id: 1,
    title: "6 profitable AI tech businesses to start",
    image: RecentBlogOne,
    href: "/blog-details",
    date: "June 12, 2024",
  },
  {
    id: 2,
    title: "Why i decided to sell my B2B SaaS AI business",
    image: RecentBlogTwo,
    href: "/blog-details",
    date: "June 13, 2024",
  },
  {
    id: 3,
    title: "8 AI tools that will your streamline workflows",
    image: RecentBlogThree,
    href: "/blog-details",
    date: "June 7, 2024",
  },
];
export const tags = ["Article", "Business", "Digital", "Technology", "UI/UX"];
export const faqsData = [
  {
    question: "What is Artificial Intelligence (AI)?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "What are the different types of AI?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "What are some practical applications of AI?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "What is the difference between AI and machine learning?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "How can businesses use AI for competitive advantage?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "Can AI replace humans in the workforce?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "Is AI safe?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "What is the future of AI?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
];
export const faqData2 = {
  "general-questions": [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What are some practical applications of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the difference between AI and machine learning?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "How can businesses use AI for competitive advantage?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Can AI replace humans in the workforce?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Is AI safe?",
      answer:
        "AI safety depends on how it's designed and regulated. Ethical AI practices are essential to prevent misuse.",
    },
    {
      question: "What is the future of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
  ],
  "about-the-company": [
    {
      question: "How can businesses AI for competitive advantage?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Can AI replace humans in the workforce?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Is AI safe?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the future of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What are some practical applications of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the difference between AI and machine learning?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
  ],
  "about-artificial-intelligence": [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "AI powers virtual assistants, recommendation systems, smart home devices, and much more in everyday life.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the difference between AI and machine learning?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "How can businesses AI for competitive advantage?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Can AI replace humans in the workforce?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Is AI safe?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the future of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
  ],
  "about-the-team": [
    {
      question: "How can businesses AI for competitive advantage?",
      answer:
        "Our team includes AI researchers, full-stack developers, UX designers, and business strategists with years of industry experience.",
    },
    {
      question: "Can AI replace humans in the workforce?",
      answer:
        "Our team holds degrees in Computer Science, Data Science, and AI, and have worked on high-impact projects across the globe.",
    },
    {
      question: "Is AI safe?",
      answer:
        "You can reach out to us via our contact form, and the relevant team member will follow up shortly.",
    },
    {
      question: "What is the future of AI?",
      answer:
        "Yes, our team operates in a remote-first model, allowing us to collaborate across different time zones and countries.",
    },
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "Yes, our team operates in a remote-first model, allowing us to collaborate across different time zones and countries.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "Yes, our team operates in a remote-first model, allowing us to collaborate across different time zones and countries.",
    },
    {
      question: "What are some practical applications of AI?",
      answer:
        "Yes, our team operates in a remote-first model, allowing us to collaborate across different time zones and countries.",
    },
    {
      question: "What is the future of AI?",
      answer: "What is the difference between AI and machine learning?",
    },
  ],
};
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
export const PricingmonthlyPlans = [
  {
    title: "Free",
    members: "1 member",
    price: 0,
    period: "per month",
    description:
      "Ideal for individuals person and small businesses just getting started.",
    features: ["AI-Ready Data Prep", "Feature Engineering"],
  },
  {
    title: "Beginner",
    members: "Up to 10 members",
    price: 25,
    period: "per month",
    description:
      "This is an excellent option for people & small businesses who are starting out.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
    ],
  },
  {
    title: "Starter",
    members: "Up to 50 members",
    price: 89,
    period: "per month",
    description:
      "This plan is suitable for e-commerce stores as well as professional blogs.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
      "Time Series Models",
    ],
  },
  {
    title: "Pro",
    members: "Up to 100 members",
    price: 199,
    period: "per month",
    description:
      "Ideal for handling complicated projects, enterprise-level projects, and websites.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
      "Time Series Models",
      "Clustering models",
    ],
  },
];

export const PricingannuallyPlans = [
  {
    title: "Free",
    members: "1 member",
    price: 0,
    period: "Annual",
    description:
      "Ideal for individuals person and small businesses just getting started.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
    ],
  },
  {
    title: "Beginner",
    members: "Up to 10 members",
    price: 240,
    period: "Annual",
    description:
      "This is an excellent option for people & small businesses who are starting out.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
    ],
  },
  {
    title: "Starter",
    members: "Up to 50 members",
    price: 960,
    period: "Annual",
    description:
      "This plan is suitable for e-commerce stores as well as professional blogs.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
      "Time Series Models",
    ],
  },
  {
    title: "Pro",
    members: "Up to 100 members",
    price: 1800,
    period: "Annual",
    description:
      "Ideal for handling complicated projects enterprise-level projects, and websites.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
      "Time Series Models",
      "Clustering models",
    ],
  },
];
