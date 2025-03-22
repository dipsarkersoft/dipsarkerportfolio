import React from 'react'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Toaster } from 'react-hot-toast'
import { Navbar } from '../components/Navbar'
import { Resume } from '../components/Resume'
import { Project } from '../components/Project'
import { Contact } from '../components/Contact'
import Footer from '../components/Footer'
import { Link } from 'react-scroll';

const HeroC = () => {
  return (
    <section id="hero" >
    <Hero/>  
    </section>
  );
};

const AboutC = () => {
  return (
    <section id="about" >
    <About/> 
    </section>
  );
};
const ResumeC = () => {
  return (
    <section id="resume" >
    <Resume/> 
    </section>
  );
};
const ContactC = () => {
  return (
    <section id="contact" >
    <Contact/> 
    </section>
  );
};
const ProjectC = () => {
  return (
    <section id="project" >
    <Project/> 
    </section>
  );
};




 export const Home = () => {
  return (
    <>

    <Toaster />
    <Navbar/>
<HeroC/>

    
    <AboutC/>
     <ResumeC/>
     <ProjectC/>
     <ContactC/>
     <Footer/>
   
    </>
  )
}

