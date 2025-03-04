import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 firstr text-white">
            <h2 className="text-orange">I'm</h2>
            <h1 className="name">Dip Sarker</h1>

            <h3 className="text-orange my-3">
              <Typewriter
                words={[
                  "A Software Developer",
                  "MERN Stack Developer",
                  "Developer of Python Django",
                  "Competitive Programmer",
                ]}
                loop={true}
                cursor
                cursorColor="white"
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </h3>

            <p className="description mt-3 ">
              I’m a Software Developer and a Competitive Programmer passionate
              about solving complex problems and building efficient applications
            </p>

            <div className="social-icons mt-3">
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

            <div className=" text-center mt-4 d-block d-md-none">
              <a
                href="/path/to/resume.pdf"
                download
                className="btn btn-primary"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="col-md-5 text-center position-relative">
            <div className="image-wrapper">
              <img
                src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/04/2-1.jpg"
                alt="Profile Picture"
                className="rounded-circle img-fluid"
              />
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
