"use client";
// Styling
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "components/header/styled-components";
// Components
import Header from "components/header";
import Footer from "components/footer";
// Animations
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio | Lautaro Figueroa</title>
        <meta
          name="description"
          content="Lautaro Figueroa's portfolio. Full Stack Web Developer with React.js, Next.js, TypeScript, Node.js, MongoDB, MySQL and PostgreSQL."
        />
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
