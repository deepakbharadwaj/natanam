import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";

// Lazy load all other components
const About = React.lazy(() => import("./components/About"));
const Founder = React.lazy(() => import("./components/Founder"));
const Classes = React.lazy(() => import("./components/Classes"));
const Costumes = React.lazy(() => import("./components/Costumes"));
const Jewellery = React.lazy(() => import("./components/Jewellery"));
const Examinations = React.lazy(() => import("./components/Examinations"));
const Festivals = React.lazy(() => import("./components/Festivals"));
const Events = React.lazy(() => import("./components/Events"));
const Gallery = React.lazy(() => import("./components/Gallery"));
const Upcomings = React.lazy(() => import("./components/Upcomings"));
const Contact = React.lazy(() => import("./components/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setCurrentSection={setCurrentSection} />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </main>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
