import React, { useState } from 'react'
import './javasrcipt.css'
import { useNavigate } from 'react-router-dom'

function javasrcipt() {
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

  const JsClickHere = () => {
    navigate("/Credentials");
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
      <div id="js"
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
          <h1>The Modern JavaScript for Beginners</h1>
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
              <li>An Introduction</li>
              <li>JavaScript Fundamentals</li>
              <li>Data Types and Modal Windows , Functions and JS Special</li>
              <li>Loops , Operators and Comparisons</li>
            </ul>
            <a
              href='http://ude.my/UC-73d6fe2e-bc52-400d-bd1b-326e9c2bd777'
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
          <h1>The A to Z Course to Mastering JavaScript</h1>
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
              <li>Variables, Statements, Operators, Popup Boxes, Events, Loops and Arrays</li>
              <li>Objects and their methods</li>
              <li>String and its methods</li>
              <li>Number and its methods</li>
              <li>DOM Model</li>

            </ul>
            <div className='link-Mhtml'>
              <a
                href='http://ude.my/UC-1869af2c-185d-4eae-bea6-4d17db234c3f'
                target="_blank" rel="noopener noreferrer">
                <button className='button-html'>Certificate</button>
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
          <h1>Master JavaScript with ES6 ES7 ES8</h1>
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
              <li>Introduction to ES6 , ES7, ES8</li> 
               <li>ES6 advanced Concept</li> 
               <li>Advanced Es6 Features</li>
               <li>Iterators and Generators</li>
            </ul>
            <div className='link-Mhtml'>
              <a
                href='http://ude.my/UC-066982ef-0fca-44a3-82d1-48fc6d1cf950'
                target="_blank" rel="noopener noreferrer">
                <button className='button-html'>Certificate</button>
              </a>
            </div>
          </div>
        )}
        <div><button onClick={JsClickHere} style={buttonStyles} >back</button></div>
      </div>
    </>
  )
}

export default javasrcipt
