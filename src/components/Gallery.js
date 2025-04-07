import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";
import gallery12 from "../assets/gallery12.png";
import gallery13 from "../assets/gallery13.png";
import gallery14 from "../assets/gallery14.png";
import gallery15 from "../assets/gallery15.png";
import gallery16 from "../assets/gallery16.png";

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
      }
    );

    const imageElement = document.getElementById(`image-${src}`);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <div id={`image-${src}`} className={`image-wrapper ${isLoaded ? "loaded" : ""}`}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? "loaded" : ""}
        />
      )}
      {!isLoaded && <div className="image-placeholder" />}
    </div>
  );
};

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: gallery1 },
    { id: 2, src: gallery2 },
    { id: 3, src: gallery3 },
    { id: 4, src: gallery4 },
    { id: 5, src: gallery5 },
    { id: 6, src: gallery6 },
    { id: 7, src: gallery7 },
    { id: 8, src: gallery8 },
    { id: 9, src: gallery9 },
    { id: 10, src: gallery10 },
    { id: 11, src: gallery11 },
    { id: 12, src: gallery12 },
    { id: 13, src: gallery13 },
    { id: 14, src: gallery14 },
    { id: 15, src: gallery15 },
    { id: 16, src: gallery16 },
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <div className="header-underline"></div>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <div className="image-container">
              <LazyImage src={image.src} alt={`Gallery ${image.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
