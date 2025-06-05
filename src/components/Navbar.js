import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/bharatanatyam-logo.webp";

const Navbar = ({ setCurrentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section) => {
    setCurrentSection(section);
    navigate(`/${section === "home" ? "" : section}`);
    setMenuOpen(false); // Close menu on navigation
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
    <nav className="navbar custom-navbar">
      <div className="navbar-section navbar-left">
        <div className="navbar-brand" onClick={() => handleNavClick("home")}>  
          <img src={logo} alt="Bharatanatyam Mudra" className="nav-logo" />
          <div className="brand-text">
            <h1>NATANAM</h1>
            <h2>FOUNDATION</h2>
            <p className="brand-tagline">Classical Dance Academy</p>
          </div>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="navbar-section navbar-center hide-on-mobile">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavClick(item.path)}
            className={
              location.pathname === `/${item.path === "home" ? "" : item.path}`
                ? "active"
                : ""
            }
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="vertical-line hide-on-mobile"></div>
      <div className="navbar-section navbar-right hide-on-mobile">
        <button
          className="signup-btn"
          onClick={() => window.open("https://www.instagram.com/kruparamachandran_dancer/", "_blank")}
        >
          Instagram
        </button>
      </div>
      {/* Hamburger icon for mobile */}
      <button
        className={`navbar-burger${menuOpen ? " active" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`navbar-menu-mobile${menuOpen ? " open" : ""}`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        <div className="navbar-menu-mobile-content">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={
                location.pathname === `/${item.path === "home" ? "" : item.path}`
                  ? "active"
                  : ""
              }
              role="menuitem"
            >
              {item.name}
            </button>
          ))}
          <button
            className="signup-btn mobile-signup-btn"
            onClick={() => {
              window.open("https://www.instagram.com/kruparamachandran_dancer/", "_blank");
              setMenuOpen(false);
            }}
            role="menuitem"
          >
            Instagram
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;