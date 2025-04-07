import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/bharatanatyam-logo.png';

const Navbar = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section) => {
    setIsOpen(false);
    setCurrentSection(section);
    navigate(`/${section === 'home' ? '' : section}`);
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
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <a href="/"><button onClick={() => handleNavClick('home')} className={location.pathname === '/' ? 'active' : ''}>Home</button></a>
        <a href="/about"><button onClick={() => handleNavClick('about')} className={location.pathname === '/about' ? 'active' : ''}>About</button></a>
        <a href="/founder"><button onClick={() => handleNavClick('founder')} className={location.pathname === '/founder' ? 'active' : ''}>Founder</button></a>
        <a href="/classes"><button onClick={() => handleNavClick('classes')} className={location.pathname === '/classes' ? 'active' : ''}>Classes</button></a>
        <a href="/costumes"><button onClick={() => handleNavClick('costumes')} className={location.pathname === '/costumes' ? 'active' : ''}>Costumes</button></a>
        <a href="/examinations"><button onClick={() => handleNavClick('examinations')} className={location.pathname === '/examinations' ? 'active' : ''}>Examinations</button></a>
        <a href="/festivals"><button onClick={() => handleNavClick('festivals')} className={location.pathname === '/festivals' ? 'active' : ''}>Festivals</button></a>
        <a href="/events"><button onClick={() => handleNavClick('events')} className={location.pathname === '/events'? 'active' : ''}>Events</button></a>
        <a href="/gallery"><button onClick={() => handleNavClick('gallery')} className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</button></a>
        <a href="/upcomings"><button onClick={() => handleNavClick('upcomings')} className={location.pathname === '/upcomings'? 'active' : ''}>Upcomings</button></a>
        <a href="/contact"><button onClick={() => handleNavClick('contact')} className={location.pathname === '/contact' ? 'active' : ''}>Contact</button></a>
      </div>
      <div 
        className={`navbar-burger ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;