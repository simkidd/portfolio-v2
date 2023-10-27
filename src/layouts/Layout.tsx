import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import Socials from "../components/social/Socials";
import Theme from "../components/theme/Theme";
import Preloader from "../components/preloader/Preloader";

const Layout = () => {
  const [navShow, setNavShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    // Simulate an asynchronous task or API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Set theme class on document root element
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      setTheme("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  };

  return (
    <div className="app__container">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Sidebar navShow={navShow} setNavShow={setNavShow} />
          <button
            className="menuOpen__btn"
            onClick={() => setNavShow(!navShow)}
          >
            <FaBars size={20} />
          </button>
          <Socials />
          <Theme theme={theme} themeToggler={themeToggler} />
          <div className="main__content">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
