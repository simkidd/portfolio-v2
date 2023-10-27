import React from "react";
import styled from "styled-components";

interface IButton {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButton> = ({ 
  children, 
  className, 
  type
}) => {
  return (
    <PrimaryButton
      type={type}
      className={className}

    >
      {children}
    </PrimaryButton>
  );
};

export default Button;

const PrimaryButton = styled.button`
  color: inherit;
  border: 2px solid var(--borderColor);
  background: transparent;
  /* background: var(--primaryColor); */
  margin: 1.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: fit-content;
  transition: all 0.3s ease-in-out;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.5;
  }

  &:hover::before {
    width: 100%;
    background: var(--primaryColor);
  }
`;
