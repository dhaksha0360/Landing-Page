import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-left">
          <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
          </p>
        </div>

        <div className="footer-middle">
          <h4 className="footer-title">Our Technologies</h4>
          <ul className="footer-list">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        <div className="footer-right">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-list">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-link">Privacy Policy</p>
        <p className="footer-separator">|</p>
        <p className="footer-link">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;