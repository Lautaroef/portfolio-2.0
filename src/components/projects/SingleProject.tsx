import type { ProjectWithTechnologies } from "types";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { StyledSingleProject } from "./styled-components";
import { FaLock } from "react-icons/fa";

type Props = {
  project: ProjectWithTechnologies;
  filteredProjects: ProjectWithTechnologies[];
  gothamMedium: string;
  gothamLsLight: string;
};

function SingleProject({
  project,
  filteredProjects,
  gothamMedium,
  gothamLsLight,
}: Props) {
  const scrollProject = useRef(null);
  const {
    title,
    description,
    image,
    technologies,
    type,
    codeUrl,
    projectUrl,
    endDate,
    isPrivate,
  } = project;

  useEffect(() => {
    // Scroll animation
    async function animate() {
      if (scrollProject.current) {
        const scrollReveal = (await import("../animations/ScrollReveal"))
          .default;
        scrollReveal.reveal(scrollProject.current, {
          origin: "top",
          distance: "80px", //100px
          delay: 0, // 150
          duration: 650,
        });
      }
    }
    animate();
  }, [filteredProjects]);

  // Display the endDate as: "March 2022"
  const date = new Date(endDate).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <StyledSingleProject data-tilt ref={scrollProject}>
      <div className="box">
        <div>
          <h3 className={gothamMedium}>{title}</h3>
          {endDate && (
            <span className={`end-date ${gothamMedium}`}>End date {date}</span>
          )}
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href={projectUrl}
          className="image-container"
        >
          <Image width={469} height={350} src={image} alt={title} />
        </a>
        <div>
          {description.map((paragraph, i) => (
            <p key={i} className={gothamLsLight}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className={`spans ${gothamLsLight}`}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      <div className="links-buttons">
        <a
          rel="noreferrer"
          target="_blank"
          href={projectUrl}
          className={gothamLsLight}
          style={projectUrl === "" ? { cursor: "not-allowed" } : undefined}
        >
          Live
        </a>
        {isPrivate ? (
          <button className={gothamLsLight}>
            Github <FaLock />
          </button>
        ) : (
          <a
            href={codeUrl}
            target="_blank"
            rel="noreferrer"
            className={gothamLsLight}
          >
            Github
          </a>
        )}
      </div>
    </StyledSingleProject>
  );
}

export default SingleProject;
