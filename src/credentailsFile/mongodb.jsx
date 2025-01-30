import React, { useState } from 'react'
import './mongodb.css'
import { useNavigate } from "react-router-dom";

function mongodb() {
  const [isFirstDivClicked, setIsFirstDivClicked] = useState(false);

  const navigate = useNavigate();

  const handleFirstDivClick = () => {
    setIsFirstDivClicked(!isFirstDivClicked);
    // setIsSecondDivClicked(false);  // Close the second div if the first is opened
    // setIsThreeDivClicked(false);
  };

  const MongoClickHere = () => {
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
          <h1> MongoDB - The Complete MongoDB Developers</h1>
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
              <li>Introduction of MongoDB</li>
              <li>MongoDB Installation</li>
              <li>MongoDB Query API</li>
              <li>Create Database & Create Collections</li>
              <li>MongoDB Insert , Find , Update , Delete</li>
              <li>Query Opertors , Update Opertors</li>
              <li>MongoDB Aggregate Pipeline , Aggregate $Group , Aggregation $Limit ,Aggregation $Project</li>
              <li>Aggregation $Sort , Aggregation $Match , Aggregation $Addfield , Aggregation $Count , Aggregation $Out</li>
              <li>MongoDB Indexing Or Search</li>
              <li>MongoDB Schema Validation </li>
              <li>MongoDB Data API</li>
              <li>MongoDB Aggregate $Limit</li>
              <li>MongoDB Chart</li>
            </ul>
            <a
              // href=''
              target="_blank" rel="noopener noreferrer">
              <button className='button-html'>Certificate(Pending)</button>
            </a>
          </div>
        )}
        <div><button onClick={MongoClickHere} style={buttonStyles} >back</button></div>
      </div>
    </>
  )
}

export default mongodb
