"use client";

import { useEffect, useState } from "react";
import { IoLogoLinkedin, IoLogoGithub, IoMailUnread } from "react-icons/io5";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

// components
import Footer from "@/components/footer/footer";
import ExpCard from "@/components/experience card/expCard";
import ProjectCard from "@/components/project/projectCard";
import EducationCard from "@/components/education card/educationCard";

// list
import schoolList from "./lists/educationList";
import projList from "./lists/projList";
import expList from "./lists/expList";

import { FiDownload } from "react-icons/fi";

export default function Home() {
  const copyLink = () => {
    try{
      navigator.clipboard.writeText("24jonathan.bryan@gmail.com");

      toast((t) => {
        t.duration=3500
        return(
          <div className="toast-notif">
            Email copied to clipboard
          </div>
        )
      })
    } catch (e) {
      console.log(e)
    }  
  }

  // dim light behind cursor (flashlight)
  const [position, setPosition] = useState({ x:0, y:0});
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
    
  }, []);

  return (
    <div className="web-page">
      {/* Flashlight effect */}
      <div
        className="flashlight"
        style={{ top: position.y-100, left: position.x-100 }}
      >
      </div>

      <div className="home-page">
        <div className="content">
          <h1>Bryan Jonathan</h1>
          {/* <h3>Final-year Computer Science Student at The Chinese University of Hong Kong, Shenzhen</h3> */}
          <h3>Senior @CUHK(SZ)</h3>
          <a download href="./Bryan Jonathan CV.pdf" className="cv-button">
            Resume <FiDownload />
          </a>
          <ul className="social-links">
                <li>
                  <a href="https://github.com/bryannjonathan">
                    <Github className="social-icon"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/bryannjonathan/">
                    <Linkedin className="social-icon"/>
                  </a>
                </li>
                <li onClick={copyLink}>
                  <Mail className="social-icon"/>
                </li>
            </ul>
        </div>
      </div>

      <div className="project-page">
        <h2 className="section-title">Project</h2>

        <div className="project-list">
          

        </div>

      </div>

    </div>
  );
}
