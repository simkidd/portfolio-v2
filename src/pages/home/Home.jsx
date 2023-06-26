import React from "react";
import "./home.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } },
    hover: { scale: 1.1 },
  };

  return (
    <div className="home">
      <div className="main__layout home">
        <motion.div
          className="home__container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="greetings" variants={textVariants}>
            Hi, I<span>'</span>m
          </motion.p>
          <motion.h1 className="name" variants={textVariants}>
            John Mason
          </motion.h1>
          <motion.h2 variants={textVariants}>
            I'm a<span> Frontend Developer</span>
          </motion.h2>
          <motion.p className="text" variants={textVariants}>
            I'm a frontend developer specializing in building (and occasionally
            designing) exceptional digital experiences. I'm currently focused
            on building responsive frontends of web applications.
          </motion.p>
          <motion.div variants={buttonVariants}>
            <Button
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <Link to="/works">
                View Work
                <HiArrowNarrowRight style={{ marginLeft: "0.75rem" }} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
