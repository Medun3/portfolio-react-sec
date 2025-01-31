import React, { useState } from 'react'
import './node.css'
import { useNavigate } from 'react-router-dom'

function node() {
  const [isFirstDivClicked, setIsFirstDivClicked] = useState(false);
  const [isSecondDivClicked, setIsSecondDivClicked] = useState(false);
  const [isThreeDivClicked, setIsThreeDivClicked] = useState(false);

  const navigate = useNavigate();

  const handleFirstDivClick = () => {
    setIsFirstDivClicked(!isFirstDivClicked);
    setIsSecondDivClicked(false);  // Close the second div if the first is opened
    setIsThreeDivClicked(false);
  };
  const handleSecondDivClick = () => {
    setIsSecondDivClicked(!isSecondDivClicked);
    setIsFirstDivClicked(false);   // Close the first div if the second is opened
    setIsThreeDivClicked(false);

  };
  const handleThreeDivClick = () => {
    setIsThreeDivClicked(!isThreeDivClicked);
    setIsFirstDivClicked(false);   // Close the first div if the third is opened
    setIsSecondDivClicked(false);  // Close the second div if the third is opened
  };
  const NodeClickHere = () => {
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
          <h1>Up and Running with NodeJs</h1>
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
              <li>Getting Started</li>
              <li>NodeJs and Modules</li>
              <li>Read Write Operations and Directories</li>
              <li>Web Servers and Sockets</li>
              <li>Database and Integration</li>
            </ul>

            <a
              href='http://ude.my/UC-eed97727-5724-4b29-91cf-c167f85e63d6'
              target="_blank" rel="noopener noreferrer">
              <button className='button-html'>Certificate</button>
            </a>
          </div>
        )}


        <div
          onClick={handleSecondDivClick}
          style={{
            color: 'rgb(220, 174, 143)',
            width: 'auto',
            height: '100px',
            // fontSize: '5px',
            cursor: 'pointer',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center', // Centers content vertically inside the parent
            alignItems: 'center',     // Centers content horizontally inside the parent

          }}
        >
          <h1></h1>
        </div>

        {isSecondDivClicked && (
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
            <div className='link-Mhtml'>
              <a
                href='http://ude.my/UC-ac92f913-393d-4032-a445-bc5b9cf1f9c7'
                target="_blank" rel="noopener noreferrer">
                <button className='button-html'>Beginner Level</button>
              </a>
              <a
                href='http://ude.my/UC-ef6157c0-a486-49ed-8303-3eeddf51b975'
                target="_blank" rel="noopener noreferrer">
                <button className='button-html'>Intermediate Level</button>
              </a>
              <a
                href='http://ude.my/UC-0ba199e9-e918-48ac-9837-8ccb93d4452c'
                target="_blank" rel="noopener noreferrer">
                <button className='button-html'>Advanced Level</button>
              </a>
            </div>
          </div>
        )}


        <div
          onClick={handleThreeDivClick}
          style={{
            color: ' bisque',
            width: 'auto',
            height: 'auto',
            fontSize: '10px',
            cursor: 'pointer',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center', // Centers content vertically inside the parent
            alignItems: 'center',     // Centers content horizontally inside the parent
            margin: '30px',
          }}
        >
          <h1></h1>
        </div>

        {isThreeDivClicked && (
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
              <li></li>   </ul>
            <button className='button-html'>Cerfitate</button>
          </div>
        )}
        <div><button onClick={NodeClickHere} style={buttonStyles} >back</button></div>
      </div>
    </>
  )
}

export default node
