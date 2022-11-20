"use client";
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";
import { IoIosArrowUp } from "react-icons/io";
import { StyledArrowUp, StyledFooter } from "./styled.components";

function Footer() {
  return (
    <StyledFooter>
      <StyledArrowUp onClick={() => window.scrollTo(0, 0)}>
        <IoIosArrowUp />
      </StyledArrowUp>
      <small className={GOTHAM_MEDIUM.className}>
        Made with <del>love</del> &nbsp;by
      </small>
      <br />
      <small
        style={{ fontSize: "0.85rem" }}
        className={GOTHAM_MEDIUM.className}
      >
        {" "}
        &copy; Lautaro Figueroa
      </small>
    </StyledFooter>
  );
}

export default Footer;
