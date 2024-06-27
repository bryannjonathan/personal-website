import React from "react";
import Image from "next/image";
import { eduProps } from "@/types";
import "./eduCard.css";

export default function EducationCard({ schoolname, imgUrl, startDate, endDate, achievements, location, degree }: eduProps) {
    return (
        <div className="edu-card-container">
            <div className="edu-image-container">
                <Image src={imgUrl} width={450} height={450} alt="school image" className="school-image"/>
            </div>
            <div className="edu-text-container">
                <h1 className="school-name">{schoolname}</h1>
                <h2 className="degree">{degree}</h2>
                <h3 className="edu-date-duration">{location} | {startDate} - {endDate}</h3>
                <ul className="edu-desc">
                    {achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
