import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProjectDetails.module.css";

import fsaLogo from "../../assets/FSA Logo (3).png";
import fsaSummit from "../../assets/fsasummit.png";
import halohalo from "../../assets/halohalo.png";

import ahaLotus from "../../assets/AHA_Lotus.png";

import projectImage from "../../assets/projectEmoryLogo.png";
import projGroup1 from "../../assets/projGroup1.png"
import projGroup2 from "../../assets/projGroup2.png"

import robot from "../../assets/robot.webp"
import airbnb from "../../assets/AirBNB.webp"
import heart from "../../assets/arrGame.png"
import girl from "../../assets/arrGirl.png"

const projectData = {
  1: { 
    title: "FSA Events Coordinator", 
    textColor: "#333",
    fontSize: "18px",
    content: [
      { image: fsaLogo, text: "I served as the Events Coordinator for Emory's Filipino Student Association, fostering connections with Filipino youth, communities, and businesses through impactful outreach and dynamic events." },
      { text: "Through my role, I worked with my FSA team to plan and execute large-scale events that brought together hundreds of students to celebrate Filipino culture, traditions, and cuisine." },
      { image: fsaSummit, text: "One of our biggest events, our Annual FSA Summit, was a major success in promoting diversity and inclusion on campus, as well as fostering a community between FSAs in GA." },
      { text: "I hope to continue fostering connections and engaging with new people by sharing and celebrating my culture." },
      { image: halohalo, text: "Check out some of our past events that highlight the strength and unity of our community on our instagram!" },
    ],
    socialLinks: { 
      instagram: "https://www.instagram.com/fsaemory/",
    },
  },

  3: { 
    title: "Project Emory Events Coodinator", 
    textColor: "#333",
    fontSize: "18px",
    content: [
      { image: projectImage, text: "Project Emory is a computer science club at Emory University focused on promoting diversity in STEM and fostering creativity through teamwork. The club hosts events like hackathons, weekly coding tutorials, and workshops on software tools such as React. Whether you're a beginner or an experienced coder, Project Emory provides a collaborative space to learn, build, and innovate." },
      { image:projGroup1, text: "As an Events Coordinator for Project Emory, I played a key role in planning, promoting, and executing events that engaged students in computer science and technology. I brainstormed new event ideas, collaborated with team members to organize coding workshops and facilitated connections between students, faculty, and industry professionals. I also managed outreach efforts to increase participation, ensuring that our events were inclusive and accessible to all skill levels. Through this role, I helped create a dynamic and supportive community for learning and innovation in STEM." },
      {image:projGroup2, text:"Check out our Instagram and Linkedin for future updates about our upcoming Hackathon!"},
    ],
    socialLinks: { 
      instagram: "https://www.instagram.com/project_emory_/?hl=en",
      linkedin: "https://www.linkedin.com/company/project-emory/posts/?feedView=all"
    },
  },

  2: { 
    title: "AHA Events Coordinator", 
    textColor: "#333",
    fontSize: "18px",
    content: [
      { image: ahaLotus, text: "Asian Health Alliance is a club committed to advocating for the mental well-being of Asians. In many Asian cultures, mental health is often misunderstood or stigmatized, making it difficult for individuals to seek the support they need. Our mission is to create a safe and inclusive space where these conversations can happen openly, free from judgment. Through workshops, guest speakers, and outreach initiatives, we strive to break the stigma, provide valuable resources, and empower individuals to prioritize their mental health while honoring their cultural identity." },
      { text: "I organized and promoted events through the Hub, doubling student engagement based on reported attendance. Additionally, I designed and created social media posters to enhance student engagement and expand audience reach." },
      {text: "Stay connected with us and explore our latest activities by following us on Instagram!" },
    ],
    socialLinks: { 
      instagram: "https://www.instagram.com/asianhealthalliance/?hl=en"
    },
  },
  4: { 
    title: "AI's Influence on Job Market Dynamics", 
    textColor: "#333",
    fontSize: "18px",
    content: [
      { image: robot, text: "This research examines the impact of AI-driven automation on employment trends by analyzing job market data. Using association rule mining and decision tree classifiers, we identify skills and roles most vulnerable to automation. Our findings offer insights for policymakers, educators, and industry leaders, guiding workforce development and reskilling strategies in an AI-driven economy." },
    ],
    socialLinks: { 
      googledocs: "https://docs.google.com/document/d/1Bie-piPkzo25F47DcxgifDUl0rsa4TwhJ5EdOmqaplk/edit?usp=sharing"
    },
  },
  5: { 
    title: "Bed, Bath, and Beyond Basic", 
    textColor: "#333",
    fontSize: "18px",
    content: [
      { image: airbnb, text: "This project explores predictive modeling to determine how Airbnb amenities influence guest review ratings. Using a dataset of 74,112 listings, we applied machine learning techniques, including K-Nearest Neighbors, Decision Trees, Random Forest, and Multi-Layer Perceptron, to predict which amenities contribute to positive reviews. Unlike previous studies that rely on binary classification, our research offers a nuanced multi-class approach, helping hosts optimize their offerings to enhance guest satisfaction. The findings provide data-driven insights for Airbnb hosts to improve their listings and maximize review scores." },
    ],
    socialLinks: { 
      googledocs: "https://docs.google.com/document/d/1sfIB4Q1OgjSwfF2BbZz4AIF5XUowg_ABYyDPRW9zwlU/edit?usp=sharing",
      github: "https://github.com/asajo12/cs334_Final_Project"
    },
  },
  6: { 
    title: "Arrythmia", 
    textColor: "#333",
    fontSize: "18px",
    content: [
      { image: heart, text: "Arrhythmia is a horror-themed rhythm game developed using the Godot Engine and GDScript, integrating exploration mechanics with rhythm-based combat. The game features procedural interactions, event-driven gameplay logic, and real-time audio synchronization to create a dynamic experience where attacks and obstacles appear in sync with the music." },
      { image: girl, text: "Arrhythmia is built using Godot Engine 4.0 with GDScript for core logic implementation. The game utilizes Finite State Machines (FSMs) to manage character states, enemy AI, and boss fight sequences, ensuring smooth and structured gameplay transitions. The tile-based level design supports exploration and interactive elements, while a custom collision detection system enables precise hitbox timing for dodge-based combat. Event-driven mechanics allow players to interact with doors, NPCs, and collectibles dynamically, while procedural beat mapping synchronizes enemy attack patterns with the background track. The audio synchronization system is powered by Godot’s AudioStreamPlayer, with Fast Fourier Transform (FFT) analysis mapping real-time amplitude variations to visual effects and gameplay triggers. Latency is minimized using frame-based event scheduling, ensuring beat-perfect responsiveness. Player movement is controlled via Arrow Keys, with interactions mapped to the Spacebar, while a custom input buffering system refines timing precision during rhythm battles."
      },
    ],
    socialLinks: { 
      video: "https://drive.google.com/file/d/1es0NWRLbT2HpYf7BTEYSNKFwQyGdfjs4/view",
      github: "https://github.com/Santiagom15/CS-370"
    },
  },
};

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div 
      className={styles.projectContainer}
      style={{ backgroundColor: project.bgColor, color: project.textColor, fontSize: project.fontSize }}
    >
      <h1>{project.title}</h1>

      {/* Blog-Style Content */}
      <div className={styles.blogContent}>
        {project.content.map((section, index) => (
          <div key={index} className={styles.section}>
            {section.image && <img src={section.image} alt={`Project ${id} Image ${index + 1}`} className={styles.projectImage} />}
            {section.text && <p className={styles.projectText}>{section.text}</p>}
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      {project.socialLinks && (
        <div className={styles.socialLinks}>
          {project.socialLinks.instagram && (
            <a href={project.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          )}
          {project.socialLinks.github && (
            <a href={project.socialLinks.github} target="_blank" rel="noopener noreferrer">Github</a>
          )}
          {project.socialLinks.linkedin && (
            <a href={project.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
          )}
    
          {project.socialLinks.googledocs && (
            <a href={project.socialLinks.googledocs} target="_blank" rel="noopener noreferrer">Report</a>
          )}
          {project.socialLinks.video && (
            <a href={project.socialLinks.video} target="_blank" rel="noopener noreferrer">Video</a>
          )}
        </div>
      )}

      {/* Back to Home Button */}
      <button className={styles.backButton} onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
}

export default ProjectDetails;
