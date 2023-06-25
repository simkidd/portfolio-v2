import React from "react";
import Title from "../../components/title/Title";
import "./skills.scss";
import { Data } from "../../data/skillsData";

const Skills = () => {
  return (
    <div className="skills">
      <div className="main__layout">
        <div className="skills__wrap">
          <div>
            <Title title="Skills" span="Skills" />
            <p className="subtitle">
              // These are the technologies I've worked with
            </p>
          </div>

          <div className="skills__inner">
            {Data.map((skill, i) => (
              <div className="skill__card" key={i}>
                <img src={skill.icon} alt="" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
