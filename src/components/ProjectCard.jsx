import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image.url} alt={project.title} />
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-link">
          <Link className="links" to={project.githuburl}>
            GitHub link
          </Link>
          <Link className="links" to={project.liveurl}>
            Live link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
