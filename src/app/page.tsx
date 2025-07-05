"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown, GraduationCap, Luggage } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

// components
import Footer from "@/components/footer/footer";
import ExpCard from "@/components/experience card/expCard";
import ProjectCard from "@/components/project/projectCard";
import EducationCard from "@/components/education card/educationCard";
import ParticlesBackground from "@/components/particle background/particleBackground";
import SkillCard from "@/components/skill card/skillCard";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// list
import schoolList from "./lists/educationList";
import projList from "./lists/projList";
import expList from "./lists/expList";
import skillList from "./lists/skillList";

import { FiDownload } from "react-icons/fi";
import { ZIndex } from "@tsparticles/engine";

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
  //

  return (
    <main className="home">
      <ParticlesBackground />
      {/* <div ref={flashlightRef} className="flashlight"></div> */}

      <section className="hero">
        <div className="hero-content">
          <h1>{`Hi, I'm Bryan Jonathan`}</h1>
          <p className="title">Full Stack Developer</p>
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
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skillList.map((skill, index) => (
              <SkillCard 
                key={index}
                name={skill}
              />
            ))}  
          </div>

        </section>

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
                technologies={project.technologies}
                applink={project.applink}
              />
            ))}
            
          </div>
          <div className="see-more-button">
            <Link href="/projects" passHref>
              <p className="goback-button">See More Projects</p>
            </Link>
          </div>
        </section>

        <section className="experience-section">
          <h2>Experience</h2>
          <VerticalTimeline
            animate={false}
            layout={'1-column-left'}
          >
            {
              expList.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="exp-component"
                  date={exp.date}
                  dateClassName="exp-date"
                  contentStyle={ { 
                    background: "rgba(31,41,55,0.8)",
                    color: "#fff",
                    boxShadow: "none",
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                  } }
                  contentArrowStyle= { { borderRight: '7px solid  rgb(31, 41, 55)' } }
                  icon={exp.type === 'edu'? <GraduationCap /> : <Luggage />}
                  iconStyle={{
                    background: "#222222",
                    // background: "#4095FF",
                    color: "#4095FF",
                    // border: "4px solid #4095FF"
                  }}
                >
                  <h3 className="exp-position">{exp.position}</h3>
                  <h4 className="exp-place">{exp.place}</h4>
                  <p className="exp-desc">{exp.desc}</p>
                </VerticalTimelineElement>
              ))
            }
            
          </VerticalTimeline>
          
        </section>
      </div>

      <Footer />
    </main>
  )
  
}