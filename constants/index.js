import approve from "public/approve.png";
import web from "public/web.jpg";
import ux from "public/ux.jpg";
import atomic from "public/atomic.jpg";
import mindset from "public/mindset.jpg";
import positive from "public/positive.jpg";

//ux projects
import eoe from "public/eoe.png";
import eoe1 from "public/eoe1.png";
import eoe2 from "public/eoe2.png";
import eoe3 from "public/eoe3.png";

//web projects
import gym from "public/gym.png";
import Auth from "public/Auth.png";
import dashboard from "public/dashboard.png";
import bankAccount from "public/bankAccount.png";
import bookReview from "public/bookReview.png";
import KUSA from "public/KUSA.png";

//tools

import react from "public/react.svg";
import adobe from "public/adobe.svg";
import css from "public/css.svg";
import figma from "public/figma.svg";
import git from "public/git.svg";
import html from "public/html.svg";
import java from "public/java.svg";
import js from "public/js.svg";
import maven from "public/maven.png";
import mongo from "public/mongo.svg";
import mysql from "public/mysql.svg";
import NextJS from "public/NextJS.svg";
import node from "public/node.svg";
import redux from "public/redux.svg";
import springBoot from "public/springBoot.svg";
import tailwind from "public/tailwind.svg";
import ts from "public/ts.svg";

//design projects

//contact icons
import mail from "public/mail.png";
import location from "public/location.png";
import phone from "public/phone.png";

//home page skills
import homeWeb from "public/icons/web.png"
import homeSoft from "public/icons/soft.png"
import homeDevops from "public/icons/devops.png"
import homeUx from "public/icons/ux.png"

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/portfolio",
    title: "Portfolio",
  },
  {
    id: "/about",
    title: "About Me",
  },
  // {
  //   id: "/articles",
  //   title: "Articles",
  // },
  // {
  //   id: "blogs",z
  //   title: "Blogs",
  // },
];

export const homeSkills = [
  {
    id: 1,
    title: "Software Development",
    icon: homeSoft
  },
  {
    id: 2,
    title: "Web Development",
    icon: homeWeb
  },
  {
    id: 3,
    title: "DevOps",
    icon: homeDevops
  },
  {
    id: 4,
    title: "UX Design",
    icon: homeUx
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Me",
        link: "/about",
      },
      {
        name: "Portfolio",
        link: "/portfolio",
      },
      {
        name: "Blogs",
        link: "#",
      },
      {
        name: "Articles",
        link: "/articles",
      },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/brian-musili-405b1220a/",
      },
      {
        name: "Github",
        link: "https://github.com/MusiliC",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/Musili_14",
      },
      // {
      //   name: "Instagram",
      //   link: "#",
      // },
      {
        name: "Fiverr",
        link: "https://www.fiverr.com/musili_brian?up_rollout=true",
      },
    ],
  },
];

export const services = [
  {
    title: "Web and Mobile App Development",
    icon: approve,
  },
  {
    title: "Responsive Web Design",
    icon: approve,
  },
  {
    title: "UX Design",
    icon: approve,
  },
  {
    title: "Software Development",
    icon: approve,
  },
];

export const projectCards = [
  {
    title: "Web Projects",
    image: web,
    to: "projects",
  },
  {
    title: "Design Projects",
    image: ux,
    to: "designs",
  },
];

export const tools = [
  {
    name: "Javascript",
    icon: js,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Next JS",
    icon: NextJS,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Typescript",
    icon: ts,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Html",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring boot",
    icon: springBoot,
  },
  {
    name: "Apache Maven",
    icon: maven,
  },
  {
    name: "Adobe XD",
    icon: adobe,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

export const designProjects = [
  {
    id: 1,
    image: eoe,
    name: "EOE Foundation",
    desc: "With collaboration with my team I came up with the design of Enock Opara Makokha Foundation which is an NGO dedicated to providing quality education, healthcare, clean water, security and agribusiness opportunities to the community ",
    imageArray: [eoe, eoe1, eoe2, eoe3],
  },
];

export const webProjects = [
  {
    image: gym,
    name: "Gym website",
    desc: "Gym website design challenge made for gym with great features",
    github: "https://github.com/MusiliC/gym-typescript",
    link: "https://a4718aa7.gym-typescript-61v.pages.dev/",
  },
  {
    image: Auth,
    name: "Authentication System",
    desc: "Project with advanced features such as email verification and password reset by use of jwt",
    github:
      "https://github.com/MusiliC/authentication-email-verification-password-reset",
    link: "https://authentication-email-verification-password-reset.vercel.app/",
  },
  {
    image: dashboard,
    name: "Admin Dashboard",
    desc: "Admin Dashboard design with calendar, theming and graphs",
    github: "https://github.com/MusiliC/admin-side-dashboard-theming-calendar",
    link: "https://advance-admin-dashboard.onrender.com/",
  },
  {
    image: bookReview,
    name: "Book Review",
    github: "https://github.com/MusiliC/Novels-review-website",
    desc: "Website where users read reviews and can participate in creating blogs ",
    link: "https://novels-app-wheat.vercel.app/novels",
  },
  {
    image: KUSA,
    name: "KUSA System",
    github: "https://github.com/MusiliC/KUSA-system",
    desc: "Kenya Sports System for generating fixtures and  league tables ",
    link: "#",
  },
  {
    image: bankAccount,
    name: "Bank Website",
    desc: "Frontend Design for a bank website, responsive and customizable",
    link: "https://bankappsite-web.netlify.app/",
    github: "https://github.com/MusiliC/bank-app-website",
  },
];

export const articles = [
  {
    image: atomic,
    name: "Atomic Habits",
    desc: "Habits are patterns of behavior that you’ve repeated enough to become automatic. The most helpful function of atomic habits is to solve the problems of your life with as little effort as possible. The science of habit formation involves four things.....",
  },
  {
    image: mindset,
    name: "Mindset the new psychology of success",
    desc: "Mindset: The New Psychology of Success is a book by Carol S. Dweck about human thoughts, and how these thoughts can greatly influence the way we live our everyday lives. This book is written in the form of a self-help book, so readers will find many interesting and educational tidbits of advice on how to live the best life possible....",
  },
  {
    image: positive,
    name: "The power of positive thinking",
    desc: "By Norman vincent - updating soon...",
  },
];

export const contactIcons = [
  {
    icon: location,
    name: "Nairobi, Kenya",
  },
  {
    icon: mail,
    name: "musilibrian07@gmail.com",
  },
  {
    icon: phone,
    name: "+254768687334",
  },
];
