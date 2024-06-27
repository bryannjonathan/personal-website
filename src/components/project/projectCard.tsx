import React from 'react';
import { projProps } from '@/types';
import Link from 'next/link';
import "./projectCard.css";

const ProjectCard = ({ name, imgUrl, subtitle, applink, github, }: projProps) => {
    const content = (
        <div className="project-card">
            <div className="project-image">
                {github ? (
                    <Link href={github} legacyBehavior>
                        <a target="_blank" className="image-link">
                            <img src={imgUrl} className="project-image" />
                            <div className="overlay">
                                <span className="project-subtitle">{subtitle}</span>
                            </div>
                        </a>
                    </Link>
                ) : (
                    <>
                        <img src={imgUrl} className="project-image" />
                        <div className="overlay">
                            <span className="project-subtitle">{subtitle}</span>
                        </div>
                    </>
                )}
            </div>
            <h1 className="project-title">{name}</h1> {/* Added title here */}
        </div>
    );

    return content;
};

export default ProjectCard;
