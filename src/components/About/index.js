import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faUbuntu, 
    faNodeJs
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () =>{
    
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15} />
                    
                </h1>

                <p>Hey! I'm Kartik Subbaram and I'm 19 years old. I am a second year student at MIT Manipal and a passionate Tech enthusiast who loves to take up new projects and learn new technologies </p>
                <p>This Portfolio Website is the first React project that I have undertaken. The project has provided me great insight into the world of Frontend Development and has also allowed me to pick up skills such as HTML5, CSS, Javascript Basics as well as the knowledge of useful React libraries. EmailJS and Leaflet.js are a few technologies that I came across while building this basic web application.</p>
                <p>FreeCodeCamp tutorials and assistance from my dearest friend ChatGPT were instrumental in this project! </p>
            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
        <Loader type ="pacman" />
      </>

        

    )
}



export default About;


