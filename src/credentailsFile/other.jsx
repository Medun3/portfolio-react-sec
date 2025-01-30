import React, { useState } from 'react'
import './other.css'
import { useNavigate } from 'react-router-dom';

function other() {
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

  const OtherClickHere = () => {
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
      <div id="py"
        style={{ display: 'flex', flexDirection: 'column', }}>
        <div
          onClick={handleFirstDivClick}
          style={{
            color: 'rgb(196, 175, 149)',
            width: 'auto',
            height: '100px',
            fontSize: '5px',
            cursor: 'pointer',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center', // Centers content vertically inside the parent
            alignItems: 'center',     // Centers content horizontally inside the parent
          }}
        >
          <h1>Python Demonstrations For Practice Course</h1>
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
             <li>Python Variables & Constants</li>
             <li>Class & Objects (demonstration)</li>
             <li>Array Implementation , Keywords & Identifiers , Tuples , Sets , Different Modules</li>
             <li>Directory & File management ,Python Dictionary</li>
             <li>String , Data Type Conversion , Numbers , NameSpace & Scope</li>
             <li>Python Global , Local and Nonlocal</li>
             <li>Iterators , Inheritance , Multiple Inheritance</li>
             <li>Arguments , Function , Break Statement , Continue Statement</li>
             <li>Errors & Expections , OOP Approach , Operator Overloading , Pass Statement</li>
             <li>Matrix Implementation , Regular Expression , List Comprehension</li>
             <li>Python Recursion , Read and Write Operations</li>
             <li>Lamda function</li>
             <li>Assert and Python @property</li>
             </ul>

              <a
              href='http://ude.my/UC-0add2a4b-8484-4d3b-8bf7-22b568191e68'
              target="_blank" rel="noopener noreferrer">
              <button className='button-html'>Certificate</button>
            </a>
          </div>
        )}


        <div
          onClick={handleSecondDivClick}
          style={{
            color: 'rgb(136, 119, 98)',
            width: 'auto',
            height: 'auto',
            fontSize: '10px',
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
             </ul>
           
          </div>
        )}
        <div><button onClick={OtherClickHere} style={buttonStyles} >back</button></div>
      </div>

    </>
  )
}

export default other
