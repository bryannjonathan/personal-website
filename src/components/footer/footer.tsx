import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import "./footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <ul className="social-icons">
                <li><a href="https://github.com/bryannjonathan"> <IoLogoGithub/> </a></li>
                <li><a href="https://www.linkedin.com/in/bryannjonathan/"> <IoLogoLinkedin/> </a></li>
            </ul>
        </div>
        
    )
}