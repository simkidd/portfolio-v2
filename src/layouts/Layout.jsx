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

  useEffect(() => {
    // Simulate an asynchronous task or API call
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="app__container">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Sidebar navShow={navShow} setNavShow={setNavShow} />
          <button className="menuOpen__btn" onClick={() => setNavShow(!navShow)}>
            <FaBars size={20} />
          </button>
          <Socials />
          <Theme />
          <div className="main__content">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
