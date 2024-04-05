import React, { useState, useEffect } from "react";

const SkillCard = ({ skill }) => {
  const [displayedPercentage, setDisplayedPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedPercentage < skill.percentage) {
        setDisplayedPercentage((prevPercentage) => prevPercentage + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [displayedPercentage, skill.percentage]);

  return (
    <div className="skill-card">
      <img className="skill-img" src={skill.image.url} alt={skill.name} />
      <div className="skill-details">
        <h2>{skill.name}</h2>
        <p className="percentage">{displayedPercentage}%</p>
        <i className="waste1"></i>
        <i className="waste2"></i>
      </div>
    </div>
  );
};

export default SkillCard;
