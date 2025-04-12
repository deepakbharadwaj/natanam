// Classes.js
import React, { useState } from "react";
import "../styles/Classes.css";
import stickerSolo from "../assets/sticker-solo.webp";
import stickerGroup from "../assets/sticker-group.webp";
import stickerArangetram from "../assets/sticker-arangetram.webp";
import stickerSoloOnline from '../assets/sticker-soloonline.webp';
const Classes = () => {
  const [mode, setMode] = useState("offline");

  const handleEnroll = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdndZyB4v3spO8G3j71OurUaauuzqWtLeeDyHM6t5upixnLKg/viewform?usp=dialog",
      "_blank"
    );
  };

  return (
    <div className="classes-page">
      <div className="classes-section">
        <h2>Our Classes</h2>

        <div className="mode-selector">
          <button
            className={`mode-button ${mode === "offline" ? "active" : ""}`}
            onClick={() => setMode("offline")}
          >
            Offline Classes
          </button>
          <button
            className={`mode-button ${mode === "online" ? "active" : ""}`}
            onClick={() => setMode("online")}
          >
            Online Classes
          </button>
        </div>

        <div className="categories-container">
        {(mode === "offline" || mode === "online") && (
  <div className="class-category">
    <h3 className="category-title">Solo Classes</h3>
    <div className="class-card premium">
      <h3>SOLO CLASSES</h3>
      <div className={`sticker-container ${mode === "online" ? "laptop-frame" : ""}`}>
        <img 
          src={mode === "online" ? stickerSoloOnline : stickerSolo} 
          alt="Solo Dance" 
          className="sticker-image" 
        />
      </div>
                <div className="fee-details">
                  <p className="registration">Registration Fee: ₹500</p>
                  <p>Monthly Fee: ₹5,000</p>
                  <p>(8 classes per month)</p>
                  <small>*Individual attention & personalized training</small>
                </div>
              </div>
            </div>
          )}

          {mode === "offline" && (
            <>
              <div className="class-category">
                <h3 className="category-title">Group Classes</h3>
                <div className="class-card premium">
                  <h3>GROUP CLASSES</h3>
                  <div className="sticker-container">
                    <img src={stickerGroup} alt="Group Dance" className="sticker-image" />
                  </div>

                  <div className="fee-details">
                    <p className="registration">Registration Fee: ₹500</p>
                    <p>Monthly Fee: ₹1,500</p>
                    <p>(8 classes per month)</p>
                    <small>*Non-refundable, payable at the time of enrollment</small>
                  </div>
                </div>
              </div>

              <div className="class-category">
                <h3 className="category-title">Project Based</h3>
                <div className="class-card premium">
                  <h3>ARANGETRAM</h3>
                  <div className="sticker-container">
                    <img src={stickerArangetram} alt="Arangetram" className="sticker-image" />
                  </div>
                  <div className="fee-details">
                    <p className="registration">Per hour : ₹600 </p>
                    <p>Project Duration: 6-8 months</p>
                    <small>*Tailored training for your Arangetram performance</small>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {mode === "online" && (
          <p className="group-notice">
            ✨ Group classes will commence when a suitable batch is formed ✨
          </p>
        )}

        <button className="enroll-button main" onClick={handleEnroll}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Classes;
