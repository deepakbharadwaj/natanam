import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/bharatanatyam-logo.png";

const Navbar = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section) => {
    setIsOpen(false);
    setCurrentSection(section);
    navigate(`/${section === "home" ? "" : section}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-container">
          <img src={logo} alt="Bharatanatyam Mudra" className="nav-logo" />
          <div className="brand-text">
            <h1>NATANAM</h1>
            <h2>FOUNDATION</h2>
            <p className="brand-tagline">Classical Dance Academy</p>
          </div>
        </div>
      </div>
      <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <button
          onClick={() => handleNavClick("home")}
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </button>
        <button
          onClick={() => handleNavClick("about")}
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </button>
        <button
          onClick={() => handleNavClick("founder")}
          className={location.pathname === "/founder" ? "active" : ""}
        >
          Founder
        </button>
        <button
          onClick={() => handleNavClick("classes")}
          className={location.pathname === "/classes" ? "active" : ""}
        >
          Classes
        </button>
        <button
          onClick={() => handleNavClick("costumes")}
          className={location.pathname === "/costumes" ? "active" : ""}
        >
          Costumes
        </button>
        <button
          onClick={() => handleNavClick("examinations")}
          className={location.pathname === "/examinations" ? "active" : ""}
        >
          Examinations
        </button>
        <button
          onClick={() => handleNavClick("festivals")}
          className={location.pathname === "/festivals" ? "active" : ""}
        >
          Festivals
        </button>
        <button
          onClick={() => handleNavClick("events")}
          className={location.pathname === "/events" ? "active" : ""}
        >
          Events
        </button>
        <button
          onClick={() => handleNavClick("gallery")}
          className={location.pathname === "/gallery" ? "active" : ""}
        >
          Gallery
        </button>
        <button
          onClick={() => handleNavClick("upcomings")}
          className={location.pathname === "/upcomings" ? "active" : ""}
        >
          Upcomings
        </button>
        <button
          onClick={() => handleNavClick("contact")}
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>
      <div className={`navbar-burger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
