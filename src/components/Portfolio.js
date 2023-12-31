import React from 'react';
import Project from "./Project";
import '../css/Portfolio.css';
import crypto from "../images/crypto-project-1.png";
import strainFinder from "../images/strain-finder.png";
import weather from "../images/weather-dashboard-wilmington.png";
import tech from "../images/homepage.png";
import note from "../images/note-taker-home.png"
import workday from "../images/Work-day-scheduler.png"

const projects = [
  {
    title: "Crypto Lookup",
    technologies: "HTML/CSS/Javascript",
    image: crypto,
    github: "https://github.com/A-Witthohn/Group-3-Crypto-Price-Project-1",
    link: "https://a-witthohn.github.io/Group-3-Crypto-Price-Project-1/",
  },
  {
    title: "Strain Finder",
    technologies: "Javascript/Node.js/Sequelize",
    image: strainFinder,
    github: "https://github.com/A-Witthohn/Strain-Finder",
    link: "https://strain-finder-app.herokuapp.com/",
  },
  {
    title: "Weather Dashboard",
    technologies: "APIs/Bootstrap/Javascript",
    image: weather,
    github: "https://github.com/jacone626/weather-dashboard",
    link: "https://jacone626.github.io/weather-dashboard/",
  },
  {
    title: "Tech Blog",
    technologies: "MVC/MySQL/Node.js",
    image: tech,
    github: "https://github.com/jacone626/tech-blog",
    link: "https://tech-blog-jacone626.herokuapp.com/",
  },
  {
    title: "Note Taker",
    technologies: "Heroku/Express.js/Javascript",
    image: note,
    github: "https://github.com/jacone626/note-taker",
    link: "https://secure-plains-21587.herokuapp.com/",
  },
  {
    title: "Work Day Scheduler",
    technologies: "Local Storage/jQuery/Day.js",
    image: workday,
    github: "https://github.com/jacone626/work-day-scheduler",
    link: "https://jacone626.github.io/work-day-scheduler/",
  },
]

function Portfolio() {
  return (
    <div className="container mt-5">
        <h2 id="portfolio">Portfolio</h2>
     
        <Project projects={projects}/>

    </div>
  )
}

export default Portfolio;
