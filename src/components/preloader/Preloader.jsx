import React from "react";
import "./preloader.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Preloader = () => {
  const [text] = useTypewriter({
    words: ["oniDev"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="preloader__wrapper">
        <h2 className="type__text">
          <span>{text}</span>
          <Cursor cursorStyle="<" cursorColor="pink" />
        </h2>
      </div>

      {/* <div className="preloader__wrapper">
      <h2 data-text="oniDev" className="animated-text">
        oniDev
      </h2>
    </div> */}
    </>
  );
};

export default Preloader;
