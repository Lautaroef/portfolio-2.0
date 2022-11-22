"use client";
import type { technology } from "@prisma/client";

import Image from "next/image";
import useStore from "state/zustand";
import { motion } from "framer-motion";
import SocialLinks from "components/about/SocialLinks";
import pfp0 from "images/tono-blancon.jpeg";
import UTNCertificate from "images/UTN-Certificate .png";
import {
  StyledAboutMe,
  StyledTechs,
  CustomizedToolTip,
  StyledEducation,
} from "./styled-components";
// Animation
import { AnimatePresence } from "framer-motion";
// Fonts
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";
import GOTHAM_MEDIUM_ITALIC from "fonts/GOTHAM_MEDIUM_ITALIC";

function Main({ techStack }: { techStack: technology[] }) {
  const { pageVariants, pageTransitions } = useStore();
  const age = new Date().getFullYear() - 2000;
  return (
    <AnimatePresence mode="wait">
      <motion.section
        exit="off"
        animate="on"
        initial="off"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <StyledAboutMe>
          <div>
            <p>
              I&apos;m Lautaro Figueroa, {age} years old, from Argentina and
              I&apos;m most excited about <b>Full-Stack Web Development</b>,
              using mainly
              <b> Next.js with Typescript</b>, <b> Redux or Zustand </b>as state
              management, and
              <b> MongoDB or PostgreSQL</b> as database depending on the needs
              of the project.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              My goal is to become a proficient <b>Full-Stack web developer </b>
              as I want to be able to create any type of web application, from a
              simple landing page to a complex software business.
              {/* However, I&apos;m currently diving into Python by creating some basic
          programs / games as I intend to be part of the <b>cybersecurity </b>
          field in the mid term. */}
            </p>
            <p>
              For any project I&apos;m part of, my main goal is to try to
              deliver the best possible <b>user-experience</b>, with a clean and
              easy to use UI, and a well-structured code that can be easily
              understood by anyone.
              {/* Whenever I start a new project, my main goal is to try to deliver
          the best possible <b>user-experience</b>, with a clean and easy to
          use UI, and a well-structured code that can be easily understood by
          anyone. */}
              {/*  my main goal is to try to deliver
          the highest <b>user-experience</b> with a modern design so that
          the user can have the best possible experience on my site. */}
            </p>
            <p>
              Some of the <span>technologies</span> I&apos;ve been working with
              lately are:
              {/* Some of the <span>technologies/languages</span> I use: */}
            </p>
            <StyledTechs>
              {techStack.map((tech) => (
                <CustomizedToolTip
                  placement="top"
                  key={tech.name}
                  title={
                    <Image
                      src={tech.image}
                      width={50}
                      height={50}
                      alt={tech.name}
                    />
                  }
                >
                  <span key={tech.name}>{tech.name}</span>
                </CustomizedToolTip>
              ))}
            </StyledTechs>
            <p>
              <span>
                {/* I&apos;m looking for new and strong challenges so i can improve as a
            developer and help a business at the same time. */}
              </span>
            </p>
          </div>
          <div className="photo-socialmedia">
            <Image
              priority
              src={pfp0}
              alt="Lautaro Figueroa"
              width={280}
              height={293.13}
            />
            <SocialLinks />
          </div>
        </StyledAboutMe>
        <StyledEducation>
          <ul>
            <h2 className={GOTHAM_MEDIUM.className}>Education</h2>
            <h3 className={GOTHAM_MEDIUM.className}>
              National Technological University of Argentina
            </h3>
            <h4 className={GOTHAM_MEDIUM.className}>
              Professional Frontend Development
            </h4>
            <i className={GOTHAM_MEDIUM_ITALIC.className}>
              {" "}
              May 2021 - Nov 2021
            </i>
            <li className={GOTHAM_MEDIUM.className}>Average 88.5%</li>
          </ul>
          <Image
            src={UTNCertificate}
            width={510}
            height={344.297}
            alt="Professional Frontend Development certificate"
          />
        </StyledEducation>
      </motion.section>{" "}
    </AnimatePresence>
  );
}

export default Main;
