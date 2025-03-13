import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A cool project about web development.",
    image: "/assets/project1.jpg", // Replace with actual image path
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Project Two",
    description: "An AI-based project using Python.",
    image: "/assets/project2.jpg",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A mobile app built with React Native.",
    image: "/assets/project3.jpg",
    link: "/projects/3",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1>Projects & Leadership</h1>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <Link to={project.link} key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
