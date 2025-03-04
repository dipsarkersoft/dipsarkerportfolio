import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
  
        <div className="col-3">
          <Link className="navbar-brand" to="/">
            <img src={logo}  width="full" height="50" />
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
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="col-3 text-center download-btn d-none d-lg-block">
          <a href="/path/to/resume.pdf" download className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
};
