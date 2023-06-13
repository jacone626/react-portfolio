import React from 'react';
import testPhoto from "../images/crypto-project-1.png"

const projects = [
  {
    title: "Crypto Lookup",
    technologies: "HTML/CSS/Javascript",
    image: "../images/crypto-project-1.png"
    github: "https://github.com/A-Witthohn/Group-3-Crypto-Price-Project-1",
    link: "https://a-witthohn.github.io/Group-3-Crypto-Price-Project-1/",
  },
  {
    title: "Strain Finder",
    technologies: "Javascript/Node.js/Sequelize",
    image: "../images/strain-finder.png"
    github: "https://github.com/A-Witthohn/Strain-Finder",
    link: "https://strain-finder-app.herokuapp.com/",
  },
  {
    title: "Weather Dashboard",
    technologies: "APIs/Bootstrap/Javascript",
    image: "../images/weather-dashboard-wilmington.png"
    github: "https://github.com/jacone626/weather-dashboard",
    link: "https://jacone626.github.io/weather-dashboard/",
  },
  {
    title: "Tech Blog",
    technologies: "MVC/MySQL/Node.js",
    image: "../homepage.png"
    github: "https://github.com/jacone626/tech-blog",
    link: "https://tech-blog-jacone626.herokuapp.com/",
  },
  {
    title: "Note Taker",
    technologies: "Heroku/Express.js/Javascript",
    image: "../images/note-taker-home.png"
    github: "https://github.com/jacone626/note-taker",
    link: "https://secure-plains-21587.herokuapp.com/",
  },
  {
    title: "Work Day Scheduler",
    technologies: "Local Storage/jQuery/Day.js",
    image: "../images/Work-day-scheduler.png"
    github: "https://github.com/jacone626/work-day-scheduler",
    link: "https://jacone626.github.io/work-day-scheduler/",
  },
]

function Portfolio() {
  return (
    <div className="container mt-5">
        <h2>Portfolio</h2>
     

      <div className="row portfolio-container">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={testPhoto} className="img-fluid" alt="crypto lookup application homescreen"/>
            <div className="portfolio-info">
              <h4>Crypto-Look-up</h4>
              <p>HTML/CSS/Javscript</p>
              <div className="portfolio-links">
                <a href="https://github.com/A-Witthohn/Group-3-Crypto-Price-Project-1" target="_blank" rel="noreferrer"><p className="portfolio-href">Github Repo</p></a>
                <a href="https://a-witthohn.github.io/Group-3-Crypto-Price-Project-1/" target="_blank" rel="noreferrer"><p className="portfolio-href">Project link</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
