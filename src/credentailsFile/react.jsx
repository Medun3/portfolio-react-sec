import React, { useState } from 'react'
import './react.css'
import { useNavigate } from 'react-router-dom'

function react() {
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

  const ReactClickHere = () => {
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
          <h1>React.JS Crash Course: The Complete Course for Beginners</h1>
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
              <li>Styling Components Hooks</li>
              <li>Hierarchy Rendering & Advanced hooks</li>
              <li>Building a Calcultor App</li>
            </ul>
            <a
              href='http://ude.my/UC-f518eeb4-6a1d-42e9-8378-78f4203bc55e'
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
          <h1>Learn Core Concepts of ReactJs : Also Learn ReactJs ES6</h1>
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
              <li>Introduction of React ES6</li>
              <li>React Render Method, React JSX, React class, React Props, React Events,Conditional, Lists, Forms</li>
              <li>ES6 Classes, ES6 Arrow Function, ES6 Variables, Array Methods,Destructuring,Spread Operator,ES6 Modules and ES6 Ternary Operator</li>
            </ul>
            <div className='link-Mhtml'>
              <a
                // href=''
                target="_blank" rel="noopener noreferrer">
                <button className='button-html'>Certificate (pending)</button>
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
          <h1>Mastering React: React Crash Course with Mini Projects
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
              <li>React Environment Set-Up Node</li>
              <li>React Components And Templates</li>
              <li>React Multiple Components</li>
              <li>React Dynamic Value</li>
              <li>React Adding Styles</li>
              <li>React Props</li>
              <li>React Props Project</li>
              <li>React UseState Counter Project</li>
            </ul>
            <a
                href='http://ude.my/UC-45124859-5b8f-4c5b-92f9-6716516117f0'
                target="_blank" rel="noopener noreferrer">
                <button className='button-html'>Certificate</button>
              </a>
          </div>
        )}
        <div><button onClick={ReactClickHere} style={buttonStyles} >back</button></div>
      </div>


    </>
  )
}

export default react
