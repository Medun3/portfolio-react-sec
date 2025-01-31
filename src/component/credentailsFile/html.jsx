import React, { useState } from 'react'
import './html.css'
import { useNavigate } from "react-router-dom";

function html() {
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
          <h1>Learn HTML Basic To Advanced</h1>
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
              <li>Tag, Element and Document Structure</li>
              <li>Code Editor, Install and Setup</li>
              <li>Heading Tag, HTML Element, HTML Attribute,Paragraph Tag</li>
              <li>HTML Styles, HTML Formatting,Quotations,HTML Comments, HTML Colors, HTML CSS</li>
              <li>HTML Link, Image, Favicon, Page Title, Tables</li>
              <li>HTML Lists, Block and InLine, Div, Classes, Id</li>
              <li>HTML JavaScript, Flie Paths, Head, Layout, Responsive, Computercode, Semantics</li>
              <li>HTML Forms,HTML Graphics,HTML Media,HTML Quiz</li>
            </ul>
            <a
              href='http://ude.my/UC-86cfe2b7-0cc1-456b-8cdd-54f53ec79453'
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
          <h1>Mastering HTML5 and CSS3</h1>
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
              <li>HTML Document Structure</li>
              <li>How to  change defaults in the browsers</li>
              <li>Code Editor, Install and Setup</li>
              <li>Effects & Display Behavior in HTML</li>
              <li>How to use fonts in HTML and Well formed HTML documents using "Semantic Elements"</li>
              <li>Multimedia in HTML</li>
              <li>Using Advanced CSS rules in Login Form </li>
              <li>More About CSS rules in Login Form</li>
              <li>More About CSS Selectors</li>
              <li>Responsive Web Design Fundamentals</li>
              <li>Deep into CSS</li>
              <li>Sizes in CSS</li>
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
        <div><button onClick={ HtmlClickHere} style={buttonStyles} >back</button></div>
      </div>

    </>
  )
}

export default html
