import React from 'react';
import personalImage from "../images/james-alan.png";
import '../css/About.css'

function About() {
  return (
  <div className="container mt-5">
    <h2 id="about">About Me</h2>
    <img src={personalImage} width="400" height="300 "alt="James Alan smiling" className="img-fluid" id="personal-image"/>
      <p id="about-me">
      Hello! My names is James Alan, but I go by J.A., and I grew up in Wilmington, NC. Growing up, I loved fishing and surfing, but I was also a huge UNC fan. I was lucky enough to end up at UNC Chapel Hill, where I majored in Business and minored in Envrionmental Science.
      After three years in the financial industry, I decided it was time for a change. The main factor I was looking for in my next career was the opportunity to think critically and problem-solve on the job. In previous jobs, I felt bogged down by monotonous tasks, and I was looking for something new. 
      Following my completion of the UNC Chapel Hill bootcamp, I found that coding not only satisfied my desire to problem-solve, but it was also something I actually enjoyed!
      </p>
</div>
);
}

export default About;
