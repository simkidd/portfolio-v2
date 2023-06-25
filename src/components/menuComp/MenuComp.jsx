import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "./menuComp.scss";
import { BsCodeSlash } from "react-icons/bs";

const MenuComp = ({ menuItems }) => {
  return (
    <div className="menu__wrapper">
      {menuItems.map((item) => (
        <div className="grid__item" key={item.id}>
          <div className="portfolio__content">
            <div className="portfolio-image">
              <img src={item.image} alt="" />
              <ul>
                <li>
                  <a href="">
                    <BsCodeSlash size={22} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FiExternalLink size={22} />
                  </a>
                </li>
              </ul>
            </div>
            <h6>{item.title}</h6>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuComp;
