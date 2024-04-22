import React from 'react'
import comet from '../images/cometservices.png'
import chp from '../images/himalayanparadise.png'
import portfolio from '../images/portfolio.png'
import weatherapp from  '../images/weatherapp.png'
import todolist from '../images/todolist.png'
import randompasswordgenerator from '../images/randompasswordgenerator.png'
import bmicalculator from '../images/bmicalculator.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      
      <div className='main'>
        <span className='heading'><b> Front-end Developer Portfolio </b></span> {<br/>} {<br/>}
        <h4>From HTML,CSS components to React js, SASS checkout my Skills and Project snippets.</h4>
      </div>

      <div className='skills'>
        <p className='skill'>HTML</p>
        <p className='skill'>XML</p>
        <p className='skill'>CSS</p>
        <p className='skill'>SASS / SCSS</p>
        <p className='skill'>Tailwind CSS</p>
        <p className='skill'>Material UI</p>
        <p className='skill'>JavaScript</p>
        <p className='skill'>React js</p>
        <p className='skill'>Next js</p>
        <p className='skill'>TypeScript</p>
        <p className='skill'>Git & Github</p>
        <p className='skill'>Agile Methodology</p>
        <p className='skill'>Mongo DB</p>
        <p className='skill'>Node js</p>
        <p className='skill'>Express js</p>
      </div>

      <h2 className='projecthead'>Projects</h2>

      <div className="portfoliosection">

        {/* Project 1 */}
        <div className="project">
          <div className='projectimage'>
          <a href="https://cometservices.org/" target="_blank"><img src={comet} alt="Project 1" /></a>
          </div>
          <div className="project-info" >
            <h3>Project 1</h3>
            <p>Description : COMET Services (eCOMET foundation) is a NON-PROFIT organization dedicated to helping students from remote areas who lack career development opportunities due to geographic or financial constraints.</p>
            <p>Technologies: HTML, CSS, JavaScript</p>
            <p>Click Image to Vist on the Website</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project">
          <div className='projectimage'>
          <a href="https://himalayacottages.com/buy-a-cottage.html" target="_blank"><img src={chp} alt="Project 2" /></a>
          </div>
          <div className="project-info">
            <h3>Project 2</h3>
            <p>Description : Himalayan Paradise is a LLP group based out of Himalayan region, delicately executing some unique ideas to bring villagers and group of social/like-minded professionals under one umbrella, to bring some sustainable and Eco-Friendly development in remote areas of Himalayas.</p>
            <p>Technologies: HTML, CSS, JavaScript</p>
            <p>Click Image to Vist on the Website</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project">
          <div className='projectimage'>
          <a href="https://pandeyshubhamportfolio17.netlify.app/" target="_blank"><img src={portfolio}alt="Project 3" /></a>
          </div>
          <div className="project-info">
            <h3>Project 3</h3>
            <p>Description : Developed a personal portfolio using React and Sass to showcase skills, projects, and experiences. The responsive design incorporates a project showcase with detailed descriptions, a visually appealing skills section, and a contact form for easy communication.</p>
            <p>Technologies: HTML, CSS, JavaScript </p>
            <p>Click Image to Vist on the Website</p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project">
          <div className='projectimage'>
          <a href="https://pandeyshubhamweatherapp.netlify.app/" target="_blank"><img src={weatherapp}alt="Project 4" /></a>
          </div>
          <div className="project-info">
            <h3>Project 4</h3>
            <p>Description : Developed a Weather App using HTML , CSS & JavaScript to showcase skills, projects, and experiences. The responsive design incorporates a project showcase with details.</p>
            <p>Technologies: HTML, CSS, JavaScript </p>
            <p>Click Image to Vist on the Website</p>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project">
          <div className='projectimage'>
          <a href="https://pandeyshubhamtodolistapp.netlify.app/" target="_blank"><img src={todolist}alt="Project 5" /></a>
          </div>
          <div className="project-info">
            <h3>Project 5</h3>
            <p>Description : Developed a To-Do-List using HTML , CSS & JavaScript to showcase skills, projects, and experiences. The responsive design incorporates a project showcase with details.</p>
            <p>Technologies: HTML, CSS, JavaScript </p>
            <p>Click Image to Vist on the Website</p>
          </div>
        </div>

        {/* Project 6 */}
        <div className="project">
          <div className='projectimage'>
          <a href="https://pandeyshubhamrandompasswordgenerator.netlify.app/" target="_blank"><img src={randompasswordgenerator}alt="Project 6" /></a>
          </div>
          <div className="project-info">
            <h3>Project 6</h3>
            <p>Description : Developed a Random Password Generator using HTML , CSS & JavaScript to showcase skills, projects, and experiences. The responsive design incorporates a project showcase with details.</p>
            <p>Technologies: HTML, CSS, JavaScript </p>
            <p>Click Image to Vist on the Website</p>
          </div>
        </div>

        {/* Project 7 */}
        <div className="project">
          <div className='projectimage'>
          <a href="https://pandeyshubhambmicalculator.netlify.app/" target="_blank"><img src={bmicalculator}alt="Project 7" /></a>
          </div>
          <div className="project-info">
            <h3>Project 7</h3>
            <p>Description : Developed a BMI Calculator using ReactJS to showcase skills, projects, and experiences. The responsive design incorporates a project showcase with details.</p>
            <p>Technologies: ReactJS, CSS </p>
            <p>Click Image to Vist on the Website</p>
          </div>
        </div>

      </div>
    
</div>
  )
}

export default Portfolio
