import ProjectCard from "@/components/project/projectCard"
import Link from "next/link"
import "./project-page.css"
import ParticlesBackground from "@/components/particle background/particleBackground";

import projList from "@/app/lists/projList";
import Footer from "@/components/footer/footer";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <ParticlesBackground />
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
                technologies={project.technologies}
              />
            ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

