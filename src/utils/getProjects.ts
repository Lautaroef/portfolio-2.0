import { prisma } from "server/db/client";

const getProjects = async () => {
  const result = await prisma.project.findMany({
    include: {
      technologies: true,
    },
    orderBy: {
      endDate: "desc",
    },
  });

  const projects = result.map((project) => {
    return {
      ...project,
      endDate: project.endDate?.toISOString(), // To prevent the following warning:
      // Warning: Only plain objects can be passed to Client Components from Server Components. Date objects are not supported.
    };
  });

  return projects;
};

export default getProjects;
