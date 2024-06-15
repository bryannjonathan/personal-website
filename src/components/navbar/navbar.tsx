"use client";

import React from "react";
import "./navbar.css";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar(){
    const router = useRouter();
    const pathname = usePathname();
    
    const handleClick = (link: string) => {
        console.log("Opening ", link)
        router.push(link)
    }

    return(
        <div className="navbar">
            <div className="navbar-logo">
                <a onClick={() => handleClick("/")}>Bryan Jonathan</a>
            </div>

            <ul className="navbar-list">
                <li className={`navbar-item ${pathname == "/project" ? "active" : ""}`} onClick={() => handleClick("/project")}>Project</li>
                <li className={`navbar-item ${pathname == "/experience" ? "active" : ""}`} onClick={() => handleClick("/experience")}>Experience</li>
                <li className={`navbar-item ${pathname == "/education" ? "active" : ""}`} onClick={() => handleClick("/education")}>Education</li>
            </ul>

        </div>
        

        
    )
}