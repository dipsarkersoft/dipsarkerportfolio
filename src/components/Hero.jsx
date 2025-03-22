import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link as BSLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import myimage from "../assets/dipimage.jpg"

export const Hero = () => {


  const git="https://github.com/dipsarkersoft/"
const fb="https://www.facebook.com/Dipsarkerofficial"
const linkd="https://www.linkedin.com/in/dip-sarker/"
const tw="https://x.com/Dip__Sarker"

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

            <div className=" text-center mt-4 d-block d-md-none">
              < BSLink 
                         to={"https://drive.google.com/file/d/1-BwMXeLfrkYIRGz2w8bK6VxoUL9ABeNr/view"} 
                         className="btn btn-primary"
                          target="_blank"
                         >
                           Download CV
                         </BSLink>
            </div>
          </div>

          <div className="col-md-5 text-center position-relative">
            <div className="image-wrapper">
              <img
                src={myimage}
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
