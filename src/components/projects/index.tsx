"use client";
import type { ProjectWithTechnologies } from "types";
import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import { StyledProjectsSection } from "./styled-components";
// Animation
import TiltAnimation from "../animations/TiltAnimation";
// Fonts
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";
import GOTHAM_LS_LIGHT from "fonts/GOTHAM_LS_LIGHT";
import Filter from "./Filter";

function Projects({ projects }: { projects: ProjectWithTechnologies[] }) {
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectWithTechnologies[]>(projects);

  useEffect(() => {
    TiltAnimation();
  }, []);

  return (
    <StyledProjectsSection>
      <h2 id="my-projects" className={GOTHAM_MEDIUM.className}>
        My Projects
      </h2>
      <span className="h2-border" />
      <Filter
        projects={projects}
        filteredProjects={filteredProjects}
        setFilteredProjects={setFilteredProjects}
      />
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <SingleProject
            key={project.id}
            project={project}
            filteredProjects={filteredProjects}
            gothamMedium={GOTHAM_MEDIUM.className}
            gothamLsLight={GOTHAM_LS_LIGHT.className}
          />
        ))}
      </div>
    </StyledProjectsSection>
  );
}

export default Projects;
