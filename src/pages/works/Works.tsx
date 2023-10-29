import { useState } from "react";
import styled from "styled-components";
// import TabButtons from "../../components/buttons/TabButtons";
import { motion } from "framer-motion";
import CardsGrid from "../../components/cards-grid/CardsGrid";
import Title from "../../components/title/Title";
import { projects } from "../../data/projects.data";

const Works = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Filter menu items based on active tab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((item) => item.category === activeTab);

  // Utility function to get unique categories from menu items
  const getCategories = () => {
    const categories = projects.map((item) => item.category);
    return ["all", ...new Set(categories)];
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };


  return (
    <WorksWrapper>
      <div className="main__layout">
        <div className="works__wrap">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <Title title="Works" span="Works" />
          </motion.div>

          <motion.div
            className="inner__layout"
          >
            {/* <TabButtons
              activeTab={activeTab}
              onTabClick={handleTabClick}
              categories={getCategories()}
            /> */}
            <CardsGrid items={filteredProjects} />
          </motion.div>
        </div>
      </div>
    </WorksWrapper>
  );
};

export default Works;

const WorksWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  .works__wrap{
  max-width: 1000px;
  margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    padding-top: 3rem;
  }
`;
