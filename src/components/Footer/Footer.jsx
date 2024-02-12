// footer/Footer.jsx

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h4>
          Desenvolvido por -{' '}
          <a
            href="https://www.linkedin.com/in/alan-silvaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> Alan Silva
          </a>
        </h4>
        <h5>alan-agenor@hotmail.com</h5>

      </div>
    </footer>
  );
}

export default Footer;
