import React from 'react';
import { projProps } from '@/types';
import "./projectCard.css";
import Image from 'next/image';

import { FiExternalLink } from "react-icons/fi";
import { GithubIcon } from 'lucide-react';

const ProjectCard = ({ name, imgUrl, subtitle, applink, github, technologies }: projProps) => {
    return(
        <div className="project-card">
            <div className="project-image">
                <Image
                src={imgUrl || "/placeholder.svg"}
                alt={`${name} project screenshot`}
                layout="fill"
                objectFit="cover"
                />
            </div>
            <div className="project-overlay">
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
                        <GithubIcon className="external-icon" />
                    </a>
                    )}
                    {applink && (
                    <a href={applink} target="_blank" rel="noopener noreferrer" className="app-link">
                        <FiExternalLink size={16} /> Live Demo
                    </a>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
    
};

export default ProjectCard;
