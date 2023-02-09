import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";

function Contact() {
  return (
    <footer className="contact-container">
      <h1 className="h1-section h1-contact">Contact</h1>
      <p>
        Please feel free to reach out, I'll get back to you as soon as possible
      </p>
      <span className="dev-stack-icons">
        <FaGithub size={50} />
        <FaEnvelope size={50} />
      </span>
      <p>Thank you for checking out my site :D</p>
    </footer>
  );
}

export default Contact;
