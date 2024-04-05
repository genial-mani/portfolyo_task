import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useAsyncError,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

const App = () => {
  const [about, setAbout] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [social,setSocial] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let apiUrl =
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
        const response = await fetch(apiUrl);
        const result = await response.json();
        console.log(result.user);
        setAbout(result.user.about);
        setTestimonials(result.user.testimonials);
        setServices(result.user.services);
        setSkills(result.user.skills);
        setProjects(result.user.projects);
        setTimeline(result.user.timeline);
        setSocial(result.user.social_handles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home userData={about} social={social} />} />
        <Route
          path="/services"
          element={<Services services={services} testimonials={testimonials} />}
        />
        <Route path="/skills" element={<Skills skills={skills} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/resume" element={<Resume  timeline={timeline}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
