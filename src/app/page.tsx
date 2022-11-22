import { use } from "react";
import getProjects from "utils/getProjects";
import Main from "../components/home";

export const revalidate = 3600; // revalidate every hour

function Home() {
  const projects = use(getProjects());

  return <Main projects={projects} />;
}

export default Home;
