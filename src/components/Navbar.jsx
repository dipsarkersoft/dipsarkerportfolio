import React from "react";
 import { Link as BSLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="NVBAR">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="col-3">
            <Link className="navbar-brand" to="/">
              <img src={logo} width="full" height="50" />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="col-6 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link
                  className="nav-link active pointerr "
                  to="hero"
                  smooth={true}
                  duration={500}
                >
                  Hero
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link pointerr "
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link pointerr "
                  to="project"
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link pointerr "
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
              
              
            </ul>
          </div>

          <div className="col-3 text-center download-btn d-none d-lg-block">
            < BSLink 
            to={"https://drive.google.com/file/d/1-BwMXeLfrkYIRGz2w8bK6VxoUL9ABeNr/view"} 
            className="btn btn-primary"
             target="_blank"
            >
              Download CV
            </BSLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
