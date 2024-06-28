import React from 'react';
import { projProps } from '@/types';
import "./projectCard.css";

import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ name, imgUrl, subtitle, applink, github, }: projProps) => {
    const content = (
        <div className="project-card">
            <div className="project-image">
                <img src={imgUrl} className="project-image" />
                <div className="overlay">
                    <span className="project-subtitle">{subtitle}</span>
                </div>
            </div>

            {github ? (
                <h1 className="project-title">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="title-link">
                        {name} <FiExternalLink className="external-link-icon" />
                    </a>
                </h1>
            ) : (
                <h1 className="project-title">{name}</h1>
            )}
        </div>
    );

    return content;
};

export default ProjectCard;
