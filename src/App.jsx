import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import mrLogo from "./mr-logo.jpg"
import image from "./me.jpg"
import { Link } from 'react-router-dom';

function App() {
  const [text, setText] = useState("Medunraj");

  useEffect(() => {
    const texts = ["Medunraj", "Web Developer"];
    let index = 0;

    const textLoad = () => {
      setText(texts[index]);
      index = (index + 1) % texts.length;
    };

    textLoad(); // Set initial text
    const interval = setInterval(textLoad, 2000); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  const firstTextStyle = {
    color: "aquamarine",
    fontSize: "55px",
  };

  const secondTextStyle = {
    color: "yellow",
  };
  return (
    <>
      <div className='container-app'>
        <div className=" navbar box-top d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <div id="top-logo">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
              <img id="mr-logo" src={mrLogo} alt="mr-logo" width="50px" height="50px" />
              <span className="portfolio">Portfolio</span>
            </a>
          </div>
          <nav className=" d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="headline" href="/Credentials">
              Credentials and Skills
            </a>
            {/* <a className="headline" href="#skills">
              
            </a> */}
            <a className="headline" href="/Project">
              Project
            </a>
            <a className="headline" href="/Contact">
              Contact
            </a>
          </nav>
        </div>
        <div className='titleName'>
          <div className='nameIntro' >
            <span style={firstTextStyle}>I am </span>
            <span style={secondTextStyle}>{text}</span>
            <div className='paragraph'><p>full-stack web developer with expertise in the MERN stack and a strong commitment to continuous learning and innovation</p>
            </div>
          </div>
          <div className='link-introduction'>
          <Link to="/introduction" className='text-decoration-none'>
            <button className="button">
              <div className="dots_border"></div>
              <span className="text_button">learn more</span>
            </button>
          </Link>
          </div>
           <div id="myImage"><img src={image} alt="" />
            
        </div>
        <div className='page-detail'></div>
          </div>
      </div>
    </>
  )
}
export default App
