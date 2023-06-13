import React from "react";

function Project(props) {
    return (
        <div className="row portfolio-container">
        {props.projects.map(project => (   
        <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={project.id}>
          <div className="portfolio-wrap">
            <img src={project.image} className="img-fluid" alt="application homepage"/>
            <div className="portfolio-info">
              <h4>Name: {project.title}</h4>
              <p>Tech: {project.technologies}</p>
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
  