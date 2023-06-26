import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import Socials from "../components/social/Socials";
import Theme from "../components/theme/Theme";

const Layout = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="app__container">
      <Sidebar navShow={navShow} setNavShow={setNavShow} />
      <button className="menu__btn" onClick={() => setNavShow(!navShow)}>
        <FaBars size={20} />
      </button>
      <Socials />
      <Theme />
      <div className="main__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
