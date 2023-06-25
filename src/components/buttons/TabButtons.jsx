import React from "react";
import styled from "styled-components";

const TabButtons = ({ activeTab, onTabClick, categories }) => {
  const capitalize = (str) => {
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
    background-color: gray;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: lightgray;
    }

    &.active{
        background-color: red;
    }
  }
`;
