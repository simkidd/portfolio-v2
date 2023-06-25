import React from "react";
import styled from "styled-components";

const Button = ({ children, className, type }) => {
  return (
    <PrimaryButton type={type} className={className}>
      {children}
    </PrimaryButton>
  );
};

export default Button;

const PrimaryButton = styled.button`
  color: #fff;
  border: 2px solid #ccc;
  background: none;
  margin: 1.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: fit-content;
  transition: all 0.3s ease-in-out;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.5;
  }

  &:hover::after {
    width: 100%;
    background: red;
  }
`;
