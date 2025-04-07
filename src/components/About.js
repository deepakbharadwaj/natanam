import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import '../styles/About.css';
import aboutImage from '../assets/about-image.png';
import danceVideo from '../assets/bharatanatyam-video.mp4';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.playbackRate = 1.2;
    }
  }, []);

  return (
    <div className="about">
      <div className="video-section">
        <video 
          ref={videoRef}
          autoPlay 
          //muted={false}
          loop
          playsInline
        >
          <source src={danceVideo} type="video/mp4" />
        </video>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>About Natanam Foundation</h2>
          <p>
          Natanam Foundation, Bangalore, established in 1994 with the blessings and guidance of Guru Dr. D Sarvotthama Kamath, has been a nurturing ground for countless students under the artistic direction of Vid. S Vidya Murali. Affiliated with the Bangiya Sangeet Parishad, Kolkata, the foundation offers annual exams to students from its associated centers.

          </p>
          <p>
          Team Natanam, the foundation’s dynamic performing wing, is led by Krupa Ramachandran, whose pursuit of precision and visual geometry inspires her fellow dancers. The team has toured across India, captivating audiences at prestigious festivals and events with their spellbinding performances.

          </p>
          <p>

In addition to its artistic endeavors, Natanam Foundation also runs Aharya Costumes and Dance Needs, a dedicated costume rental wing that caters to the needs of dancers, offering a range of exquisitely designed Bharatanatyam and semi-classical costumes.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Bharatanatyam Performance" />
        </div>
      </div>

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
    </div>
  );
};

export default About;


