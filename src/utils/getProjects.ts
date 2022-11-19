import type { ProjectWithTechnologies } from "types";
import { prisma } from "server/db/client";

const getProjects = async () => {
  // get the projects plus the related technologies
  const projects: ProjectWithTechnologies[] = await prisma.project.findMany({
    include: {
      technologies: true,
    },
  });

  return projects;
};

export default getProjects;
