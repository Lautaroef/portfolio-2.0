// @ts-nocheck
import Link from "next/link";
import { Button } from "@mui/material";
import { theme } from "components/header/styled-components";

function Index() {
  return (
    <div
      style={{ position: "relative", maxWidth: theme.maxWidth, margin: "auto" }}
    >
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
    </div>
  );
}

export default Index;
