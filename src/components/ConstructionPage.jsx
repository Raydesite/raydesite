import React from "react";
import {
  container,
  logoPulse,
  socialLinks
} from '../components/constructionPage.module.css'
import logo from '../assets/logo-pulse.png'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';



const ConstructionPage = () => {
  return (
    <div className={container}>
        <img className={logoPulse} src={logo} alt="Raydesite-logo" />
        <h2>¡Estaremos de vuelta pronto!</h2>
        <p>Nuestro sitio actualmente está siendo renovado. Puedes contactarnos a traves de nuestas redes sociales.</p>

        <ul className={socialLinks}>

            <li key="twitter"><a target="_blank" rel= "noopener noreferrer" href='https://twitter.com/raydesite'><FaTwitter/>{" "}</a></li>
            <li key="instagram"><a target="_blank" rel= "noopener noreferrer"  href='https://instagram.com/raydesite'><FaInstagram/>{" "}</a></li>
            <li key="linkedin"><a target="_blank" rel= "noopener noreferrer"  href='https://linkedin.com/in/raydesite'><FaLinkedin/>{" "}</a></li>
        </ul>
      
    </div>
       
  )
}


export default ConstructionPage;
