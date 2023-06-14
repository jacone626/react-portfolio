import React from 'react';
import '../css/Resume.css'

function Resume() {
  return (
  <div className="container mt-5">
    <h2 id='resume'>Resume</h2>
      <p id="resume-download">Download my <a href="/images/James_A_Cone_Resume_2023 - Google Docs.pdf" target="_blank">Resume</a></p>
	<div id="resume-list">
      <h5 className="resume-titles">Front-End Proficiencies</h5>
				<ul className="list-resume-bullets">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
				
				</ul>
				<br></br>
	  <h5 className="resume-titles">Back-End Proficiencies</h5>
				<ul className="list-resume-bullets" id="margin-resume">
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>MySQL</li>
					<li>GraphQL</li>
					<li>Progressive Web Applications</li>
          			<li>MongoDB</li>
				</ul>
	 </div>
  </div>
  )
}

export default Resume;