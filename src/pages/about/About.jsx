import React from "react";
import "./about.scss";
import Title from "../../components/title/Title";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="main__layout about">
        <div className="about__inner">
          <div className="title__wrap">
            <Title title="About" span="About" />
          </div>
          <div></div>
        </div>
        <div className="about__inner">
          <div>
            <p className="about__left">
              Hi, I'm John, nice to meet you, Please take a look around.
            </p>
          </div>
          <div>
            <p className="about__right">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for individuals and small-business. What would you do if you had a
              software expert available at your fingertips?
            </p>
          </div>
        </div>
        <div className="about__inner">
          <div></div>
          <ul className="social__icons">
            <li>
              <a
                // href={Resume}
                download
              >
                Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
            <li>
              <Link to="mailto:johnmsn22@gmail.com">
                Email
                <HiOutlineMail size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
