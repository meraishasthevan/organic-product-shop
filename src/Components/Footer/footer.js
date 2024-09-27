import React from 'react';
import './footer.css';
import logo from '../images/logo.jpeg';

const Footer = () => {
    return (
        <div>
   <footer className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt='logo' />
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h6>About Us</h6>
          <p>About unilink Marketing</p>
          <p>Grievance</p>
          <p>Events And Training</p>
          <p>Photo And Video Gallery</p>
          <p>Legal</p>
        </div>
        <div className="footer-section">
          <h6>Policy</h6>
          <p>Terms And Conditions</p>
          <p>Refund Policy</p>
          <p>Private Policy</p>
        </div>
        <div className="footer-section contact">
          <h6>Contact Us</h6>
          <p>All India Customer Service Number - 8007879123</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          
          </div>
        </div>
      </div>
      <p className="copyright">© 2024 Your Company. All rights reserved.</p>
    </footer>
            
        </div>
    );
};

export default Footer;