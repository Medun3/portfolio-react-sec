import React, { useState } from 'react'
import './c.css'
import { useNavigate } from 'react-router-dom'

function c() {
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

  const CppClickHere = () => {
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
      <div id="react"
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
          <h1>C programming language only for beginners</h1>
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
              <li>Introduction of C</li>
              <li>Run C code & Data Types</li>
              <li>Arithmetic Operation</li>
              <li>Comparison & Function</li>
              <li>While loop & For loop</li>
              <li>Input Variable</li>
              <li>Array and String in C</li>
              <li>If else  IF Condition</li>
              <li>Repetition</li>
              <li>Pointer , Opertor , List</li>
              </ul>
            <a
              href='http://ude.my/UC-13185812-24a4-4f4c-b267-d3df33effcef'
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
          <h1>C++ Fundamentals : Coding for Absolute Beginners</h1>
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
              <li>Introduction of C++</li>
             <li>Setting up Local Development</li>
             <li>C++ Basic</li>
             <li>Data Types , Operators , String</li>
             <li>Decision Making</li>
             <li>Control Flow Loops</li>
             <li>Arrays & Functions</li>

            </ul>
            <div className='link-Mhtml'>
              <a
                href='http://ude.my/UC-f878cb26-8c5a-485e-8e81-44250a39ad04'
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
          <h1>
          </h1>
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
            </ul>
            {/* <a
              href=''
              target="_blank" rel="noopener noreferrer">
              <button className='button-html'>Certificate</button>
            </a> */}
          </div>
        )}
        <div><button onClick={CppClickHere} style={buttonStyles} >back</button></div>
      </div>
    </>
  )
}

export default c
