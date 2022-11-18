import React from "react";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { CustomizedToolTip, StyledSocialLinks } from "./styled-components";

function SocialLinks() {
  return (
    <StyledSocialLinks>
      <CustomizedToolTip title="Github" placement="bottom" arrow>
        <a href="https://github.com/Lautaroef" target="_blank" rel="noreferrer">
          <BsGithub className="github" />
        </a>
      </CustomizedToolTip>
      <CustomizedToolTip title="LinkedIn" placement="bottom" arrow>
        <a
          href="https://www.linkedin.com/in/lautaro-figueroa-40451815a/"
          rel="noreferrer"
          target="_blank"
        >
          <SiLinkedin className="linkedin" />
        </a>
      </CustomizedToolTip>
    </StyledSocialLinks>
  );
}

export default SocialLinks;
