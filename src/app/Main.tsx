"use client";
import type { ProjectWithTechnologies } from "types";
import useStore from "state/zustand";
import { motion } from "framer-motion";
import FirstImpression from "components/home/FirstImpression";
import Projects from "components/projects/Main";
// Animation
import { AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";
import Link from "next/link";
// Fonts
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";

type Props = {
  projects: ProjectWithTechnologies[];
  currentlyBuildingTitle: string;
};

function Main({ projects, currentlyBuildingTitle }: Props) {
  const { pageVariants, pageTransitions } = useStore();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        exit="off"
        animate="on"
        initial="off"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <FirstImpression currentlyBuildingTitle={currentlyBuildingTitle} />
        <Projects projects={projects} />
        <div
          style={{
            width: "100%",
            backgroundColor: "#f8f8f8",
            paddingBottom: "4rem",
            textAlign: "center",
          }}
        >
          <Button
            component={Link}
            href="/contact"
            disableElevation
            variant="contained"
            style={{
              padding: "0.65rem 2.15rem",
              backgroundColor: "#202135",
              ...GOTHAM_MEDIUM.style,
            }}
          >
            Contact
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Main;
