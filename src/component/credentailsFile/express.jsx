import React, { useState } from 'react'
import './html.css'
import { useNavigate } from "react-router-dom";

function express() {
const [isFirstDivClicked, setIsFirstDivClicked] = useState(false);
  
const navigate = useNavigate();

  const handleFirstDivClick = () => {
    // setIsFirstDivClicked(!isFirstDivClicked);
    
  };
  const HtmlClickHere = () => {
    navigate("/Credentials"); // Navigate to the "Home" route
  };

  const buttonStyles = {
    color: "rgb(170, 185, 185)",
    cursor: "pointer",
    position: "absolute", 
    top: "20px", 
    right: "20px",
    padding: "5px 20px",
    transformOrigin: "center",
    backgroundColor: "transparent",
    borderRadius: "9999px",
    display: 'flex', 
    flexWrap: 'wrap',
  };


  return (
    <>
    <div id="html"
        style={{ display: 'flex', flexDirection: 'column', }}>
          
        <div
          onClick={handleFirstDivClick}
          style={{
            marginTop: '70px',   
            color: 'rgb(196, 175, 149)',
            width: 'auto',
            height: '100px',
            cursor: 'pointer',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center', // Centers content vertically inside the parent
            alignItems: 'center',     // Centers content horizontally inside the parent
          }}
        >
          <h1>course have not Start</h1>
        </div>

        {isFirstDivClicked && (
          <div
            style={{
              width: 'auto',
              height: 'auto',
              textAlign: 'start',
              color: 'white',
              display: 'flex', // Flexbox to align items in a row
              alignItems: 'center', // Align items vertically centered
              justifyContent: 'space-evenly', // Space between the list and button
              flexWrap: 'wrap',
            }}
          >
            <ul>
            </ul>
            <a
              href=''
              target="_blank" rel="noopener noreferrer">
              {/* <button className='button-html'>Certificate'</button> */}
            </a>
          </div>
        )}
        <div><button onClick={ HtmlClickHere} style={buttonStyles} >back</button></div>
     
</div>
    </>
     )
}

export default express
