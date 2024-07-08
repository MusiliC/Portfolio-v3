import web from "public/web.jpg";
import ux from "public/ux.jpg";


//web projects
import gym from "public/gym.png";
import Auth from "public/Auth.png";
import dashboard from "public/dashboard.png";
import bankAccount from "public/bankAccount.png";
import bookReview from "public/bookReview.png";
import KUSA from "public/KUSA.png";
import sentelemo from "public/images/sentelemo.png";

//tools

import react from "public/react.svg";
import adobe from "public/adobe.svg";
import css from "public/css.svg";
import figma from "public/figma.svg";
import git from "public/git.svg";
import html from "public/html.svg";
import java from "public/java.svg";
import js from "public/js.svg";
import mongo from "public/mongo.svg";
import mysql from "public/mysql.svg";
import NextJS from "public/NextJS.svg";
import node from "public/node.svg";
import redux from "public/redux.svg";
import springBoot from "public/springBoot.svg";
import tailwind from "public/tailwind.svg";
import ts from "public/ts.svg";
import postgres from "public/icons/postgres.png";
import k8 from "public/icons/k8.png";
import docker from "public/icons/docker.png";

//contact icons
import mail from "public/mail.png";
import location from "public/location.png";
import phone from "public/phone.png";
import fiver from "public/icons/fiver.png";
import message from "public/icons/message.svg";

//home page skills
import homeWeb from "public/icons/web.png";
import homeSoft from "public/icons/soft.png";
import homeDevops from "public/icons/devops.png";
import homeUx from "public/icons/ux.png";

//service
import webPri from "public/icons/webPri.png";
import devPri from "public/icons/devPri.png";
import softPri from "public/icons/softPri.png";

//footer social icons
import linkFooter from "public/icons/linkedin.png";
import githubFooter from "public/icons/git.png";
import fiverFooter from "public/icons/fiver.png";

//blogs images
import spring from "public/images/spring.png";
import eureka from "public/images/eureka.png";
import blog_default from "public/images/blog_default.jpg";
import react_blog from "public/images/react_blog.jpg";

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

  {
    id: "/blogs",
    title: "Blogs"
  },
];

export const roles = [
  {
    position: "Software Developer",
    company: "Systech Africa",
    period: "April 2024 - Present",
  },
  {
    position: "Software Developer Intern",
    company: "Systech Africa",
    period: "August 2023 - March 2024",
  },
];

export const homeSkills = [
  {
    id: 1,
    title: "Software Development",
    icon: homeSoft,
  },
  {
    id: 2,
    title: "Web Development",
    icon: homeWeb,
  },
  {
    id: 3,
    title: "DevOps",
    icon: homeDevops,
  },
  {
    id: 4,
    title: "UX Design",
    icon: homeUx,
  },
];

export const socialMedia = [
  {
    src: linkFooter,
    alt: "linkedin logo",
    link: "https://www.linkedin.com/in/brian-musili-405b1220a/",
  },
  { src: githubFooter, alt: "github logo", link: "https://github.com/MusiliC" },
  {
    src: fiverFooter,
    alt: "fiver logo",
    link: "https://www.fiverr.com/musili_brian?up_rollout=true",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", link: "#" },
      { name: "Responsive Web Design", link: "#" },
      { name: "Software Development", link: "#" },
      { name: "DevOps", link: "#" },
      { name: "UX Design", link: "#" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Home", link: "" },
      { name: "Projects", link: "#" },
      { name: "Services", link: "#" },
      { name: "Blogs", link: "#" },
      { name: "Contact", link: "#" },
    ],
  },
  {
    title: "Get in touch",
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
        name: "Fiverr",
        link: "https://www.fiverr.com/musili_brian?up_rollout=true",
      },
      { name: "+254768687334", link: "tel:+254768687334" },
    ],
  },
];

export const contactDetails = [
  {
    name: "Email",
    link: "musilibrian07@gmail.com ",
    icon: mail,
  },
  {
    name: "Whats App",
    link: "+254768687334",
    icon: message,
  },
  {
    name: "Fiverr",
    link: "https://www.fiverr.com/musili_brian?up_rollout=true",
    icon: fiver
  },
];

export const services = [
  {
    title: "Software Development",
    icon: softPri,
    body: "I design, build, and maintain software applications, ensuring they meet client requirements and solve problems effectively.",
  },
  {
    title: "Web Design and Development",
    icon: webPri,
    body: "I specialize in creating responsive, user-friendly websites, integrating cutting-edge technologies for optimal performance.",
  },
  {
    title: "DevOps",
    icon: devPri,
    body: "I orchestrate software delivery through DevOps practices, automate processes, and ensure efficient deployment and delivery.",
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
    name: "Java",
    icon: java,
  },
  {
    name: "Javascript",
    icon: js,
  },
  {
    name: "Spring boot",
    icon: springBoot,
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
    name: "Postgres",
    icon: postgres,
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: k8,
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

export const webProjects = [
  {
    image: gym,
    name: "Gym website",
    desc: "Gym website design challenge made for gym with great features",
    github: "https://github.com/MusiliC/gym-typescript",
    link: "https://a4718aa7.gym-typescript-61v.pages.dev/",
  },
  {
    image: sentelemo,
    name: "Sentelemo Engineering",
    github: "https://github.com/MusiliC/sentelmo-v2",
    link: "https://sentelmo.co.ke/",
  },

  {
    image: dashboard,
    name: "Admin Dashboard",
    desc: "Admin Dashboard design with calendar, theming and graphs",
    github: "https://github.com/MusiliC/admin-side-dashboard-theming-calendar",
    link: "https://advance-admin-dashboard.onrender.com/",
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

export const blogs = [
  {
    image: react_blog,
    title: "React Behind the Scenes",
    desc: "A small series pf articles of how react works behind the scenes and renders its element to actual DOM. Part one of the series ",
    category: "React",
    url: "https://medium.com/@mastermusili/how-react-works-behind-the-scenes-part-1-450d9e9ff9f2",
  },
  {
    image: spring,
    title: "Spring Cloud Config",
    desc: "Spring Cloud Config provides server-side and client-side support for externalized configuration in a distributed system",
    category: "Spring",
    url: "https://medium.com/@mastermusili/microservices-spring-cloud-e9109bbe2606",
  },
  {
    image: eureka,
    title: "Eureka Discovery Service",
    desc: "Service Discovery is one of the key tenets of a microservice-based architecture.",
    category: "Spring",
    url: "https://medium.com/@mastermusili/spring-service-discovery-eureka-923f605949f5",
  },
  {
    image: spring,
    title: "Implementing API Gateway, Load Balancing",
    desc: "Lets understand api gateway and load balancing, and their implementation",
    category: "Spring",
    url: "https://medium.com/@mastermusili/spring-microservices-implementing-api-gateway-and-load-balancing-76e54cc16139",
  },
  {
    image: react_blog,
    title: "Simple React Accordion",
    desc: "Understanding basics in react components, props and state management",
    category: "React",
    url: "https://medium.com/@mastermusili/simple-react-accordion-component-props-children-props-e0f077c4d8fd",
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
