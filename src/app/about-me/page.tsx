import Image from "next/image";
import useStore from "components/state/zustand";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import pfp0 from "../../images/tono-blancon.jpeg";
import UTNCertificate from "../../images/UTN-Certificate .png";
import {
  StyledAboutMe,
  StyledTechs,
  CustomizedToolTip,
  StyledEducation,
} from "./styled-components";

function Main() {
  const { pageVariants, pageTransitions } = useStore();

  return (
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
            I'm Lautaro Figueroa, 22 years old, from Argentina and I'm most
            excited about <b>Full-Stack Web Development</b>, using mainly
            <b> Next.js with Typescript</b>, <b> Redux or Zustand </b>as state
            management, and
            <b> MongoDB or MySQL</b> as database depending on the needs of the
            project.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            My goal is to become a proficient <b>Full-Stack web developer </b>
            as I want to be able to create any type of web application, from a
            simple landing page to a complex software business.
            {/* However, I'm currently diving into Python by creating some basic
            programs / games as I intend to be part of the <b>cybersecurity </b>
            field in the mid term. */}
          </p>
          <p>
            For any project I'm part of, my main goal is to try to deliver the
            best possible <b>user-experience</b>, with a clean and easy to use
            UI, and a well-structured code that can be easily understood by
            anyone.
            {/* Whenever I start a new project, my main goal is to try to deliver
            the best possible <b>user-experience</b>, with a clean and easy to
            use UI, and a well-structured code that can be easily understood by
            anyone. */}
            {/*  my main goal is to try to deliver
            the highest <b>user-experience</b> with a modern design so that
            the user can have the best possible experience on my site. */}
          </p>
          <p>
            Some of the <span>technologies</span> I've been working with lately
            are:
            {/* Some of the <span>technologies/languages</span> I use: */}
          </p>
          <StyledTechs>
            {learnedTechnologies.map((tech) => (
              <CustomizedToolTip
                placement="top"
                key={tech.title}
                title={
                  <Image
                    src={tech.src}
                    width={tech.imageWidth ?? 50}
                    alt={tech.title}
                  />
                }
              >
                <span key={tech.title}>{tech.title}</span>
              </CustomizedToolTip>
            ))}
          </StyledTechs>
          <p>
            <span>
              {/* I'm looking for new and strong challenges so i can improve as a
              developer and help a business at the same time. */}
            </span>
          </p>
        </div>
        <div className="photo-socialmedia">
          <Image src={pfp0} alt="Lautaro Figueroa" />
          <SocialLinks />
        </div>
      </StyledAboutMe>
      <StyledEducation>
        <ul>
          <h2>Education</h2>
          <h3>National Technological University of Argentina</h3>
          <h4>Professional Frontend Development</h4>
          <i> May 2021 - Nov 2021</i>
          <li>Average 88.5%</li>
        </ul>
        <Image
          src={UTNCertificate}
          alt="Professional Frontend Development certificate"
        />
      </StyledEducation>
    </motion.section>
  );
}

export default Main;
