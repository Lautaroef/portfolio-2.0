"use client";
import type { ProjectWithTechnologies } from "types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { StyledPresentation, TypedContainer } from "./styled-components";
import Button from "@mui/material/Button";
import scrollDownImg from "../../images/scrollDown.svg";
// Animations
import Typed from "typed.js";
import typedOptions from "../animations/typedOptions";
// import scrollReveal from "../animations/ScrollReveal";
// Fonts
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";

type Props = {
  currentProject: ProjectWithTechnologies;
};

function FirstImpression({ currentProject }: Props) {
  const typedAnimationEl = useRef(null);
  const typed = useRef<Typed>();
  const scrollTitle = useRef(null); // For scroll down animation
  const myButtons = useRef(null); // For scroll down animation
  const lottieRef = useRef(null);

  // Lottie animation
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  useEffect(() => {
    // Typed animation
    typed.current = new Typed(typedAnimationEl.current!, typedOptions);

    // Scroll reveal animation
    const config = {
      origin: "top", // "bottom"
      duration: 700,
      distance: "20px",
    };
    async function animate() {
      if (
        scrollTitle.current &&
        typedAnimationEl.current &&
        myButtons.current &&
        lottieRef.current
      ) {
        const scrollReveal = (await import("../animations/ScrollReveal"))
          .default;
        scrollReveal.reveal(".currently-dev", { ...config, delay: 100 });
        scrollReveal.reveal(scrollTitle.current, { ...config, delay: 200 });
        scrollReveal.reveal(typedAnimationEl.current, {
          ...config,
          delay: 300,
        });
        scrollReveal.reveal(myButtons.current, { ...config, delay: 400 });
        scrollReveal.reveal(lottieRef.current, { ...config, delay: 500 });
      }
    }
    animate();
    return () => {
      // scrollReveal.destroy();
      typed.current && typed.current.destroy();
    };
  }, []);

  const title = currentProject.title;
  const parsedTitle =
    title === "Booking Software for the Tourism Industry"
      ? "Software solution for the tourism industry."
      : title;

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
              ref={myButtons}
              style={GOTHAM_MEDIUM.style}
            >
              About Me
            </Button>
            <Button
              component={Link}
              href="/contact"
              disableElevation
              variant="contained"
              ref={myButtons}
              style={GOTHAM_MEDIUM.style}
            >
              Contact
            </Button>
          </div>
        </TypedContainer>
        {/* Lottie player */}
        <lottie-player
          speed="1"
          loop
          autoplay
          ref={lottieRef}
          background="transparent"
          className="lottie-player"
          style={{ width: "75%" }}
          // src="https://assets10.lottiefiles.com/packages/lf20_psdcolux.json"
          src="/images/static/lottie-working.json"
        ></lottie-player>
      </StyledPresentation>
      <a href="/#my-projects" className="center-image">
        <Image src={scrollDownImg} alt="Scroll Down" />
      </a>
    </div>
  );
}

export default FirstImpression;
