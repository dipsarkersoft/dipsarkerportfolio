import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiLocationOn, CiMobile4 } from "react-icons/ci";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";
export const Contact = () => {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    

    const handleSubmit = (e) => {


      e.preventDefault(); 

      if(!name ||!email ||!message){
        toast.error("All Fields Required")
        return
    }
    else{

    //   console.log('Name:', name);
    //   console.log('Email:', email);
    //   console.log('Message:', message);
    toast.success("Thanks For Submit")
    setName('');
    setEmail('');
    setMessage('');
}  
    };

  return (
    <div className="container contactSec"> 

    
    <h3> Connect Me</h3>
    <h2>Got a project in mind or just want to chat.</h2>
    
    <div className="row d-flex">
   

    <div className="col-md-5 col-12">
  <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start p-4 rounded mb-4">
    <div className="conIcon me-3">
      <CiLocationOn />
    </div>
    <div className="conTXT">
      <h4>Address</h4>
      <p className="mb-2">Rajshahi, Bangladesh</p>
    </div>
  </div>

  <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start p-4 rounded mb-4">
    <div className="conIcon me-3">
      <MdOutlineMailOutline />
    </div>
    <div className="conTXT">
      <h4>Mail Us</h4>
      <p className="mb-2">sarkerdip005@gmail.com</p>
    </div>
  </div>

  <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start p-4">
    <div className="conIcon me-3">
      <CiMobile4 />
    </div>
    <div className="conTXT">
      <h4>Telephone</h4>
      <p className="mb-2">+8801303053626</p>
    </div>
  </div>
    </div>

      <div className="frm col-md-7">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-100 form-control border-0 py-3 mb-4"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="w-100 form-control border-0 py-3 mb-4"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <textarea
            className="w-100 form-control border-0 mb-4"
            rows="5"
            cols="10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            className="btnfrom"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      </div>
   

    </div>

    
  );
};
