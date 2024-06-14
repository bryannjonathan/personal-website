"use client";

import { useRouter } from "next/navigation";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Home() {
  const router = useRouter();

  const handleClick = (link: string) => {
    console.log("Opening ", link)
    router.push(link)
  }

  return (
    <div className="home-page">

      <h1>Bryan Jonathan</h1>
      <h3>Final-year Computer Science Student at The Chinese University of Hong Kong, Shenzhen</h3>
      
      <ul className="home-nav">
        <li onClick={() => handleClick("/project")}>Project</li>
        <li onClick={() => handleClick("/experience")}>Experience</li>
        <li onClick={() => handleClick("/education")}>Education</li>
      </ul>
      
      <ul className="social-icons">
        <li><a href="https://github.com/bryannjonathan"> <IoLogoGithub/> </a></li>
        <li><a href="https://www.linkedin.com/in/bryannjonathan/"> <IoLogoLinkedin/> </a></li>
      </ul>
      

      
    </div>
  );
}
