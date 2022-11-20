import type { technology } from "@prisma/client";
import { prisma } from "server/db/client";

const getTechStack = async () => {
  const techStack = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    select: {
      techStack: true,
    },
  });

  return techStack?.techStack as technology[];
};

export default getTechStack;
