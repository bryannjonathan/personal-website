import React from "react";
import ExpCard from "@/components/experience card/expCard";
import expList from "../expList"
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "./experience.css"

export default function Education(){
    return(
        <div className="exp-page">


            <Navbar />
            <h1 className="page-title">EXPERIENCE</h1>
            <div className="exp-content">
                {expList.map((exp,index) => (
                    <ExpCard 
                        key={index}
                        place={exp.place}
                        position={exp.position}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                        location={exp.location}
                        desc={exp.desc}
                    />
                ))}
            </div>
  
            <Footer />

        </div>
    )
}