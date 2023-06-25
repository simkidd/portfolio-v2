import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import Socials from "../components/social/Socials";

const Layout = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="app__container">
      <Sidebar navShow={navShow} setNavShow={setNavShow} />
      <div className="menu__btn">
        <FaBars size={24} onClick={() => setNavShow(!navShow)} />
      </div>
      <Socials />
      <div className="main__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
