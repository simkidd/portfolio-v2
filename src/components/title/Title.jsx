import React from "react";
import styled from "styled-components";

const Title = ({ title, span }) => {
  return (
    <TitleWrapper>
      <p>
        {title} <span>{span}</span>
      </p>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
  position: relative;
  p {
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 36px;
    padding-bottom: 0.7rem;
    display: inline;
    color: var(--whiteColor);
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: 0.33rem;
      background: var(--primaryColor);
      left: 0;
      border-radius: 15px;
    }
    span {
      font-weight: 900;
      color: rgba(25, 29, 43, 0.3);
      font-size: 5rem;
      position: absolute;
      top: 30%;
      left: 0;
      z-index: -1;
    }
  }
`;
