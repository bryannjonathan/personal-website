"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import "./footer.css"
import toast from "react-hot-toast"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const copyLink = () => {
    try{
      navigator.clipboard.writeText("24jonathan.bryan@gmail.com");

      toast((t) => {
        t.duration=3500
        return(
          <div className="toast-notif">
            Email copied to clipboard!
          </div>
        )
      })
    } catch (e) {
      console.log(e)
    }  
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bryan Jonathan</h3>
            <p>Full Stack Developer</p>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: 24jonathan.bryan@gmail.com</p>
            <p>Phone: (86) 15012485190</p>
            <p>WA: +62 87877100063</p>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-social-links">
              <a href="https://github.com/bryannjonathan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bryannjonathan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a onClick={copyLink} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">&copy; {new Date().getFullYear()} Bryan Jonathan. All rights reserved.</div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

