import React, { useState } from "react";
import "../styles/Classes.css";
import stickerSolo from "../assets/sticker-solo.webp";
import stickerGroup from "../assets/sticker-group.webp";
import stickerArangetram from "../assets/sticker-arangetram.webp";
import stickerSoloOnline from "../assets/sticker-soloonline.webp";
import SEO from "./SEO";

const Classes = () => {
  const [mode, setMode] = useState("offline");

  const handleEnroll = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdndZyB4v3spO8G3j71OurUaauuzqWtLeeDyHM6t5upixnLKg/viewform?usp=dialog",
      "_blank"
    );
  };

  return (
    <>
      <SEO
        title="Classical Dance Classes | Natanam Foundation Bangalore"
        description="Join our comprehensive classical dance training programs in Bharatanatyam and Kuchipudi. Classes for beginners to advanced levels, exam preparation, and professional training."
      />
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
            <button
              className={`mode-button ${mode === "timetable" ? "active" : ""}`}
              onClick={() => setMode("timetable")}
            >
              Time Table
            </button>
          </div>

          {mode === "timetable" ? (
            <div className="timetable-container">
              <div className="timetable-header">
                <h2>Class Schedule</h2>
              </div>
              {/* Desktop View */}
              <div className="timetable-wrapper desktop-view">
                <table className="timetable">
                  <thead>
                    <tr>
                      <th className="time-header">Time</th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="schedule-row">
                      <td className="time-slot">4:00 - 5:00</td>
                      <td className="class-slot online">Batch 1 (Online)</td>
                      <td className="class-slot online">Batch 4 (Online)</td>
                      <td className="class-slot online">Batch 1 (Online)</td>
                      <td className="class-slot empty">No Class</td>
                      <td className="class-slot online">Batch 4 (Online)</td>
                    </tr>
                    <tr className="schedule-row">
                      <td className="time-slot">5:30 - 6:30</td>
                      <td className="class-slot offline">Batch 2 (Offline)</td>
                      <td className="class-slot offline">Batch 5 (Offline)</td>
                      <td className="class-slot offline">Batch 2 (Offline)</td>
                      <td className="class-slot online">Batch 7 (Online)</td>
                      <td className="class-slot offline">Batch 5 (Offline)</td>
                    </tr>
                    <tr className="schedule-row">
                      <td className="time-slot">7:00 - 8:00</td>
                      <td className="class-slot offline">Batch 3 (Offline)</td>
                      <td className="class-slot offline">Batch 6 (Offline)</td>
                      <td className="class-slot offline">Batch 3 (Offline)</td>
                      <td className="class-slot online">Batch 8 (Online)</td>
                      <td className="class-slot offline">Batch 6 (Offline)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile View */}
              <div className="timetable-wrapper mobile-view">
                <table className="timetable">
                  <thead>
                    <tr>
                      <th className="time-header">Day</th>
                      <th>4:00 - 5:00</th>
                      <th>5:30 - 6:30</th>
                      <th>7:00 - 8:00</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="schedule-row">
                      <td className="day-slot">Monday</td>
                      <td className="class-slot online">Batch 1 (Online)</td>
                      <td className="class-slot online">Batch 2 (Online)</td>
                      <td className="class-slot offline">Batch 3 (Offline)</td>
                    </tr>
                    <tr className="schedule-row">
                      <td className="day-slot">Tuesday</td>
                      <td className="class-slot online">Batch 4 (Online)</td>
                      <td className="class-slot online">Batch 5 (Online)</td>
                      <td className="class-slot offline">Batch 6 (Offline)</td>
                    </tr>
                    <tr className="schedule-row">
                      <td className="day-slot">Wednesday</td>
                      <td className="class-slot online">Batch 1 (Online)</td>
                      <td className="class-slot online">Batch 2 (Online)</td>
                      <td className="class-slot offline">Batch 3 (Offline)</td>
                    </tr>
                    <tr className="schedule-row">
                      <td className="day-slot">Thursday</td>
                      <td className="class-slot empty">No Class</td>
                      <td className="class-slot online">Batch 7 (Online)</td>
                      <td className="class-slot online">Batch 8 (Online)</td>
                    </tr>
                    <tr className="schedule-row">
                      <td className="day-slot">Friday</td>
                      <td className="class-slot online">Batch 4 (Online)</td>
                      <td className="class-slot online">Batch 5 (Online)</td>
                      <td className="class-slot offline">Batch 6 (Offline)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="categories-container">
              {(mode === "offline" || mode === "online") && (
                <div className="class-category">
                  <h3 className="category-title">Solo Classes</h3>
                  <div className="class-card premium" onClick={handleEnroll}>
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
                    <div className="class-card premium" onClick={handleEnroll}>
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
                    <div className="class-card premium" onClick={handleEnroll}>
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
          )}

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
    </>
  );
};

export default Classes;
