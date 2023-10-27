import React from "react";
import "./home.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const hiVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
  };
  const introVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 1 } },
  };
  const textVariants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.9 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.8 } },
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
          <motion.p className="greetings" variants={hiVariants}>
            Hi, I<span>'</span>m
          </motion.p>
          <motion.h1 className="name" variants={textVariants2}>
            John Mason
          </motion.h1>
          <motion.h2 variants={textVariants2}>
            I'm a<span> Frontend Developer</span>
          </motion.h2>
          <motion.p className="text" variants={introVariants}>
            I'm a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. I'm currently focused on building responsive frontends of web applications.
          </motion.p>
          <motion.div variants={buttonVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <Button>
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
