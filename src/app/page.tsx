"use client";

import { useEffect, useState, useRef } from "react";
import { IoLogoLinkedin, IoLogoGithub, IoMailUnread } from "react-icons/io5";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

// components
import Footer from "@/components/footer/footer";
import ExpCard from "@/components/experience card/expCard";
import ProjectCard from "@/components/project/projectCard";
import EducationCard from "@/components/education card/educationCard";
// import { Button } from "@/components/ui/button";

// list
import schoolList from "./lists/educationList";
import projList from "./lists/projList";
import expList from "./lists/expList";

import { FiDownload } from "react-icons/fi";

export default function Home() {
  const flashlightRef = useRef<HTMLDivElement>(null)


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

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (flashlightRef.current) {
  //       flashlightRef.current.style.left = `${e.clientX}px`
  //       flashlightRef.current.style.top = `${e.clientY}px`
  //     }
  //   }

  //   window.addEventListener("mousemove", handleMouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove)
  //   }
  // }, []) 

  return (
    <main className="home">
      {/* <div ref={flashlightRef} className="flashlight"></div> */}

      <section className="hero">
        <div className="hero-content">
          <h1>Bryan Jonathan</h1>
          <p>Final Year CSE Student @CUHK(SZ)</p>
          <div className="social-links">
            <a href="https://github.com/bryannjonathan" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/bryannjonathan/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a onClick={copyLink}>
              <Mail />
            </a>
          </div>
          <a download href="./Bryan Jonathan CV.pdf" className="resume-button">
            <FiDownload /> Download Resume
          </a>
        </div>
        <div className="scroll-indicator">
          <ChevronDown />
        </div>
      </section>

      <div className="container">
        <section className="projects-section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projList.slice(0,4).map((project, index) => (
              <ProjectCard 
                key={index} 
                name={project.name}
                imgUrl={project.imgUrl}
                subtitle={project.subtitle}
                github={project.github}
              />
            ))}
            
          </div>
          <div className="see-more-button">
            <Link href="/projects" passHref>
              <p className="goback-button">See More Projects</p>
            </Link>
          </div>
        </section>

        {/* <section className="experience-section">
          <h2>Experience</h2>
          <ExperienceTimeline />
        </section> */}
      </div>
    </main>
  )


  
}
