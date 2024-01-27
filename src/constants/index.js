import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  gfg,
  githubbg,
  hackerrank,
  leetcode,
  corizo,
  raise,
  threejs,
  portfolio,
  strider,
  brc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "profiles",
    title: "Profiles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "DSA Enthusiasts",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Raise Digital",
    icon: raise,
    iconBg: "#383E56",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Developing static ecommerce website using HTML, CSS, JavaScript in initial stage.",
      "Devleoping dynamic multi-page ecommerce website using same technologies along with BootStap in advance stage.",
      "Worked on live projects and Collaborated with frontend team and interns.",
    ],
  },
  {
    title: "Campus Executive",
    company_name: "Corizo",
    icon: corizo,
    iconBg: "#383E56",
    date: "July 2022 - August 2022",
    points: [
      "Worked as a campus executive at my college for 2 months",
      "Helped in marketing about the company and their courses",
      "As a result rapid growth in their reputation and the courses sold",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const achivements = [
  {
    logo: leetcode,
    name: "Leetcode",
    description:
      "I have solved more than 380 Data Structure and Algorithm problems , achieving a rank of 142,665",
    profile: "https://leetcode.com/nayan0403/",
  },
  {
    logo: gfg,
    name: "Geek For Geeks",
    description:
      "I have participated in many of the coding challenges, solved 150+  basic and advanced DSA problems.",
    profile: "https://auth.geeksforgeeks.org/user/nayanagar14je",
  },
  {
    logo: hackerrank,
    name: "HackerRank",
    description:
      "I have successfully solved SQL, Java, and DSA problems, achieving a 4-⭐ in SQL and Problem solving along with 5-⭐ in Java.",
    profile: "https://www.hackerrank.com/profile/Nayan_Ag_2024",
  },
  {
    logo: githubbg,
    name: "Github",
    description:
      "I have a strong understanding of Git and GitHub skills. I have posted all my projects and have 15+ repositories on GitHub.",
    profile: "https://github.com/Nayan-Ag",
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Strider",
    description:
      "ReactJS based application that allows user to experience the functionality of Airbnb and Couchsurfing at the same time on a single platform",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: strider,
    source_code_link: "https://github.com/Nayan-Ag/Strider",
    live_servor: "https://strider.netlify.app/",
  },
  {
    name: "Biking Community",
    description:
      "ReactJs based application for a biking community named as Bhopal Riders Community in Bhopal. Aim was to spread community at a bigger platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: brc,
    source_code_link:
      "https://github.com/Nayan-Ag/-Bhopal-Riding-Community-Uniting-Biking-Enthusiasts",
    live_servor: "https://bhopal-riding-community.netlify.app/",
  },
  {
    name: "Static Portfolio",
    description:
      "Web based static portfolio developed using ReactJs and bootstrap. Contains multiple section along with a major side navbar to increase functionality.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Nayan-Ag/Portfolio",
    live_servor: "https://nayan-ag-portfolio.netlify.app/",
  },
];

export {
  services,
  technologies,
  achivements,
  experiences,
  testimonials,
  projects,
};
