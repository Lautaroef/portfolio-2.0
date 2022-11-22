"use client";
import type { ProjectWithTechnologies } from "types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { StyledPresentation, TypedContainer } from "./styled-components";
import Button from "@mui/material/Button";
import scrollDownImg from "../../images/scrollDown.svg";
import jsonAnimation from "../../../public/images/static/lottie-working.json";
import gifAnimation from "../../../public/images/static/lottie-working.gif";
// Animations
import Typed from "typed.js";
import Lottie from "lottie-react";
import typedOptions from "../animations/typedOptions";
// Fonts
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";

type Props = {
  currentProject: ProjectWithTechnologies;
};

function FirstImpression({ currentProject }: Props) {
  // TODO: Convert the gif to a lottie animation
  // Couldn't find a way to do it because on production the animation is not working
  const typedAnimationEl = useRef(null);
  const typed = useRef<Typed>();
  const scrollTitle = useRef(null); // For scroll down animation
  const myButtons = useRef(null); // For scroll down animation
  const lottieRef = useRef(null);

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
        <Image
          width={440}
          height={430}
          src={gifAnimation}
          alt="Lottie animation"
        />
        {/* <Lottie
          loop
          autoplay
          ref={lottieRef}
          className="lottie-player"
          style={{ width: "75%" }}
          animationData={jsonAnimation}
          // src="https://assets10.lottiefiles.com/packages/lf20_psdcolux.json"
          // src="/images/static/lottie-working.json"
        ></Lottie> */}
      </StyledPresentation>
      <a href="/#my-projects" className="center-image">
        <Image src={scrollDownImg} alt="Scroll Down" width={37.5} height={70} />
      </a>
    </div>
  );
}

export default FirstImpression;
