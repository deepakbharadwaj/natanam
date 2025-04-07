import React from "react";
import update1 from "../assets/updates1.webp";
import "../styles/Upcomings.css";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <h1>Latest Updates</h1>
      </div>
      <div className="news-content">
        <div className="news-image-container">
          <img src={update1} alt="Latest Update" className="full-update-image" />
        </div>
      </div>
    </div>
  );
};

export default News;
