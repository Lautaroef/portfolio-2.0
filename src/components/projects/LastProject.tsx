import Image from "next/image";
import styled from "styled-components";
import { Tooltip } from "@mui/material";
import { BsGithub } from "react-icons/bs";

function PortfolioProject() {
  return (
    <StyledPortfolioProj>
      <h3>My Last Project</h3>
      <div>
        <p>
          And my last project was this <span>Personal Portfolio</span>, where to
          style i used MaterialUI with styled-components, and React with
          useContext to manage the state.
        </p>
        <p>
          Also this project was my first one using
          <span> VSC code editor in combination with VIM </span> since I wanted
          to test the efficiency it offers when writing code.
        </p>
      </div>
      <div className="technologies">
        {learnedTechnologies.map((tech, i) => (
          <Tooltip key={i} title={tech.title} placement="top">
            <Image src={tech.src} key={i} />
          </Tooltip>
        ))}
      </div>
      <a
        href="https://github.com/Lautaroef/Portfolio-Website"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub />
        Github
      </a>
    </StyledPortfolioProj>
  );
}

export default PortfolioProject;

const StyledPortfolioProj = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  margin: 1rem auto 0 auto;
  padding: 0 2rem 2.25rem 2rem;
  line-height: 1.6;

  h3 {
    font-size: 1.225rem;
    margin-bottom: 0.1rem;
  }

  p {
    font-family: "Gotham LsLight";
    margin: 0.7rem auto;
  }

  .technologies {
    display: flex;
    align-self: flex-start;
    margin: 0.6rem 0 0.25rem 0;

    img {
      font-family: "Gotham LsLight";
      max-height: 36px;
      margin: 0 1rem 2rem 0;
    }
  }

  a {
    display: flex;
    align-items: center;
    column-gap: 6px;
    width: max-content;
    padding: 0.27rem 1.25rem;
    background-color: #1976d2;
    border-radius: 4px;
    font-size: 13px;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.15s ease-out;

    &:hover {
      background-color: #1342aa;
    }

    svg {
      font-size: 1rem;
      margin-bottom: 1.5px;
    }
  }
`;
