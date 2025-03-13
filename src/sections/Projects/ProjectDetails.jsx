import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProjectDetails.module.css";

const projectData = {
  1: { title: "Project One", description: "More details about Project One.", image: "/assets/project1.jpg" },
  2: { title: "Project Two", description: "More details about Project Two.", image: "/assets/project2.jpg" },
  3: { title: "Project Three", description: "More details about Project Three.", image: "/assets/project3.jpg" },
};

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div className={styles.projectContainer}>
      <img src={project.image} alt={project.title} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {/* Back to Home Button */}
      <button className={styles.backButton} onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
}

export default ProjectDetails;
