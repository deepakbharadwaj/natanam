import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/Festivals.css";
import SEO from "./SEO";

import festivalVideo from "../assets/festivalvideo.mp4";
import iconImage from "../assets/icon.webp";
import thumbnailImage from "../assets/thumbnail2.webp";
// Import Natyanjali 2023 images
import natyanjali2023_1 from "../assets/natyanjali2023_1.webp";
import natyanjali2023_2 from "../assets/natyanjali2023_2.webp";
import natyanjali2023_3 from "../assets/natyanjali2023_3.webp";
import natyanjali2023_4 from "../assets/natyanjali2023_4.webp";

// Import Natyanjali 2024 images
import natyanjali2024_1 from "../assets/natyanjali2024_1.webp";
import natyanjali2024_2 from "../assets/natyanjali2024_2.webp";
import natyanjali2024_3 from "../assets/natyanjali2024_3.webp";
import natyanjali2024_4 from "../assets/natyanjali2024_4.webp";

// Import Natyanjali 2025 images
import natyanjali2025_1 from "../assets/natyanjali2025_1.webp";
import natyanjali2025_2 from "../assets/natyanjali2025_2.webp";
import natyanjali2025_3 from "../assets/natyanjali2025_3.webp";
import natyanjali2025_4 from "../assets/natyanjali2025_4.webp";
import natyanjali2025_5 from "../assets/natyanjali2025_5.webp";
import natyanjali2025_6 from "../assets/natyanjali2025_6.webp";
import natyanjali2025_7 from "../assets/natyanjali2025_7.webp";
import natyanjali2025_8 from "../assets/natyanjali2025_8.webp";
import natyanjali2025_9 from "../assets/natyanjali2025_9.webp";

const natyanjali2023Images = [
  natyanjali2023_1,
  natyanjali2023_2,
  natyanjali2023_3,
  natyanjali2023_4,
];
const natyanjali2024Images = [
  natyanjali2024_1,
  natyanjali2024_2,
  natyanjali2024_3,
  natyanjali2024_4,
];
const natyanjali2025Images = [
  natyanjali2025_1,
  natyanjali2025_2,
  natyanjali2025_3,
  natyanjali2025_4,
  natyanjali2025_5,
  natyanjali2025_6,
  natyanjali2025_7,
  natyanjali2025_8,
  natyanjali2025_9,
];

const Festivals = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, showVideo]);

  const handleVideoPlayPause = () => {
    if (!showVideo) {
      setShowVideo(true);
      setIsPlaying(true);
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
    setIsMuted(!isMuted);
  };

  // Function to handle manual scrolling for galleries
  const handleGalleryScroll = (e) => {
    const gallery = e.currentTarget;
    const track = gallery.querySelector(".gallery-track");

    // Pause the animation when user interacts
    track.style.animationPlayState = "paused";

    // Resume animation after user stops interacting
    setTimeout(() => {
      track.style.animationPlayState = "running";
    }, 5000);
  };

  return (
    <>
      <SEO
        title="Classical Dance Festivals & Events | Natanam Foundation"
        description="Participate in our classical dance festivals, cultural events, and performances. Experience the rich tradition of Indian classical dance in Bangalore."
      />
      <div className="festivals-page">
        <Helmet>
          <title>Festivals - Natanam Foundation</title>
          <meta
            name="description"
            content="Explore the vibrant festivals celebrated at Natanam Foundation"
          />
        </Helmet>

        <section className="festival-video-container">
          <div className="video-wrapper" onClick={handleVideoPlayPause}>
            {!showVideo ? (
              <>
                <div className="thumbnail-container">
                  <img
                    src={thumbnailImage}
                    alt="Festival Video Thumbnail"
                    className="thumbnail-image"
                  />
                </div>
                <div className="play-content">
                  <img src={iconImage} alt="Play" className="video-icon" />
                  <span className="play-me-text">Play me</span>
                </div>
              </>
            ) : (
              <video
                ref={videoRef}
                className="video-element"
                src={festivalVideo}
                autoPlay
                loop
                playsInline
                muted={isMuted}
              />
            )}
          </div>
          {showVideo && (
            <button className="mute-button" onClick={toggleMute}>
              {isMuted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          )}
        </section>

        {showVideo && <div className="festival-hero"></div>}

        <section className="festival-section">
          <div className="festival-container">
            <h2>Banaswadi Natyanjali</h2>
            <div className="festival-timeline">
              <div className="timeline-item">
                <div className="year">2025</div>
                <div className="content">
                  <p>Organised at the sacred Banaswadi Anjaneya Temple</p>
                  <p>350+ performers from 50+ institutions</p>
                  <p>30 Gurus honored with Natya Kushala and Sangeetha Nipuna Award</p>
                  <div className="festival-gallery" onScroll={handleGalleryScroll}>
                    <div className="gallery-container">
                      <div className="gallery-track">
                        {natyanjali2025Images.map((img, idx) => (
                          <div key={idx} className="gallery-slide">
                            <img
                              src={img}
                              alt={`Natyanjali 2025 ${idx + 1}`}
                              onClick={() => window.open(img, "_blank")}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="year">2024</div>
                <div className="content">
                  <h3>24 Hours of Uninterrupted Seva</h3>
                  <p>250+ artists offering devotion through dance and music</p>
                  <p>25 Gurus honored with Natya Nipuna and Sangeetha Nipuna Award</p>
                  <div className="festival-gallery" onScroll={handleGalleryScroll}>
                    <div className="gallery-container">
                      <div className="gallery-track">
                        {natyanjali2024Images.map((img, idx) => (
                          <div key={idx} className="gallery-slide">
                            <img
                              src={img}
                              alt={`Natyanjali 2024 ${idx + 1}`}
                              onClick={() => window.open(img, "_blank")}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">2023</div>
                <div className="content">
                  <p>Organised in two spiritual venues</p>
                  <p>250+ participants</p>
                  <p>100 captivating performances</p>
                  <div className="festival-gallery" onScroll={handleGalleryScroll}>
                    <div className="gallery-container">
                      <div className="gallery-track">
                        {natyanjali2023Images.map((img, idx) => (
                          <div key={idx} className="gallery-slide">
                            <img
                              src={img}
                              alt={`Natyanjali 2023 ${idx + 1}`}
                              onClick={() => window.open(img, "_blank")}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<section className="festival-section ramotsavam">
          <div className="festival-container">
            <h2>Sri Ramotsavam</h2>
            <div className="festival-content">
              <p className="sacred-text">A divine celebration spanning over three years, offering artists a sacred platform to express their devotion through Classical Dance and Music.</p>
              <div className="photo-gallery large">
                {/* Large photo gallery placeholder }
              </div>
            </div>
          </div>
        </section>*/}

        <div className="photo-upload-section">
          <h3>Share Your Festival Memories</h3>
          <p className="share-description">
            We'd love to hear about your experience at our festivals!
          </p>
          <a
            href="https://forms.gle/yJKgbjWgWuFGAeuJ7"
            target="_blank"
            rel="noopener noreferrer"
            className="share-button"
          >
            Give us a Feedback
          </a>
        </div>
      </div>
    </>
  );
};

export default Festivals;
