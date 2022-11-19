// @ts-nocheck
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { StyledPresentation, TypedContainer } from "./styled-components";
import scrollReveal from "../animations/ScrollReveal";
import TypedAnimation from "../animations/TypedAnimation";
import scrollDownImg from "../../images/scrollDown.svg";
import Button from "@mui/material/Button";

function FirstImpression() {
  const scrollTitle = useRef(null); // For Scroll Anim
  const scrollTypedAnim = useRef(null);
  const scrollButton = useRef(null);
  const scrollGif = useRef(null);

  useEffect(() => {
    TypedAnimation();
    // Scroll Animations
    const config = {
      origin: "top", // "bottom"
      duration: 700,
      distance: "20px",
    };
    if (
      scrollTitle.current &&
      scrollTypedAnim.current &&
      scrollButton.current &&
      scrollGif.current
    ) {
      scrollReveal.reveal(".currently-dev", { ...config, delay: 100 });
      scrollReveal.reveal(scrollTitle.current, { ...config, delay: 200 });
      scrollReveal.reveal(scrollTypedAnim.current, { ...config, delay: 300 });
      scrollReveal.reveal(scrollButton.current, { ...config, delay: 400 });
      scrollReveal.reveal(scrollGif.current, { ...config, delay: 500 });
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledPresentation>
        <TypedContainer>
          <h4 className="currently-dev">Currently developing: </h4>
          <h1 ref={scrollTitle}>Full Stack Web Development skills</h1>
          <div ref={scrollTypedAnim}>
            <span>Interested in learning: </span>
            <h4 className="element"></h4>
          </div>
          <h3>Currently building: Software solution for the tourism industry.</h3>
          <div className="my-buttons">
            <Button
              component={Link}
              href="/about"
              disableElevation
              variant="contained"
              ref={scrollButton}
            >
              About Me
            </Button>
            <Button
              component={Link}
              href="/contact"
              disableElevation
              variant="contained"
              ref={scrollButton}
            >
              Contact Me
            </Button>
          </div>
        </TypedContainer>
        <lottie-player
          speed="1"
          loop
          autoplay
          ref={scrollGif}
          background="transparent"
          className="lottie-player"
          style={{ width: "75%" }}
          src="https://assets10.lottiefiles.com/packages/lf20_psdcolux.json"
        ></lottie-player>
      </StyledPresentation>
      <a href="/#my-projects" className="center-image">
        <Image src={scrollDownImg} alt="Scroll Down" />
      </a>
    </div>
  );
}

export default FirstImpression;
