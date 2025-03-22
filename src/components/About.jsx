import React from "react";
import imgme from "../assets/imagerotate.png"
import { Link as BSLink } from "react-router-dom";
export const About = () => {
  return (
    <div>
      <div className="container aboutSec  d-flex">
        
        <div className="col-md-6 aboutim d-flex">
          <div className="aboutimage">
            <img
              src={imgme}
              alt=""
            />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>Dip Sarker</span>
              </li>
              <li>
                <h3>Phone</h3>
                <span>+880 1303053626</span>
              </li>
              <li>
                <h3>Email</h3>
                <span>developerdip005@gmail.com</span>
              </li>
              <li>
                <h3>Address</h3>
                <span>Rajshahi,Bangladesh</span>
              </li>
              <li>
                <h3>Nationality</h3>
                <span>Bangladeshi</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="aboutmain">
            <span>About Me</span>
            <h3>Software Developer</h3>

            <h4>A passionate Software Designer and Competetive Programmer .</h4>

            <p>
              Hi, I’m Dip Sarker I’m a Software Developer and Competitive
              Programmer passionate about solving problems and building
              efficient applications. Specializing in JavaScript, Python, C,
              C++, React, Django, and Django REST Framework, I create full-stack
              solutions with dynamic frontends and scalable APIs. I actively
              solve algorithmic challenges on platforms like Codeforces,
              CodeChef, and LeetCode and always strive to learn new technologies
              to improve my skills.
            </p>
            <div className=" btndwnld  ">
            {/* <a href="/path/to/resume.pdf" download className="btn btn-primary">
              Download CV
            </a> */}

     < BSLink 
            to={"https://drive.google.com/file/d/1-BwMXeLfrkYIRGz2w8bK6VxoUL9ABeNr/view"} 
            className="btn btn-primary"
             target="_blank"
            >
              Download CV
            </BSLink>
          </div>

           

          </div>

         
          
        </div>

      </div>
    </div>
  );
};
