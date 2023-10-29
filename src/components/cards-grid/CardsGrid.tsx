import React from "react";
import { motion } from "framer-motion";
import { BsCodeSlash } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IPortfolio } from "../../interface/portfolio.interface";
import "./cards-grid.scss";

interface ICard {
  items: IPortfolio[];
}

const CardsGrid: React.FC<ICard> = ({ items }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, delay: 1 } },
  };

  return (
    <div className="grid__wrapper">
      {items.map((item) => (
        <motion.div
          className="grid__item"
          key={item.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid__item__image">
            <img src={item.image} alt="" />
            <ul>
              {item.isPublic && (
                <li>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <BsCodeSlash size={22} />
                  </a>
                </li>
              )}
              <li>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <FiExternalLink size={22} />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid__item__link">
            <Link to={`/works/${item.id}-${item.slug}`}>
              {item.title}
            </Link>
          </div>
        </motion.div>
      )).reverse()}
    </div>
  );
};

export default CardsGrid;
