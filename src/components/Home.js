import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


// Import all images
import navarasa1 from '../assets/navarasa1.webp';
import navarasa2 from '../assets/navarasa2.webp';
import navarasa3 from '../assets/navarasa3.webp';
import navarasa4 from '../assets/navarasa4.webp';
import navarasa5 from '../assets/navarasa5.webp';
import navarasa6 from '../assets/navarasa6.webp';
import navarasa7 from '../assets/navarasa7.webp';
import rangotsavam2023_1 from '../assets/rangotsavam2023_1.webp';
import rangotsavam2023_2 from '../assets/rangotsavam2023_2.webp';
import rangotsavam2023_3 from '../assets/rangotsavam2023_3.webp';
import rangotsavam2023_4 from '../assets/rangotsavam2023_4.webp';
import rangotsavam2023_5 from '../assets/rangotsavam2023_5.webp';
import rangotsavam2023_6 from '../assets/rangotsavam2023_6.webp';
import rangotsavam2023_7 from '../assets/rangotsavam2023_7.webp';
import rangotsavam2024_1 from '../assets/rangotsavam2024_1.webp';
import rangotsavam2024_2 from '../assets/rangotsavam2024_2.webp';
import rangotsavam2024_3 from '../assets/rangotsavam2024_3.webp';
import rangotsavam2024_4 from '../assets/rangotsavam2024_4.webp';
import rangotsavam2024_5 from '../assets/rangotsavam2024_5.webp';
import rangotsavam2024_6 from '../assets/rangotsavam2024_6.webp';
import rangotsavam2024_7 from '../assets/rangotsavam2024_7.webp';
import rangotsavam2024_8 from '../assets/rangotsavam2024_8.webp';
import rangotsavam2024_9 from '../assets/rangotsavam2024_9.webp';
import al4s_1 from '../assets/al4s_1.webp';
import digital2023_1 from '../assets/digital2023_1.webp';
import digital2023_2 from '../assets/digital2023_2.webp';
import digital2023_3 from '../assets/digital2023_3.webp';
import digital2023_4 from '../assets/digital2023_4.webp';
import digital2024_1 from '../assets/digital2024_1.webp';
import digital2024_2 from '../assets/digital2024_2.webp';
import digital2024_3 from '../assets/digital2024_3.webp';
import digital2024_4 from '../assets/digital2024_4.webp';
import digital2024_5 from '../assets/digital2024_5.webp';
import digital2024_6 from '../assets/digital2024_6.webp';
import krishnajanmastami1 from '../assets/krishnajanmastami1.webp';
import krishnajanmastami2 from '../assets/krishnajanmastami2.webp';
import krishnajanmastami3 from '../assets/krishnajanmastami3.webp';
import krishnajanmastami4 from '../assets/krishnajanmastami4.webp';
import krishnajanmastami5 from '../assets/krishnajanmastami5.webp';
import republicday1 from '../assets/republicday1.webp';
import republicday2 from '../assets/republicday2.webp';
import republicday3 from '../assets/republicday3.webp';
import republicday4 from '../assets/republicday4.webp';
import republicday5 from '../assets/republicday5.webp';
import solo1 from '../assets/solo1.webp';
import solo2 from '../assets/solo2.webp';
import solo3 from '../assets/solo3.webp';
import solo4 from '../assets/solo4.webp';
import solo5 from '../assets/solo5.webp';
import solo6 from '../assets/solo6.webp';
import solo7 from '../assets/solo7.webp';
import vadakkum2023_1 from '../assets/vadakkum2023_1.webp';
import yuvadasara_1 from '../assets/yuvadasara_1.webp';
import aboutImage from '../assets/about-image.webp';
import danceVideo from '../assets/bharatanatyam-video.webm';
import founderImage from '../assets/About1.webp';
import backgroundImage from '../assets/About3.webp';

const Home = () => {
  const [activeYear, setActiveYear] = useState("2024");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Image arrays
  const navarasaImages = [navarasa1, navarasa2, navarasa3, navarasa4, navarasa5, navarasa6, navarasa7];
  const rangotsavam2023Images = [
    rangotsavam2023_1, rangotsavam2023_2, rangotsavam2023_3, rangotsavam2023_4,
    rangotsavam2023_5, rangotsavam2023_6, rangotsavam2023_7
  ];
  const rangotsavam2024Images = [
    rangotsavam2024_1, rangotsavam2024_2, rangotsavam2024_3, rangotsavam2024_4,
    rangotsavam2024_5, rangotsavam2024_6, rangotsavam2024_7, rangotsavam2024_8, rangotsavam2024_9
  ];
  const al4sImages = [al4s_1];
  const digitalImages2023 = [digital2023_1, digital2023_2, digital2023_3, digital2023_4];
  const digitalImages2024 = [
    digital2024_1, digital2024_2, digital2024_3, digital2024_4, digital2024_5, digital2024_6
  ];
  const krishnajanmastamiImages = [
    krishnajanmastami1, krishnajanmastami2, krishnajanmastami3, krishnajanmastami4, krishnajanmastami5
  ];
  const republicdayImages = [republicday1, republicday2, republicday3, republicday4, republicday5];
  const soloImages = [solo1, solo2, solo3, solo4, solo5, solo6, solo7];
  const vadakkum2023Images = [vadakkum2023_1];
  const yuvadasaraImages = [yuvadasara_1];

  // Milestones data
  const milestones = [
    { year: "1994", achievement: "Inception of Natanam School of Bharatanatyam", description: "Started with a vision to preserve and promote Bharatanatyam", icon: "🏫" },
    { year: "2013", achievement: "Affiliation with Bangiya Sangit Parishad", description: "International recognition for exams in the field of Indian Dance & Music", icon: "🌏" },
    { year: "2014", achievement: "Inception of Natanam Foundation", description: "Expanding the horizons of Indian Classical Arts", icon: "🏢" },
    { year: "2022", achievement: "Launch of Aaharya Costumes and Dance Needs", description: "Premium rental for Classical & Semi-Classical Costumes and Accessories", icon: "💃" },
    { year: "2020", achievement: "Digital Innovation in Indian Classical Arts", description: "Online Digital Productions, Courses and Workshops", icon: "💻" },
    { year: "2023", achievement: "Excellence in Dance", description: "Recognized as leading Bharatanatyam institution", icon: "🏆" },
  ];

  // Events data by year
  const years = {
    2024: {
      majorPerformances: [
        {
          title: "Republic Day Celebration – Kartavya Path, New Delhi",
          date: "January 26, 2024",
          description: "Team Natanam, led by Krupa, performed with 1500 dancers representing Naari Shakthi before the Honorable President and Prime Minister.",
          images: republicdayImages,
        },
        {
          title: "Krishna Janmashtami Celebrations",
          date: "August 26, 2024",
          description: "Hosted at Lotus Convention Centre with student performances.",
          images: krishnajanmastamiImages,
        },
        {
          title: "Yuva Dasara Competition",
          description: "Team Natanam secured third place at this prestigious event.",
          images: yuvadasaraImages,
        },
        {
          title: "Rangotsavam 2024",
          date: "November 17, 2024",
          description: "The grand annual day celebration at Krishnadevaraya Auditorium.",
          images: rangotsavam2024Images,
        },
      ],
      digitalProductions: [
        {
          title: "Digital Productions 2024",
          description: "Creative digital dance works including Veera Raja Veera and Sambho Mahadeva",
          images: digitalImages2024,
        },
      ],
    },
    2023: {
      majorPerformances: [
        {
          title: "AL4S Charitable Trust Event",
          date: "January 8, 2023",
          description: "Team Natanam performed at Chowdiah Memorial, Bangalore.",
          images: al4sImages,
        },
        {
          title: "Vadakkumnathan Temple Performance",
          date: "February 7, 2023",
          description: "Team Natanam performed at this prestigious temple in Thrissur, Kerala.",
          images: vadakkum2023Images,
        },
        {
          title: "Rangotsavam 2023",
          date: "November 2023",
          description: "The annual showcase of students at Krishnadevaraya Auditorium, Bangalore.",
          images: rangotsavam2023Images,
        },
      ],
      workshopsTraining: [
        {
          title: "Navarasa Sadhana Workshop",
          date: "April 2023",
          description: "Intensive workshop on Navarasas by Guru G Venu (Natanakairali).",
          images: navarasaImages,
        },
      ],
      soloCollaborative: [
        {
          title: "Recitals across India",
          description: "Krupa's solo performances across prestigious event.",
          images: soloImages,
        },
      ],
      digitalProductions: [
        {
          title: "Digital Works 2023",
          description: "Creative digital dance productions from 2023",
          images: digitalImages2023,
        },
      ],
    },
  };

  // Handle video mute/unmute when in view
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const videoRect = videoRef.current.getBoundingClientRect();
        const isVideoInView = (
          videoRect.top <= (window.innerHeight || document.documentElement.clientHeight) / 2 &&
          videoRect.bottom >= (window.innerHeight || document.documentElement.clientHeight) / 2
        );
        setIsVideoMuted(!isVideoInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video autoplay effect
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.playbackRate = 1.2;
    }
  }, []);

  // Component for event cards
  const EventCard = ({ event }) => {
    return (
      <div className="event-card">
        {event.images && event.images.length > 0 ? (
          <div className="slideshow-container">
            {event.images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="slide-image"
                style={{
                  animationDelay: `${imgIndex * 4}s`,
                  zIndex: event.images.length - imgIndex,
                }}
              >
                <img src={img} alt={`${event.title} ${imgIndex + 1}`} className="event-image" />
              </div>
            ))}
          </div>
        ) : (
          <div className="event-image-space">
            <div className="placeholder-text">Natanam</div>
          </div>
        )}
        <div className="event-details">
          <h3>{event.title}</h3>
          {event.date && <p className="event-date">{event.date}</p>}
          <p>{event.description}</p>
        </div>
      </div>
    );
  };

  const handleVideoPlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setIsVideoMuted(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Component for horizontal scrolling event cards
  const HorizontalEventCard = ({ event }) => {
    const baseAnimationDuration = 4;
    const animationDuration = event.images.length * baseAnimationDuration;

    return (
      <div className="horizontal-event-card">
        {event.images && event.images.length > 0 ? (
          <div className="horizontal-slideshow">
            {event.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`${event.title} ${imgIndex + 1}`}
                className="horizontal-event-image"
                style={{
                  animationDelay: `${imgIndex * baseAnimationDuration}s`,
                  animationDuration: `${animationDuration}s`,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="horizontal-image-placeholder">
            <span>Natanam</span>
          </div>
        )}
        <div className="horizontal-event-details">
          <h3>{event.title}</h3>
          {event.date && <p className="event-date">{event.date}</p>}
          <p>{event.description}</p>
        </div>
      </div>
    );
  };

  // Component for sliding image event cards
  const SlidingEventCard = ({ event }) => {
    return (
      <div className="sliding-event-card">
        <div className="sliding-image-container">
          {event.images && event.images.length > 0 ? (
            <div className="sliding-image-wrapper">
              {event.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${event.title} ${index + 1}`}
                  className="sliding-image"
                />
              ))}
            </div>
          ) : (
            <div className="event-image-space">
              <div className="placeholder-text">Natanam</div>
            </div>
          )}
        </div>
        <div className="sliding-event-details">
          <h3>{event.title}</h3>
          {event.date && <p className="event-date">{event.date}</p>}
          <p>{event.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="home-page">
      <style jsx global>{`
        /* Global Styles */
        :root {
          --skin-light: #f5e6d8;
          --skin-medium: #e6c9a8;
          --skin-dark: #d2a679;
          --brown-light: #8b5a2b;
          --brown-medium: #5d4037;
          --brown-dark: #3e2723;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Poppins', sans-serif;
          color: var(--brown-dark);
          overflow-x: hidden;
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 10px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--skin-light);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--brown-medium);
          border-radius: 10px;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideFade {
          0%, 100% { opacity: 0; }
          5%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
        }

        @keyframes slideHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        /* Hero Section */
        .home-page {
          background-color: var(--skin-light);
        }

        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('../assets/bharatanatyam-bg.webm');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(1px);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          max-width: 800px;
          padding: 2rem;
        }

        .hero-tagline {
          font-size: 2.5rem;
          font-family: 'Playfair Display', serif;
          line-height: 1.6;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          margin: 20px 0;
          animation: fadeIn 1.5s ease-out;
          letter-spacing: 0.5px;
        }

        /* About Section */
        .about-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, #fff5eb, #fff);
        }

        .video-container {
          width: 100%;
          height: 60vh;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
        }

        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
        }

        .about-content {
          display: flex;
          gap: 60px;
          margin: 80px auto;
          max-width: 1200px;
          align-items: center;
          background: rgba(255, 248, 240, 0.8);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
        }

        .about-text {
          flex: 1;
          padding-right: 20px;
        }

        .about-text h2 {
          font-size: 2.5rem;
          color: var(--brown-light);
          margin-bottom: 30px;
          position: relative;
          font-family: 'Playfair Display', serif;
        }

        .about-text h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(to right, var(--brown-light), var(--skin-dark));
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--brown-medium);
          text-align: justify;
          margin-bottom: 20px;
        }

        .about-image {
          flex: 1;
          position: relative;
          transform: perspective(1000px) rotateY(-1deg);
          transition: transform 0.5s ease;
        }

        .about-image:hover {
          transform: perspective(1000px) rotateY(0);
        }

        .about-image img {
          width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(139, 69, 19, 0.2);
        }

        /* Stats Section */
        .stats-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 40px;
          margin: 0 auto 80px;
          max-width: 1200px;
          background: rgba(139, 69, 19, 0.05);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(139, 69, 19, 0.05);
          gap: 20px;
        }

        .stat-item {
          text-align: center;
          color: var(--brown-light);
          transition: transform 0.3s ease;
          padding: 20px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          min-width: 120px;
          flex: 1;
          max-width: 200px;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.95);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 10px;
          background: linear-gradient(45deg, var(--brown-light), var(--skin-dark));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        @media (max-width: 1024px) {
  .stats-container {
    padding: 30px;
    gap: 15px;
  }
  .stat-item {
    min-width: 140px;
  }
}

@media (max-width: 768px) {
  .stat-number {
    font-size: 2.2rem;
  }
  .stat-item p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 10px;
    padding: 20px 10px;
  }
  .stat-number {
    font-size: 1.8rem;
  }
  .stat-item p {
    font-size: 0.9rem;
  }
  .stat-item {
    padding: 15px 10px;
    min-width: auto;
    max-width: none;
  }
}

        .stat-item p {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--brown-medium);
        }

        /* Founder Section */
        .founder-section {
          background: var(--skin-light);
          overflow: hidden;
          position: relative;
        }

        .founder-hero {
          height: 45vh;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                      url('../assets/About3.webp');
          background-size: cover;
          background-position: center 95%;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .founder-intro h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: fadeInUp 1s ease;
        }

        .founder-profile-container {
          padding: 80px 5%;
          margin-top: -100px;
        }

        .founder-profile-wrapper {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 60px;
          padding: 40px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .founder-image-container {
          flex: 0 0 400px;
        }

        .founder-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(139, 69, 19, 0.2);
        }

        .founder-image img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .founder-image:hover img {
          transform: scale(1.05);
        }

        .founder-credentials {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        .founder-credentials span {
          background: linear-gradient(45deg, var(--brown-light), var(--skin-dark));
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          text-align: center;
          box-shadow: 0 5px 15px rgba(139, 69, 19, 0.2);
        }

        .founder-details {
          flex: 1;
          padding: 20px 0;
        }

        .founder-details h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          background: linear-gradient(45deg, var(--brown-light), var(--skin-dark));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .founder-title {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }

        .founder-quote {
          margin: 30px 0;
          padding: 20px;
          border-left: 4px solid var(--brown-light);
          background: var(--skin-light);
          border-radius: 0 10px 10px 0;
        }

        .founder-quote blockquote {
          font-size: 1.2rem;
          font-style: italic;
          color: #333;
          line-height: 1.6;
        }

        .founder-bio {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
        }

        /* Journey Section */
        .journey-section {
          padding: 80px 5%;
          background: #fff8DC;
          text-align: center;
        }

        .journey-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #333;
        }

        .milestone-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 50px;
        }

        .milestone-card {
          background: white;
          border: 1px solid rgba(139, 69, 19, 0.1);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-align: center;
        }

        .milestone-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(139, 69, 19, 0.15);
        }

        .milestone-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .milestone-year {
          color: var(--brown-light);
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .milestone-card h3 {
          color: #333;
          margin-bottom: 15px;
        }

        .milestone-card p {
          color: #666;
          line-height: 1.6;
        }

        /* Achievements Banner */
        .achievements-banner {
          background: linear-gradient(45deg, var(--brown-light), var(--skin-dark));
          padding: 30px 5%;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 30px;
          color: white;
        }

        .achievement-stat {
          text-align: center;
        }

        .achievement-stat .number {
          font-size: 2.5rem;
          font-weight: bold;
          display: block;
          margin-bottom: 10px;
        }

        .achievement-stat .label {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
  .achievements-banner {
    gap: 20px;
    padding: 25px 5%;
  }
  .achievement-stat .number {
    font-size: 2rem;
  }
  .achievement-stat .label {
    font-size: 0.9rem;
  }
}

/* Mobile - Vertical Layout */
/* Alternative Mobile Design */
@media (max-width: 480px) {
  .achievements-banner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 15px;
  }
  .achievement-stat {
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 12px;
    flex-direction: column;
    text-align: center;
    border-bottom: none;
  }
  .achievement-stat .number {
    font-size: 1.6rem;
    margin-bottom: 5px;
    min-width: auto;
  }
  .achievement-stat .label {
    text-align: center;
    font-size: 0.8rem;
  }
}

        /* Events Section */
        .events-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, white, var(--skin-light));
        }

        .events-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .events-header h1 {
          font-size: 3rem;
          font-family: 'Playfair Display', serif;
          color: var(--brown-dark);
          margin-bottom: 20px;
        }

        .year-selector {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .year-btn {
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid var(--brown-light);
          background: transparent;
          color: var(--brown-light);
        }

        .year-btn:hover {
          background: rgba(139, 69, 19, 0.1);
        }

        .year-btn.active {
          background: var(--brown-light);
          color: white;
          box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
        }

        .events-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .events-category {
          margin-bottom: 60px;
        }

        .events-category h2 {
          font-size: 2rem;
          font-family: 'Playfair Display', serif;
          color: var(--brown-dark);
          margin-bottom: 30px;
          padding-left: 15px;
          border-left: 4px solid var(--brown-light);
        }

        /* Event Cards */
        .event-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .event-image-space {
          height: 220px;
          background: linear-gradient(45deg, var(--skin-light), var(--skin-medium));
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-text {
          color: rgba(0, 0, 0, 0.05);
          font-size: 2.5rem;
          font-weight: 700;
        }

        .slideshow-container {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          animation: slideFade 16s infinite;
        }

        .event-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .event-card:hover .event-image {
          transform: scale(1.03);
        }

        .event-details {
          padding: 1.2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .event-details h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--brown-dark);
          transition: color 0.3s ease;
        }

        .event-card:hover .event-details h3 {
          color: var(--brown-medium);
        }

        .event-date {
          color: var(--skin-dark);
          font-weight: 600;
          margin-bottom: 0.8rem;
          font-size: 0.85rem;
        }

        .event-details p {
          margin-bottom: 0;
          color: var(--brown-medium);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Horizontal Event Cards */
        .horizontal-scroll-container {
          overflow-x: auto;
          white-space: nowrap;
          padding-bottom: 15px;
          -webkit-overflow-scrolling: touch;
          padding: 15px;
          width: 100%;
        }

        .scroll-content {
          display: flex;
        }

        .horizontal-event-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          width: calc(30% - 30px);
          min-width: calc(30% - 30px);
          min-height: 550px;
          white-space: normal;
          height: auto;
          display: inline-block;
          margin-right: 30px;
          margin-bottom: 15px;
          flex: none;
          animation: slideIn 0.5s ease-out;
        }

        .horizontal-event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .horizontal-slideshow {
          height: 300px;
          position: relative;
          overflow: hidden;
        }

        .horizontal-event-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          animation: slideFade 10s infinite ease-in-out;
        }

        .horizontal-image-placeholder {
          height: 300px;
          background: linear-gradient(45deg, var(--skin-light), var(--skin-medium));
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .horizontal-event-details {
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
        }

        .horizontal-event-details h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--brown-dark);
          transition: color 0.3s ease;
        }

        .horizontal-event-card:hover .horizontal-event-details h3 {
          color: var(--brown-medium);
        }

        /* Sliding Event Cards */
        .sliding-event-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-right: 20px;
          width: 100%;
          min-width: 0;
          max-width: none;
          transition: transform 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.5s ease-out;
        }

        .sliding-event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .sliding-image-container {
          height: 300px;
          position: relative;
          overflow: hidden;
        }

        .sliding-image-wrapper {
          display: flex;
          height: 100%;
          animation: slideHorizontal 20s linear infinite;
        }

        .sliding-image {
          width: auto;
          height: 100%;
          object-fit: cover;
          flex-shrink: 0;
          margin-right: 20px;
        }

        .sliding-event-details {
          padding: 1rem;
        }

        .sliding-event-details h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--brown-dark);
        }

        .sliding-event-details p {
          font-size: 0.9rem;
          color: var(--brown-medium);
          line-height: 1.4;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .founder-profile-wrapper {
            flex-direction: column;
          }

          .founder-image-container {
            flex: none;
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
          }

          .about-content {
            flex-direction: column;
          }

          .horizontal-event-card {
            width: calc(40% - 20px);
            min-width: calc(40% - 20px);
          }
        }

        @media (max-width: 768px) {
          .hero-tagline {
            font-size: 2rem;
          }

          .about-text h2, .founder-details h2, .journey-section h2 {
            font-size: 2rem;
          }

          .video-container {
            height: 40vh;
          }

          .founder-hero {
            height: 35vh;
          }

          .founder-intro h1 {
            font-size: 3rem;
          }

          .founder-profile-container {
            margin-top: -50px;
          }

          .events-header h1 {
            font-size: 2.5rem;
          }

          .horizontal-event-card {
            width: calc(70% - 20px);
            min-width: calc(70% - 20px);
            min-height: 500px;
          }

          .horizontal-slideshow, .sliding-image-container {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-tagline {
            font-size: 1.6rem;
            line-height: 1.3;
          }

          .video-container {
            height: 30vh;
          }

          .about-content {
            padding: 30px;
          }

          .stat-item {
            width: 100%;
          }

          .milestone-grid {
            grid-template-columns: 1fr;
          }

          .achievement-stat {
            flex: 0 0 100%;
          }

          .events-header h1 {
            font-size: 2rem;
          }

          .year-btn {
            padding: 6px 15px;
            font-size: 0.9rem;
          }

          .horizontal-event-card {
            width: calc(85% - 15px);
            min-width: calc(85% - 15px);
            min-height: 450px;
          }

          .horizontal-slideshow, .sliding-image-container {
            height: 200px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-tagline">
            "Bharatanatyam - where divine grace meets earthly expression, each movement telling stories of ancient wisdom through the language of dance."
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="video-container">
          <section className="relative w-full h-[60vh] overflow-hidden group">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          <video
            ref={videoRef}
            loop
            muted={isVideoMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={danceVideo} type="video/webm" />
          </video>

          {/* Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleVideoPlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-white/20 backdrop-blur-sm rounded-full p-4 
                     group-hover:opacity-100 opacity-0 transition-opacity duration-300"
          >
            {isPlaying ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-12 h-12"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <path d="M8 5v14l11-7z" />
              </motion.svg>
            ) : (
              <motion.div
                className="w-12 h-12 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-12 h-12"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </motion.div>
            )}
          </motion.button>

          {/* Video Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isPlaying ? 0 : 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black pointer-events-none"
          />
        </motion.div>

        {/* Video Caption */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
        >
          <p className="text-white text-center text-lg md:text-xl">
            Experience the grace of Bharatanatyam
          </p>
        </motion.div>
      </section>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>About Natanam Foundation</h2>
            <p>
              Natanam Foundation, Bangalore, established in 1994 with the blessings and guidance of
              Guru Dr. D Sarvotthama Kamath, has been a nurturing ground for countless students under
              the artistic direction of Vid. S Vidya Murali. Affiliated with the Bangiya Sangeet
              Parishad, Kolkata, the foundation offers annual exams to students from its associated
              centers.
            </p>
            <p>
              Team Natanam, the foundation's dynamic performing wing, is led by Krupa Ramachandran,
              whose pursuit of precision and visual geometry inspires her fellow dancers. The team has
              toured across India, captivating audiences at prestigious festivals and events with
              their spellbinding performances.
            </p>
            <p>
              In addition to its artistic endeavors, Natanam Foundation also runs Aharya Costumes and
              Dance Needs, a dedicated costume rental wing that caters to the needs of dancers,
              offering a range of exquisitely designed Bharatanatyam and semi-classical costumes.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="Bharatanatyam Performance" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-container" ref={ref}>
          <div className="stat-item">
            <div className="stat-number">
              {inView && <CountUp start={0} end={30} duration={2.5} suffix="+" />}
            </div>
            <p>Years of Legacy</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {inView && <CountUp start={0} end={3000} duration={2.5} suffix="+" />}
            </div>
            <p>Students</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {inView && <CountUp start={0} end={500} duration={2.5} suffix="+" />}
            </div>
            <p>Performances</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {inView && <CountUp start={0} end={10} duration={2.5} suffix="+" />}
            </div>
            <p>Arangetrams</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {inView && <CountUp start={0} end={50} duration={2.5} suffix="+" />}
            </div>
            <p>Awards</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {inView && <CountUp start={0} end={1000} duration={2.5} suffix="+" />}
            </div>
            <p>Followers</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-hero">
          <div className="founder-intro">
            <h1 className="animate-fadeIn">Our Legacy</h1>
          </div>
        </div>

        <div className="founder-profile-container">
          <div className="founder-profile-wrapper">
            <div className="founder-image-container">
              <div className="founder-image">
                <img src={founderImage} alt="Founder" />
              </div>
              <div className="founder-credentials">
                <span>30+ Years of Service in Arts</span>
                <span>Professional danseuse</span>
                <span>Acclaimed Guru</span>
              </div>
            </div>
            <div className="founder-details">
              <h2>Vid. S Vidya Murali</h2>
              <p className="founder-title">Artistic Director & Bharatanatyam Guru</p>
              <div className="founder-quote">
                <blockquote>
                  "Dance is the hidden language of the soul, and through Bharatanatyam, we discover
                  its most beautiful expressions."
                </blockquote>
              </div>
              <div className="founder-bio">
                <p>
                  Vidya Murali, fondly known among her students, is a distinguished Bharatanatyam
                  danseuse, teacher, and organizer, embodying the role of a nurturing mentor. She
                  embarked on her journey in dance at the age of 10, captivated by the elegance of
                  Bharatanatyam. Her passion led her to pursue formal training in the art form
                  throughout her Bachelor's and Master's degrees at Bangalore University.
                </p>
                <p>
                  Vidya has showcased her talent in numerous dance dramas under the direction of her
                  esteemed Guru, Dr. D. Sarvothama Kamath of Bangalore University. She has also
                  performed under the guidance of Acharya Ranjani Ganesan Ramesh of Kalakshetra,
                  contributing to renowned productions such as *Dashavatara* and *Navarasa Shiva Shakti.
                </p>
                <p>
                  Beyond her performances, Vidya is an accomplished choreographer, having
                  conceptualized and presented several notable pieces, including *Ganesha Vandanam,
                  Hari Hara, Shanmukha, Kalinga Mardhanam,* and *Krishnam Vande Jagadgurum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="journey-section">
          <h2>
            <b>Our Journey</b>
          </h2>
          <div className="milestone-grid">
            {milestones.map((milestone, index) => (
              <div className="milestone-card" key={index}>
                <div className="milestone-icon animate-bounce">{milestone.icon}</div>
                <div className="milestone-year">{milestone.year}</div>
                <h3>{milestone.achievement}</h3>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-banner">
          <div className="achievement-stat">
            <span className="number">3000+</span>
            <span className="label">Students Trained</span>
          </div>
          <div className="achievement-stat">
            <span className="number">500+</span>
            <span className="label">Stage Productions</span>
          </div>
          <div className="achievement-stat">
            <span className="number">50+</span>
            <span className="label">International Shows</span>
          </div>
          <div className="achievement-stat">
            <span className="number">50+</span>
            <span className="label">Awards Received</span>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="events-header">
          <h1 className="animate-fadeIn">Achievements & Performances</h1>
          <div className="year-selector">
            {Object.keys(years).map((year) => (
              <button
                key={year}
                className={`year-btn ${activeYear === year ? "active" : ""}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="events-content">
          <div className="events-category">
            <h2>Major Performances & Festivals</h2>
            <div className="horizontal-scroll-container">
              <div className="scroll-content">
                {years[activeYear].majorPerformances.map((event, index) => (
                  <HorizontalEventCard key={index} event={event} />
                ))}
              </div>
            </div>
          </div>

          {years[activeYear].digitalProductions && (
            <div className="events-category">
              <h2>Digital Productions</h2>
              <div className="horizontal-scroll-container">
                <div className="scroll-content">
                  {years[activeYear].digitalProductions.map((production, index) => (
                    <SlidingEventCard key={index} event={production} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeYear === "2023" && years[activeYear].workshopsTraining && (
            <div className="events-category">
              <h2>Workshops & Training</h2>
              <div className="horizontal-scroll-container">
                <div className="scroll-content">
                  {years[activeYear].workshopsTraining.map((workshop, index) => (
                    <SlidingEventCard key={index} event={workshop} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeYear === "2023" && years[activeYear].soloCollaborative && (
            <div className="events-category">
              <h2>Solo Performances</h2>
              <div className="horizontal-scroll-container">
                <div className="scroll-content">
                  {years[activeYear].soloCollaborative.map((performance, index) => (
                    <SlidingEventCard key={index} event={performance} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;