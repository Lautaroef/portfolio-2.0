"use client";
import { useEffect, useRef } from "react";
import SingleProject from "./SingleProject";
import scrollReveal from "../animations/ScrollReveal";
import TiltAnimation from "../animations/TiltAnimation";
import { StyledProjectsSection } from "./styled-components";

function MyProjects() {
  const scrollProjects = useRef(null);

  useEffect(() => {
    TiltAnimation();

    // Scroll animation
    if (scrollProjects.current) {
      scrollReveal.reveal(scrollProjects.current, {
        origin: "top", // "bottom"
        distance: "50px", //20px
        delay: 650,
        duration: 650,
      });
    }
  }, []);

  return (
    <div ref={scrollProjects}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 250"
        style={{ width: "100%" }}
      >
        <path
          fill="#f8f8f8"
          fillOpacity="1"
          d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,112C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <StyledProjectsSection>
        <h2 id="my-projects">My recent Projects</h2>
        <span className="h2-border" />
        <div>
          {projectsData.map((project) => {
            return <SingleProject key={project.id} {...project} />;
          })}
        </div>
      </StyledProjectsSection>
    </div>
  );
}

export default MyProjects;
