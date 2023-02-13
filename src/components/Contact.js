import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaEnvelope, FaSms } from "react-icons/fa";
import "../styles/contact.css";

function Contact({ dynIconSize, setCurrentScroll, currentScroll }) {
  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });
  // console.log(contactInView);

  // debounce scroll listener?

  useEffect(() => {
    if (currentScroll === "contact") return;
    if (contactInView) {
      setCurrentScroll("contact");
    }
    // let contactBtn = document.querySelector('#sb-contact')
    // contactBtn.classList.add('current-link')
    // eslint-disable-next-line
  }, [contactInView]);

  return (
    <footer className="contact-container" ref={contactRef} id="contact-id">
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
