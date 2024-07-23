import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  shadcn,
  nodejs,
  mongodb,
  git,
  mobilestyx,
  neoscript,
  paytm,
  shopingapp,
  instagramapp,
  rode,
  shopify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  {
    title: "HTML5",
    icon: html,
  },
  {
    title: "CSS3",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  // {
  //   title: "TypeScript",
  //   icon: typescript,
  // },
  {
    title: "React.js",
    icon: reactjs,
  },
  {
    title: "Shadcn-UI",
    icon: shadcn,
  },
  // {
  //   title: "Redux.js",
  //   icon: redux,
  // },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "Node.js",
    icon: nodejs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
];

export const experiences = [
  {
    title: "Frontend Web Developer - Intern",
    company_name: "Vikasit Solutions pvt. ltd.",
    icon: neoscript,
    iconBg: "#383E56",
    date: "June 2023 - Dec 2023",
    points: [
      "Building reusable code that is scalable and optimized for performance.",
      "Utilizing industry best practices for mobile-first and responsive web application.",
      "Creating appropriate integration strategies with components and APIs.",
    ],
  },
  {
    title: "Frontend Web Developer - Intern",
    company_name: "Sharviteck Softwares pvt. ltd.",
    icon: mobilestyx,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - April 2024",
    points: [
      "Building reusable code that is scalable and optimized for performance.",
      "Utilizing industry best practices for mobile-first and responsive web application.",
      "Creating appropriate integration strategies with components and APIs.",
      "Manage all social media handles and supprt in email marketing",
    ],
  },
];

export const projects = [
  {
    name: "Shop Now",
    description:
      "Creating a e-commerce web app frontend using ReactJS, CSS involves building a responsive user interface that mimics Tech Bunner design.Implement key features like carosual cards and dynamic props form for a visually appealing.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      },
    ],
    image: shopingapp,
    source_code_link: "https://github.com/Kapilkumar042/shoping_app",
    live_link: "https://shopingapp.onrender.com/"
  },
  {
    name: "Instagram Clone",
    description:
      "Creating a Instagram clone with HTML, CSS, for a polished user interface that mirrors Instagram's design. Leverage Tailwind CSS for streamlined styling and HTML for structuring the responsive website.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      // {
      //   name: "Tailwind CSS",
      //   color: "pink-text-gradient",
      // },
    ],
    image: instagramapp,
    source_code_link: "https://github.com/Kapilkumar042/instagram-clone",
    live_link: "https://kapilkumar042.github.io/instagram-clone/"
  },
  {
    name: "Shopify Clone",
    description:
      "Crafting a Shopify clone with HTML, CSS, and Tailwind CSS for a responsive and visually appealing online store interface. Utilize Tailwind CSS utility classes for rapid styling, and HTML for organizing product listings and cart functionalities.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: shopify,
    source_code_link: "https://github.com/robinmahto/Shopify-Clone",
    live_link: "https://shopify-clone-tailwindcss-18.netlify.app/"
  },
];
