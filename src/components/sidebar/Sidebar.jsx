import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({ navShow, setNavShow }) => {
  return (
    <div className={`sidebar ${navShow ? "show" : ""}`}>
      <nav>
        <div className="avatar__wrap">
          {/* <img src="" alt="" /> */}
          oniDev.
        </div>

        <ul className="navlinks">
          <li>
            <NavLink to="/" onClick={() => setNavShow(!navShow)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setNavShow(!navShow)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={() => setNavShow(!navShow)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/works" onClick={() => setNavShow(!navShow)}>
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setNavShow(!navShow)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="social">
          <Link></Link>
        </div>

        <footer>
          <span>&copy; {new Date().getFullYear()} John Mason</span>
        </footer>
      </nav>
    </div>
  );
};

export default Sidebar;
