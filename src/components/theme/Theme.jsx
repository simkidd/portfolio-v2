import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

const Theme = () => {
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <ThemeToggler>
      <div className="light-dark-mode">
        <button onClick={themeToggler}>
          {theme === "dark-theme" ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
      </div>
    </ThemeToggler>
  );
};

export default Theme;

const ThemeToggler = styled.div`
  position: fixed;
  right: 5px;
  bottom: 10%;
  z-index: 50;

  button {
    background: var(--backgroundLightColor2);
    color: var(--whiteColor);
    border: none;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;
