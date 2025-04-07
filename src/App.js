import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Founder from './components/Founder';
import Classes from './components/Classes';
import Costumes from './components/Costumes';
import Jewellery from './components/Jewellery';
import Examinations from './components/Examinations';
import Festivals from './components/Festivals';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Upcomings from './components/Upcomings';
import WhatsAppButton from './components/WhatsAppButton';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setCurrentSection={setCurrentSection} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/costumes" element={<Costumes />} />
            <Route path="/jewellery" element={<Jewellery />} />
            <Route path="/examinations" element={<Examinations />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/upcomings" element={<Upcomings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;