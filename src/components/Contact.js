import React, { forwardRef } from "react";
import { FaGithub, FaEnvelope, FaSms } from "react-icons/fa";
import "../styles/contact.css";

const Contact = forwardRef(({ dynIconSize }, contactRef) => {
  return (
    <footer className="contact-container" ref={contactRef}>
      <h1 className="h1-section h1-contact">Contact</h1>
      <span className="contact-description">
        <p>
          Please feel free to reach out, I'll get back to you as soon as
          possible
        </p>
      </span>
      <span className="contact-icons">
        <a href="https://github.com/marathonic" className="contact-icon-btn">
          <FaGithub size={dynIconSize} className="contact-icon" />
          <p>Github</p>
        </a>
        <a href="mailto:marathonic@proton.me" className="contact-icon-btn">
          <FaEnvelope size={dynIconSize} className="contact-icon" />
          <p>Email</p>
        </a>
        <a href="tel:+522223638615" className="contact-icon-btn">
          <FaSms size={dynIconSize} className="contact-icon" />
          <p>SMS</p>
        </a>
      </span>
      <span className="contact-thanks">
        <p>Thank you for checking out my site :D</p>
      </span>
    </footer>
  );
});

function Contact2({ dynIconSize, contactRef }) {
  return (
    <footer className="contact-container">
      <h1 className="h1-section h1-contact">Contact</h1>
      <span className="contact-description">
        <p>
          Please feel free to reach out, I'll get back to you as soon as
          possible
        </p>
      </span>
      <span className="contact-icons">
        <a href="https://github.com/marathonic" className="contact-icon-btn">
          <FaGithub size={dynIconSize} className="contact-icon" />
          <p>Github</p>
        </a>
        <a href="mailto:marathonic@proton.me" className="contact-icon-btn">
          <FaEnvelope size={dynIconSize} className="contact-icon" />
          <p>Email</p>
        </a>
        <a href="tel:+522223638615" className="contact-icon-btn">
          <FaSms size={dynIconSize} className="contact-icon" />
          <p>SMS</p>
        </a>
      </span>
      <span className="contact-thanks">
        <p>Thank you for checking out my site :D</p>
      </span>
    </footer>
  );
}

export default Contact;
