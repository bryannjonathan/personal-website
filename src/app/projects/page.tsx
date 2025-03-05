import ProjectCard from "@/components/project/projectCard"
import Link from "next/link"
import "./project-page.css"

import projList from "@/app/lists/projList";

const projects = [
  {
    title: "Project 1",
    description:
      "A brief description of Project 1. This project showcases my skills in frontend development and user interface design.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    appLink: "https://project1.com",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Project 2",
    description:
      "A brief description of Project 2. This project demonstrates my expertise in backend development and database management.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/project2",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Project 3",
    description: "An innovative mobile app that helps users track their fitness goals and nutrition intake.",
    technologies: ["React Native", "Firebase", "Redux"],
    appLink: "https://project3.com",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Project 4",
    description:
      "A machine learning model that predicts stock market trends based on historical data and current events.",
    technologies: ["Python", "TensorFlow", "Pandas"],
    githubLink: "https://github.com/yourusername/project4",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
]

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <div className="container">
        <div className="header">
          <h1>All Projects</h1>
          <Link href="/" passHref>
            {/* <Button variant="outline">Back to Home</Button> */}
            <p className="back-button">Back to Home </p>
          </Link>
        </div>
        <div className="projects-grid">
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
    </main>
  )
}

