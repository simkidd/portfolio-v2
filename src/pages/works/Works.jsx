import React, { useEffect, useState } from "react";
import Title from "../../components/title/Title";
import { portfolios } from "../../data/porfolioData";
import styled from "styled-components";
import TabButtons from "../../components/buttons/TabButtons";
import CardsGrid from "../../components/cards-grid/CardsGrid";

const Works = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter menu items based on active tab
  const filteredItems =
    activeTab === "All"
      ? portfolios
      : portfolios.filter((item) => item.category === activeTab);

  // Utility function to get unique categories from menu items
  const getCategories = () => {
    const categories = portfolios.map((item) => item.category);
    return ["All", ...new Set(categories)];
  };

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <WorksWrapper>
      <div className="main__layout">
        <Title title="Works" span="Works" />
        <div className="inner__layout">
          <TabButtons
            activeTab={activeTab}
            onTabClick={handleTabClick}
            categories={getCategories()}
          />
          <CardsGrid items={filteredItems} loading={loading} />
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
