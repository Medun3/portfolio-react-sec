import React from 'react'
import './Credentials.css'
import { useNavigate ,Link } from "react-router-dom";

function Credentials() {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate("/"); // Navigate to the "Home" route
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
             <Link to='/Html'> <p>Click Here</p> </Link>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>JavaScript</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
             <Link to='/Javascript'> <p>Click Here</p></Link>
            </div>
          </div>
          <div className='card'>
            <div className='box-container'>
              <h1>React JS</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <Link to='/ReactJS'><p>Click Here</p></Link>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>Node JS</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <Link to='/Node'><p>Click Here</p></Link>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>Express JS</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <Link to='/Express'><p>Click Here</p></Link>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>Mongo DB</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <Link to='/MongoDB'><p>Click Here</p></Link>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'>
              <h1>Git & GitHub</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <Link to='Git'><p>Click Here</p></Link>
            </div>
          </div>

          <div className='card'>
            <div className='box-container'><h1>C & CPP</h1></div>
            <div className='content'>
              <h2>Certification and details </h2>
              <Link to='/C'><p>Click Here.</p></Link>
            </div>
          </div>
          <div className='card'>
            <div className='box-container'>
              <h1>Skills More</h1> </div>
            <div className='content'>
              <h2>Certification and details </h2>
              <Link to='/Other'><p>Click Here</p></Link>
            </div>
          </div>
        </div>
        <div><button onClick={handleButtonClick} style={buttonStyles} className='button-Credentails'>back</button></div>
      </div>
    </>
  )
}

export default Credentials
