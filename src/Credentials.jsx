import React from 'react'
import './Credentials.css'
import { useNavigate } from "react-router-dom";

function Credentials() {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate("/"); // Navigate to the "Home" route
  };

  const HtmlClickHere = () => {
    navigate("/Html"); // Navigate to the "Home" route
  };

  const JavaSriptClickHere = () => {
    navigate("/Javascript"); 
  };
  const ReactClickHere =() => {
    navigate("/ReactJS")
  }
  
  const NodeClickHere = () => {
    navigate("/Node"); 
  };
  const ExpressClickHere = () => {
    navigate("/Express"); 
  };
  const MongoDBClickHere = () => {
    navigate("/MongoDB"); 
  };
  const GitClickHere = () => {
    navigate("/Git"); 
  };
  const CClickHere = () => {
    navigate("/C"); 
  };
  const OtherClickHere = () => {
    navigate("/Other"); 
  };
  const buttonStyles = {
    color: "rgb(170, 174, 174)",
    cursor: "pointer",
    position: "relative",
    left: "2vw",
    top: "-5vh",
    padding: "5px 20px",
    transformOrigin: "center",
    backgroundColor: "transparent",
    borderRadius: "9999px",
  };
  

  return (
    
    <>
      <div id="body">
        <div className='container'>

          <div className='card'>
            <div className='box-container'>
              <h1>HTML & CSS</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={HtmlClickHere}>Click Here</p>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>JavaScript</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={JavaSriptClickHere}>Click Here</p>
            </div>
          </div>
          <div className='card'>
            <div className='box-container'>
              <h1>React JS</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={ReactClickHere}>Click Here</p>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>Node JS</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={NodeClickHere}>Click Here</p>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>Express JS</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={ExpressClickHere}>Click Here</p>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>Mongo DB</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={MongoDBClickHere}>Click Here</p>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>Git & GitHub</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={GitClickHere}>Click Here</p>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'><h1>C & CPP</h1></div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={CClickHere}>Click Here.</p>
            </div>
          </div>
          <div className='card'>
            <div className='box-container'>
              <h1>Skills More</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <p onClick={OtherClickHere}>Click Here</p>
            </div>
          </div>
        </div>
        <div><button onClick={handleButtonClick} style={buttonStyles} className='button-Credentails'>back</button></div>
      </div>
    </>
  )
}

export default Credentials
