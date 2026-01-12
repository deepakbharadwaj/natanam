import React from "react";
import "../styles/Contact.css";
import profileImage from "../assets/krupa.webp";
import profileImage2 from "../assets/Vidya.webp";
// Outline imports used
import {
  FaInstagram as FaInstagramOutline,
  FaFacebook as FaFacebookOutline,
  FaEnvelope as FaEnvelopeOutline,
  FaWhatsapp as FaWhatsappOutline,
} from "react-icons/fa";
import SEO from "./SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Natanam Foundation | Classical Dance Academy"
        description="Get in touch with Natanam Foundation in Bangalore. Enquire about dance classes, performances, costume rentals, or visit our academy."
      />
      <div className="contact-page">
        <div className="instructors-container">
          <div className="contact-container">
            <div className="profile-section">
              <div className="profile-image">
                <img src={profileImage} alt="Krupa Ramachandran - Bharatanatyam Instructor at Natanam Foundation" />
              </div>
              <h2>Krupa Ramachandran</h2>
              <p className="designation">Bharatanatyam Instructor</p>
            </div>

            <div className="contact-links">
              <a
                href="https://wa.me/918296292776"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link whatsapp"
              >
                <FaWhatsappOutline className="contact-icon" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:kruparamachandran@gmail.com" className="contact-link email">
                <FaEnvelopeOutline className="contact-icon" />
                <span>Mail</span>
              </a>
              <a
                href="https://www.instagram.com/kruparamachandran_dancer/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link instagram"
              >
                <FaInstagramOutline className="contact-icon" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/krupa.ramachandran.12/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link facebook"
              >
                <FaFacebookOutline className="contact-icon" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className="contact-container">
            <div className="profile-section">
              <div className="profile-image">
                <img src={profileImage2} alt="Vid. S Vidya Murali - Artistic Director and Bharatanatyam Guru at Natanam Foundation" />
              </div>
              <h2>Vidya Murali</h2>
              <p className="designation">Bharatanatyam Instructor</p>
            </div>

            <div className="contact-links">
              <a
                href="https://wa.me/919449764782"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link whatsapp"
              >
                <FaWhatsappOutline className="contact-icon" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:natanamschool@gmail.com" className="contact-link email">
                <FaEnvelopeOutline className="contact-icon" />
                <span>Mail</span>
              </a>
              <a
                href="https://www.instagram.com/natanam_foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link instagram"
              >
                <FaInstagramOutline className="contact-icon" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/p/Raji-Vidya-Murali-100010292466607/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link facebook"
              >
                <FaFacebookOutline className="contact-icon" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
