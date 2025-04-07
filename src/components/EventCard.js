// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      {event.images ? (
        <div className="slideshow-container">
          {event.images.map((img, imgIndex) => (
            <div 
              key={imgIndex} 
              className="slide-image"
              style={{ 
                animationDelay: `${imgIndex}s`,
                zIndex: event.images.length - imgIndex 
              }}
            >
              <img src={img} alt={`${event.title} ${imgIndex + 1}`} />
            </div>
          ))}
        </div>
      ) : (
        <div className="event-image-space"></div>
      )}
      <div className="event-details">
        <h3>{event.title}</h3>
        {event.date && <p className="event-date">{event.date}</p>}
        <p>{event.description}</p>
        {event.events && (
          <div className="sub-events">
            {event.events.map((subEvent, idx) => (
              <div key={idx} className="sub-event">
                <h4>{subEvent.subtitle}</h4>
                <p>{subEvent.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;