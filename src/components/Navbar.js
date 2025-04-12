import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/bharatanatyam-logo.webp";

const Navbar = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setIsOpen(false);
    setCurrentSection(section);
    navigate(`/${section === "home" ? "" : section}`);
  };

  const navItems = [
    { name: "Home", path: "home" },
    { name: "Classes", path: "classes" },
    { name: "Costumes", path: "costumes" },
    { name: "Examinations", path: "examinations" },
    { name: "Festivals", path: "festivals" },
    { name: "Gallery", path: "gallery" },
    { name: "Upcomings", path: "upcomings" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-brand" onClick={() => handleNavClick("home")}>
            <div className="brand-container">
              <img src={logo} alt="Bharatanatyam Mudra" className="nav-logo" />
              <div className="brand-text">
                <h1>NATANAM</h1>
                <h2>FOUNDATION</h2>
                <p className="brand-tagline">Classical Dance Academy</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="navbar-right">
          <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={location.pathname === `/${item.path === "home" ? "" : item.path}` ? "active" : ""}
                style={{ '--i': index }}
              >
                <span>{item.name}</span>
                <div className="hover-indicator"></div>
              </button>
            ))}
          </div>
          <div className={`navbar-burger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;