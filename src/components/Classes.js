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
      "https://docs.google.com/forms/d/e/1FAIpQLSdndZyB4v3spO8G3j71OurUaauuzcWtLeeDyHM6t5upixnLKg/viewform?usp=dialog",
      "_blank"
    );
  };

  const classesSchedule = [
    { batchName: "Adya (Batch 1 - A)", classDays: "Monday & Wednesay", timings: "5:00 PM to 6:00 PM" },
    { batchName: "Adya (Batch 1 - B)", classDays: "Tuesday & Friday", timings: "5:00 PM to 6:00 PM" },
    { batchName: "Madhya (Batch 2-A)", classDays: "Monday & Wednesay", timings: "5:00 PM to 6:00 PM" },
    { batchName: "Madhya (Batch 2-B)", classDays: "Tuesday & Friday", timings: "5:00 PM to 6:00 PM" },
    { batchName: "Purna (Batch 3-A)", classDays: "Monday & Wednesay", timings: "5:00 PM to 6:00 PM" },
    { batchName: "Purna (Batch 3-B)", classDays: "Tuesday & Friday", timings: "6:00 PM to 7:00 PM" },
    { batchName: "First Year (Batch 4)", classDays: "Tuesday & Friday", timings: "6:00 PM to 7:00 PM" },
    { batchName: "Second Year (Batch 5)", classDays: "Tuesday & Friday", timings: "6:00 PM to 7:00 PM" },
    { batchName: "Seniors", classDays: "Monday & Wednesay", timings: "6:00 PM to 7:00 PM" },
    { batchName: "Individual classes", classDays: "Tuesday & Wednesday", timings: "11:00 AM to 12:00 PM" },
    { batchName: "Individual classes", classDays: "Tuesday and Friday", timings: "3:00 PM to 4:00 PM" },
    { batchName: "Individual classes", classDays: "Tuesday and Friday", timings: "4:00 PM to 5:00 PM" },
  ];

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
                <h2>Class Schedule - Natanam Studio (Horamavu)</h2>
              </div>
              <div className="timetable-wrapper">
                <table className="timetable">
                  <thead>
                    <tr>
                      <th>Batch Name</th>
                      <th>Class Days</th>
                      <th>Timings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classesSchedule.map((item, index) => (
                      <tr key={index}>
                        <td>{item.batchName}</td>
                        <td>{item.classDays}</td>
                        <td>{item.timings}</td>
                      </tr>
                    ))}
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
