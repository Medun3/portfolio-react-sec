import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './intro.css'

// import TypingEffect from "./TypingEffect";
function intro() {
  const Typewriter = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState("");
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
  
      return () => clearInterval(interval); 
    }, [text, speed]);
  
    return <div className="typewriter">{displayedText}</div>;
  };
  
  
  const navigate = useNavigate();
  
  const ContactClickHere = () => {
    navigate("/"); 
  };

  const buttonStyles = {
    color: "rgb(170, 185, 185)",
    cursor: "pointer",
    position: "absolute", 
    top: "15px", 
    right: "30px",
    padding: "5px 20px",
    transformOrigin: "center",
    backgroundColor: "transparent",
    borderRadius: "9999px",
    display: 'flex', 
    flexWrap: 'wrap',
  };
  return (
  <>
   <div className='container-intro'>
  <div className='intro-title '>
   <Typewriter text="A  dynamic and passionate full-stack web developer specializing in the MERN stack, modern JavaScript, and responsive design. With over six months of hands-on experience, he has successfully delivered impactful and efficient web solutions. Medun’s journey into web development stems from a strong foundation in technology and programming, combined with an MBA focusing on human resources.

His technical expertise spans front-end technologies such as HTML, CSS, JavaScript, and React JS, along with back-end frameworks like Node.js and Express.js. Medun is skilled in managing databases with MongoDB and proficient in using Git for version control. Additionally, he has a solid understanding of programming languages, including C, C++, and Python, making him a versatile developer.

Medun has demonstrated his abilities through several projects. He created a Recipe Management application using the MERN stack, enabling users to view, add, edit, and delete recipes effortlessly. He also developed a Workout Tracker that allows users to log their workouts, track progress, and manage fitness routines efficiently. His portfolio also includes a Tic-Tac-Toe Game, showcasing his proficiency in front-end development, and a Bootstrap-based personal portfolio website, emphasizing responsive design.

Medun’s commitment to continuous learning is evident through his certifications. He has completed specialized training in Full Stack Web Development, React.js, and modern JavaScript (ES6, ES7, ES8), along with courses on Python, C, C++, and mastering HTML5 and CSS3.

Before transitioning to IT, Medun gained valuable experience in the marketing and finance sectors. As a Customer Relationship Officer at Ujjivan Small Finance Bank, he maintained healthy client relationships, managed customer databases, and assisted clients with financial products. Earlier, as a Brand Marketing Manager at Aasif Agencies, he coordinated sales operations and ensured customer satisfaction through proactive support.

With a Bachelor’s degree in Information Technology and an MBA from reputed institutions, Medun seamlessly combines technical expertise with business acumen. Fluent in English and Tamil, he thrives on solving challenges and delivering innovative solutions.

Outside of work, Medun is passionate about exploring technologys potential to improve everyday lives. He believes that every project is an opportunity to grow and make an impact.

"speed={10}/>
<div>
  <button onClick={ContactClickHere} style={buttonStyles} >back</button>
  </div>
  
  </div>
   </div>
   <script></script>
  </>
  )
}

export default intro
