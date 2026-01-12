import React from "react";
import "../styles/Upcomings.css";
import SEO from "./SEO";
import updates1 from "../assets/updates1.webp";

const News = () => {
  return (
    <>
      <SEO
        title="Upcoming Dance Events | Natanam Foundation Bangalore"
        description="Discover upcoming dance performances, workshops, and cultural events at Natanam Foundation. Stay connected with the classical dance community."
      />
      <div className="news-container">
        <div className="news-header">
          <h1>Latest Updates</h1>
        </div>
        <div className="news-content">
          <div className="news-image-container">
            <img src={updates1} alt="Latest upcoming dance events and performances at Natanam Foundation" className="full-update-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;