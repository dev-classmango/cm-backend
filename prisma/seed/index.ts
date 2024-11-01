import { PrismaClient } from '@prisma/client';

import { users } from './data/users';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.deleteMany();

      for (const user of users) {
        await tx.user.create({ data: user });
      }
    });
    console.error('Seed successful 🌱');
  } catch (error) {
    console.error('Error occurred while seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
