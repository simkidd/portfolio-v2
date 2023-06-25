import React, { useState } from "react";
import Title from "../../components/title/Title";
import MenuComp from "../../components/menuComp/MenuComp";
import { portfolios } from "../../data/porfolioData";

const Works = () => {
  // const [menuItems, setMenuItems] = useState(portfolios);

  return (
    <div className="works">
      <div className="main__layout">
        <Title title="Works" span="Works" />
        <div className="inner__layout">
          <MenuComp menuItems={portfolios} />
        </div>
      </div>
    </div>
  );
};

export default Works;
