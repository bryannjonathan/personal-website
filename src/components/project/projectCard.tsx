import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import "./projectCard.css"
import { projProps } from "@/types"


export default function ProjectCard({
  name,
  subtitle,
  imgUrl,
  technologies,
  github,
  applink,
}: projProps) {
  console.log(`tech: ${technologies}`)

  return (
    <div className="project-card">
      <div className="project-image">
        <Image
          src={imgUrl || "/placeholder.svg"}
          alt={`${name} project screenshot`}
          width={600}
          height={300}
          objectFit="cover"
          className="project-img"
        />
      </div>
      <div className="project-content">
        <h3>{name}</h3>
        <p>{subtitle}</p>
        <div className="project-technologies">
          {technologies?.map((tech) => (
            <span key={tech} className="technology-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
              <Github size={16} /> GitHub
            </a>
          )}
          {applink && (
            <a href={applink} target="_blank" rel="noopener noreferrer" className="app-link">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

