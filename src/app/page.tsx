"use client";

import { useEffect } from "react";

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
  useEffect(() => {
    const handleScroll = () => {
      const tags = document.querySelectorAll(".fade-in");
      tags.forEach(tag => {
        const rect = tag.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          tag.classList.add("visible");
        } else {
          tag.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="web-page">
      <div className="home-page fade-in">
        <div className="content">
          <h1>BRYAN JONATHAN</h1>
          <h3>Final-year Computer Science Student at The Chinese University of Hong Kong, Shenzhen</h3>

          <a download href="./Bryan Jonathan CV.pdf" className="cv-button">
            Resume <FiDownload />
          </a>
        </div>
      </div>

      {/* <div className="divider fade-in"></div> */}

      <div className="content-page fade-in">
        <div className="content-sidebar">
          <h1 className="content-title">EDUCATION</h1>
        </div>
        <div className="edu-content">
          {schoolList.map((school, index) => (
            <EducationCard 
              key={index}
              schoolname={school.schoolname}
              degree={school.degree}
              imgUrl={school.imgUrl}
              startDate={school.startDate}
              endDate={school.endDate}
              location={school.location}
              achievements={school.achievements}
            />
          ))}
        </div>
      </div>

      {/* <div className="divider fade-in"></div> */}

      <div className="content-page project fade-in">
        <div className="content-sidebar">
          <h1 className="content-title">PROJECT</h1>
        </div>

        <div className="proj-content">
          {projList.map((project, index) => (
            <ProjectCard 
              key={index}
              name={project.name}
              imgUrl={project.imgUrl}
              subtitle={project.subtitle}
              github={project.github}
            />
          ))}
        </div>
        
      </div>

      {/* <div className="divider fade-in"></div> */}

      <div className="content-page fade-in">
        <div className="content-sidebar">
          <h1 className="content-title">EXPERIENCE</h1>
        </div>
        <div className="exp-content">
          {expList.map((exp, index) => (
            <div className="exp-section" key={index}>
              <ExpCard 
                place={exp.place}
                position={exp.position}
                startDate={exp.startDate}
                endDate={exp.endDate}
                desc={exp.desc}
              />
            </div>
          ))}
        </div>    
      </div>

      <Footer />
    </div>
  );
}
