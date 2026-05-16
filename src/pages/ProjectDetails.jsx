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

    </section>
  );
}

export default ProjectDetails;