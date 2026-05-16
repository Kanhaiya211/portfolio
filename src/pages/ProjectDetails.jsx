import { useParams } from "react-router-dom";

import projects from "../data/projects";

import "../styles/ProjectDetails.css";

function ProjectDetails() {

  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === Number(id)
  );

  return (
    <section className="project-details">

      <img
        src={project.image}
        alt={project.title}
      />

      <h1>{project.title}</h1>

      <p>{project.description}</p>

      <div className="tech-stack">

        {project.tech.map((tech, index) => (
          <span key={index}>
            {tech}
          </span>
        ))}

      </div>

      <div className="project-links">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>

      </div>

    </section>
  );
}

export default ProjectDetails;