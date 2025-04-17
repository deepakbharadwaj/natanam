import React from "react";
import "../styles/Founder.css";
import founderImage from "../assets/About1.webp"; // Add this line
import SEO from "./SEO";

const Founder = () => {
  const milestones = [
    {
      year: "1994",
      achievement: "Inception of Natanam School of Bharatanatyam",
      description: "Started with a vision to preserve and promote Bharatanatyam",
      icon: "🏫",
    },
    {
      year: "2013",
      achievement: " Affiliation with Bangiya Sangit Parishad",
      description: "International recognition for exams in the field of Indian Dance & Music",
      icon: "🌏",
    },
    {
      year: "2014",
      achievement: "Inception of Natanam Foundation",
      description: " Expanding the horizons of Indian Classical Arts",
      icon: "🏢",
    },
    {
      year: "2022",
      achievement: "Launch of Aaharya Costumes and Dance Needs",
      description: "Premium rental for Classical & Semi - Classical Costumes and Accessories",
      icon: "💃",
    },
    {
      year: "2020",
      achievement: "Digital Innovation in Indian Classical Arts",
      description: "Online Digital Productions, Courses and Workshops",
      icon: "💻",
    },
    {
      year: "2023",
      achievement: "Excellence in Dance",
      description: "Recognized as leading Bharatanatyam institution",
      icon: "🏆",
    },
  ];

  return (
    <>
      <SEO
        title="Founder - Guru Dr. D Sarvothama Kamath | Natanam Foundation"
        description="Meet our founder Guru Dr. D Sarvothama Kamath and learn about his vision for classical dance education and cultural preservation through Natanam Foundation."
      />
      <section className="founder-section">
        <div className="founder-hero">
          <div className="founder-intro">
            <h1>Our Legacy</h1>
            {/* <p className="subtitle">A Journey of Passion and Dedication</p>*/}
          </div>
        </div>

        <div className="founder-profile-container">
          <div className="founder-profile-wrapper">
            <div className="founder-image-container">
              <div className="founder-image">
                <img src={founderImage} alt="Founder" />
              </div>
              <div className="founder-credentials">
                <span>30+ Years of Service in Arts</span>
                <span>Professional danseuse</span>
                <span>Acclaimed Guru </span>
              </div>
            </div>
            <div className="founder-details">
              <h2>Vid. S Vidya Murali</h2>
              <p className="founder-title">Artistic Director & Bharatanatyam Guru</p>
              <div className="founder-quote">
                <blockquote>
                  "Dance is the hidden language of the soul, and through Bharatanatyam, we discover
                  its most beautiful expressions."
                </blockquote>
              </div>
              <div className="founder-bio">
                <p>
                  Vidya Murali, fondly known among her students, is a distinguished Bharatanatyam
                  danseuse, teacher, and organizer, embodying the role of a nurturing mentor. She
                  embarked on her journey in dance at the age of 10, captivated by the elegance of
                  Bharatanatyam. Her passion led her to pursue formal training in the art form
                  throughout her Bachelor's and Master's degrees at Bangalore University.{" "}
                </p>

                <p>
                  {" "}
                  Vidya has showcased her talent in numerous dance dramas under the direction of her
                  esteemed Guru, Dr. D. Sarvothama Kamath of Bangalore University. She has also
                  performed under the guidance of Acharya Ranjani Ganesan Ramesh of Kalakshetra,
                  contributing to renowned productions such as *Dashavatara* and *Navarasa Shiva
                  Shakti.
                </p>

                <p>
                  {" "}
                  Beyond her performances, Vidya is an accomplished choreographer, having
                  conceptualized and presented several notable pieces, including *Ganesha Vandanam,
                  Hari Hara, Shanmukha, Kalinga Mardhanam,* and *Krishnam Vande Jagadgurum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="journey-section">
          <h2>
            <b>Our Journey</b>
          </h2>
          <div className="milestone-grid">
            {milestones.map((milestone, index) => (
              <div className="milestone-card" key={index}>
                <div className="milestone-icon">{milestone.icon}</div>
                <div className="milestone-year">{milestone.year}</div>
                <h3>{milestone.achievement}</h3>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-banner">
          <div className="achievement-stat">
            <span className="number">3000+</span>
            <span className="label">Students Trained</span>
          </div>
          <div className="achievement-stat">
            <span className="number">500+</span>
            <span className="label">Stage Productions</span>
          </div>
          <div className="achievement-stat">
            <span className="number">50+</span>
            <span className="label">International Shows</span>
          </div>
          <div className="achievement-stat">
            <span className="number">50+</span>
            <span className="label">Awards Received</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;
