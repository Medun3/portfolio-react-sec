import React, { useState } from 'react'
import './project.css'
import { useNavigate } from "react-router-dom";
import video1 from './rmapp.mp4'
import video2 from './port.mp4'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function project() {
    const videos = [
        { src: video1, title: "Recipe Management App" },
        { src: video2, title: "Portfolio Website" },
       
     ];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    
    const handleLeftClick = () => {
        setCurrentVideoIndex((prevIndex) =>
          prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
      };
    
      const handleRightClick = () => {
        setCurrentVideoIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
      };

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/"); // Navigate to the "Home" route
    };

    
    const buttonStyles = {
        color: "white",
        cursor: "pointer",
        position: "absolute",
        right: "1%",
        top: "3vh",
        padding: "5px 20px",
        transformOrigin: "center",
        backgroundColor: "#2322",
        borderRadius: "999px",
        display: "flex",
        flexWrap: "wrap",
    };

    return (
        <>
            <div className='container-project'>
                <div className='background-project'>
                <h1 className="video-title">{videos[currentVideoIndex].title}</h1>

                    <div className='play-system'>
                        <button onClick={handleLeftClick} className="arrow-button">
                            <BsArrowLeftCircleFill size={34} />
                        </button>
                        <video src={videos[currentVideoIndex].src} controls autoPlay muted></video>
                    
                        <button onClick={handleRightClick} className="arrow-button">
                            <BsArrowRightCircleFill size={34} />
                        </button>
                    </div>
                    <div className='projectDetails'>
                        <button>project details</button></div>
                    </div>     
                       
                   
                
                <div><button onClick={handleButtonClick} style={buttonStyles} className='button-Credentails'>back</button></div>
            </div>
        </>
    )
}

export default project
