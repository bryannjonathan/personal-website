import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoMailUnread } from "react-icons/io5";
import "./footer.css"
import toast from "react-hot-toast";

export default function Footer() {

    const copyLink = () => {
        try{
            navigator.clipboard.writeText("24jonathan.bryan@gmail.com")
            
            toast((t) => {
                t.duration=3500 
                return(
                    <div className="toast-notif">
                        Email copied to clipboard
                    </div>
                )
            })

        } catch (e){
            console.log(e)
        }
            
    }

    return (
        <div className="footer">
            <ul className="social-icons">
                <li>
                    <a href="https://github.com/bryannjonathan" className="social-link">
                        <IoLogoGithub /> 
                        <span className="social-text">bryannjonathan</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/bryannjonathan/" className="social-link">
                        <IoLogoLinkedin />
                        <span className="social-text">bryannjonathan</span>
                    </a>
                </li>
                <li onClick={copyLink} className="social-link">
                    <IoMailUnread />
                    <span className="social-text">24bryan.jonathan@gmail.com</span>
                </li>
            </ul>
        </div>
    )
}
