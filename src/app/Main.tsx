"use client";
import type { ProjectWithTechnologies } from "types";
import useStore from "components/state/zustand";
import { motion } from "framer-motion";
import FirstImpression from "components/home/FirstImpression";
import Projects from "components/projects/Main";

function Main({ projects }: { projects: ProjectWithTechnologies[] }) {
  const { pageVariants, pageTransitions } = useStore();
  return (
    <motion.div
      exit="off"
      animate="on"
      initial="off"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <FirstImpression />
      <Projects projects={projects} />
    </motion.div>
  );
}

export default Main;
