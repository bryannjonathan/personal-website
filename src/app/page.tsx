"use client";

import { useRouter } from "next/navigation";

// components
import Footer from "@/components/footer/footer";
import ExpCard from "@/components/experience card/expCard";
import ProjectCard from "@/components/project/projectCard";
import EducationCard from "@/components/education card/educationCard";

// list
import schoolList from "./lists/educationList"
import projList from "./lists/projList"
import expList from "./lists/expList"

import { FiDownload } from "react-icons/fi";

export default function Home() {
  const router = useRouter();

  const handleClick = (link: string) => {
    console.log("Opening ", link)
    router.push(link)
  }

  return (
    <div className="web-page">
      <div className="home-page">
        <div className="content">
          <h1>Bryan Jonathan</h1>
          <h3>Final-year Computer Science Student at The Chinese University of Hong Kong, Shenzhen</h3>

          {/* TODO: edit where the navbar goes */}
          {/* <ul className="home-nav">
            <li onClick={() => handleClick("/")}>Project</li>
            <li onClick={() => handleClick("/")}>Experience</li>
            <li onClick={() => handleClick("/")}>Education</li>
          </ul> */}

          <a download href="./Bryan Jonathan CV.pdf" className="cv-button">
            Resume <FiDownload />
          </a>

        </div>
      </div>

      <div className="edu-page">
            <h1 className="page-title">Education</h1>
            <div className="edu-content">
                {schoolList.map((school,index) => (
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

      <div className="proj-page">
        <h1 className="page-title">Project</h1>
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

      <div className="exp-page">
        <h1 className="page-title">Experience</h1>
        <div className="exp-content">
          {expList.map((exp, index) => (
            <ExpCard 
              key={index}
              place={exp.place}
              position={exp.position}
              startDate={exp.startDate}
              endDate={exp.endDate}
              desc={exp.desc}
            />
          ))}
        </div>    
      </div>

        <Footer />
    </div>
    
  );
}
