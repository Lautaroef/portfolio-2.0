import { use } from "react";
import getProjects from "utils/getProjects";
// Styling
import "../styles/globals.css";
// Components
import Header from "components/header";
import Footer from "components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = use(getProjects());

  return (
    <html lang="en">
      <head>
        <title>Portfolio | Lautaro Figueroa</title>
        <meta
          name="description"
          content="Lautaro Figueroa's portfolio. Full Stack Web Developer with React.js, Next.js, TypeScript, Node.js, MongoDB, MySQL and PostgreSQL."
        />
      </head>
      <body>
        <Header projects={projects} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
