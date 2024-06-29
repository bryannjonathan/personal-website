import React from "react";
import { expProps } from "@/types";
import "./expCard.css";

export default function ExpCard({ place, position, startDate, endDate, desc }: expProps) {
    return (
        <div className="exp-card-container">
            {/* <div className="exp-date-container">
                
            </div> */}
            <div className="exp-text-container">
            <h2 className="exp-date"> {startDate} {endDate && `- ${endDate}`}</h2>
                <h1 className="position-place">
                    <span className="position">{position} </span><span className="place"> | {place}</span>
                </h1>
                
                <ul className="exp-desc">
                    {desc.map((description, index) => (
                        <li key={index}>{description}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
