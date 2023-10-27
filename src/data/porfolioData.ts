import Dinny from "../assets/projects/dinny-green.png";
import FitClub from "../assets/projects/gym-website.jpg";
import TechUnicorn from "../assets/projects/tech-unicorn-test.png";
import GoTask from "../assets/projects/todo-app.jpg";
// import BlogApp from "../assets/projects/blog-app.png";
import Evogym from "../assets/projects/evogym.png";
import Lendsqr from "../assets/projects/lendsqr.png";
import Netreelz from "../assets/projects/netreelz.png";
import Real from "../assets/projects/real-explorer.png";
import { IPortfolio } from "../interface/portfolio.interface";

export const portfolios: IPortfolio[] = [
  {
    id: 1,
    category: "css",
    image: Lendsqr,
    github: "",
    live: "https://john-mason-lendsqr-fe-test.vercel.app",
    title: "Lendsqr Admin Dashboard",
    text: "Created with React App",
  },
  // {
  //   id: 2,
  //   category: "css",
  //   image: BlogApp,
  //   github: "",
  //   live: "https://onidev-blog.vercel.app",
  //   title: "Blog App",
  //   text: "Created with React App",
  // },
  {
    id: 3,
    category: "react",
    image: FitClub,
    github: "",
    live: "https://thefitclub-gym.netlify.app",
    title: "FitClub",
    text: "Created with React App",
  },
  {
    id: 4,
    category: "css",
    image: GoTask,
    github: "",
    live: "https://onidev-calc.netlify.app",
    title: "Go Task",
    text: "Created with React App",
  },
  {
    id: 5,
    category: "css",
    image: TechUnicorn,
    github: "",
    live: "https://tech-unicorn-test.vercel.app",
    title: "Ecommerce App",
    text: "Created with React App",
  },
  {
    id: 6,
    category: "css",
    image: Real,
    github: "",
    live: "https://real-explorer.vercel.app",
    title: "Real Explorer",
    text: "Created with React App",
  },
  {
    id: 7,
    category: "react",
    image: Dinny,
    github: "",
    live: "https://dinny-green-edu.vercel.app/",
    title: "Dinny Green",
    text: "Created with React App",
  },
  {
    id: 8,
    category: "react",
    image: Netreelz,
    github: "",
    live: "https://netreelz.vercel.app/",
    title: "NetReelz",
    text: "Created with React App",
  },
  {
    id: 9,
    category: "react",
    image: Evogym,
    github: "",
    live: "https://evo-fitness-gym.vercel.app/",
    title: "EvoGym",
    text: "Created with React App",
  },
];