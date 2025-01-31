import React, { useEffect, useState } from 'react'
import './contact.css'
import { useNavigate } from "react-router-dom";
import { FcContacts } from "react-icons/fc";
import { PiLinkedinLogoDuotone } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function contact() {

  const [detail , setDetail] = useState(0);

  useEffect(() => {
    const timer = setTimeout(()=> {
    setDetail(1);
  },4000);
  // return () => clearTimeout(timer);
  },[]);

  const navigate = useNavigate();

  const ContactClickHere = () => {
    navigate("/"); 
  };

  const buttonStyles = {
    color: "rgb(170, 185, 185)",
    cursor: "pointer",
    position: "absolute", 
    top: "30px", 
    right: "30px",
    padding: "5px 20px",
    transformOrigin: "center",
    backgroundColor: "transparent",
    borderRadius: "9999px",
    display: 'flex', 
    flexWrap: 'wrap',
  };



  return (
    <>
      <div id="container-contact">
        <div className='header'>
          <h1>CONTACT US</h1>
        </div>

        <div className='details' style={{
        opacity: detail,
        transition: "opacity 1s ease-in-out", // Smooth transition effect
      }}>
        <h4>Email Address :  medunraj3@gmail.com</h4>
        <h4>Phone Number : +91-8124089016</h4>            
        <h4>LinkedIn : www.linkedin.com/in/medunraj3</h4>
        <h4>Location : Puducherry</h4>   
        </div>

      
        <div><button onClick={ContactClickHere} style={buttonStyles} >back</button></div>
      </div>

    </>
  )
}

export default contact
