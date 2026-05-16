import { useNavigate } from "react-router-dom";
import projects from "../data/projects";
import "../styles/Projects.css";
function Projects() {

  const navigate = useNavigate();

  return (
    <section className="projects-page">

      <h1 className="section-title">
        My Projects
      </h1>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
            onClick={() =>
              navigate(`/project/${project.id}`)
            }
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;