import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import Title from "../../components/title/Title";
import "./about.scss";

const About = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  const textVariants1 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.8 } },
  };
  const textVariants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
  };

  return (
    <div className="about">
      <div className="main__layout about">
        <motion.div
          className="about__inner"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="title__wrap">
            <Title title="About" span="About" />
          </div>
          <div></div>
        </motion.div>
        <div className="about__inner">
          <div>
            <motion.p className="about__left"
              variants={textVariants1}
              initial="hidden"
              animate="visible"
            >
              Hi, I'm John, nice to meet you. Please take a look around.
            </motion.p>
          </div>
          <div>
            <motion.p className="about__right"
              variants={textVariants2}
              initial="hidden"
              animate="visible"
            >
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for individuals and small businesses. What would you do if you had
              a software expert available at your fingertips?
            </motion.p>
          </div>
        </div>

        <motion.div
          className="about__inner"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        >
          <div></div>
          <ul className="social__icons">
            {/* <li>
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
            </li> */}
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
