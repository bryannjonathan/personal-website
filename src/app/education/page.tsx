import React from "react";
import EducationCard from "@/components/education card/educationCard";
import schoolList from "./educationList"
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "./education.css"

export default function Education(){
    return(
        <div className="edu-page">


            <Navbar />
            <h1 className="page-title">EDUCATION</h1>
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
  
            <Footer />

        </div>
    )
}