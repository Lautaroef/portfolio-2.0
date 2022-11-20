import { use } from "react";
import getTechStack from "utils/getTechStack";
import Main from "./Main";

function Page() {
  const techStack = use(getTechStack());

  return <Main techStack={techStack} />;
}

export default Page;
