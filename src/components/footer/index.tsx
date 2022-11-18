import React from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

function index() {
  return (
    <StyledFooter>
      <StyledArrowUp onClick={() => window.scrollTo(0, 0)}>
        <IoIosArrowUp />
      </StyledArrowUp>
      <small>
        Made with <del>love</del> &nbsp;by
      </small>
      <br />
      <small style={{ fontSize: "0.85rem" }}> &copy; Lautaro Figueroa</small>
    </StyledFooter>
  );
}

export default index;

// ---- Styling ---- //
const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  padding-top: calc(1.75rem + 1.25rem);
  padding-bottom: 1.75rem;
  color: rgba(255, 255, 255, 0.5); //0.55
  background-color: #202135;
  text-align: center;

  del {
    position: relative;

    &::after {
      content: " a keyboard";
      position: absolute;
      bottom: 90%;
      left: 30%;
      width: max-content;
      transform: rotate(5.5deg);
    }
  }
`;
const StyledArrowUp = styled.div`
  position: absolute;
  top: -1rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
  background-color: #202135;
  font-size: 1.3rem;
  transform: rotate(45deg);
  border-top-left-radius: 0.35rem;
  z-index: 99;
  cursor: pointer;

  svg {
    transform: rotate(-45deg);
  }
`;
