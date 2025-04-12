import React from "react";
import "../styles/Contact.css";
import profileImage from "../assets/krupa.webp";
import profileImage2 from "../assets/Vidya.webp";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaInstagram as FaInstagramOutline,
  FaFacebook as FaFacebookOutline,
  FaEnvelope as FaEnvelopeOutline,
  FaWhatsapp as FaWhatsappOutline,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="instructors-container">
        <div className="contact-container">
          <div className="profile-section">
            <div className="profile-image">
              <img src={profileImage} alt="Krupa" />
            </div>
            <h1>Krupa Ramachandran</h1>
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
            <a
              href="mailto:kruparamachandran@gmail.com"
              className="contact-link email"
            >
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
              <img src={profileImage2} alt="Vidya" />
            </div>
            <h1>Vidya Murali</h1>
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
            <a
              href="mailto:natanamschool@gmail.com"
              className="contact-link email"
            >
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
  );
};

export default Contact;
