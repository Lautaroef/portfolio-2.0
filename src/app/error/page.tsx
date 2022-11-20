// @ts-nocheck
"use client";
import Link from "next/link";
import { Button } from "@mui/material";
// Animation
import { AnimatePresence } from "framer-motion";

function Index() {
  return (
    <AnimatePresence mode="wait">
      <div style={{ position: "relative", maxWidth: "1200px", margin: "auto" }}>
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_kfwqdqdq.json"
          background="transparent"
          speed="1"
          style={{
            width: "100%",
            height: "max-content",
          }}
          loop
          autoplay
        ></lottie-player>
        <Button
          as={Link}
          href="/"
          variant="contained"
          style={{
            position: "absolute",
            left: "17rem",
            top: "75%",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Button>
      </div>{" "}
    </AnimatePresence>
  );
}

export default Index;
