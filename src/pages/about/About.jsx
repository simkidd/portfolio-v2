import React from "react";
import "./about.scss";
import Title from "../../components/title/Title";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } },
  };

  return (
    <div className="about">
      <div className="main__layout about">
        <motion.div
          className="about__inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="title__wrap">
            <Title title="About" span="About" />
          </div>
          <div></div>
        </motion.div>
        <motion.div
          className="about__inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.p className="about__left" variants={textVariants}>
              Hi, I'm John, nice to meet you. Please take a look around.
            </motion.p>
          </div>
          <div>
            <motion.p className="about__right" variants={textVariants}>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for individuals and small businesses. What would you do if you had
              a software expert available at your fingertips?
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="about__inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div></div>
          <ul className="social__icons">
            <li>
              <motion.a
                // href={Resume}
                download
                variants={iconVariants}
                whileHover="hover"
                className="resume"
              >
                Resume
                <BsFillPersonLinesFill size={30} />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="mailto:johnmsn22@gmail.com"
                variants={iconVariants}
                whileHover="hover"
                className="mail"
              >
                Email
                <HiOutlineMail size={30} />
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
