import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ['query'] });

async function main() {
  const users = await prisma.user.findMany({
    where: {
      age: { equals: 22 },
    },
    orderBy: {
      userPreferenceId: 'desc',
    },
    take: 2,
    skip: 1,
  });
  console.log(users);
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: 'mbedingfield@dcrpos.com',
  //   },
  // });
  // console.log(user);
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'timmy',
  //     age: 22,
  //     isAdmin: true,
  //     email: 'timmy@dcrpos.com',
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   include: {
  //     userPreference: true,
  //   },
  // });
  // console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
