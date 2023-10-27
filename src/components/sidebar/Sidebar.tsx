import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import { FaTimes } from "react-icons/fa";

interface ISidebar {
  navShow: boolean;
  setNavShow: (value: boolean) => void;
}

const Sidebar: React.FC<ISidebar> = ({ navShow, setNavShow }) => {
  return (
    <div className={`sidebar ${navShow ? "show" : ""}`}>
      <button className="menuClose__btn" onClick={() => setNavShow(!navShow)}>
        <FaTimes size={20} />
      </button>
      <nav>
        <div className="avatar__wrap">
          oniDev.
        </div>

        <ul className="navlinks">
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink to={link.href} onClick={() => setNavShow(!navShow)}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="social">
          <Link to='' ></Link>
        </div>

        <footer>
          <span>&copy; {new Date().getFullYear()} John Mason</span>
        </footer>
      </nav>
    </div>
  );
};

export default Sidebar;

const navLinks = [
  {
    title: 'Home',
    href: "/"
  },
  {
    title: 'About',
    href: "/about"
  },
  {
    title: 'Skills',
    href: "/skills"
  },
  {
    title: 'Works',
    href: "/works"
  },
  {
    title: 'Contact',
    href: "/contact"
  },
]