import Image from "next/image";
import { FaLock } from "react-icons/fa";

import { StyledSingleProject } from "./styled-components";

function SingleProject({
  title,
  endDate,
  image,
  description,
  technologies,
  links,
}: Project) {
  return (
    <>
      {title ? (
        // @ts-ignore
        <StyledSingleProject data-tilt imageSrc={image}>
          <div className="box">
            <div>
              <h3>{title}</h3>
              {endDate && <span className="end-date">End date {endDate}</span>}
            </div>
            <a href={links.seeProject} target="_blank" rel="noreferrer">
              <Image src={image} alt={title} />
            </a>
            <div>
              {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="technologies">
              {technologies.map((tech, index) => (
                <span key={index} className="spans">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="links-buttons">
            <a
              rel="noreferrer"
              target="_blank"
              href={links.seeProject}
              style={
                links.seeProject === "#" ? { cursor: "not-allowed" } : undefined
              }
            >
              Live
            </a>

            <a href={links.seeCode} target="_blank" rel="noreferrer">
              Github {links.private ? <FaLock /> : null}
            </a>
          </div>
        </StyledSingleProject>
      ) : null}
    </>
  );
}

export default SingleProject;
