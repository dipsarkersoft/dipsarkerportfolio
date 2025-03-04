import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
  <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row justify-content-between">
         
          <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
            <img src="path_to_your_logo.png" alt="Logo" className="logo rounded-circle me-3" />
            <div>
              <p className="m-0">Competitive Programmer | Software Engineer | Python Developer</p>
            </div>
          </div>

         
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              <li><Link to="/projects" className="text-white text-decoration-none">Projects</Link></li>
              <li><Link to="/blog" className="text-white text-decoration-none">Blog</Link></li>
            </ul>
          </div>

         
          <div className="col-md-4 text-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaTwitter size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>

     
      <div className="text-center mt-4">
        <p className="m-0">© 2025 Dip Sarker. All rights reserved.</p>
        <p className="m-0">Built with Software Project and Love. <Link to="/portfolio" className="text-white text-decoration-none">Portfolio</Link></p>
      </div>
    </footer>
      </>
  );
};

export default Footer;
