import approve from "public/approve.png"
import web from "public/web.jpg"
import ux from "public/ux.jpg"

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "articles",
    title: "Articles",
  },
  {
    id: "blogs",
    title: "Blogs",
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
        link: "/blogs",
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
        link: "/",
      },
      {
        name: "Instagram",
        link: "/",
      },
      {
        name: "What's App",
        link: "/",
      },
    ],
  },
];

export const services = [
  {
    title: "Web and Mobile App Development",
    icon: approve
  },
  {
    title: "Responsive Web Design",
    icon: approve
  },
  {
    title: "UX Design",
    icon: approve
  },
  {
    title: "Software Development",
    icon: approve
  },

]

export const projectCards = [
  {
    title: "Web Projects",
    image: web
  },
  {
    title: "Design Projects",
    image: ux
  },
]
