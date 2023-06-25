import React, { useState } from "react";
import Title from "../../components/title/Title";
import MenuComp from "../../components/menuComp/MenuComp";
import { portfolios } from "../../data/porfolioData";
import styled from "styled-components";

const Works = () => {
  // const [menuItems, setMenuItems] = useState(portfolios);

  return (
    <WorksWrapper>
      <div className="main__layout">
        <Title title="Works" span="Works" />
        <div className="inner__layout">
          <MenuComp menuItems={portfolios} />
        </div>
      </div>
    </WorksWrapper>
  );
};

export default Works;

const WorksWrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 3rem;
  }
`;
