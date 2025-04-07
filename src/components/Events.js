import React, { useState } from 'react';
import '../styles/Events.css';

// Import all images
import navarasa1 from '../assets/navarasa1.jpg';
import navarasa2 from '../assets/navarasa2.jpg';
import navarasa3 from '../assets/navarasa3.jpg';
import navarasa4 from '../assets/navarasa4.jpg';
import navarasa5 from '../assets/navarasa5.jpg';
import navarasa6 from '../assets/navarasa6.jpg';
import navarasa7 from '../assets/navarasa7.jpg';

import rangotsavam2023_1 from '../assets/rangotsavam2023_1.png';
import rangotsavam2023_2 from '../assets/rangotsavam2023_2.png';
import rangotsavam2023_3 from '../assets/rangotsavam2023_3.png';
import rangotsavam2023_4 from '../assets/rangotsavam2023_4.png';
import rangotsavam2023_5 from '../assets/rangotsavam2023_5.png';
import rangotsavam2023_6 from '../assets/rangotsavam2023_6.png';
import rangotsavam2023_7 from '../assets/rangotsavam2023_7.png';

import rangotsavam2024_1 from '../assets/rangotsavam2024_1.png';
import rangotsavam2024_2 from '../assets/rangotsavam2024_2.png';
import rangotsavam2024_3 from '../assets/rangotsavam2024_3.png';
import rangotsavam2024_4 from '../assets/rangotsavam2024_4.png';
import rangotsavam2024_5 from '../assets/rangotsavam2024_5.png';
import rangotsavam2024_6 from '../assets/rangotsavam2024_6.png';
import rangotsavam2024_7 from '../assets/rangotsavam2024_7.png';
import rangotsavam2024_8 from '../assets/rangotsavam2024_8.png';
import rangotsavam2024_9 from '../assets/rangotsavam2024_9.png';

import al4s_1 from '../assets/al4s_1.png';

import digital2023_1 from '../assets/digital2023_1.png';
import digital2023_2 from '../assets/digital2023_2.png';
import digital2023_3 from '../assets/digital2023_3.png';
import digital2023_4 from '../assets/digital2023_4.png';
import digital2024_1 from '../assets/digital2024_1.png';
import digital2024_2 from '../assets/digital2024_2.png';
import digital2024_3 from '../assets/digital2024_3.png';
import digital2024_4 from '../assets/digital2024_4.png';
import digital2024_5 from '../assets/digital2024_5.png';
import digital2024_6 from '../assets/digital2024_6.png';

import krishnajanmastami1 from '../assets/krishnajanmastami1.png';
import krishnajanmastami2 from '../assets/krishnajanmastami2.png';
import krishnajanmastami3 from '../assets/krishnajanmastami3.png';
import krishnajanmastami4 from '../assets/krishnajanmastami4.png';
import krishnajanmastami5 from '../assets/krishnajanmastami5.png';

import republicday1 from '../assets/republicday1.png';
import republicday2 from '../assets/republicday2.png';
import republicday3 from '../assets/republicday3.png';
import republicday4 from '../assets/republicday4.png';
import republicday5 from '../assets/republicday5.png';

import solo1 from '../assets/solo1.png';
import solo2 from '../assets/solo2.png';
import solo3 from '../assets/solo3.png';
import solo4 from '../assets/solo4.png';
import solo5 from '../assets/solo5.png';
import solo6 from '../assets/solo6.png';
import solo7 from '../assets/solo7.png';

import vadakkum2023_1 from '../assets/vadakkum2023_1.png';
import yuvadasara_1 from '../assets/yuvadasara_1.png';

// Image arrays
const navarasaImages = [
  navarasa1,
  navarasa2,
  navarasa3,
  navarasa4,
  navarasa5,
  navarasa6,
  navarasa7,
];
const rangotsavam2023Images = [
  rangotsavam2023_1,
  rangotsavam2023_2,
  rangotsavam2023_3,
  rangotsavam2023_4,
  rangotsavam2023_5,
  rangotsavam2023_6,
  rangotsavam2023_7,
];
const rangotsavam2024Images = [
  rangotsavam2024_1,
  rangotsavam2024_2,
  rangotsavam2024_3,
  rangotsavam2024_4,
  rangotsavam2024_5,
  rangotsavam2024_6,
  rangotsavam2024_7,
  rangotsavam2024_8,
  rangotsavam2024_9,
];
const al4sImages = [al4s_1];
const digitalImages2023 = [
  digital2023_1,
  digital2023_2,
  digital2023_3,
  digital2023_4,
];
const digitalImages2024 = [
  digital2024_1,
  digital2024_2,
  digital2024_3,
  digital2024_4,
  digital2024_5,
  digital2024_6,
];
const krishnajanmastamiImages = [
  krishnajanmastami1,
  krishnajanmastami2,
  krishnajanmastami3,
  krishnajanmastami4,
  krishnajanmastami5,
];
const republicdayImages = [
  republicday1,
  republicday2,
  republicday3,
  republicday4,
  republicday5,
];
const soloImages = [solo1, solo2, solo3, solo4, solo5, solo6, solo7];
const vadakkum2023Images = [vadakkum2023_1];
const yuvadasaraImages = [yuvadasara_1];

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
              <img
                src={img}
                alt={`${event.title} ${imgIndex + 1}`}
                className="event-image"
              />
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

const HorizontalEventCard = ({ event }) => {
  const baseAnimationDuration = 4; // seconds per image
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
                animationIterationCount: 'infinite'
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
                style={{ marginRight: '20px' }} // Add space between images
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

const Events = () => {
  const [activeYear, setActiveYear] = useState('2024');

  const years = {
    '2024': {
      majorPerformances: [
        {
          title: 'Republic Day Celebration – Kartavya Path, New Delhi',
          date: 'January 26, 2024',
          description:
            'Team Natanam, led by Krupa, performed with 1500 dancers representing Naari Shakthi before the Honorable President and Prime Minister.',
          images: republicdayImages,
        },
        {
          title: 'Krishna Janmashtami Celebrations',
          date: 'August 26, 2024',
          description:
            'Hosted at Lotus Convention Centre with student performances.',
          images: krishnajanmastamiImages,
        },
        {
          title: 'Yuva Dasara Competition',
          description: 'Team Natanam secured third place at this prestigious event.',
          images: yuvadasaraImages,
        },
        {
          title: 'Rangotsavam 2024',
          date: 'November 17, 2024',
          description:
            'The grand annual day celebration at Krishnadevaraya Auditorium.',
          images: rangotsavam2024Images,
        },
      ],
      digitalProductions: [
        {
          title: 'Digital Productions 2024',
          description:
            'Creative digital dance works including Veera Raja Veera and Sambho Mahadeva',
          images: digitalImages2024,
        },
      ],
    },
    '2023': {
      majorPerformances: [
        {
          title: 'AL4S Charitable Trust Event',
          date: 'January 8, 2023',
          description: 'Team Natanam performed at Chowdiah Memorial, Bangalore.',
          images: al4sImages,
        },
        {
          title: 'Vadakkumnathan Temple Performance',
          date: 'February 7, 2023',
          description:
            'Team Natanam performed at this prestigious temple in Thrissur, Kerala.',
          images: vadakkum2023Images,
        },
        {
          title: 'Rangotsavam 2023',
          date: 'November 2023',
          description:
            'The annual showcase of students at Krishnadevaraya Auditorium, Bangalore.',
          images: rangotsavam2023Images,
        },
      ],
      workshopsTraining: [
        {
          title: 'Navarasa Sadhana Workshop',
          date: 'April 2023',
          description: 'Intensive workshop on Navarasas by Guru G Venu (Natanakairali).',
          images: navarasaImages,
        },
      ],
      soloCollaborative: [
        {
          title: 'Recitals across India',
          description: "Krupa's solo performances across prestigious event.",
          images: soloImages,
        },
      ],
      digitalProductions: [
        {
          title: 'Digital Works 2023',
          description: 'Creative digital dance productions from 2023',
          images: digitalImages2023,
        },
      ],
    },
  };

  return (
    <div className="events-page">
      <div className="events-hero">
        <h1>Achievements & Performances</h1>
        <div className="year-selector">
          {Object.keys(years).map((year) => (
            <button
              key={year}
              className={`year-btn ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="events-content">
        <section className="major-performances">
          <h2>Major Performances & Festivals</h2>
          <div className="horizontal-scroll-section">
            <div className="horizontal-scroll-container">
              <div className="scroll-content">
                {years[activeYear].majorPerformances.map((event, index) => (
                  <HorizontalEventCard key={index} event={event} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {years[activeYear].digitalProductions && (
          <section className="digital-productions full-width-section">
            <h2>Digital Productions</h2>
            <div className="sliding-events-container">
              {years[activeYear].digitalProductions.map((production, index) => (
                <SlidingEventCard key={index} event={production} />
              ))}
            </div>
          </section>
        )}

        {activeYear === '2023' && years[activeYear].workshopsTraining && (
          <section className="workshops-training full-width-section">
            <h2>Workshops & Training</h2>
            <div className="sliding-events-container">
              {years[activeYear].workshopsTraining.map((workshop, index) => (
                <SlidingEventCard key={index} event={workshop} />
              ))}
            </div>
          </section>
        )}

        {activeYear === '2023' && years[activeYear].soloCollaborative && (
          <section className="solo-collaborative full-width-section">
            <h2>Solo Performances</h2>
            <div className="sliding-events-container">
              {years[activeYear].soloCollaborative.map((performance, index) => (
                <SlidingEventCard key={index} event={performance} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Events;
