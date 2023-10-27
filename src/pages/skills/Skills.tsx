import { motion } from "framer-motion";
import Title from "../../components/title/Title";
import { Data } from "../../data/skillsData";
import "./skills.scss";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };
  const titleVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, delay: 1 } },
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
          <motion.div
            variants={titleVariants}
          >
            <Title title="Skills" span="Skills" />
            <p className="subtitle">
              // These are the technologies I've worked with
            </p>
          </motion.div>

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
