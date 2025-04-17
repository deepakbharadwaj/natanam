import React from "react";
import "../styles/Examinations.css";
import highlight1 from "../assets/highlight.webp";
import highlight2 from "../assets/highlight2.webp";
import highlight3 from "../assets/highlight3.webp";
import highlight4 from "../assets/highlight4.webp";
import examBook from "../assets/exambook.pdf";
import SEO from "./SEO";

const Examinations = () => {
  return (
    <>
      <SEO
        title="Dance Examinations & Certification | Natanam Foundation"
        description="Get certified in classical dance through our structured examination system. Affiliated with Bangiya Sangeet Parishad, offering recognized dance certifications."
      />
      <div className="examinations-page">
        <div className="exam-header">
          <h1>DEAR DANCE, INSTRUMENTAL & MUSIC TEACHERS</h1>
          <div className="blink-text">Exam 2025-26</div>
          <h2 className="exam-question">Want to have a yearly assessment for your students?</h2>
        </div>

        <div className="exam-intro">
          <div className="intro-content">
            <h2>COLLABORATE WITH NATANAM FOUNDATION</h2>
            <h3>AND ENROLL YOUR STUDENTS IN EXAMINATIONS</h3>
          </div>
        </div>

        <div className="exam-highlights-section">
          <div className="highlights-header">
            <h2>Highlights of these examinations</h2>
            <ul className="highlights-list">
              <li>
                <span className="highlight-icon">✓</span> University certification
              </li>
              <li>
                <span className="highlight-icon">✓</span> Beginners, Intermediate and Advanced
                Levels
              </li>
              <li className="special-highlight">
                <span className="star-icon">★</span>
                <a
                  href={examBook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="study-material-link"
                >
                  Study Material provided
                </a>
                <span className="star-icon">★</span>
              </li>
            </ul>
          </div>

          <div className="highlight-grid">
            <div className="highlight-card">
              <div className="card-number">1</div>
              <img src={highlight1} alt="Highlight 1" />
              <p>
                For 15 or more students appearing for exams, the judges will come to your
                institution and conduct the exams
              </p>
            </div>
            <div className="highlight-card">
              <div className="card-number">2</div>
              <img src={highlight2} alt="Highlight 2" />
              <p>
                The students will take up exams with a syllabus and style based on what has been
                taught in their own dance school
              </p>
            </div>
            <div className="highlight-card">
              <div className="card-number">3</div>
              <img src={highlight3} alt="Highlight 3" />
              <p>
                Students will be grouped into small batches of 5 and individual attention is
                provided
              </p>
            </div>
            <div className="highlight-card">
              <div className="card-number">4</div>
              <img src={highlight4} alt="Highlight 4" />
              <p>Students who wish to take higher levels can take combined examinations</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-box">
            <h3>Contact S Vidya Murali</h3>
            <div className="contact-details">
              <p>
                ✉️ <a href="mailto:natanamschool@gmail.com">natanamschool@gmail.com</a>
              </p>
            </div>

            <div className="register-cta">
              <p className="exam-year">Exam sessions open for the year 2025-26</p>
              <p className="spacing-gap">&nbsp;</p>
              <p className="spacing-gap">&nbsp;</p>
              <a
                href="https://wa.me/919449764782?text=Hi,%20I'm%20interested%20in%20registering%20for%20the%20dance%20examinations"
                target="_blank"
                rel="noopener noreferrer"
                className="register-btn"
              >
                Contact Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Examinations;
