import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Navbar from './sections/Navbar/Navbar'
import Projects from "./sections/Projects/Projects";
import ProjectDetails from "./sections/Projects/ProjectDetails";

function AppContent() {
  const location = useLocation();

  // Hide navbar on project details pages
  const hideNavbar = location.pathname.startsWith("/projects/");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
