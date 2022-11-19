import NavigationBar from "components/header";
import { use } from "react";
import getProjects from "utils/getProjects";

function index() {
  const projects = use(getProjects());
  return <NavigationBar projects={projects} />;
}

export default index;
