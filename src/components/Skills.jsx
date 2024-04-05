import React from "react";
import SkillCard from "./SkillCard";

const Skills = ({ skills }) => {
  const sortedSkills = skills.sort((a, b) => a.sequence - b.sequence);

  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skill-container">
        {sortedSkills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
