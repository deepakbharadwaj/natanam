import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import SEO from "./SEO";
import "../styles/About.css";
import aboutImage from "../assets/about-image.webp";
import bharatanatyamVideo from "../assets/bharatanatyam-video.mp4";
import iconImage from "../assets/icon.webp";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (videoRef.current && showVideo) {
      videoRef.current.play();
      videoRef.current.playbackRate = 1.2;
    }
  }, [showVideo]);

  const handleVideoClick = () => {
    if (!showVideo) {
      setShowVideo(true);
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <SEO
        title="About Natanam Foundation | Classical Dance Academy in Bangalore"
        description="Learn about Natanam Foundation, established in 1994 under the guidance of Guru Dr. D Sarvothama Kamath. Discover our rich heritage in teaching Bharatanatyam and classical dance forms in Bangalore."
      />
      <div className="about">
        <div className="video-section">
          {!showVideo ? (
            <div className="video-placeholder" onClick={handleVideoClick}>
              <img src={iconImage} alt="Play Video" className="video-icon" />
              <div className="play-me-text">Play me</div>
            </div>
          ) : (
            <div className="video-container">
              <video
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onClick={handleVideoClick}
              >
                <source src={bharatanatyamVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="mute-button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>About Natanam Foundation</h2>
            <p>
              Natanam Foundation, Bangalore, established in 1994 with the blessings and guidance of
              Guru Dr. D Sarvotthama Kamath, has been a nurturing ground for countless students
              under the artistic direction of Vid. S Vidya Murali. Affiliated with the Bangiya
              Sangeet Parishad, Kolkata, the foundation offers annual exams to students from its
              associated centers.
            </p>
            <p>
              Team Natanam, the foundation's dynamic performing wing, is led by Krupa Ramachandran,
              whose pursuit of precision and visual geometry inspires her fellow dancers. The team
              has toured across India, captivating audiences at prestigious festivals and events
              with their spellbinding performances.
            </p>
            <p>
              In addition to its artistic endeavors, Natanam Foundation also runs Aharya Costumes
              and Dance Needs, a dedicated costume rental wing that caters to the needs of dancers,
              offering a range of exquisitely designed Bharatanatyam and semi-classical costumes.
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
    </>
  );
};

export default About;
