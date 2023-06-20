import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/KLogo.png'
import LogoSubtitle from '../../assets/images/KLogoPNG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faInstagram,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return(
    <div className='nav-bar'>
         <Link className="logo" to="/">
            <img src={LogoS} alt ='Logo' />
            <img className ='sub-logo' src={LogoSubtitle} alt ='Kartik' />

        

        </Link>

        <nav>
           <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon ={faHome} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className ="about-link"to="/about">
            <FontAwesomeIcon icon ={faUser} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className ="contact-link" to="/contact">
            <FontAwesomeIcon icon ={faEnvelope} color="#4d4d4e" />
           </NavLink>
        </nav>

        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kartik-subbaram-602476245/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KarsCode"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@KarsCode"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kartik8181" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      
    </div>
  )
}


    

export default Sidebar;