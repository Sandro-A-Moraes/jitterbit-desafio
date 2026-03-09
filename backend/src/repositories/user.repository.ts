import { prisma } from "../lib/prisma";

// Create new user in database (excludes password from response)
export async function createUser(
  name: string,
  email: string,
  password: string,
) {
  return prisma.user.create({
    data: {
      name,
      email,
      password,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

// Find user by email (safe for public responses - no password)
export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

// Find user by email including password (only for authentication)
export async function findUserByEmailWithPassword(email: string) {
  return prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  });
}
