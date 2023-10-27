import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import './theme.scss'
import { ThemeContext, ThemeMode } from "../../context/theme.context";


const Theme: React.FC = () => {
  const { theme, themeToggler } = useContext(ThemeContext)


  return (
    <div className="theme__toggler">
      <button onClick={themeToggler}>
        {theme === ThemeMode.Dark ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
};

export default Theme;
