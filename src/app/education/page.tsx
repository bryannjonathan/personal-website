import React from "react";
import EducationCard from "@/components/education card/educationCard";
import schoolList from "./educationList"
import Navbar from "@/components/navbar/navbar";
import "./education.css"

export default function Education(){
    return(
        <div>

            <Navbar />

            <h1 className="page-title">Education</h1>
            

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
    )
}