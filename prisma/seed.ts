import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const generateDate = await prisma.me.create({
    data: {
      currently_building: "Software solu",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
