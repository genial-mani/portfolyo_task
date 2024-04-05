import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Accordian from "./Accordian";

const Resume = ({ timeline }) => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  if (!timeline) {
    return <Loader />;
  }

  // const sortedProjects = projects.sort((a, b) => a.sequence - b.sequence);

  useEffect(() => {
    let edu = timeline.filter((e) => e.forEducation);
    edu = edu.sort((a,b) => a.sequence - b.sequence);
    let exp = timeline.filter((e) => !e.forEducation);
    exp = exp.sort((a,b) => a.sequence - b.sequence);
    setEducation(edu);
    setExperience(exp);
    console.log(education);
    console.log(experience);
  }, []);
  return (
    <section id="resume">
      <h1>Resume</h1>
      {education.length > 0 && experience.length > 0 ? (
        <div className="resume-container" style={{display: "flex",flexWrap: "wrap"}}>
          <div className="education">
            <div className="accordion" id="accordionExample">
              {education &&
                education.map((ed, i) => (
                  <Accordian key={ed._id} temp={"ed"} ed={ed} i={i}/>
                ))}
            </div>
          </div>
          <div className="experience">
          <div className="accordion" id="accordionExample">
              {experience &&
                experience.map((ed, i) => (
                  <Accordian key={ed._id} temp={"ex"} ed={ed} i={i}/>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Resume;
