import type { technology } from "@prisma/client";
import { prisma } from "server/db/client";

const getTechStack = async () => {
  // get the tech stack from user 1 and order them asc by id
  const techStack = await prisma.technology.findMany({
    where: {
      users: {
        some: {
          id: 1,
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  return techStack;
};

export default getTechStack;
