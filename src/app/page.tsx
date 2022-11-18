"use client";
import useStore from "components/state/zustand";
import { motion } from "framer-motion";
import Presentation from "components/home/Presentation";
import Projects from "components/projects/Main";

function Main() {
  const { pageVariants, pageTransitions } = useStore();
  return (
    <>
      <motion.div
        exit="off"
        animate="on"
        initial="off"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <Presentation />
        <Projects />
      </motion.div>
    </>
  );
}

export default Main;
