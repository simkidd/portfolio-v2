import Dinny from "../assets/projects/dinny-green.png";
import FitClub from "../assets/projects/gym-website.jpg";
import TechUnicorn from "../assets/projects/tech-unicorn-test.png";
import GoTask from "../assets/projects/todo-app.jpg";
// import BlogApp from "../assets/projects/blog-app.png";
import Evogym from "../assets/projects/evogym.png";
import Lendsqr from "../assets/projects/lendsqr.png";
import Netreelz from "../assets/projects/netreelz.png";
import Real from "../assets/projects/real-explorer.png";
import Uniport from "../assets/projects/uniport-sgs.png";
import Helar from "../assets/projects/helar-law.png";
import { IPortfolio } from "../interface/portfolio.interface";

export const projects: IPortfolio[] = [
  {
    id: 1,
    category: "css",
    image: Lendsqr,
    github: "",
    url: "https://john-mason-lendsqr-fe-test.vercel.app",
    title: "Lendsqr Admin Dashboard",
    text: "Created with React App",
    tags: [],
    slug: "lendsqr-admin-dashboard",
    isPublic: false
  },
  // {
  //   id: 2,
  //   category: "css",
  //   image: BlogApp,
  //   github: "",
  //   url: "https://onidev-blog.vercel.app",
  //   title: "Blog App",
  //   text: "Created with React App",
  // },
  {
    id: 3,
    category: "react",
    image: FitClub,
    github: "",
    url: "https://thefitclub-gym.netlify.app",
    title: "FitClub",
    text: "Created with React App",
    tags: [],
    slug: "fitclub",
    isPublic: true,
  },
  {
    id: 4,
    category: "css",
    image: GoTask,
    github: "",
    url: "https://onidev-calc.netlify.app",
    title: "Go Task",
    text: "Created with React App",
    tags: [],
    slug: "go-task",
    isPublic: true
  },
  {
    id: 5,
    category: "css",
    image: TechUnicorn,
    github: "",
    url: "https://tech-unicorn-test.vercel.app",
    title: "Ecommerce App",
    text: "Created with React App",
    tags: [],
    slug: "ecommerce-app",
    isPublic: true
  },
  {
    id: 6,
    category: "css",
    image: Real,
    github: "",
    url: "https://real-explorer.vercel.app",
    title: "Real Explorer",
    text: "Created with React App",
    tags: [],
    slug: "real-explorer",
    isPublic: true
  },
  {
    id: 7,
    category: "react",
    image: Dinny,
    github: "",
    url: "https://dinny-green-edu.vercel.app/",
    title: "Dinny Green",
    text: "Created with React App",
    tags: ["Html", "Scss", "React"],
    slug: "dinny-green",
    isPublic: true
  },
  {
    id: 8,
    category: "react",
    image: Netreelz,
    github: "",
    url: "https://netreelz.vercel.app/",
    title: "NetReelz",
    text: "Created with React App",
    tags: ["Html", "Scss", "React", "Axios", "Firebase"],
    slug: "netreelz",
    isPublic: true
  },
  {
    id: 9,
    category: "react",
    image: Evogym,
    github: "",
    url: "https://evo-fitness-gym.vercel.app/",
    title: "EvoGym",
    text: "Created with React App",
    tags: ["Html", "React", "Typescript", "Tailwindcss"],
    slug: "evo-gym",
    isPublic: true
  },
  {
    id: 10,
    category: "react",
    image: Helar,
    github: "",
    url: "",
    title: "Helar Law",
    text: "Created with React App",
    tags: ["Html", "Scss", "React", "Typescript", "Bootstrap", "Next Js", "Styled Components", "Graphql"],
    slug: "helar-law",
    isPublic: false
  },
  {
    id: 11,
    category: "react",
    image: Uniport,
    github: "",
    url: "https://uniport-sgs.com",
    title: "Uniport School of Graduate Studies",
    text: "Created with React App",
    tags: ["Html", "Scss", "React", "Typescript", "Bootstrap", "Next Js", "Styled Components", "Graphql"],
    slug: "uniport-sgs",
    isPublic: false
  },
];
