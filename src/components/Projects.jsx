import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleTechSelect = (tech) => {
    setSelectedTech(tech);
    if (tech === null) {
      setFilteredProjects(projects);
    } else {
    
      const filtered = projects.filter((project) =>
        project.techStack.some(
          (stack) => stack.trim().toLowerCase() === tech.toLowerCase().trim()
        )
      );
      setFilteredProjects(filtered);
    }
  };

  
  const sortedProjects = projects.sort((a, b) => a.sequence - b.sequence);

  return (
    <section id="projects">
      <h1>Projects</h1>
      <nav className="sortbar">
        <ul>
          <li
            onClick={() => handleTechSelect(null)}
            className={selectedTech === null ? "active" : ""}
          >
            All
          </li>
          {["Reactjs", "Nextjs", "Mern", "CSS", "TailwindCSS"].map(
            (tech, index) => (
              <li
                key={index}
                onClick={() => handleTechSelect(tech)}
                className={selectedTech === tech ? "active" : ""}
              >
                {tech}
              </li>
            )
          )}
        </ul>
      </nav>
      <div className="project-container">
      
        {filteredProjects.length === 0
          ? sortedProjects.filter((project)=> project.enabled).map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          : filteredProjects.filter((project)=> project.enabled).map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
      </div>
      <div className="last-project-div">
        <Link className="view-more">View More</Link>
      </div>
    </section>
  );
};

export default Projects;
