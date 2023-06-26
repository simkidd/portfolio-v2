import React from "react";
import Title from "../../components/title/Title";
import "./skills.scss";
import { Data } from "../../data/skillsData";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="skills">
      <div className="main__layout">
        <motion.div
          className="skills__wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <Title title="Skills" span="Skills" />
            <p className="subtitle">
              // These are the technologies I've worked with
            </p>
          </div>

          <motion.div className="skills__inner">
            {Data.map((skill, i) => (
              <motion.div
                className="skill__card"
                key={i}
                variants={cardVariants}
              >
                <img src={skill.icon} alt="" />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
