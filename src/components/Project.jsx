import { Link } from "react-router-dom";
import { projects } from "../data"; // Import your projects data

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            <img src={project.img} alt={project.title} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
