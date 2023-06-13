import React from 'react';
import testPhoto from "../images/crypto-project-1.png"

function Portfolio() {
  return (
    <div class="container mt-5">
    <section id="portfolio" class="portfolio">
    <div class="container">

      <div class="section-title">
        <h2>Portfolio</h2>
      </div>

      <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src={testPhoto} class="img-fluid" alt="crypto lookup application homescreen"/>
            <div class="portfolio-info">
              <h4>Crypto-Look-up</h4>
              <p>HTML/CSS/Javscript</p>
              <div class="portfolio-links">
                <a href="https://github.com/A-Witthohn/Group-3-Crypto-Price-Project-1" target="_blank"><p class="portfolio-href">Github Repo</p></a>
                <a href="https://a-witthohn.github.io/Group-3-Crypto-Price-Project-1/" target="_blank"><p class="portfolio-href">Project link</p></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/images/strain-finder.png" class="img-fluid" alt="strain finder reviews page"/>
            <div class="portfolio-info">
              <h4>Strain Finder</h4>
              <p>Javascript/Node.js/Sequelize</p>
              <div class="portfolio-links">
                <a href="https://github.com/A-Witthohn/Strain-Finder" target="_blank"><p class="portfolio-href">Github Repo</p></a>
                <a href="https://strain-finder-app.herokuapp.com/" target="_blank"><p class="portfolio-href">Project Link</p></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</div>
  )
}

export default Portfolio;
