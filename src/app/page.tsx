import { use } from "react";
import getProjects from "utils/getProjects";
import Main from "./Main";

function Home() {
  const projects = use(getProjects());
  const currentlyBuildingTitle = projects.find(
    (project) => project.title === "Booking Software for the Tourism Industry"
  )?.title;

  return (
    <Main
      projects={projects}
      currentlyBuildingTitle={currentlyBuildingTitle as string}
    />
  );
}

export default Home;
