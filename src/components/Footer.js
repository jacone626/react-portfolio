import React from "react";
import '../css/Header&Footer.css';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="social-links">
        <a href="https://www.linkedin.com/in/james-alan-cone/" target="_blank" rel="noreferrer" className="linkedin">
          <i>
            <FaLinkedin size={50} />
          </i>
        </a>
        <a href="https://github.com/jacone626" target="_blank" rel="noreferrer" className="github">
          <i>
            <FaGithub size={50} />
          </i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="youtube">
          <i>
            <FaYoutube size={50} />
          </i>
        </a>
      </footer>
    );
  }
  // Export Header
  export default Footer;