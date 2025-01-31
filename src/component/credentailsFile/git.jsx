import React, { useState } from 'react'
import './git.css'
import { useNavigate } from "react-router-dom";
function git() {
 const [isFirstDivClicked, setIsFirstDivClicked] = useState(false);

  const navigate = useNavigate();

  const handleFirstDivClick = () => {
    setIsFirstDivClicked(!isFirstDivClicked);
    // setIsSecondDivClicked(false);  // Close the second div if the first is opened
    // setIsThreeDivClicked(false);
  };

  const GitClickHere = () => {
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
          <h1>Git for Beginners</h1>
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
              <li>Introduction</li>
              <li>Understanding the Git Basic</li>
              <li>Setting up Git on Your Machine</li>
              <li>Working with Loacl Repositories</li>
              <li>Branching and Merging Code</li>
              <li>Pushing to a Remote Repository</li>
              <li>Creating and Merging Pull Requests</li>
            </ul>
            <a
              href='http://ude.my/UC-2d9e7e5f-d6ad-4e14-a6c8-52016ba56620'
              target="_blank" rel="noopener noreferrer">
              <button className='button-html'>Certificate</button>
            </a>
          </div>
        )}
        <div><button onClick={GitClickHere} style={buttonStyles} >back</button></div>
      </div>

    </>
  )
}

export default git
