import React from "react";
import styled from "styled-components";

interface ITab {
  activeTab: string;
  onTabClick: (tab: string) => void;
  categories: string[];
}

const TabButtons: React.FC<ITab> = ({ activeTab, onTabClick, categories }) => {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <ButtonWrap>
      {categories.map((category) => (
        <button
          key={category}
          className={activeTab === category ? "active" : ""}
          onClick={() => onTabClick(category)}
        >
          {capitalize(category)}
        </button>
      ))}
    </ButtonWrap>
  );
};

export default TabButtons;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  button {
    background-color: var(--backgroundLightColor2);
    color: var(--whiteColor);
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: var(--primaryColor); 
    }

    &.active {
      background-color: var(--secondaryColor);
    }
  }
`;
