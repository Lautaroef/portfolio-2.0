"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { StyledPresentation, TypedContainer } from "./styled-components";
import Button from "@mui/material/Button";
import scrollDownImg from "../../images/scrollDown.svg";
// Animations
import Typed from "typed.js";
import typedOptions from "../animations/typedOptions";
import scrollReveal from "../animations/ScrollReveal";
// Fonts
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";

type Props = {
  currentlyBuildingTitle: string;
};

function FirstImpression({ currentlyBuildingTitle }: Props) {
  const typedAnimationEl = useRef(null);
  const typed = useRef<Typed>();
  const scrollTitle = useRef(null); // For scroll down animation
  const scrollButton = useRef(null); // For scroll down animation

  // Lottie animation
  const lottieRef = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  // Other animations
  useEffect(() => {
    // Typed animation
    typed.current = new Typed(typedAnimationEl.current!, typedOptions);

    // Scroll reveal animation
    const config = {
      origin: "top", // "bottom"
      duration: 700,
      distance: "20px",
    };
    if (
      scrollTitle.current &&
      typedAnimationEl.current &&
      scrollButton.current &&
      lottieRef.current
    ) {
      scrollReveal.reveal(".currently-dev", { ...config, delay: 100 });
      scrollReveal.reveal(scrollTitle.current, { ...config, delay: 200 });
      scrollReveal.reveal(typedAnimationEl.current, { ...config, delay: 300 });
      scrollReveal.reveal(scrollButton.current, { ...config, delay: 400 });
      scrollReveal.reveal(lottieRef.current, { ...config, delay: 500 });
    }

    return () => {
      scrollReveal.destroy();
      typed.current && typed.current.destroy();
    };
  }, []);

  const parsedTitle =
    currentlyBuildingTitle === "Booking Software for the Tourism Industry"
      ? "Software solution for the tourism industry."
      : currentlyBuildingTitle;

  return (
    <div className="first-impression">
      <StyledPresentation>
        <TypedContainer>
          <h4 className={`currently-dev ${GOTHAM_MEDIUM.className}`}>
            Currently developing:{" "}
          </h4>
          <h1 ref={scrollTitle} className={GOTHAM_MEDIUM.className}>
            Full Stack Web Development skills
          </h1>
          <div>
            <span className={GOTHAM_MEDIUM.className}>
              Interested in learning:{" "}
            </span>
            <h4
              className={`typed-element ${GOTHAM_MEDIUM.className}`}
              ref={typedAnimationEl}
            ></h4>
          </div>
          <h3 className={GOTHAM_MEDIUM.className}>
            Currently building: {parsedTitle}
          </h3>
          <div className="my-buttons">
            <Button
              component={Link}
              href="/about"
              disableElevation
              variant="contained"
              ref={scrollButton}
              style={GOTHAM_MEDIUM.style}
            >
              About Me
            </Button>
            <Button
              component={Link}
              href="/contact"
              disableElevation
              variant="contained"
              ref={scrollButton}
              style={GOTHAM_MEDIUM.style}
            >
              Contact
            </Button>
          </div>
        </TypedContainer>
        <lottie-player
          speed="1"
          loop
          autoplay
          ref={lottieRef}
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
