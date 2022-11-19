import { use } from "react";
import getProjects from "utils/getProjects";
import Main from "./Main";

function Home() {
  const projects = use(getProjects());

  return <Main projects={projects} />;
}

export default Home;
