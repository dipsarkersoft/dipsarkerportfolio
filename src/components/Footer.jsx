import React from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png'

import { Link } from "react-router-dom";

const git="https://github.com/dipsarkersoft/"
const fb="https://www.facebook.com/Dipsarkerofficial"
const linkd="https://www.linkedin.com/in/dip-sarker/"
const tw="https://x.com/Dip__Sarker"

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
              <Link to={fb} className="btn btn-dark btn-lg" target="_blank">
                <FaFacebookF />
              </Link>
              <Link to={tw} className="btn btn-dark btn-lg" target="_blank">
                <FaTwitter />
              </Link>
              <Link to={linkd} className="btn btn-dark btn-lg" target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link to={git} className="btn btn-dark btn-lg" target="_blank">
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
