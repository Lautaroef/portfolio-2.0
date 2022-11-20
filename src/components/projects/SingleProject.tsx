import type { ProjectWithTechnologies } from "types";
import { StyledSingleProject } from "./styled-components";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import Link from "next/link";

type Props = ProjectWithTechnologies & {
  gothamMedium: string;
  gothamLsLight: string;
};

function SingleProject({
  title,
  endDate,
  image,
  description,
  technologies,
  projectUrl,
  codeUrl,
  isPrivate,
  gothamMedium,
  gothamLsLight,
}: Props) {
  // Display the endDate as, example: "March 2022"
  const date = new Date(endDate).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {title ? (
        <StyledSingleProject data-tilt /* imageSrc={image}*/>
          <div className="box">
            <div>
              <h3 className={gothamMedium}>{title}</h3>
              {endDate && (
                <span className={`end-date ${gothamMedium}`}>
                  End date {date}
                </span>
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
      ) : null}
    </>
  );
}

export default SingleProject;
