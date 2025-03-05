import React from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png'

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer text-white py-4">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4  align-items-center mb-3 mb-md-0">
              <img 
              className="footerlogo"
                src={logo}
                alt="Logo"
                width="full" height="50"
              />

              <div>
                <p className="footertxt mt-4">
                  Competitive Programmer | Software Developer | Python Developer
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center mb-3 mb-md-0">
              <ul className=" list-unstyled">
                <li className="menu">
                  <Link to="/about" className="text-white text-decoration-none">
                    About
                  </Link>
                </li>
                <li className="menu">
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
                <li className="menu">
                  <Link
                    to="/projects"
                    className="text-white text-decoration-none"
                  >
                    Projects
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/blog" className="text-white text-decoration-none">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 social-icons text-center">
              <Link to="/facebook" className="btn btn-dark btn-lg">
                <FaFacebookF />
              </Link>
              <Link to="/twitter" className="btn btn-dark btn-lg">
                <FaTwitter />
              </Link>
              <Link to="/linkedin" className="btn btn-dark btn-lg">
                <FaLinkedinIn />
              </Link>
              <Link to="/github" className="btn btn-dark btn-lg">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center mt-4">
          <p className="m-0">© 2025 Dip Sarker. All rights reserved.</p>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
