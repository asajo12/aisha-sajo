import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Emory FSA",
    description: "Leadership: Event Coodinator, Senior Advisory Board",
    link: "/projects/1",
  },
  {
    id: 3,
    title: "PROJECT Emory",
    description: "Leadership: Project Coodinator",
    link: "/projects/3",
  },
  {
    id: 2,
    title: "Asian Health Alliance",
    description: "Leadership: Event Coodinator",
    link: "/projects/2",
  },
  {
    id: 4,
    title: "AI's Influence on the Job Market",
    description: "Project",
    link: "/projects/4",
  },
  {
    id: 5,
    title: "Bed, Bath, and Beyond Basic",
    description: "Project",
    link: "/projects/5",
  },
  {
    id: 6,
    title: "Arrythmia: Horror, Rhythm Game",
    description: "Project",
    link: "/projects/6",
  },
  
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1>Projects & Leadership</h1>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <Link to={project.link} key={project.id} className={styles.projectCard}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
