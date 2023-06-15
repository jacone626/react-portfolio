import React from "react";
import '../css/Portfolio.css';

function Project(props) {
    return (
        <div className="row portfolio-container">
        {props.projects.map((project, index) => (   
        <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={index}>
          <div className="portfolio-wrap portfolio-background">
            <img src={project.image} className="img-fluid" alt="application homepage" id="portfolio-images"/>
            <div className="portfolio-info">
              <h4>{project.title}</h4>
              <p>Technologies: {project.technologies}</p>
              <div className="portfolio-links">
                <a href={project.github} target="_blank" rel="noreferrer"><p className="portfolio-href">Github Repo</p></a>
                <a href={project.link} target="_blank" rel="noreferrer"><p className="portfolio-href">Project link</p></a>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    );
  }
  
  export default Project;
  