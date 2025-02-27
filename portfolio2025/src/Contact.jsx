import React from "react";
import "./css/Contact.css";
import githubIcon from './assets/github-b.png';
import instagramIcon from './assets/instagram-b.png';
import linkedinIcon from './assets/linkedin-b.png';

const Contact = () => {
  return (
    <div className="group-together">
      <div className="contact-left">
        <h3>Get in Touch</h3>
        <h5>Replace with your phone number</h5>
        <h5>Replace with your email</h5>
        <div className="icon-barr">
          {/* Replace href with your actual GitHub URL */}
          <a href="https://github.com/yourusername">
            <img src={githubIcon} alt="GitHub" />
          </a>
          {/* Replace href with your actual LinkedIn URL */}
          <a href="https://linkedin.com/in/yourusername">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          {/* Replace href with your actual Instagram URL */}
          <a href="https://instagram.com/yourusername">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-form">
          <form action="REPLACE_WITH_YOUR_BACKEND_ENDPOINT" method="POST">
            {/* Name Section */}
            <div className="form-group">
              <div className="input-box">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" required />
              </div>
              <div className="input-box">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" required />
              </div>
            </div>
            
            {/* Email Section */}
            <div className="input-box">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            {/* Message Section */}
            <div className="input-box">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            
            {/* Submit Button */}
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
