import React, { useState, useEffect } from "react";
import { Link, useMatch } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const matchHome = useMatch("/");
  const matchServices = useMatch("/services");
  const matchSkills = useMatch("/skills");
  const matchProjects = useMatch("/projects");
  const matchResume = useMatch("/resume");
  const matchContact = useMatch("/contact");

  useEffect(() => {
    if (matchHome) {
      setActiveLink(0);
    } else if (matchServices) {
      setActiveLink(1);
    } else if (matchSkills) {
      setActiveLink(2);
    } else if (matchProjects) {
      setActiveLink(3);
    } else if (matchResume) {
      setActiveLink(4);
    } else if (matchContact) {
      setActiveLink(5);
    }
  }, [
    matchHome,
    matchServices,
    matchSkills,
    matchProjects,
    matchResume,
    matchContact,
  ]);

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-link");
    const selectedNavItem = navItems[activeLink];
    const offsetLeft = Array.from(navItems).reduce((acc, navItem, i) => {
      if (i < activeLink) {
        acc += navItem.getBoundingClientRect().width;
      }
      return acc;
    }, 0);

    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(${offsetLeft}px)`;
    slider.style.width = `${selectedNavItem.getBoundingClientRect().width}px`;
  }, [activeLink]);

  return (
    <div className="navbar-div">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              background:
                "linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <label className="menuButton" htmlFor="check">
              <input className="menu-icon" type="checkbox" id="check" />
              <span className="top"></span>
              <span className="mid"></span>
              <span className="bot"></span>
            </label>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setActiveLink(0)}
              >
                Home
              </Link>
              <Link
                className="nav-link"
                to="/services"
                onClick={() => setActiveLink(1)}
              >
                Services
              </Link>
              <Link
                className="nav-link"
                to="/skills"
                onClick={() => setActiveLink(2)}
              >
                Skills
              </Link>
              <Link
                className="nav-link"
                to="/projects"
                onClick={() => setActiveLink(3)}
              >
                Projects
              </Link>
              <Link
                className="nav-link"
                to="/resume"
                onClick={() => setActiveLink(4)}
              >
                Resume
              </Link>
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => setActiveLink(5)}
              >
                Contact
              </Link>
              
              <div className="slider"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
