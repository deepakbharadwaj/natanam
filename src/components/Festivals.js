import React from 'react';
import '../styles/Festivals.css';

import festivalVideo from '../assets/festivalvideo.mp4';
// Import Natyanjali 2023 images
import natyanjali2023_1 from '../assets/natyanjali2023_1.jpg';
import natyanjali2023_2 from '../assets/natyanjali2023_2.jpg';
import natyanjali2023_3 from '../assets/natyanjali2023_3.jpg';
import natyanjali2023_4 from '../assets/natyanjali2023_4.jpg';

// Import Natyanjali 2024 images
import natyanjali2024_1 from '../assets/natyanjali2024_1.png';
import natyanjali2024_2 from '../assets/natyanjali2024_2.png';
import natyanjali2024_3 from '../assets/natyanjali2024_3.png';
import natyanjali2024_4 from '../assets/natyanjali2024_4.png';

// Import Natyanjali 2025 images
import natyanjali2025_1 from '../assets/natyanjali2025_1.png';
import natyanjali2025_2 from '../assets/natyanjali2025_2.png';
import natyanjali2025_3 from '../assets/natyanjali2025_3.png';
import natyanjali2025_4 from '../assets/natyanjali2025_4.png';
import natyanjali2025_5 from '../assets/natyanjali2025_5.png';
import natyanjali2025_6 from '../assets/natyanjali2025_6.png';
import natyanjali2025_7 from '../assets/natyanjali2025_7.png';
import natyanjali2025_8 from '../assets/natyanjali2025_8.png';
import natyanjali2025_9 from '../assets/natyanjali2025_9.png';

const natyanjali2023Images = [natyanjali2023_1, natyanjali2023_2, natyanjali2023_3, natyanjali2023_4];
const natyanjali2024Images = [natyanjali2024_1, natyanjali2024_2, natyanjali2024_3, natyanjali2024_4];
const natyanjali2025Images = [
  natyanjali2025_1, natyanjali2025_2, natyanjali2025_3, natyanjali2025_4,
  natyanjali2025_5, natyanjali2025_6, natyanjali2025_7, natyanjali2025_8,
  natyanjali2025_9
];


const Festivals = () => {
  return (
    <div className="festivals-page">
      <div className="festival-video-container">
        <video autoPlay loop className="festival-video">
          <source src={festivalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      
      <div className="festival-hero">
        <h1>Our Sacred Festivals</h1>
        <div className="divine-line"></div>
      </div>

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
                <div className="festival-gallery">
                  <div className="gallery-container">
                    <div className="gallery-track">
                      {natyanjali2025Images.map((img, idx) => (
                        <div key={idx} className="gallery-slide">
                          <img 
                            src={img} 
                            alt={`Natyanjali 2025 ${idx + 1}`}
                            onClick={() => window.open(img, '_blank')}
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
                <div className="festival-gallery">
                  <div className="gallery-container">
                    <div className="gallery-track">
                      {natyanjali2024Images.map((img, idx) => (
                        <div key={idx} className="gallery-slide">
                          <img 
                            src={img} 
                            alt={`Natyanjali 2024 ${idx + 1}`}
                            onClick={() => window.open(img, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="year">2023</div>
              <div className="content">
                <p>Organised in two spiritual venues</p>
                <p>250+ participants</p>
                <p>100 captivating performances</p>
                <div className="festival-gallery">
                  <div className="gallery-container">
                    <div className="gallery-track">
                      {natyanjali2023Images.map((img, idx) => (
                        <div key={idx} className="gallery-slide">
                          <img 
                            src={img} 
                            alt={`Natyanjali 2023 ${idx + 1}`}
                            onClick={() => window.open(img, '_blank')}
                          />
                        </div>
                      ))}
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
        <p className="share-description">We'd love to hear about your experience at our festivals!</p>
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
  );
};

export default Festivals;