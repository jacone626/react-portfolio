import React from 'react';
import testPhoto from "../images/crypto-project-1.png"

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
